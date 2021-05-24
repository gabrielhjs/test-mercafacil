# Teste Mercafacil

---

# RESTful API

 API desenvolvida para o teste para a vaga de Backend Developer na Mercafacil. 


</br>

# Índice

- [Tecnologias utilizadas](#tecnologias-utilizadas)

- [Arquitetura](#arquitetura)
  - [Entities](#entities)
  - [Middlewares](#middlewares)
  - [Providers](#providers)
  - [Repositories](#repositories)
  - [Routes](#routes)
  
- [Instalação](#instalação)
  - [Pré requisitos](#pré-requisitos)
    [Clonar o repositório](#clonar-o-repositório)
  - [Instalar as dependências](#instalar-as-dependências)
  - [Configuração das variáveis de ambiente](#configuração-das-variáveis-de-ambiente)

- [Execução](#execução)

- [Rotas](#rotas)
  - [Status](#status)
  - [User](#user)
  - [Contatos](#contatos)

- [Docker](#docker)
  - [Dockerfile da API](#dockerfile-da-api)
  - [Buildar as imagens](#buildar-as-imagens)
  - [Subir os containers](#subir-os-containers)

---

</br>

# Tecnologias utilizadas

- ##### [Nodejs](https://nodejs.org/en/)
- ##### [Docker](https://www.docker.com/)
- ##### [Typescript](https://www.typescriptlang.org/)
- ##### [Javascript](https://www.javascript.com/)
- ##### [Express](https://expressjs.com/pt-br/)
- ##### [JWT](https://jwt.io/)
- ##### [Typeorm](https://typeorm.io/#/)
- ##### [MySql](https://www.mysql.com/)
- ##### [Postgres](https://www.postgresql.org/)

</br>

# Arquitetura

<p>O projeto foi contruído utilizando os princípios SOLID. Onde cada componente do projeto tem apenas uma função e atua de forma independente dos demais através da utilização de interfaces e entidades. Os componentes são interligados através dos arquivos index.ts no projeto.</p>

## [Entities](./src/entities/)

<p>As entidades são a abstração do formato dos dados que a API recebe e trata.</p>

<p>Ex:</p>

- [Contact](./src/entities/Contact.ts): formato padronizado dos contatos

<br/>

## [Middlewares](./src/middlewares/)

<p>São componentes que executam antes dos controllers, realizam validações nas requisições realizadas para a API</p>

<p>Ex:</p>

- [AuthenticationMiddleware](./src/middlewares/AuthenticationMiddleware/IAuthenticationmiddleware.ts): Abstração de middleware responsável pela autenticação das requisições. Exemplo de implementação utilizando Jwt: [JwtAuthenticationMiddleware](./src/middlewares/AuthenticationMiddleware/implements/JwtAuthenticationMiddleware.ts).

<br/>

## [Providers](src/providers/)

<p>São componentes responsáveis pela comunicação com aplicações externas do projeto, como por exemplo os bancos de dados. Geralmente são implementados a partir dos casos de uso que serão descritos abaixo.</p>

<p>Ex:</p>

- [ORM](./src/providers/orm): provedor que lida com toda comunicação com os bancos de dados do projeto

<br/>

## [Repositories](./src/repositories/)

<p>São abstrações dos repositórios (utilizados para persistir e consultar os dados). Este componente determina como deve ser a comunicação entre a API e os bancos de dados.</p>

<p>Ex:</p>

- [IUserRepository](./src/repositories/IUserRepository.ts): repositório abstrato responsável pelos métodos de manipulação dos dados da entidade de usuário. Exemplo de implementação utilizando Typeorm: [TypeormUserRepository](./src/repositories/implements/typeorm/TypeormUserRepository.ts)

<br/>

## [Routes](./src/routes/)

<p>Este componente contempla todas as rotas (url's) presentes na aplicação</p>

### [Controller](./src/routes/interfaces/../Macapa/PostContactsMacapa/PostContactsMacapaController.ts)

<p>São classes responsáveis por receber e retornar dados ao usuário.</p>

### [Use Case](./src/routes/interfaces/../Macapa/PostContactsMacapa/PostContactsMacapaUseCase.ts)

<p>São classes responsáveis por persistir os dados nos repositórios e/ou retornar dados já persistidos.</p>


### [Dto (Data Transfer Object)](./src/routes/interfaces/../Macapa/PostContactsMacapa/PostContactsMacapaDto.ts)

<p>São classes responsáveis por padronizar a transferência dos dados entre os <i>Controllers</i> e <i>Use Cases</i>.</p>

<br/>

# Instalação

## Pré requisitos
Para desenvolvimento neste projeto é necessário NodeJs com Typescript instalado de forma global. Isso pode ser feito através do seguinte comando:
```bash
yarn global add typescript
```

## Clonar o repositório
```bash
git clone https://github.com/gabrielhjs/test-mercafacil.git
```

## Instalar as dependências
```bash
yarn install
```

## Configuração das variáveis de ambiente
O projeto deve possuir um arquivo [.env](./.env.example) com os dados de acesso necessários.

</br>

# Execução
Para executar o projeto em ambiente local:
```bash
yarn dev
```
O terminal deve retornar:
```bash
Connection: (Your mysql connection) is connected
Connection: (Your postregres connection) is connected
```
O que indica que a API se conectou com sucesso as bases de dados.

### A API é disponbilizada por padrão na porta [3333](http://localhost:3333/status).

</br>

# Rotas

## Status
Checar o status da aplicação 

```bash
GET /status
```
Response
```json
{
  "status": "ok"
}
```
</br>

---

## User

### Criar usuário
```bash
POST /users/create
```
Request json body
```json
{
	"name": "yourname",
	"email": "your@email.com",
	"password": "yourpassword"
}
```
Response
```json
{
  "token": "your auth token"
}
```

</br>

### Autenticar usuário
```bash
POST /users/login
```
Request json body
```json
{
	"email": "your@email.com",
	"password": "yourpassword"
}
```
Response
```json
{
  "token": "your auth token"
}
```
</br>

---

## Contatos

### Adicionar contatos Macapá
```bash
POST /macapa/contacts
```
Request headers
```bash
{
  "Content-Type": "application/json",
  "Authorization": "Bearer 'your auth token'"
}
```
Request json body
```json
{
  "contacts": [
    {
      "name": "Marina Rodrigues",
      "cellphone": "5541996941919"
    },
    {
      "name": "Nicolas Rodrigues",
      "cellphone": "5541954122723"
    }
  ]
}
```
Response
```json
[
  {
    "nome": "MARINA RODRIGUES",
    "celular": "+55 (41) 99694-1919",
    "id": 1
  },
  {
    "nome": "NICOLAS RODRIGUES",
    "celular": "+55 (41) 95412-2723",
    "id": 2
  }
]
```
</br>

### Adicionar contatos Varejão
```bash
POST /varejao/contacts
```
Request headers
```bash
{
  "Content-Type": "application/json",
  "Authorization": "Bearer 'your auth token'"
}
```
Request json body
```json
{
  "contacts": [
    {
      "name": "Srta. Isabelly Castro",
      "cellphone": "5541959365078"
    },
    {
      "name": "Ana Julia da Rocha",
      "cellphone": "5541923038062"
    }
  ]
}
```
Response
```json
[
  {
    "nome": "Srta. Isabelly Castro",
    "celular": "5541959365078",
    "id": 1
  },
  {
    "nome": "Ana Julia da Rocha",
    "celular": "5541923038062",
    "id": 2
  }
]
```
</br>

# [Docker](./docker-compose.yml)
O projeto foi desenvolvido para rodar em Container Docker permitindo deploy simples em servidores.

Neste projeto são utilizadas uma imagem do do mysql server e uma do postgres que se comunicam via <i>Network</i> interna do Docker o que permite maior velocidade de comunicação entre o container da API e os containers dos bancos de dados.

</br>

## [Dockerfile da API](./Dockerfile)
A imagem da API é buildada em duas etapas, sendo elas:
- Etapa 1: Transpila o código para Javascript utilizando o transpilador tsc.
- Etapa 2: Copia o código Javascript da etapa 1 e monta a imagem final com apenas as dependências do ambiente de produção.

Desta forma é possível gerar uma imagem final mais enxuta e com melhor performance.

</br>

## Buildar as imagens
```bash
docker-compose build
```

</br>

## Subir os containers
```bash
docker-compose up -d
```
> O container da API aguarda 20 segundos para rodar, para que os containers dos bancos de dados estejam prontos antes da aplicação iniciar.

### O container da API é disponbilizado por padrão na porta [3333](http://localhost:3333/status).

---
By [**Gabriel Sá**](https://github.com/gabrielhjs) | Backend Developer :D