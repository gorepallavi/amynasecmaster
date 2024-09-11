import pandas as pd
from pymongo import MongoClient


csv_file_path = r'C:\Users\91727\Desktop\SpiderFoot_avanti.csv'  
data = pd.read_csv(csv_file_path)


client = MongoClient('mongodb://localhost:27017/') 
db = client['python']  
collection = db['amynasec'] 

data_dict = data.to_dict(orient='records')


collection.insert_many(data_dict)

print("Data inserted successfully!")
