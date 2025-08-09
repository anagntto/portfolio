// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Projects data
const projectsData = [
    {
        id: 1,
        title: "Dashboard de Performance Marketing",
        description: "Análise completa de campanhas multi-canal com foco na redução de CAC e otimização de conversões. Implementação de tracking avançado e análise de funil de aquisição.",
        category: ["dashboard", "marketing"],
        technologies: ["Power BI", "SQL", "Google Analytics", "Google Tag Manager"],
        link: "#",
        type: "dashboard"
    },
    {
        id: 2,
        title: "Produtos de Dados para Saúde",
        description: "Desenvolvimento de produtos de dados para indústrias farmacêuticas e de saúde, incluindo análise exploratória e geração de insights para tomada de decisão.",
        category: ["analysis", "dashboard"],
        technologies: ["R", "Snowflake", "Tableau", "SQL"],
        link: "#",
        type: "dashboard"
    },
    {
        id: 3,
        title: "Testes A/B e Modelagem Estatística",
        description: "Implementação de framework de testes A/B e desenvolvimento de modelos de machine learning para otimização de conversões e predição de comportamento.",
        category: ["ml", "analysis"],
        technologies: ["Python", "R", "Machine Learning", "Statistical Analysis"],
        link: "#",
        type: "analysis"
    },
    {
        id: 4,
        title: "Análise de CRM e Qualificação de Leads",
        description: "Extração, processamento e análise de dados de CRM (RD Station, HubSpot) para análise de perfil e qualificação de leads, resultando em melhoria na qualidade dos leads.",
        category: ["analysis", "marketing"],
        technologies: ["SQL", "Python", "RD Station", "HubSpot"],
        link: "#",
        type: "analysis"
    },
    {
        id: 5,
        title: "Dashboard de Métricas de Negócio",
        description: "Criação de dashboards automatizados para monitoramento de métricas-chave de negócio, permitindo mais tempo para pensamento estratégico e previsão de cenários.",
        category: ["dashboard", "analysis"],
        technologies: ["Power BI", "SQL", "Excel", "Google Sheets"],
        link: "#",
        type: "dashboard"
    },
    {
        id: 6,
        title: "Otimização de Campanhas Google Ads",
        description: "Planejamento, configuração e gestão de campanhas no Google Ads com foco em nichos específicos, incluindo setup completo de ferramentas de tracking.",
        category: ["marketing", "analysis"],
        technologies: ["Google Ads", "Google Analytics", "SEMrush", "Google Tag Manager"],
        link: "#",
        type: "marketing"
    },
    {
        id: 7,
        title: "Modelos Preditivos em R",
        description: "Desenvolvimento e validação de modelos estatísticos e de machine learning em R, com produção de relatórios automatizados em R Markdown e Shiny.",
        category: ["ml", "analysis"],
        technologies: ["R", "Machine Learning", "R Markdown", "Shiny"],
        link: "#",
        type: "analysis"
    },
    {
        id: 8,
        title: "Visualizações Interativas com AWS QuickSight",
        description: "Construção de visualizações e dashboards interativos em AWS QuickSight para suporte à tomada de decisões estratégicas.",
        category: ["dashboard", "analysis"],
        technologies: ["AWS QuickSight", "SQL", "R", "ggplot2"],
        link: "#",
        type: "dashboard"
    }
];

// Projects filtering and rendering
function renderProjects(projects) {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = '';

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="project-icon">
                <i class="fas ${getProjectIcon(project.type)}"></i>
            </div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <a href="${project.link}" class="project-link">Ver Detalhes <i class="fas fa-arrow-right"></i></a>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

function getProjectIcon(type) {
    const icons = {
        dashboard: 'fa-chart-bar',
        analysis: 'fa-chart-line',
        marketing: 'fa-bullhorn',
        ml: 'fa-brain'
    };
    return icons[type] || 'fa-project-diagram';
}

// Filter projects
function filterProjects(category) {
    let filteredProjects;
    if (category === 'all') {
        filteredProjects = projectsData;
    } else {
        filteredProjects = projectsData.filter(project => 
            project.category.includes(category)
        );
    }
    renderProjects(filteredProjects);
}

// Filter buttons event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Render all projects initially
    renderProjects(projectsData);

    // Add event listeners to filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Filter projects
            const category = button.getAttribute('data-filter');
            filterProjects(category);
        });
    });
});

// Contact form handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Por favor, preencha todos os campos.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um email válido.');
            return;
        }
        
        // If using Formspree, the form will submit normally
        // For now, we'll show a success message
        alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
        this.reset();
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .timeline-item, .stat-item');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Active navigation link highlighting
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Parallax effect for hero section (subtle)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Smooth reveal animations for timeline items
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, { threshold: 0.3 });

document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-50px)';
        item.style.transition = `all 0.6s ease ${index * 0.1}s`;
        timelineObserver.observe(item);
    });
});

// Skills animation on scroll
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillItems = entry.target.querySelectorAll('.skill-item, .tech-item');
            skillItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const skillsSection = document.querySelector('.about');
    if (skillsSection) {
        const skillItems = skillsSection.querySelectorAll('.skill-item, .tech-item');
        skillItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'all 0.4s ease';
        });
        skillsObserver.observe(skillsSection);
    }
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    }
    
    updateCounter();
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent);
                animateCounter(stat, target);
            });
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        statsObserver.observe(heroStats);
    }
});

// Preloader (optional)
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// Back to top button (optional)
function createBackToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.className = 'back-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
    `;
    
    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
    
    document.body.appendChild(button);
}

// Initialize back to top button
document.addEventListener('DOMContentLoaded', createBackToTopButton);

