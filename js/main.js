// ===== Loading Screen =====
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 1500);
});

// ===== Custom Cursor =====
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    setTimeout(() => {
        cursorFollower.style.left = e.clientX - 15 + 'px';
        cursorFollower.style.top = e.clientY - 15 + 'px';
    }, 50);
});

// Cursor hover effect on interactive elements
const interactiveElements = document.querySelectorAll('a, button, .btn, .social-link, .project-card, .skill-category, .cert-card');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorFollower.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
        cursorFollower.classList.remove('hover');
    });
});

// ===== Particles.js Configuration =====
tsParticles.load("particles-js", {
    fullScreen: false,
    background: {
        color: {
            value: "transparent"
        }
    },
    fpsLimit: 60,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push"
            },
            onHover: {
                enable: true,
                mode: "repulse"
            },
            resize: true
        },
        modes: {
            push: {
                quantity: 4
            },
            repulse: {
                distance: 150,
                duration: 0.4
            }
        }
    },
    particles: {
        color: {
            value: ["#6366f1", "#8b5cf6", "#06b6d4"]
        },
        links: {
            color: "#6366f1",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce"
            },
            random: false,
            speed: 1.5,
            straight: false
        },
        number: {
            density: {
                enable: true,
                area: 800
            },
            value: 80
        },
        opacity: {
            value: 0.5
        },
        shape: {
            type: "circle"
        },
        size: {
            value: { min: 1, max: 4 }
        }
    },
    detectRetina: true
});

// ===== Typed.js - Hero Typing Effect =====
const typed = new Typed('.typed-text', {
    strings: [
        'Full Stack Developer',
        'Software Engineer',
        'Problem Solver',
        'Tech Enthusiast',
        'AI Explorer'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true,
    showCursor: false
});

// ===== AOS - Animate on Scroll =====
AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 100
});

// ===== Vanilla Tilt - 3D Card Effect =====
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
    scale: 1.02
});

// ===== Navbar Scroll Effect =====
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ===== Mobile Navigation =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ===== Active Navigation Link =====
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// ===== Back to Top Button =====
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== Contact Form =====
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create mailto link
    const mailtoLink = `mailto:shivanandakupnoor@gmail.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(message)}%0A%0AFrom: ${name}%0AEmail: ${email}`;

    window.location.href = mailtoLink;

    // Reset form
    contactForm.reset();
});

// ===== Smooth Scroll for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// ===== Floating Shapes Animation (Hero) =====
function createFloatingShapes() {
    const hero = document.querySelector('.hero');
    const shapes = ['circle', 'square', 'triangle'];

    for (let i = 0; i < 15; i++) {
        const shape = document.createElement('div');
        shape.className = `floating-shape ${shapes[Math.floor(Math.random() * shapes.length)]}`;
        shape.style.cssText = `
            position: absolute;
            width: ${Math.random() * 30 + 10}px;
            height: ${Math.random() * 30 + 10}px;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            opacity: 0.1;
            border: 2px solid var(--primary);
            border-radius: ${Math.random() > 0.5 ? '50%' : '5px'};
            animation: float ${Math.random() * 10 + 10}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
            pointer-events: none;
        `;
        hero.appendChild(shape);
    }
}

// Add floating animation CSS
const floatStyle = document.createElement('style');
floatStyle.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0) rotate(0deg);
        }
        25% {
            transform: translateY(-20px) rotate(90deg);
        }
        50% {
            transform: translateY(0) rotate(180deg);
        }
        75% {
            transform: translateY(20px) rotate(270deg);
        }
    }
`;
document.head.appendChild(floatStyle);

createFloatingShapes();

// ===== Text Reveal Animation =====
function revealText() {
    const reveals = document.querySelectorAll('.reveal-text');

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealText);

// ===== Skill Progress Animation =====
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');

    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = progress + '%';
    });
}

// ===== Counter Animation =====
function animateCounters() {
    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = target / 100;

        const updateCounter = () => {
            const current = +counter.innerText;

            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });
}

// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');

            // Trigger specific animations based on section
            if (entry.target.classList.contains('skills')) {
                animateSkills();
            }
            if (entry.target.classList.contains('about')) {
                animateCounters();
            }
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// ===== Project Cards Hover Effect =====
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ===== Glitch Effect on Name (Optional) =====
const heroName = document.querySelector('.hero-name');

heroName.addEventListener('mouseenter', () => {
    heroName.classList.add('glitch');
    setTimeout(() => {
        heroName.classList.remove('glitch');
    }, 500);
});

// Add glitch animation CSS
const glitchStyle = document.createElement('style');
glitchStyle.textContent = `
    .hero-name.glitch {
        animation: glitch 0.5s ease;
    }

    @keyframes glitch {
        0% { transform: translate(0); }
        20% { transform: translate(-2px, 2px); }
        40% { transform: translate(-2px, -2px); }
        60% { transform: translate(2px, 2px); }
        80% { transform: translate(2px, -2px); }
        100% { transform: translate(0); }
    }
`;
document.head.appendChild(glitchStyle);

// ===== Magnetic Button Effect =====
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    });

    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translate(0, 0)';
    });
});

// ===== Parallax Effect on Scroll =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;

    // Parallax for hero section
    const hero = document.querySelector('.hero-content');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - scrolled / 700;
    }
});

// ===== Console Easter Egg =====
console.log('%c Welcome to my portfolio! ', 'background: linear-gradient(90deg, #6366f1, #06b6d4); color: white; font-size: 20px; padding: 10px; border-radius: 5px;');
console.log('%c Built with passion by Shivananda Kupnoor ', 'color: #8b5cf6; font-size: 14px;');
console.log('%c Feel free to reach out: shivanandakupnoor@gmail.com ', 'color: #06b6d4; font-size: 12px;');

// ===== Performance Optimization =====
// Debounce function for scroll events
function debounce(func, wait = 10) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Apply debounce to scroll handlers
window.addEventListener('scroll', debounce(() => {
    revealText();
}, 10));
