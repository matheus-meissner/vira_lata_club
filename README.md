# 🐾 Vira Lata Club

**Vira Lata Club** é uma aplicação web feita para a ong [Vira Lata Club](https://www.instagram.com/viralata_club/?hl=pt) com o objetivo de facilitar a **adoção de pets**, conectando usuários com cães disponíveis para adoção.

O projeto é dividido em duas partes:

- 📦 **Frontend**: Criado com React + Vite, utilizando styled-components.
- 🧠 **Backend**: Desenvolvido em Python com Flask, integrando uma IA que interage com os usuários e sugere pets com base nas preferências.

---

## 📁 Estrutura do Projeto
```bash
vira_lata_club/
├── client/ → Frontend React (Vite)
└── server/ → Backend Flask (Python)
```
## 🚀 Como rodar o projeto localmente

### 🔧 Pré-requisitos

- [Node.js](https://nodejs.org/) v18+
- [Python 3.10+](https://www.python.org/)
- [Git](https://git-scm.com/)

### 1. ⬇️ Clone o repositório

```bash
git clone https://github.com/matheus-meissner/vira_lata_club.git
cd vira_lata_club
```

### 2. 💻 Rodando o Frontend (React)

Diretório: client/

Instalar dependências
```bash
cd client
npm install
```
Iniciar servidor de desenvolvimento
```bash
npm run dev
```
Acesse: http://localhost:5173

### 3. 🧠 Rodando o Backend (Flask + IA)

Diretório: server/

Criar e ativar o ambiente virtual
```bash
cd ../server
python -m venv venv
.\venv\Scripts\activate         # Windows
# source venv/bin/activate     # Linux/Mac
```
Instalar as dependências
```bash
pip install -r requirements.txt
```
Executar o servidor
```bash
Copiar
Editar
python run.py
```
O backend será iniciado em: http://localhost:5000

---

### 🔌 Integração Frontend <-> Backend

O frontend realiza chamadas para o backend Flask (como a geração de respostas da IA para adoção). Certifique-se de que **ambos estejam rodando ao mesmo tempo** para o funcionamento completo da aplicação.

Você pode configurar a URL da API no frontend com variáveis de ambiente ou arquivos de configuração, se necessário.

---

### 📂 Principais Diretórios

#### 🖼️ Frontend (`client/src`)
- 📦 `components/`: Componentes reutilizáveis (Header, Footer, Cards, etc.)
- 📄 `pages/`: Páginas principais (Home, Adoption, Pet, etc.)
- 🧭 `routes/`: Configuração de rotas do React Router
- 🎨 `styles/`: Estilização com styled-components

#### 🧠 Backend (`server/app`)
- 🤖 `ai_bot/`: Lógica de IA e integração com OpenAI
- 🗂️ `models/`: (Reservado para futuros modelos de dados)
- 🌐 `routes/`: Rotas Flask (ex: `/chat`, `/pets`)
- 🛠️ `services/`: Serviços auxiliares (ex: integração com IA)
- 🗃️ `instance/`: Base de dados SQLite (`vira_lata_club.db`)

---

### 📄 Licença

MIT © Vira Lata Club

---

### 📬 Contato

Dúvidas ou sugestões? Entre em contato via [LinkedIn](https://www.linkedin.com/in/matheus-iembo-meissner/) :)

