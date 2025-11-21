# Página de Enlaces Estática

Una página simple y rápida para mostrar enlaces personalizables con un diseño moderno y responsivo.

## 🚀 Características

- **100% estática** - Solo HTML, CSS y JavaScript vanilla
- **Rápida carga** - Optimizada para velocidad
- **Responsive** - Se adapta a dispositivos móviles
- **Fácil configuración** - Un solo archivo de configuración
- **Personalizable** - Imágenes, enlaces y textos configurables

## 📁 Estructura de archivos

```
enlaces/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── config.js           # Configuración de la página
├── README.md           # Este archivo
└── assets/             # Carpeta de recursos
    ├── profile.jpg     # Foto de perfil (80x80px recomendado)
    ├── custom-icon.png # Icono personalizado (32x32px)
    ├── facebook-icon.svg
    ├── whatsapp-icon.svg
    ├── instagram-icon.svg
    └── favicon.ico
```

## 🔧 Configuración

### 1. Preparar las imágenes

Coloca las siguientes imágenes en la carpeta `assets/`:

- **profile.jpg** - Tu foto de perfil (recomendado: 80x80px)
- **custom-icon.png** - Icono para tu enlace personalizado (32x32px)
- **facebook-icon.svg** - Icono de Facebook
- **whatsapp-icon.svg** - Icono de WhatsApp  
- **instagram-icon.svg** - Icono de Instagram
- **favicon.ico** - Favicon del sitio

### 2. Editar la configuración

Abre `config.js` y modifica los valores según tus necesidades:

```javascript
const CONFIG = {
    // Información del perfil
    profile: {
        title: "Tu Nombre",
        description: "Tu descripción aquí",
        avatar: "./assets/profile.jpg"
    },
    
    // Enlace personalizable
    customLink: {
        text: "Mi Sitio Web",
        url: "https://tu-sitio-web.com",
        icon: "./assets/custom-icon.png"
    },
    
    // Enlaces de redes sociales
    socialLinks: {
        facebook: {
            url: "https://facebook.com/tu-usuario",
            enabled: true
        },
        whatsapp: {
            url: "https://wa.me/1234567890",
            enabled: true
        },
        instagram: {
            url: "https://instagram.com/tu-usuario",
            enabled: true
        }
    }
};
```

### 3. Personalizar enlaces

Para **deshabilitar** una red social, cambia `enabled: false`:

```javascript
facebook: {
    url: "https://facebook.com/tu-usuario",
    enabled: false  // Esto ocultará el enlace
}
```

## 🎨 Personalización avanzada

### Cambiar colores

Edita `styles.css` para cambiar el esquema de colores:

```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    /* Cambia estos colores por los que prefieras */
}
```

### Agregar más enlaces

Usa la función `addCustomLink()` en JavaScript:

```javascript
// Agregar un enlace adicional
LinkPage.addCustomLink(
    "Mi Blog", 
    "https://mi-blog.com", 
    "./assets/blog-icon.png"
);
```

## 🖼️ Recomendaciones de imágenes

### Formato y tamaño recomendado:

- **Foto de perfil**: JPG/PNG, 80x80px mínimo
- **Iconos personalizados**: PNG con fondo transparente, 32x32px
- **Iconos sociales**: SVG (vectoriales) para mejor calidad
- **Favicon**: ICO, 32x32px

### Dónde conseguir iconos:

- [Feather Icons](https://feathericons.com/) - Iconos SVG minimalistas
- [Heroicons](https://heroicons.com/) - Iconos SVG modernos
- [Lucide](https://lucide.dev/) - Iconos SVG hermosos
- [Simple Icons](https://simpleicons.org/) - Iconos de marcas

## 🚀 Despliegue

Esta página se puede hostear gratuitamente en:

- **GitHub Pages**
- **Netlify**
- **Vercel**
- **Firebase Hosting**
- Cualquier servidor web estático

## 📱 Compatibilidad

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Dispositivos móviles iOS y Android

## 🎯 Optimizaciones incluidas

- ✅ CSS optimizado para velocidad
- ✅ Imágenes con lazy loading
- ✅ Transiciones suaves
- ✅ Responsive design
- ✅ Fallbacks para imágenes
- ✅ Código minimalista

---

¡Tu página de enlaces está lista! Solo personaliza la configuración y las imágenes.