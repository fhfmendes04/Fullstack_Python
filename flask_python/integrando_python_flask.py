#from flask import Flask, jsonify, reque
import json
import requests


response = requests.get('http://127.0.0.1:5000/soma')

print(response.text)
print(response.json())

resposta = requests.post(('http://127.0.0.1:5000/soma'), json={"valores":[10, 10, 10, 16]})

print(resposta.json())