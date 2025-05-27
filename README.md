# MicroFrontend Host de Rick and Morty!

Este repositorio contiene la aplicación principal o "Host" para el proyecto de Rick and Morty, diseñado para orquestar y consumir microfrontends remotos. Actúa como el punto de entrada para los usuarios, gestiona el ruteo y centraliza la lógica para la obtención de datos de personajes y la gestión del estado global.

---

## Instalación y Ejecución

Para instalar las dependencias y ejecutar el microfrontend, se deben seguir los siguientes pasos:

1.  **Clonar el repositorio:**

2.  **Instalar las dependencias:**
    ```bash
    npm install
    ```
3.  **Ejecutar el build del proyecto:**
    ```bash
    npm run build
    ```
4.  **Asegurarse que el microfrontend remoto está activo:**
    Para que el Host funcione correctamente, el microfrontend remoto `rick_morty_remote` debe estar ejecutándose. Se debe leer el README del repositorio remoto para las instrucciones de ejecución.
    
6.  **Ejecutar el proyecto Host en modo desarrollo:**
    ```bash
    npm run preview
    ```
    Esto ejecutará la aplicación Host, que intentará cargar y renderizar los componentes provistos por el microfrontend remoto.

---

## Arquitectura del Host

El `rick_morty_host` es la aplicación principal en esta arquitectura de microfrontends. Sus responsabilidades clave incluyen:

* **Ruteo Principal**: Gestiona las rutas de la aplicación (ej. `/`, `/home`) utilizando `react-router-dom`, dirigiendo al usuario a las diferentes secciones.
* **Orquestación de Componentes Remotos**: Cargar y renderizar los componentes expuestos por el microfrontend remoto (`rick_morty_remote`).
* **Gestión de Estado Centralizada**: Utiliza una "**store**" (basada en Zustand) para manejar el estado global de la aplicación, incluyendo:
    * La lógica de llamadas a la API para obtener los personajes.
    * El estado de carga (`loading`), error (`error`) y los datos de los personajes (`characters`).
    * Filtros de búsqueda y paginación.
    * Gestión de favoritos.
* **Interfaz de Usuario Principal**: Define la estructura global de la aplicación (Header, Content, Footer) y maneja las interacciones entre los componentes remotos y la lógica de negocio central.

Los componentes principales que componen la `HomePage` son:
* **`HomeHeader`**: Contiene elementos de UI como logos y el `CharacterSearcher` del remoto.
* **`HomeContent`**: El corazón de la aplicación, donde se consumen los datos de la "store", se renderizan las `CharacterCard`, se aplican los `CharactersFilters`, se gestiona la paginación y se abre el `CharacterDetails` en un modal.
* **`HomeFooter`**: Contiene información informativa al final de la página.

---

## Dependencias Usadas

Este proyecto utiliza las siguientes dependencias:

* **React**: Biblioteca principal para la construcción de la interfaz de usuario.
* **React Router DOM**: Para la gestión de ruteo en el cliente.
* **TypeScript**: Para un desarrollo más robusto y tipado estático.
* **Webpack (con Module Federation)**: Para empaquetar la aplicación y consumir los componentes de los microfrontends remotos.
* **Zustand**: Para la gestión del estado global de la aplicación.
* **React Bootstrap**: Para componentes de UI pre-estilizados.
* **React Paginate**: Para la funcionalidad de paginación de los resultados.
* **Axios**: Para realizar llamadas HTTP a la API.

---
