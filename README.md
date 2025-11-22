# Matías Regaló - E-commerce de iPhones

Este es un **proyecto de e-commerce de venta de iPhones** desarrollado con React:

## Descripción del Proyecto

**E-commerce especializado en venta de iPhones** desarrollado como una Single Page Application (SPA) con React, que incluye sistema completo de autenticación y gestión de usuarios.

### Arquitectura Técnica

- **Frontend**: React 19 con componentes funcionales y hooks
- **Routing**: React Router v7 para navegación SPA
- **Autenticación**: Firebase Authentication con verificación de email
- **Base de datos**: Firebase/Firestore para productos, órdenes y usuarios
- **Estado global**: Context API (CartContext, AuthContext, ErrorContext)
- **Estilos**: Bootstrap 5.3.8 + Bootstrap Icons
- **Build Tool**: Vite 7

### Funcionalidades Principales

- **Catálogo de productos** con filtrado por categorías
- **Vista detallada** de cada celular con información completa
- **Carrito de compras** persistente entre sesiones
- **Sistema de checkout** con confirmación de órdenes
- **Gestión de stock** y validaciones en tiempo real
- **Sistema de autenticación completo**:
  - Registro de usuarios con validación de email
  - Inicio de sesión seguro
  - Verificación de email obligatoria
  - Perfil de usuario
  - Cierre de sesión

### Instrucciones para instalar y configurar el proyecto:

#### Prerrequisitos:
- Node.js (versión 14 o superior)
- npm o yarn
- Cuenta de Firebase (para base de datos y autenticación)

#### Pasos de instalación:

1. **Clonar el repositorio**
   ```bash
   git clone [url-del-repositorio]
   cd Entrega-N-1-ecommerce
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar Firebase:**
   
   a. **Crear proyecto en Firebase:**
      - Ve a [Firebase Console](https://console.firebase.google.com/)
      - Crea un nuevo proyecto o selecciona uno existente
      - Activa **Authentication** y habilita el método **Email/Password**
      - Activa **Firestore Database** y crea la base de datos en modo producción o prueba
   
   b. **Configurar aplicación web:**
      - Ve a Configuración del proyecto > Tus aplicaciones
      - Si no tienes una app web, crea una
      - Copia los valores de configuración
   
   c. **Crear archivo de variables de entorno:**
      - Crea un archivo `.env` en la raíz del proyecto
      - Agrega las siguientes variables con los valores de tu proyecto Firebase:
      ```env
      VITE_API_KEY=tu-api-key
      VITE_AUTH_DOMAIN=tu-proyecto.firebaseapp.com
      VITE_PROJECT_ID=tu-proyecto-id
      VITE_STORAGE_BUCKET=tu-proyecto.appspot.com
      VITE_MESSAGING_SENDER_ID=tu-messaging-sender-id
      VITE_APP_ID=tu-app-id
      ```
   
   d. **Configurar Firestore:**
      - Ve a Firestore Database en Firebase Console
      - Crea las siguientes colecciones (se crearán automáticamente al usar la app):
        - `products`: Para almacenar los productos
        - `orders`: Para almacenar las órdenes de compra
        - `users`: Para almacenar información de usuarios

4. **Ejecutar el proyecto:**
   ```bash
   npm run dev
   ```
   El proyecto estará disponible en `http://localhost:5173`

5. **Comandos disponibles:**
   ```bash
   npm run dev    
   npm run build    
   npm run preview  
   npm run lint     
   npm run format   
   ```

#### Flujo de Autenticación:

1. **Registro:**
   - El usuario completa el formulario de registro
   - Se crea la cuenta en Firebase Authentication
   - Se envía automáticamente un email de verificación
   - El usuario es redirigido al login

2. **Verificación de Email:**
   - El usuario hace clic en el enlace del email de verificación
   - Se verifica el email automáticamente
   - Se redirige al login con mensaje de éxito

3. **Inicio de Sesión:**
   - El usuario ingresa sus credenciales
   - Se valida que el email esté verificado
   - Si está verificado, se autentica y se redirige al perfil
   - Si no está verificado, se muestra un error

4. **Perfil de Usuario:**
   - El usuario puede ver su información
   - Puede cerrar sesión desde el perfil

### Instrucciones para contribuir en el proyecto:

1. Haz un fork del repositorio
2. Crea tu rama
3. Realiza tus cambios, guardalos y haz commit
4. Sube tu rama
5. Abre un pull request

### Rutas Disponibles

- `/` - Página principal (catálogo de productos)
- `/category/:category` - Catálogo filtrado por categoría
- `/detail/:id` - Vista detallada de un producto
- `/sobre-nosotros` - Página sobre nosotros
- `/cart` - Carrito de compras
- `/checkout` - Proceso de checkout
- `/register` - Registro de usuario
- `/login` - Inicio de sesión
- `/verify-email` - Verificación de email (se accede desde el link del email)
- `/profile` - Perfil de usuario (requiere autenticación)
- `*` - Página 404 para rutas no encontradas

### Características

#### E-commerce:
1. **Diseño modular** que permite fácil mantenimiento
2. **Arquitectura SPA** con React Router para navegación sin recargas
3. **Catálogo dinámico** de celulares con filtrado por categorías
4. **Vista detallada** de productos con información completa
5. **Sistema de carrito persistente** entre sesiones
6. **Widget de carrito** en navbar con contador de items
7. **Proceso de checkout completo** con generación de órdenes
8. **Validación de stock** en tiempo real con límites
9. **Gestión de órdenes** almacenadas en Firestore

#### Autenticación y Usuarios:
10. **Sistema de autenticación completo** con Firebase Authentication
11. **Registro de usuarios** con validación de campos
12. **Verificación de email obligatoria** antes de iniciar sesión
13. **Inicio de sesión seguro** con validación de credenciales
14. **Perfil de usuario** con información personal
15. **Cierre de sesión** con redirección automática

#### Experiencia de Usuario:
16. **Loaders y estados de carga** para mejor UX
17. **Mensajes de éxito y error** informativos y amigables
18. **Validación de formularios** en frontend y backend
19. **Manejo robusto de errores** con mensajes claros
20. **Diseño responsive** utilizando Bootstrap 5
21. **Navegación intuitiva** con breadcrumbs y enlaces claros

#### Técnicas:
22. **Gestión de estado global** con Context API (CartContext, AuthContext, ErrorContext)
23. **Integración completa** con Firebase/Firestore
24. **Componentes separados** en contenedores y presentacionales
25. **Estructura escalable** para futuras expansiones
26. **Código limpio** sin console.logs en producción
27. **Semilla de productos** automática al iniciar la aplicación

#### SEO (Search Engine Optimization):
28. **Meta tags dinámicos** en todas las páginas con react-helmet-async
29. **Meta descriptions** personalizadas por página para mejor posicionamiento
30. **Títulos dinámicos** optimizados por contenido (productos, categorías, páginas)
31. **Schema.org JSON-LD** para productos (Product Schema) con información de precio, disponibilidad y marca
32. **Schema.org JSON-LD** para breadcrumbs (BreadcrumbList) para mejor navegación en buscadores
33. **Schema.org JSON-LD** para organización (Organization Schema) en la página principal
34. **Open Graph tags** para compartir en redes sociales (Facebook, LinkedIn)
35. **Twitter Cards** para mejor vista previa al compartir en Twitter
36. **Canonical URLs** en todas las páginas para evitar contenido duplicado
37. **Meta robots** configurados para páginas privadas (noindex, nofollow)
38. **robots.txt** configurado para controlar el crawling de páginas públicas y privadas
39. **Alt text** descriptivo en todas las imágenes para accesibilidad y SEO
40. **Breadcrumbs visuales** con Bootstrap para mejor navegación del usuario

### Optimización SEO

El proyecto implementa un conjunto completo de optimizaciones SEO siguiendo las mejores prácticas actuales:

#### Meta Tags y Headers:
- **Títulos dinámicos** por página con formato: `{Título de página} | iMarket`
- **Meta descriptions** personalizadas y descriptivas (150-160 caracteres)
- **Canonical URLs** para evitar problemas de contenido duplicado
- **Meta robots** configurados apropiadamente:
  - Páginas públicas: indexadas normalmente
  - Páginas privadas (login, register, cart, checkout, profile): `noindex, nofollow`

#### Schema.org (Datos Estructurados):
- **Product Schema**: Implementado en páginas de detalle de productos con:
  - Nombre, descripción e imagen del producto
  - Información de oferta (precio, moneda, disponibilidad)
  - Marca (Apple) y categoría
  - Información del vendedor (iMarket)
  
- **BreadcrumbList Schema**: Implementado en páginas de productos y categorías para mostrar la jerarquía de navegación

- **Organization Schema**: Implementado en la página principal con información de la empresa

#### Open Graph y Twitter Cards:
- **Open Graph tags** para mejor presentación al compartir en redes sociales
- **Twitter Cards** con tipo `summary_large_image` para productos
- Permite vista previa con imagen, título y descripción al compartir URLs

#### Navegación y Accesibilidad:
- **Breadcrumbs visuales** implementados con Bootstrap
- **Alt text descriptivo** en todas las imágenes
- **URLs amigables** con React Router

#### robots.txt:
- Configurado para permitir indexación de páginas públicas
- Bloquea indexación de páginas privadas y administrativas

#### Archivos SEO:
- `public/robots.txt`: Configuración de crawling para buscadores
- Meta tags gestionados dinámicamente con `react-helmet-async` en cada componente

**Nota**: Para producción, asegúrate de actualizar las URLs en `robots.txt` y `index.html` con tu dominio real.

### Estructura del Proyecto

```
Entrega-N-1-ecommerce/
├── public/
│   ├── image/              # Imágenes de productos
│   └── robots.txt          # Configuración para buscadores (SEO)
├── src/
│   ├── components/          # Componentes React
│   │   ├── Cart/           # Componentes del carrito
│   │   ├── Checkout/       # Componentes de checkout
│   │   ├── feedback/       # Componentes de feedback (Error, Success, Loader)
│   │   ├── items/          # Componentes de productos
│   │   ├── layout/         # Componentes de layout (NavBar, Footer)
│   │   ├── pages/          # Páginas (SobreNosotros, PathNotFound)
│   │   └── users/          # Componentes de usuarios (Login, Register, Profile, VerifyEmail)
│   ├── context/            # Contexts de React
│   │   ├── AuthContext.jsx # Context de autenticación
│   │   ├── CartContext.jsx # Context del carrito
│   │   └── ErrorContext.jsx # Context de errores
│   ├── db/                 # Configuración de Firebase
│   │   └── db.js           # Inicialización de Firebase
│   ├── utils/              # Utilidades
│   │   └── seedProducts.js # Script para poblar productos iniciales
│   ├── App.jsx             # Componente principal con rutas
│   └── main.jsx            # Punto de entrada de la aplicación
├── .env                    # Variables de entorno (NO incluir en git)
├── index.html              # HTML principal con meta tags base
├── package.json            # Dependencias y scripts
└── README.md              # Este archivo
```

### Notas Importantes

- **Nunca subas el archivo `.env` al repositorio**. Está incluido en `.gitignore`.
- **Ajusta las reglas de seguridad de Firestore** según tus necesidades de producción.
- **Configura correctamente el email de verificación** en Firebase Authentication.
- **Los productos se cargan automáticamente** la primera vez que se ejecuta la aplicación.
- **El sistema requiere verificación de email** para poder iniciar sesión.

### Tecnologías Utilizadas

- **React** 19.1.1
- **React Router DOM** 7.4.4
- **react-helmet-async** 2.0.5 (Gestión de meta tags y SEO)
- **Firebase** 12.6.0 (Authentication + Firestore)
- **Bootstrap** 5.3.8
- **Bootstrap Icons** 1.13.1
- **Vite** 7.1.12
- **ESLint** 9.36.0
- **Prettier** 3.6.2

### Dependencias SEO

El proyecto utiliza `react-helmet-async` para gestionar dinámicamente los meta tags en cada página. Esto permite:
- Títulos únicos por página
- Meta descriptions personalizadas
- Open Graph y Twitter Cards dinámicos
- Schema.org JSON-LD estructurado
- Canonical URLs dinámicas

**Instalación** (si necesitas reinstalar):
```bash
npm install react-helmet-async --legacy-peer-deps
```

*Nota: Se usa `--legacy-peer-deps` porque react-helmet-async aún no tiene soporte oficial para React 19 en sus peer dependencies, pero funciona correctamente.*

## LinkedIn del autor para futuros proyectos:

**www.linkedin.com/in/matias-regalo**
