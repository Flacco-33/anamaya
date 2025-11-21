// Configuración de la página de enlaces
const CONFIG = {
    // Información del perfil
    profile: {
        title: "Anâmaya yoga y meditación",
        description: "Encuentra paz, energía y equilibrio. Nuestro estudio de yoga te ofrece clases para todos los niveles en un ambiente armonioso y lleno de buena vibra.",
        avatar: "./assets/logo.jpg" // Ruta a la imagen de perfil
    },
    
    // Enlace personalizable
    customLink: {
        text: "grafica",
        url: "https://example.com/grafica", // Cambia por tu URL
        icon: "./assets/custom-icon.svg" // Ruta al icono personalizado
    },
    
    // Enlaces de redes sociales
    socialLinks: {
        facebook: {
            url: "https://www.facebook.com/share/1CyzH9PNqu/", // Cambia por tu URL de Facebook
            enabled: true
        },
        whatsapp: {
            url: "https://wa.me/522331034352", // Cambia por tu número de WhatsApp
            enabled: true
        },
        instagram: {
            url: "https://instagram.com/tu-usuario", // Cambia por tu URL de Instagram
            enabled: false
        }
    }
};

// Función para aplicar la configuración
function applyConfig() {
    // Configurar perfil
    document.getElementById('page-title').textContent = CONFIG.profile.title;
    document.getElementById('page-description').textContent = CONFIG.profile.description;
    document.getElementById('profile-img').src = CONFIG.profile.avatar;
    
    // Configurar enlace personalizado
    document.getElementById('custom-text').textContent = CONFIG.customLink.text;
    document.getElementById('custom-link').href = CONFIG.customLink.url;
    document.getElementById('custom-icon').src = CONFIG.customLink.icon;
    
    // Configurar enlaces sociales
    if (CONFIG.socialLinks.facebook.enabled) {
        document.getElementById('facebook-link').href = CONFIG.socialLinks.facebook.url;
    } else {
        document.getElementById('facebook-link').style.display = 'none';
    }
    
    if (CONFIG.socialLinks.whatsapp.enabled) {
        document.getElementById('whatsapp-link').href = CONFIG.socialLinks.whatsapp.url;
    } else {
        document.getElementById('whatsapp-link').style.display = 'none';
    }
    
    if (CONFIG.socialLinks.instagram.enabled) {
        document.getElementById('instagram-link').href = CONFIG.socialLinks.instagram.url;
    } else {
        document.getElementById('instagram-link').style.display = 'none';
    }
}

// Función para manejar la carga de imágenes
function handleImageLoad() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
        
        img.addEventListener('error', function() {
            console.warn(`No se pudo cargar la imagen: ${this.src}`);
        });
        
        // Si la imagen ya está cargada (por caché)
        if (img.complete) {
            img.classList.add('loaded');
        }
    });
}

// Aplicar configuración cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    applyConfig();
    handleImageLoad();
});

// Función auxiliar para agregar más enlaces personalizados
function addCustomLink(text, url, iconPath, targetElement = '.links-section') {
    const container = document.querySelector(targetElement);
    const linkElement = document.createElement('a');
    linkElement.className = 'link-item custom-link';
    linkElement.href = url;
    
    linkElement.innerHTML = `
        <div class="link-icon">
            <img src="${iconPath}" alt="${text} Icon">
        </div>
        <span class="link-text">${text}</span>
        <div class="arrow">→</div>
    `;
    
    container.appendChild(linkElement);
    
    // Aplicar manejo de carga de imagen al nuevo enlace
    const newImg = linkElement.querySelector('img');
    newImg.addEventListener('load', function() {
        this.classList.add('loaded');
    });
}

// Exportar funciones para uso externo
window.LinkPage = {
    addCustomLink,
    applyConfig,
    CONFIG
};