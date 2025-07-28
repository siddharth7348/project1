import json
import requests

home_dir = "frontend/my-react-app/public/images/"

t = []
with open("products.json", "r") as f:
    t = f.readline()
print(type(t), "000")    
