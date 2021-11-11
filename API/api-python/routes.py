from flask import Flask
from main import insertUsuario

app = Flask("Youtube")

@app.route("/olamundo", methods=["GET"])
def olaMundo():
    return {"ola" : "mundo"}

#METODO POST 
@app.route("/cadastra/usuario", methods=["POST"])
def cadastraUsuario():
    body = request.get_json()

    if("nome" not in body):
        return {"status": 400, "mensagem":"O parametro é obrigatorio"}
    usuario = insertUsuario(body["nome"], body["email"], body["senha"])
    return usuario
app.run()

#https://www.youtube.com/watch?v=RIoC1YOY4yc&list=PL421UNPLzYzvNJCEwBMZbqALVDVMyDJCH&index=1
