# API-UNIFORM

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

#### Autenticación

- **POST /register**: Registra un nuevo usuario.
    - **Body**:
        ```json
        {
          "nombre": "usuario",
          "contraseña": "contraseña"
        }
        ```

- **POST /login**: Inicia sesión un usuario y genera un token para poder utilizar el resto de Endpoints.
    - **Body**:
        ```json
        {
          "nombre": "usuario",
          "contraseña": "contraseña"
        }
        ```

#### Uniformes

- **GET /Uniforms**: Obtiene todos los uniformes de todos los niveles.
- **GET /Primary**: Obtiene todos los uniformes de un nivel
- **GET /Primary/Last**: Obtiene un total de uniformes de un nivel
- **POST /Primary**: Crea un nuevo uniforme.
    - **Body**:
        ```json
        {
          "user": "usuario",
          "proveedor": "proveedor",
          "coste": 100,
          "coste_total": 500,
          "total": 5,
          "talla": "M",
          "genero": "Femenino",
          "fecha_registro": "2024-01-01",
          "ultima_entrada": "2024-01-01",
          "anotacion": "Nota"
        }
        ```



## Estructura del Proyecto

- **config**: Configuración de la base de datos.
- **controllers**: Controladores para manejar las solicitudes HTTP.
- **routes**: Definición de las rutas de la API.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme a través de [GitHub](https://github.com/rangertmz).

---

¡Gracias por usar la API de Uniform-app! 🎉
