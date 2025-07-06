import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

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

    try:
        resposta = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": prompt_sistema},
                {"role": "user", "content": f"{pergunta_usuario}\n\n{contexto_pets}"}
            ],
            temperature=0.8,
            max_tokens=150
        )
        return resposta.choices[0].message.content.strip()

    except Exception as e:
        return f"O Caramelo tropeçou na IA: {e}"
