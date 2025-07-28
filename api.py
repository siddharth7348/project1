import json
import requests
import os
home_dir = '/home/ssrivastava/work/project1/frontend/my-react-app/public'

t = []
with open("products.json", "r") as f:
    t = f.read()
print(type(t), "000")
t = json.loads(t)
print(type(t), "000", t[0])

for i in t:
    filename = home_dir + i['image']
    files = {'image': open(filename, "rb")}
    x = json.loads(json.dumps(i))
    print(x, files, type(x))
    headers = {'Content-type': 'application/json'}
    try:
       r = requests.post("http://127.0.0.1:8001/api/", data=x, files=files)
       print(r.json())
    except ValueError as f:
        print(f)   

