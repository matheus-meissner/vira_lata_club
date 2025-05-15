from app import db

class Pet(db.Model):
    __tablename__ = 'caes'

    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String, nullable=False)
    idade = db.Column(db.Integer)
    porte = db.Column(db.String)
    sexo = db.Column(db.String)
    descricao = db.Column(db.String)
    adotado = db.Column(db.Boolean, default=False)
    usuario_id = db.Column(db.Integer)
    criado_em = db.Column(db.String)
