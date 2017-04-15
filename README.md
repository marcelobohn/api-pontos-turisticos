
# rodar api via docker
docker build -t api-pontos-turisticos:1.0 .
docker run -p 49160:3000 -d api-pontos-turisticos:1.0
