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

// Search form handler
document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const resultsDiv = document.getElementById('searchResults');
    resultsDiv.style.display = 'block';
    
    // Hide results after 5 seconds
    setTimeout(() => {
        resultsDiv.style.display = 'none';
    }, 5000);
});

// Header background change on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(102, 126, 234, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        header.style.backdropFilter = 'none';
    }
});

// Add animation to feature cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Click handlers for phone numbers
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', function(e) {
        // For devices that don't support tel: links, show an alert
        if (!('ontouchstart' in window)) {
            e.preventDefault();
            alert('Call us at: ' + this.textContent);
        }
    });
});

// Authentication Modal Functionality
const authModal = document.getElementById('auth-modal');
const authButton = document.getElementById('auth-button');
const closeButton = document.querySelector('.close');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const tabButtons = document.querySelectorAll('.tab-button');
const switchToSignup = document.getElementById('switch-to-signup');
const switchToLogin = document.getElementById('switch-to-login');

// Open modal when auth button is clicked
authButton.addEventListener('click', function(e) {
    e.preventDefault();
    authModal.style.display = 'block';
});

// Close modal when X is clicked
closeButton.addEventListener('click', function() {
    authModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    if (e.target === authModal) {
        authModal.style.display = 'none';
    }
});

// Tab switching functionality
tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        const tab = this.getAttribute('data-tab');
        
        // Update active tab button
        tabButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Show corresponding form
        if (tab === 'login') {
            loginForm.classList.add('active');
            signupForm.classList.remove('active');
        } else {
            loginForm.classList.remove('active');
            signupForm.classList.add('active');
        }
    });
});

// Switch between login and signup forms
switchToSignup.addEventListener('click', function(e) {
    e.preventDefault();
    tabButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector('[data-tab="signup"]').classList.add('active');
    loginForm.classList.remove('active');
    signupForm.classList.add('active');
});

switchToLogin.addEventListener('click', function(e) {
    e.preventDefault();
    tabButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector('[data-tab="login"]').classList.add('active');
    signupForm.classList.remove('active');
    loginForm.classList.add('active');
});

// Form submission handlers
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // In a real application, you would handle authentication here
    alert('Login functionality will be implemented soon!');
    authModal.style.display = 'none';
});

signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // In a real application, you would handle registration here
    alert('Sign up functionality will be implemented soon!');
    authModal.style.display = 'none';
});