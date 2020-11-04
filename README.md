# NojdeJs-Jwt-Auth

### Tecnologías
NodeJs v15.0.1

### Clonar el Proyecto 
- https://github.com/RicardoBastardoGH/NojdeJs-Jwt-Auth.git

## Ejecucion de MongoDb

`mongod` para iniciar el servidor de mongodb

## Ejecucion de servidor de Node

Run `npm run dev`. 
usa nodemon para auto refresh al modificar los archivos y babel para usar las ultimas caracteristicas de JavaScript

### Rutas de la API

- POST http://localhost:3000/api/auth/signup
- POST http://localhost:3000/api/auth/signin
- GET  http://localhost:3000/api/companies
- POST http://localhost:3000/api/companies
- GET  http://localhost:3000/api/companies/:idCompany
- PUT  http://localhost:3000/api/companies/:idCompany
- DELETE http://localhost:3000/api/companies/:idCompany
 

## Registro de Usuario
  - POST http://localhost:3000/api/auth/signup  
  Body
  {
      "name":"Ricardo", 
      "lastname":"Bastardo", 
      "username":"bastvai", 
      "email":"bastvai@gmail.com", 
      "password":"1234",
      "phone":"1234567", 
      "address":"caricuao", 
      "birthday":"11/09/1987"
  }

## Login
  - POST http://localhost:3000/api/auth/signin
  {
      "email": "bastvai@gmail.com",
      "password": "1234"    
  }

## listar compañias
  - GET  http://localhost:3000/api/companies


## Insertar compañia
 - POST http://localhost:3000/api/companies
 
 Header:
  x-access-token: token
 
 Body:
 {     
    "name": "sidetur", 
    "rif": "123321", 
    "email": "sidetur@nestle.com", 
    "phone": "123456", 
    "address": "La Urbina", 
    "razon_social": "Sidetur S.A."
}

## Consultar Compañia por Id
  - GET  http://localhost:3000/api/companies/:idCompany

## Actualizar Compañias 
  - PUT  http://localhost:3000/api/companies/:idCompany
  
  Header:
    x-access-token: token
  
  Body:(admite cualquier campo de la Compañia )
  {
    "phone":"987654321"
  }

## Eliminar Compañia
- DELETE http://localhost:3000/api/companies/:idCompany
 Header:
  x-access-token: token


















