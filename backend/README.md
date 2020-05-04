# Curso de Frames Web (Backend)
 **Versão final** que implementa a API REST utilizada pelas aplicações frontend abordadas no curso.

## Organização
A aplicação foi organizada em duas pastas: **api** e **config**.

### Config
Basicamente para a aplicação funcionar é necessário configurar:
- Servidor HTTP (Express)
- Rotas para a API REST (Express/Node Restful)
- Conexão com Banco de Dados (Mongoose/MongoDB).

### Api
API REST foi implementada utilizando um módulo node chamado [node-restful](https://github.com/baugarten/node-restful).

## Configuração

1. Instalar os módulos do node utilizando o **npm**.
```sh
$ cd curso_frames_web/backend/versao_inicial
$ npm update
```

2. Inicializar a aplicação em **modo desenvolvimento** (utilizado no curso).
```sh
$ npm run dev
```

3. Inicializar a aplicação em **modo produção** (Fica a dica... :P).
```sh
$ npm run production
```