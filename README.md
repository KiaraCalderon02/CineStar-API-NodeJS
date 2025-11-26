# API de Cinestar – Node.js

Esta API fue desarrollada en **Node.js ** para proporcionar los datos necesarios al proyecto web que replica parte del sitio **Cinestar**.  
Su finalidad es ofrecer información de cines y películas a través de endpoints simples y organizados.

## Características

La API incluye **4 endpoints GET**, los cuales permiten obtener:

- **/api/cines** – Lista de todos los cines.
- **/api/cines/:id** – Información de un cine específico.
- **/api/peliculas** – Lista completa de películas.
- **/api/peliculas/:id** – Datos de una película específica.

Cada ruta devuelve los datos en formato JSON.

## Tecnologías utilizadas

- Node.js
- Express
- MySQL (Base de datos)
- ES Modules
