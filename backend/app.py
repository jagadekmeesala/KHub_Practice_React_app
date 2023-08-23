from flask import Flask, jsonify, request
from pymongo import MongoClient
import json

app = Flask(__name__)
client = MongoClient("mongodb://localhost:27017/") 
db = client["mydatabase"]  
collection = db["mycollection"]  

@app.route('/')
def hello_world():
    return 'I am backend for my frontend\'s application'

@app.route('/add', methods=['POST'])
def add_data():
    data = json.loads(request.data)
    collection.insert_one(data)
    return jsonify({'message': 'Data added successfully'})

@app.route('/data')
def get_data():
    data = list(collection.find({}))
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
