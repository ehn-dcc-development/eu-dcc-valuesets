import json
from collections import OrderedDict

def load_json(filename: str):
    with open(filename, 'rt', encoding='utf-8') as json_file:
        return json.load(json_file)

def save_json(filename: str, data):
    with open(filename, 'w', encoding='utf-8') as json_file:
        json.dump(data, json_file, indent=2, ensure_ascii=False)

def main():
    updatedJson = load_json("test-manf-updated.json")
    baseJson = load_json("test-manf.json")

    updatedValuesDict = updatedJson["valueSetValues"]
    for id, value in baseJson["valueSetValues"].items():
        if not (id in updatedValuesDict):
            value["active"] = False
            updatedValuesDict[id] = value

    updatedJson["valueSetValues"] = OrderedDict(sorted(updatedValuesDict.items(), key=lambda item: int(item[0])))
    save_json("test-manf-merged.json", updatedJson)

if __name__ == "__main__":
    main()

