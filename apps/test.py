import json

def run(inputdata): 
    jsonString = json.dumps(inputdata, indent = 4)
    data = json.loads(jsonString)

    results = {"result":"data returned from python test app"}
    context = json.dumps(results, indent = 4)
    print(context)