<div align="center">
    
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

## API-UNIFORM

</div>

Bienvenido a la **API de Uniform-app**, una API desarrollada para gestionar uniformes escolares.

## Descripción

Esta API permite a los usuarios gestionar inventarios de uniformes escolares para diferentes niveles educativos, incluyendo primaria, secundaria, preparatoria, universidad, deportes y maestros. La API está construida utilizando Node.js y Express, y se conecta a una base de datos MySQL.

## Características

- **Gestión de Inventarios**: Permite registrar y consultar uniformes por nivel educativo.
- **Autenticación de Usuarios**: Los usuarios pueden registrarse e iniciar sesión para acceder a la API.

## Instalación

Sigue estos pasos para configurar la API localmente:

1. Clona el repositorio:

    ```bash
    git clone https://github.com/rangertmz/Uniform-app.git
    cd Uniform-app
    ```

2. Instala las dependencias:

    ```bash
    npm install
    ```

3. Configura la base de datos:

    - Crea una base de datos MySQL utilizando el archivo db.sql.
    - Crea un .env con tus credenciales de base de datos.

4. Inicia la API:

    ```bash
    npm run dev
    ```

## Uso

### Endpoints

A excepción de /Login y /Register, para el resto de endpoints es requerido el uso de un token que genera el /Login


#### Inicia Sesión en la api y regresa el token para el uso de la api

```http
  POST /Login
```

…| `Authorization`      | `string` | **token**. |








## Estructura del Proyecto

- **config**: Configuración de la base de datos.
- **controllers**: Controladores para manejar las solicitudes HTTP.
- **routes**: Definición de las rutas de la API.

## Herramientas de desarrollo


- ![Static Badge](https://img.shields.io/badge/MySQL-blue?style=for-the-badge&logo=mysql&labelColor=gray) - Base de datos utilizada
- ![Static Badge](https://img.shields.io/badge/NodeJS-green?style=for-the-badge&logo=node.js&labelColor=gray) - Plataforma de servidor
- ![Static Badge](https://img.shields.io/badge/ExpressJS-white?style=for-the-badge&logo=express&labelColor=gray) - Framework de servidor
- ![Static Badge](https://img.shields.io/badge/Postman-orange?style=for-the-badge&logo=postman&labelColor=gray) - Herramienta de pruebas para la api
- ![Static Badge](https://img.shields.io/badge/Typescript-blue?style=for-the-badge&logo=typescript&labelColor=gray) - Lenguaje de programación

## Colaboradores

| <a href="https://github.com/waldory01"><img src="https://avatars.githubusercontent.com/u/123262370?v=4" width="115" style="border-radius: 50%; border: none;"><br><sub>Oswaldo Juarez</sub></a> | <a href="https://github.com/rangertmz"><img src="https://avatars.githubusercontent.com/u/119755933?v=4" width="115" style="border-radius: 50%; border: none;"><br><sub>Andres Rangel</sub></a> | <a href="https://github.com/samychanrz"><img src="https://avatars.githubusercontent.com/u/132713784?v=4" width="115" style="border-radius: 50%; border: none;"><br><sub>Samy Chan</sub></a> | <a href="https://github.com/rodrigoantonio118"><img src="https://avatars.githubusercontent.com/u/133248383?v=4" width="115" style="border-radius: 50%; border: none;"><br><sub>Rodrigo Vazquez</sub></a> | <a href="https://github.com/guilloroot"><img src="https://avatars.githubusercontent.com/u/167589531?v=4" width="115" style="border-radius: 50%; border: none;"><br><sub>Guillermo Ramirez</sub></a> |
| :---: | :---: | :---: | :---: | :---: |

---

¡Gracias por usar la API de Uniform-app! 🎉
