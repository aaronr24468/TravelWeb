🚗 Plataforma de Viajes Compartidos – Frontend

Frontend de una plataforma de viajes compartidos donde los conductores pueden registrar vehículos, crear viajes y gestionar su información, y los pasajeros pueden visualizar viajes disponibles.
Este proyecto forma parte de un sistema full stack, enfocado en buenas prácticas de arquitectura, seguridad y experiencia de usuario.

🛠️ Tecnologías utilizadas

- React

- JavaScript (ES6+)

- Fetch API

- CSS / Responsive Design

- JWT Authentication (httpOnly cookies)

- FormData (para subida de imágenes)

- Vite

🔐 Autenticación

- Inicio de sesión mediante JWT.

- Manejo de sesión usando cookies httpOnly para mayor seguridad.

- Protección de rutas según el rol del usuario (conductor / pasajero).

🚘 Registro y selección de vehículos

- Registro de uno o múltiples vehículos por conductor.

- Visualización de los vehículos registrados.

- Selección de vehículo al momento de crear un viaje.

- Vista previa del vehículo seleccionado con imagen y características.

🧾 Creación de viajes

- Formulario dinámico para dar de alta viajes.

- Campos para:

  - Origen

  - Destino

  - Fecha y hora de salida

  - Fecha y hora de llegada

  - Vehículo seleccionado

- Renderizado condicional del resumen del viaje una vez que todos los campos están completos.

- Vista previa de imágenes relacionadas con el origen, destino y vehículo.

🖼️ Manejo de imágenes

- Subida de imágenes mediante FormData.

- Visualización de imágenes de vehículos y destinos.

- Integración con backend que utiliza Cloudinary para almacenamiento.

🧠 Enfoque del proyecto

Este frontend fue desarrollado con enfoque en:

- Separación clara de responsabilidades.

- Componentes reutilizables.

- Comunicación limpia con una API REST.

- Experiencia de usuario clara e intuitiva.

- Integración con un backend seguro que valida roles y ownership.

📌 Estado del proyecto

🚧 En desarrollo

Actualmente se continúan agregando validaciones, mejoras visuales y nuevas funcionalidades.
