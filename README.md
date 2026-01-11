# Chat-Socket

## Descripción

Proyecto donde realizo un chat con Node JS, Express, usando el protocolo de websocket por medio de Socket.io. Integra base de datos relacional, la base de datos esta alojada en Turso que implementa SQLite, la vista al usuario la realizo con HTML y CSS. Un usuario puede conectarse e iniciar un chat, enviar mensajes, los mensajes quedan guardados, si la conexion se pierde al volver aparecen los mensajes. El servidor puede responder a varias conexiones al tiempo.

<img src="https://raw.githubusercontent.com/DianaCarolina3/chat-socket/main/client/images/Chat Socket DevTools.png" width="500"  alt="chat socket proyect"/>
<img src="https://raw.githubusercontent.com/DianaCarolina3/chat-socket/main/client/images/Screenshot-chat-socket.png" width="500" alt="compare two chats" />

## Caracteristicas

- Implementa arquitectura Modelo-Vista-Controlador (MVC) para el proyecto.
- Comunicación en tiempo real mediante WebSockets usando Socket.io.
- Persistencia de mensajes, los mensajes se almacenan en la base de datos (Turso con SQLite) y se muestran al reconectarse.
- Interfaz simple y funcional con HTML y CSS.
- Servidor puede responder a varias conexiones al tiempo.

## Stack tecnologico

### Frontend

- **HTML** interfaz básica de inicio
- **CSS** estilos de la intefaz

### Backend

- **Javascript en Node.js** para desarrollo del lado del servidor
- **Express** framework para construir la API REST
- **SQLite con Turso** base de datos relacional
- **Socket.io** para comunicacion bidireccional en tiempo real

### Despliegue

- **Render** para hosting del backend
- **Turso** para gestionar la base de datos

## Primeros pasos

### Prerequisitos

- Node.js (v16+)
- npm o yarn
- Turso

### Instalación

1. Clona el repositorio

```bash
git clone https://github.com/DianaCarolina3/chat-socket.git
cd chat-socket
```

2. Instalar dependencias

```bash
npm install
# o
yarn
```

3. Configurar variables de entorno
   - Crea un archivo `.env` en la raíz del directorio
   - Añade tus keys de URL_TURSO y AUTH_TOKEN_TURSO

```
URL_TURSO=your_url_turso
AUTH_TOKEN_TURSO=your_auth_token_turso
```

4. Levantar el servidor

```bash
npm start
# o
yarn start
```

5. ¡Ya puedes usarlo!


### Estructura del proyecto

-`/client`: Archivos del lado del cliente
  - `/css`: Estilos de la interfaz
  - `/js`: Lógica del cliente (conexión Socket.io)
  - `index.html`: Página principal del chat

-`/server`: Archivos del lado del servidor
  - `/controllers`: Controladores para manejar la lógica del negocio
  - `/db`: Configuración y conexión a la base de datos Turso
  - `/models`: Modelos de datos
  - `/routes`: Definición de rutas del servidor
  - `/socket`: Configuración de eventos y lógica de Socket.io
  - `/utils`: Utilidades o funciones auxiliares
  - `app.js`: Punto de entrada principal del servidor
  - `.env`: Variables de entorno


### Licencia

Este proyecto está bajo la licencia [licencia MIT](https://opensource.org/licenses/MIT).
