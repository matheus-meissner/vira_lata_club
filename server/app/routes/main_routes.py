from flask import Blueprint, jsonify

bp = Blueprint('main_routes', __name__)

@bp.route('/')
def index():
    return jsonify(message="🐾 API do Vira Lata Club funcionando com sucesso!")
