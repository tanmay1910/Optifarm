# -*- coding: utf-8 -*-
"""
Created on Fri Sep  1 01:17:12 2023

@author: poojapandey
"""
import pandas as pd
import numpy as np
import openai
import os
from flask import Flask, request, jsonify,render_template, make_response
from sklearn.naive_bayes import GaussianNB
import csv
from sklearn.model_selection import train_test_split
import json

from flask_cors import CORS, cross_origin


crop=""
cropList=[]

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/advance",methods=['POST', "OPTIONS"])
@cross_origin()
def advance():
    if request.method == "OPTIONS": # CORS preflight
        response = make_response()
        response.headers.add("Access-Control-Allow-Origin", "*")
        response.headers.add('Access-Control-Allow-Headers', "*")
        response.headers.add('Access-Control-Allow-Methods', "*")
        return response

    data = request.get_json()


    df=pd.read_csv("Crop_recommendation.csv")
    c=df.label.astype('category')
    df['target']=c.cat.codes
    targets = dict(enumerate(c.cat.categories))
    y=df.target
    X=df[['N','P','K','temperature','humidity','ph','rainfall']]
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.33, random_state=42)
    gaussian_naive_bayes_instance=GaussianNB()
    gaussian_naive_bayes_instance.fit(X_train,y_train)
    N = data['nitrogen']
    P = data['phosphorus']
    K = data['potassium']
    temp = data['temperature']
    humidity = data['humidity']
    ph = data['ph']
    rainfall = data['rainfall']

    feature_list = [N, P, K, temp, humidity, ph, rainfall]
    global crop
    global cropList
    try:
        X_input = pd.DataFrame(np.array(feature_list)).T
        gaussian_naive_bayes_instance.predict(X_input)
        my_prob_predictions=gaussian_naive_bayes_instance.predict_proba(X_input)
        sorted_classes=np.argsort(my_prob_predictions[0])
        best_class=sorted_classes[-1]
        second_best_class=sorted_classes[-2]
        third_best_class=sorted_classes[-3]
        predictedcrop=targets[best_class]
        firstAlternateCrop=targets[second_best_class]
        secondAlternateCrop=targets[third_best_class]
        print("The First Prediction is ",predictedcrop)
        print("The Second Prediction is ",firstAlternateCrop)
        print("The Third Prediction is ",secondAlternateCrop)
        response = jsonify({"crops": [predictedcrop, firstAlternateCrop, secondAlternateCrop]})
        # response.headers.add("Access-Control-Allow-Origin", "*")
        return response
        crop=predictedcrop
        cropList =[predictedcrop,firstAlternateCrop,secondAlternateCrop]
    except: 
        print ("Exception Occured in predict method")
        crop=None;
       
    if crop is not None:
        result = format(crop.upper())
    else:
        result = "Sorry, we could not determine the best crop to be cultivated with the provided data."

    return render_template('index.html',result = result)



@app.route("/findAlternateCrop",methods=['POST'])
def findAlternateCrop():
    global cropList
    try:
      print("The Second Prediction is ",cropList[1])
      print("The Third Prediction is ",cropList[2])
    except:
      print ("Exception Occured in findAlternateCrop method")
      cropList=None;
        
    if cropList is not None:
        findAlternateCropResult = cropList
    else:
        findAlternateCropResult = []
    return render_template('index.html',findAlternateCropResult = findAlternateCropResult)


@app.route("/callGPT",methods=['POST'])
def callGPT():
    try:
        openai.api_key = os.environ["OPENAI_API_KEY"]
        prompt = request.form['promptFromUser']
        model = "text-davinci-003"
        response = openai.Completion.create(engine=model, prompt=prompt, max_tokens=4000)
        generated_text = response.choices[0].text
        print(generated_text)
    except:
      print ("Exception Occured in callGPT method")
      generated_text=None;
    if generated_text is not None:
        generated_textFromGPT = generated_text
    else:
        generated_textFromGPT = "Sorry ChatGPT is not available please try after some time."
    return jsonify({"generated_textFromGPT": generated_textFromGPT})


companionCrop=""


@app.route("/findCompanionCrop",methods=['POST'])
def findCompanionCrop():
    predictedcrop = crop 
    selectedAdditionalFactor = request.form.get("selectedAdditionalFactor")
    global companionCrop
    csv_file = "companion_crop_data.csv"
    if predictedcrop==" ":
        predictedcrop=None
    if selectedAdditionalFactor==" ":
        selectedAdditionalFactor=None    
        
    print("predictedcrop "+predictedcrop)
    print("selectedAdditionalFactor "+selectedAdditionalFactor)
    try:
        with open(csv_file, mode="r") as file:
            reader = csv.DictReader(file)
            for row in reader:
                if row["crop"] == predictedcrop:
                    print(predictedcrop)
                    if row["additional factor"] == selectedAdditionalFactor:
                        companionCrop=str(row["companion crop"])
                        print(companionCrop)              
    except: 
          print ("Exception Occured in findCompanionCrop method")
          companionCrop=None;
          
    print(companionCrop)      
    if companionCrop is not None:
      companionCropResult = "To improve the selected factor you can plant {} along with the main crop.".format(companionCrop.upper())
    else:
       companionCropResult = "Sorry, we could not determine the companion crop" 
    return jsonify({"companionCropResult": companionCropResult})


@app.route("/getProtectionStrategyAndCostUsingSeason",methods=['POST'])
def getProtectionStrategyAndCostUsingSeason():
    try:
        season = request.form.get("season")
        excel_file = 'CPS_Season.xlsx'  # Replace with the path to your Excel file
        season_df = pd.read_excel(excel_file)
        crop_name=crop.capitalize()
        # Filter rows based on crop and season
        filtered_df = season_df[(season_df['Crop'] == crop_name) & (season_df['Season'] == season)]

        if not filtered_df.empty:
            # Get the first row (assuming there's only one matching row)
            row = filtered_df.iloc[0]

            # Extract protection strategy and cost values
            protection_strategy = row['Crop Protection Strategy']
            pest_management_cost = row['Cost per Acre (Pest Management) (INR)']
            disease_control_cost = row['Cost per Acre (Disease Control) (INR)']
        else:
            protection_strategy=''
            pest_management_cost=''
            disease_control_cost=''
    except Exception as e:
        print("Error occured in getProtectionStrategyAndCostUsingSeason method",str(e))
        protection_strategy='Error'
        pest_management_cost='Error'
        disease_control_cost='Error'
    pSCList =[protection_strategy,pest_management_cost,disease_control_cost] 
    print("getProtectionStrategyAndCostUsingSeason",pSCList)
    return jsonify({"pSCList": pSCList})


# Function to get protection strategy and cost based on crop and weather condition
@app.route("/getProtectionStrategyAndCostUsingWeather",methods=['POST'])
def getProtectionStrategyAndCostUsingWeather():
    try:
        excel_file = 'CPS_suddenWeatherChange.xlsx' 
        
        weather_condition_df = pd.read_excel(excel_file)
        crop_name=crop.capitalize()
        weather_condition = request.form.get("weather_condition")
        # Filter rows based on crop and weather condition
        filtered_df = weather_condition_df[(weather_condition_df['Crop'] == crop_name) & (weather_condition_df['Weather Condition'] == weather_condition)]

        if not filtered_df.empty:
            # Get the first row (assuming there's only one matching row)
            row = filtered_df.iloc[0]

            # Extract protection strategy and cost values
            protection_strategy = row['Crop Protection Strategy']
            pest_management_cost = row['Cost per Acre (Pest Management) (INR)']
            disease_control_cost = row['Cost per Acre (Disease Control) (INR)']
        else:
           protection_strategy=''
           pest_management_cost=''
           disease_control_cost=''

    except Exception as e:
        print("Error occured in getProtectionStrategyAndCostUsingWeather method",str(e))
        protection_strategy='Error'
        pest_management_cost='Error'
        disease_control_cost='Error'

    pSCWList =[protection_strategy,pest_management_cost,disease_control_cost] 
    print("getProtectionStrategyAndCostUsingWeather",pSCWList)
    return jsonify({"pSCWList": pSCWList})



# python main
if __name__ == "__main__":
    app.run(debug=True,port=80)
