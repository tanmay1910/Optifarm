# -*- coding: utf-8 -*-
"""
Created on Fri Sep  1 01:17:12 2023

@author: poojapandey
"""
import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
from flask import Flask,request,render_template
from sklearn.metrics import classification_report
from sklearn.neighbors import KNeighborsClassifier


df=pd.read_csv("Crop_recommendation.csv")

c=df.label.astype('category')

df['target']=c.cat.codes
targets = dict(enumerate(c.cat.categories))

y=df.target
X=df[['N','P','K','temperature','humidity','ph','rainfall']]

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MinMaxScaler

X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=1)

scaler_instance = MinMaxScaler()
scaler_instance.fit(X_train)

X_train_scaled = scaler_instance.transform(X_train)

X_test_scaled = scaler_instance.transform(X_test)


knn_instance = KNeighborsClassifier()

knn_instance.fit(X_train_scaled,y_train)
predictions_with_model=knn_instance.predict(X_test_scaled)
from sklearn import metrics
metrics.accuracy_score(y_test, predictions_with_model)
knn_instance.score(X_test_scaled, y_test)

from sklearn.metrics import confusion_matrix
mat=confusion_matrix(y_test,knn_instance.predict(X_test_scaled))
df_cm = pd.DataFrame(mat, list(targets.values()), list(targets.values()))
sns.set(font_scale=1.0) # for label size
plt.figure(figsize = (12,8))
sns.heatmap(df_cm, annot=True, annot_kws={"size": 12},cmap="terrain")

k_range = range(1,11)
scores = []

for k in k_range:
    knn = KNeighborsClassifier(n_neighbors = k)
    knn.fit(X_train_scaled, y_train)
    scores.append(knn.score(X_test_scaled, y_test))


plt.xlabel('k')
plt.ylabel('accuracy')
plt.scatter(k_range, scores)
plt.vlines(k_range,0, scores, linestyle="dashed")
plt.ylim(0.96,0.99)
plt.xticks([i for i in range(1,11)]);

# =============================================================================
# X_input=[]
# print("Enter the values of N P K Temp Humidity PH and Rainfall space separated")
# for ele in input().split():
#   X_input.append(float(ele))
# X_input_scaled = scaler_instance.transform(pd.DataFrame(np.array(X_input)).T)
# print("Prediction Crop is",targets[knn_instance.predict(X_input_scaled)[0]])
# =============================================================================

app = Flask(__name__)
@app.route('/',methods=['GET'])
def index():
    return render_template('index.html')

@app.route("/predict",methods=['POST'])
def predict():
    N = request.form['Nitrogen']
    P = request.form['Phosporus']
    K = request.form['Potassium']
    temp = request.form['Temperature']
    humidity = request.form['Humidity']
    ph = request.form['Ph']
    rainfall = request.form['Rainfall']

    feature_list = [N, P, K, temp, humidity, ph, rainfall]
    #single_pred = np.array(feature_list).reshape(1, -1)

    try:
        X_input_scaled = scaler_instance.transform(pd.DataFrame(np.array(feature_list)).T)
        crop = targets[knn_instance.predict(X_input_scaled)[0]]
    except : 
        print ("Exception Occured")
        crop=None;
       
    if crop is not None:
        result = "{} is the best crop to be cultivated right there".format(crop.upper())
    else:
        result = "Sorry, we could not determine the best crop to be cultivated with the provided data."
    return render_template('index.html',result = result)




# python main
if __name__ == "__main__":
    app.run(debug=True)