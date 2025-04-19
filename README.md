# calendario-api

docker build -t api-eventos .

docker run -it -p 3000:3000 --network minha-rede --name apicalendario api-calendario:latest
