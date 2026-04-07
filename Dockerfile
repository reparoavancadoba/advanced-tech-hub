# Use uma imagem oficial do Node.js
FROM node:20-alpine

# Crie e defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos de dependências
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código
COPY . .

# Construa o projeto
RUN npm run build

# Exponha a porta usada pelo app
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "3000"]
