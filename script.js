// Animação suave ao clicar nos links do menu
document.querySelectorAll('#nav-list a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        setActiveLink(this);
    });
});

// Define o link ativo no menu
function setActiveLink(activeLink) {
    document.querySelectorAll('#nav-list a').forEach(link => link.classList.remove('active'));
    activeLink.classList.add('active');
}

// Controle do menu mobile
document.getElementById('mobile-menu')?.addEventListener('click', function () {
    const navList = document.getElementById('nav-list');
    navList.classList.toggle('active');
    this.classList.toggle('active');
});

// Fecha o menu mobile ao clicar em um link
document.querySelectorAll('#nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        const navList = document.getElementById('nav-list');
        navList.classList.remove('active');
        document.getElementById('mobile-menu')?.classList.remove('active');
    });
});

// Controle do carrossel
let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    currentIndex = (index + carouselItems.length) % carouselItems.length;
    document.getElementById('carousel').style.transform = `translateX(-${currentIndex * 100}%)`;
    updateIndicators();
}

function updateIndicators() {
    document.querySelectorAll('#carousel-indicators .dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

// Configura os indicadores do carrossel
const indicators = document.createElement('div');
indicators.id = 'carousel-indicators';
carouselItems.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => showSlide(i));
    indicators.appendChild(dot);
});
document.getElementById('carousel-container').appendChild(indicators);

showSlide(0); // Inicializa o carrossel
setInterval(() => showSlide(currentIndex + 1), 5000); // Alterna slides automaticamente

// Botão de voltar ao topo
const backToTopButton = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    backToTopButton.style.display = window.scrollY > 500 ? 'block' : 'none';
});
backToTopButton?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Scroll Reveal
window.addEventListener('scroll', () => {
    document.querySelectorAll('.info-item, .box-diferenciais ul li, .matricula-item, #titulo').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
});

// Alternância da lista de infraestrutura
document.querySelector('.toggle-button')?.addEventListener('click', function () {
    const listContainer = document.querySelector('.list-container');
    listContainer.classList.toggle('visible');
    this.textContent = listContainer.classList.contains('visible') ? "↑" : "↓";
});
