from flask import Flask, jsonify
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)  # Allow CORS for all origins

# MongoDB connection
client = MongoClient('mongodb://localhost:27017/')
db = client['python']  # Replace with your MongoDB database name
collection = db['amynasec']  # Replace with your MongoDB collection name

@app.route('/get_data', methods=['GET'])
def get_data():
    data = list(collection.find({}, {'_id': 0}))  # Exclude '_id' field
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)