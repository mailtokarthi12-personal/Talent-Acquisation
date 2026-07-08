/* ============================================
   Odoo Custom Furniture Production GTM Website
   Interactive Charts & Animations
   ============================================ */

// Initialize Charts
document.addEventListener('DOMContentLoaded', function() {
    initMarketChart();
    initBenefitsChart();
    initROIChart();
});

// Market Growth Chart
function initMarketChart() {
    const ctx = document.getElementById('marketChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032', '2033', '2034'],
            datasets: [
                {
                    label: 'Custom Furniture Market Size (Billions USD)',
                    data: [38.5, 41.5, 44.3, 49.8, 56.0, 63.0, 70.8, 79.6, 89.4, 100.2, 110.1],
                    borderColor: '#0ea5e9',
                    backgroundColor: 'rgba(14, 165, 233, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 6,
                    pointBackgroundColor: '#0ea5e9',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointHoverRadius: 8,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        font: { size: 14, weight: 'bold' },
                        color: '#1e293b',
                        padding: 20
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        font: { size: 12 },
                        color: '#64748b',
                        callback: function(value) {
                            return '$' + value + 'B';
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    ticks: {
                        font: { size: 12 },
                        color: '#64748b'
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Business Benefits Chart
function initBenefitsChart() {
    const ctx = document.getElementById('benefitsChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: [
                'Quote Turnaround',
                'Production Planning',
                'Inventory Costs',
                'Material Waste',
                'Gross Margins',
                'On-Time Delivery',
                'Resource Utilization',
                'Customer Satisfaction'
            ],
            datasets: [
                {
                    label: 'Improvement %',
                    data: [35, 30, 25, 20, 20, 30, 25, 45],
                    borderColor: '#0ea5e9',
                    backgroundColor: 'rgba(14, 165, 233, 0.2)',
                    borderWidth: 2,
                    pointRadius: 5,
                    pointBackgroundColor: '#0ea5e9',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        font: { size: 14, weight: 'bold' },
                        color: '#1e293b'
                    }
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 50,
                    ticks: {
                        font: { size: 11 },
                        color: '#64748b',
                        callback: function(value) {
                            return value + '%';
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                }
            }
        }
    });
}

// ROI Analysis Chart
function initROIChart() {
    const ctx = document.getElementById('roiChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Cost Savings', 'Productivity Gains', 'Revenue Growth', 'Profitability Improvement'],
            datasets: [
                {
                    data: [300, 225, 375, 175],
                    backgroundColor: [
                        '#0ea5e9',
                        '#f59e0b',
                        '#10b981',
                        '#8b5cf6'
                    ],
                    borderColor: '#fff',
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        font: { size: 13, weight: '600' },
                        color: '#1e293b',
                        padding: 20,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(1);
                            return label + ': $' + value + 'K (' + percentage + '%)';
                        }
                    }
                }
            }
        }
    });
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Navbar Background on Scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Button Click Handlers
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        // Add ripple effect
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add CSS Animation for Ripple Effect
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Counter Animation for KPI Cards
function animateCounters() {
    const cards = document.querySelectorAll('.kpi-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target;
                const valueElement = card.querySelector('.kpi-value');
                const finalValue = valueElement.textContent;
                
                // Only animate if it contains a number
                if (/\d/.test(finalValue)) {
                    animateValue(valueElement, finalValue);
                }
                
                observer.unobserve(card);
            }
        });
    }, { threshold: 0.5 });
    
    cards.forEach(card => observer.observe(card));
}

function animateValue(element, finalValue) {
    // Extract number from finalValue
    const numberMatch = finalValue.match(/[\d.]+/);
    if (!numberMatch) return;
    
    const finalNumber = parseFloat(numberMatch[0]);
    const suffix = finalValue.replace(numberMatch[0], '');
    const startValue = 0;
    const duration = 2000;
    const startTime = Date.now();
    
    function update() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentValue = Math.floor(startValue + (finalNumber - startValue) * progress);
        element.textContent = currentValue + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    update();
}

// Initialize Counter Animation
window.addEventListener('load', animateCounters);

// Intersection Observer for Fade-in Effects
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('[data-aos]').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
});

// Lazy Load Images
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        }
    });
});

document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

// Mobile Menu Toggle (if needed in future)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

// Scroll to Top Button
function createScrollToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        background: #0ea5e9;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.5rem;
        display: none;
        z-index: 999;
        transition: all 0.3s ease;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    `;
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.style.display = 'flex';
            button.style.alignItems = 'center';
            button.style.justifyContent = 'center';
        } else {
            button.style.display = 'none';
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    button.addEventListener('mouseover', () => {
        button.style.background = '#f59e0b';
        button.style.transform = 'scale(1.1)';
    });
    
    button.addEventListener('mouseout', () => {
        button.style.background = '#0ea5e9';
        button.style.transform = 'scale(1)';
    });
}

// Initialize Scroll to Top Button
window.addEventListener('load', createScrollToTopButton);

// Form Submission Handler (for future CTA buttons)
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your interest! We will contact you soon.');
        this.reset();
    });
});

// Log Page Performance
window.addEventListener('load', () => {
    if (window.performance && window.performance.timing) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Page Load Time: ' + pageLoadTime + 'ms');
    }
});

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close any open modals if implemented
        console.log('Escape key pressed');
    }
});

// Print Friendly Styles
window.addEventListener('beforeprint', () => {
    document.body.style.backgroundColor = 'white';
});

// Prevent Accidental Navigation
let unsavedChanges = false;
window.addEventListener('beforeunload', (e) => {
    if (unsavedChanges) {
        e.preventDefault();
        e.returnValue = '';
    }
});

console.log('Odoo CFP GTM Website - Interactive Features Loaded');
