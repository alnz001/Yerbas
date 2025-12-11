function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}
// Script para el menú desplegable en móviles y animación extra del logo
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const logo = document.querySelector('.logo');

    // Toggle del menú en móviles
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });

    // Animación extra al hacer clic en el logo
    logo.addEventListener('click', function() {
        this.style.animation = 'rotateLogo 1s ease-in-out';
        setTimeout(() => {
            this.style.animation = '';
        }, 1000);
    });
});

// Script para funcionalidad de cantidad y animaciones
document.addEventListener('DOMContentLoaded', function() {
    const qtyBtns = document.querySelectorAll('.prod-qty-btn');
    const buyBtns = document.querySelectorAll('.prod-buy-btn');

    // Funcionalidad de botones de cantidad
    qtyBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.getAttribute('data-action');
            const input = this.parentElement.querySelector('.prod-qty-input');
            let value = parseInt(input.value);

            if (action === 'increase') {
                value++;
            } else if (action === 'decrease' && value > 1) {
                value--;
            }

            input.value = value;
        });
    });

    // Animación en botón de comprar (opcional, para feedback)
    buyBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Animación simple: cambia texto temporalmente
            const originalText = this.textContent;
            this.textContent = 'Agregado!';
            this.style.backgroundColor = '#61b348ff';
            setTimeout(() => {
                this.textContent = originalText;
                this.style.backgroundColor = '#5189d3ff';
            }, 1000);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const repentanceBtn = document.getElementById('repentanceBtn');
    repentanceBtn.addEventListener('click', function() {
        alert('¡Arrepentimiento registrado! Tu compra ha sido cancelada.');
        // Aquí puedes agregar más lógica, como redirigir a una página o enviar una solicitud.
    });
});