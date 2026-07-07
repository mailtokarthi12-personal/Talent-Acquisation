/* ===================================
   ODOO TALENT ACQUISITION GTM WEBSITE
   Interactive Visualizations & Scripts
   =================================== */

// Initialize Charts
document.addEventListener('DOMContentLoaded', function() {
    initializeCharts();
    setupScrollAnimations();
    setupInteractiveElements();
});

// Chart Configuration
function initializeCharts() {
    // Market Chart
    const marketCtx = document.getElementById('marketChart');
    if (marketCtx) {
        new Chart(marketCtx, {
            type: 'bar',
            data: {
                labels: ['2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032', '2033', '2034'],
                datasets: [{
                    label: 'Market Size (Billions USD)',
                    data: [159, 169, 180, 192, 205, 220, 235, 252, 270, 281, 290],
                    backgroundColor: [
                        'rgba(124, 58, 237, 0.8)',
                        'rgba(124, 58, 237, 0.8)',
                        'rgba(124, 58, 237, 0.8)',
                        'rgba(124, 58, 237, 0.8)',
                        'rgba(124, 58, 237, 0.8)',
                        'rgba(124, 58, 237, 0.8)',
                        'rgba(124, 58, 237, 0.8)',
                        'rgba(124, 58, 237, 0.8)',
                        'rgba(124, 58, 237, 0.8)',
                        'rgba(124, 58, 237, 0.8)',
                        'rgba(124, 58, 237, 0.8)'
                    ],
                    borderColor: 'rgba(124, 58, 237, 1)',
                    borderWidth: 1,
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: 'Talent Acquisition & Staffing Tech Market Growth',
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Market Size (Billions USD)'
                        }
                    }
                }
            }
        });
    }

    // Benefits Chart
    const benefitsCtx = document.getElementById('benefitsChart');
    if (benefitsCtx) {
        new Chart(benefitsCtx, {
            type: 'radar',
            data: {
                labels: [
                    'Productivity',
                    'Speed',
                    'Cost Savings',
                    'Experience',
                    'Integration',
                    'Analytics',
                    'Collaboration',
                    'Scalability'
                ],
                datasets: [{
                    label: 'Odoo Benefits',
                    data: [90, 85, 95, 80, 100, 88, 85, 95],
                    borderColor: 'rgba(124, 58, 237, 1)',
                    backgroundColor: 'rgba(124, 58, 237, 0.2)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(124, 58, 237, 1)',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 7
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom'
                    },
                    title: {
                        display: true,
                        text: 'Odoo Business Benefits Assessment',
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    }
                },
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            stepSize: 20
                        }
                    }
                }
            }
        });
    }

    // ROI Chart
    const roiCtx = document.getElementById('roiChart');
    if (roiCtx) {
        new Chart(roiCtx, {
            type: 'doughnut',
            data: {
                labels: [
                    'Cost Savings',
                    'Productivity Gains',
                    'Revenue Growth',
                    'Risk Mitigation'
                ],
                datasets: [{
                    data: [100, 200, 350, 150],
                    backgroundColor: [
                        'rgba(124, 58, 237, 0.8)',
                        'rgba(6, 182, 212, 0.8)',
                        'rgba(34, 197, 94, 0.8)',
                        'rgba(249, 115, 22, 0.8)'
                    ],
                    borderColor: [
                        'rgba(124, 58, 237, 1)',
                        'rgba(6, 182, 212, 1)',
                        'rgba(34, 197, 94, 1)',
                        'rgba(249, 115, 22, 1)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom'
                    },
                    title: {
                        display: true,
                        text: 'ROI Breakdown: First Year Impact (Thousands USD)',
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.label + ': $' + context.parsed + 'K';
                            }
                        }
                    }
                }
            }
        });
    }
}

// Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with data-aos attribute
    document.querySelectorAll('[data-aos]').forEach(el => {
        observer.observe(el);
    });
}

// Interactive Elements
function setupInteractiveElements() {
    // Smooth scroll for navigation links
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

    // Add hover effects to cards
    document.querySelectorAll('.kpi-card, .pain-point-card, .solution-card, .benefit-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Button click handlers
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Add ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Expandable sections
    document.querySelectorAll('.pitch-section').forEach(section => {
        const header = section.querySelector('h3');
        if (header) {
            header.style.cursor = 'pointer';
            header.addEventListener('click', function() {
                section.classList.toggle('expanded');
            });
        }
    });
}

// Counter Animation for KPI Cards
function animateCounters() {
    const counters = document.querySelectorAll('.kpi-value');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        if (!isNaN(target)) {
            let current = 0;
            const increment = target / 50;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            
            updateCounter();
        }
    });
}

// Navbar Sticky Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// Mobile Menu Toggle (if needed)
function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
}

// Print Functionality
function setupPrintFunctionality() {
    document.querySelectorAll('[data-print]').forEach(el => {
        el.addEventListener('click', function() {
            window.print();
        });
    });
}

// Analytics Tracking (Optional)
function trackEvent(eventName, eventData) {
    if (window.gtag) {
        gtag('event', eventName, eventData);
    }
}

// Export Data (Optional)
function exportToCSV() {
    const data = [
        ['Metric', 'Value'],
        ['Market Size 2024', '$159B'],
        ['Market Size 2034', '$290B'],
        ['CAGR', '6.2%'],
        ['Recruiter Productivity Gain', '40%'],
        ['Time-to-Hire Reduction', '30%'],
        ['Cost Savings', '40-50%'],
        ['Candidate Satisfaction Increase', '25%'],
        ['First Year ROI', '250-400%']
    ];

    let csv = data.map(row => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'odoo-ta-gtm-metrics.csv';
    a.click();
    window.URL.revokeObjectURL(url);
}

// Initialize on page load
window.addEventListener('load', function() {
    animateCounters();
    setupMobileMenu();
    setupPrintFunctionality();
});

// Utility: Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Utility: Throttle function for performance
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Performance: Lazy load images
function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Initialize lazy loading
setupLazyLoading();

// Accessibility: Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close any open modals or expanded sections
        document.querySelectorAll('.expanded').forEach(el => {
            el.classList.remove('expanded');
        });
    }
});

// Console message for developers
console.log('%cOdoo Talent Acquisition Go-to-Market Strategy', 'font-size: 20px; font-weight: bold; color: #7c3aed;');
console.log('%cPremium Consulting-Grade Website', 'font-size: 14px; color: #06b6d4;');
console.log('%cBuilt with HTML5, CSS3, and JavaScript ES6+', 'font-size: 12px; color: #6b7280;');
