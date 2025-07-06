from flask import Blueprint, jsonify, request
from app.models.pet_model import Pet
from app.services.openai_service import gerar_resposta_com_base_em_pets
from app import db

bp = Blueprint('main_routes', __name__)

@bp.route("/pets", methods=["GET"])
def listar_pets():
    pets = Pet.query.filter_by(adotado=False).all()
    return jsonify([
        {
            "id": pet.id,
            "nome": pet.nome,
            "idade": pet.idade,
            "porte": pet.porte,
            "sexo": pet.sexo,
            "descricao": pet.descricao,
            "adotado": pet.adotado
        } for pet in pets
    ])

@bp.route("/bot", methods=["POST"])
def bot_recomenda_pet():
    data = request.get_json()
    texto = data.get("mensagem", "").lower().strip()

    if not texto:
        return jsonify({"resposta": "Desculpe, não entendi sua mensagem 😅"})

    # 🔎 Filtros simples com base na mensagem
    filtros = [Pet.adotado == False]

    if "fêmea" in texto or "femea" in texto:
        filtros.append(Pet.sexo == "fêmea")
    if "macho" in texto:
        filtros.append(Pet.sexo == "macho")
    if "pequeno" in texto:
        filtros.append(Pet.porte == "pequeno")
    if "médio" in texto or "medio" in texto:
        filtros.append(Pet.porte == "médio")
    if "grande" in texto:
        filtros.append(Pet.porte == "grande")
    if "filhote" in texto or "jovem" in texto:
        filtros.append(Pet.idade <= 2)
    if "adulto" in texto:
        filtros.append(Pet.idade > 2)
    if "brincalhão" in texto or "ativo" in texto:
        filtros.append(Pet.descricao.ilike("%brincalh%"))
    if "calmo" in texto:
        filtros.append(Pet.descricao.ilike("%calm%"))

    pets = Pet.query.filter(*filtros).limit(5).all()

    if not pets:
        return jsonify({"resposta": "Infelizmente não encontrei nenhum pet com essas características 😢"})

    resposta = gerar_resposta_com_base_em_pets(texto, pets)
    return jsonify({ "resposta": resposta })
