# -*- coding: utf-8 -*-
"""
Created on Fri Sep  1 01:17:12 2023

@author: poojapandey
"""
import pandas as pd
import numpy as np
import openai
import os
from flask import Flask, request, jsonify,render_template
from sklearn.naive_bayes import GaussianNB
import csv
from sklearn.model_selection import train_test_split




crop=""
cropList=[]

app = Flask(__name__)
@app.route("/")
def index():
    return render_template('index.html')

@app.route("/predict",methods=['POST'])
def predict():
    df=pd.read_csv("Crop_recommendation.csv")
    c=df.label.astype('category')
    df['target']=c.cat.codes
    targets = dict(enumerate(c.cat.categories))
    y=df.target
    X=df[['N','P','K','temperature','humidity','ph','rainfall']]
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.33, random_state=42)
    gaussian_naive_bayes_instance=GaussianNB()
    gaussian_naive_bayes_instance.fit(X_train,y_train)
    N = request.form['Nitrogen']
    P = request.form['Phosporus']
    K = request.form['Potassium']
    temp = request.form['Temperature']
    humidity = request.form['Humidity']
    ph = request.form['Ph']
    rainfall = request.form['Rainfall']

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
    return render_template('index.html',generated_textFromGPT = generated_textFromGPT)


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




# python main
if __name__ == "__main__":
    app.run(debug=True,port=80)