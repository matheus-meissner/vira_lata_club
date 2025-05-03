from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    CORS(app)

    # Carrega configurações
    app.config.from_object('app.config.Config')

    db.init_app(app)

    # Criação do banco
    with app.app_context():
        from app.models import user_model  # 👈 Importa os models
        db.create_all()  # 👈 Cria as tabelas no banco

    # Registra rotas
    from app.routes import main_routes
    app.register_blueprint(main_routes.bp)

    return app
