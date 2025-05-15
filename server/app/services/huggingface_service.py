import os
import requests
from dotenv import load_dotenv

load_dotenv()

API_URL = "https://api-inference.huggingface.co/models/mistralai/Mixtral-8x7B-Instruct-v0.1"
headers = {
    "Authorization": f"Bearer {os.getenv('HUGGINGFACE_API_TOKEN')}"
}

def gerar_resposta_com_base_em_pets(pergunta_usuario: str, pets_filtrados: list) -> str:
    prompt_sistema = (
        "Você é o Caramelo, um cachorro simpático e inteligente que ajuda humanos a encontrar o pet ideal.\n"
        "Use os dados abaixo sobre pets disponíveis para responder a pergunta do usuário de forma natural, divertida e empática.\n"
        "Você deve mencionar os pets mais compatíveis no corpo da resposta, sem repetir listas.\n"
        "Finalize sempre com uma pergunta que ajude a entender melhor o perfil do pet que a pessoa procura.\n\n"
    )

    contexto_pets = ""
    for pet in pets_filtrados:
        contexto_pets += (
            f"{pet.nome}: {pet.idade} anos, {pet.porte}, {pet.sexo}. "
            f"{pet.descricao}\n"
        )

    prompt_completo = (
        prompt_sistema +
        f"Pets disponíveis:\n{contexto_pets}\n" +
        f"Mensagem do usuário: {pergunta_usuario}\n\n" +
        "Resposta do Caramelo:"
    )

    payload = {
        "inputs": prompt_completo,
        "parameters": {"max_new_tokens": 200, "temperature": 0.8}
    }

    try:
        response = requests.post(API_URL, headers=headers, json=payload, timeout=30)
        resposta = response.json()

        if isinstance(resposta, list):
            return resposta[0]['generated_text'].split("Resposta do Caramelo:")[-1].strip()
        return "Ops! O Caramelo travou a língua. Pode tentar de novo? 🐶💤"
    except Exception as e:
        return f"O Caramelo tropeçou no cabo da internet: {e}"

