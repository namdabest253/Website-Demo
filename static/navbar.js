// Announcement Banner
function loadAnnouncementBanner() {
    // Check if banner was previously closed in this session
    if (sessionStorage.getItem('announcementBannerClosed') === 'true') {
        return;
    }
    
    // Detect if we're on the root index page or in templates folder
    const isRootPage = window.location.pathname === '/' || window.location.pathname.endsWith('/index.html') || !window.location.pathname.includes('/templates/');
    const imagePrefix = isRootPage ? 'images/' : '../images/';
    
    const bannerHTML = `
        <div class="announcement-banner" id="announcementBanner">
            <div class="announcement-content">
                <span class="announcement-text">
                    <a href="${imagePrefix}DRIVING FORWARD 2025 Program Review.pdf" target="_blank" rel="noopener noreferrer">See Our 2025 Program Review</a>
                </span>
                <button class="announcement-close" onclick="closeAnnouncementBanner()" aria-label="Close announcement">
                    ✕
                </button>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', bannerHTML);
    document.body.classList.add('has-announcement-banner');
}

function closeAnnouncementBanner() {
    const banner = document.getElementById('announcementBanner');
    if (banner) {
        banner.style.animation = 'slideUp 0.3s ease-out forwards';
        setTimeout(() => {
            banner.remove();
            document.body.classList.remove('has-announcement-banner');
        }, 300);
        sessionStorage.setItem('announcementBannerClosed', 'true');
    }
}

// Shared Navbar and Footer HTML
function loadNavbar() {
    // Detect if we're on the root index page or in templates folder
    const isRootPage = window.location.pathname === '/' || window.location.pathname.endsWith('/index.html') || !window.location.pathname.includes('/templates/');
    
    // Set appropriate path prefixes
    const templatePrefix = isRootPage ? 'templates/' : '';
    const imagePrefix = isRootPage ? 'images/' : '../images/';
    const indexLink = isRootPage ? 'index.html' : '../index.html';
    
    const navbarHTML = `
        <header class="header">
            <div class="container">
                <nav class="nav">
                    <div class="logo">
                        <img src="${imagePrefix}TransparentColorLogo.png" alt="Driving Forward Logo">
                    </div>
                    <ul class="nav-menu">
                        <li class="nav-item">
                            <span class="nav-header">Our Programs <span class="dropdown-arrow">▼</span></span>
                            <div class="dropdown-menu">
                                <a href="${templatePrefix}flagship.html">Flagship Program</a>
                                <a href="${templatePrefix}resource.html">Resource Center</a>
                                <a href="${templatePrefix}resource.html#personalized-toolkit">Personalized University Toolkit</a>
                                <a href="${templatePrefix}recruiting.html">Recruiting</a>
                                <a href="${templatePrefix}events.html">Events</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <span class="nav-header">Get Involved <span class="dropdown-arrow">▼</span></span>
                            <div class="dropdown-menu">
                                <a href="${templatePrefix}volunteer.html">Become a Volunteer</a>
                                <a href="${templatePrefix}sponsor.html">Project Sponsor</a>
                                <a href="${templatePrefix}donate.html">Donate</a>
                            </div>
                        </li>
                        <li><a href="${templatePrefix}toolkit.html">Toolkit</a></li>
                        <li class="nav-item">
                            <span class="nav-header">About Us <span class="dropdown-arrow">▼</span></span>
                            <div class="dropdown-menu">
                                <a href="${templatePrefix}news.html">News</a>
                                <a href="${templatePrefix}story.html">Our Story</a>
                                <a href="${templatePrefix}team.html">Our Team</a>
                                <a href="${templatePrefix}sponsors.html">Sponsors</a>
                                <a href="${templatePrefix}contact.html">Contact Us</a>
                            </div>
                        </li>
                        <li><a href="${templatePrefix}donate.html">Donate</a></li>
                    </ul>
                    <a href="${templatePrefix}apply.html" class="cta-button">Apply Now</a>
                </nav>
            </div>
        </header>
    `;
    
    // Insert navbar at the beginning of body
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
}

function loadFooter() {
    // Use same detection logic as navbar
    const isRootPage = window.location.pathname === '/' || window.location.pathname.endsWith('/index.html') || !window.location.pathname.includes('/templates/');
    const templatePrefix = isRootPage ? 'templates/' : '';
    const indexLink = isRootPage ? 'index.html' : '../index.html';
    
    const footerHTML = `
        <footer class="footer">
            <div class="container">
                <div class="footer-content">
                    <div class="footer-section">
                        <h4>Programs</h4>
                        <ul>
                            <li><a href="${templatePrefix}flagship.html">Flagship Program</a></li>
                            <li><a href="${templatePrefix}resource.html">Resource Center</a></li>
                            <li><a href="${templatePrefix}recruiting.html">Recruiting</a></li>
                            <li><a href="${templatePrefix}school.html">Your School</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-section">
                        <h4>Get Involved</h4>
                        <ul>
                            <li><a href="${templatePrefix}volunteer.html">Volunteer</a></li>
                            <li><a href="${templatePrefix}donate.html">Donate</a></li>
                            <li><a href="${templatePrefix}sponsor.html">Corporate Sponsors</a></li>
                            <li><a href="${indexLink}#partnership">University Partners</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-section">
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="${templatePrefix}apply.html">Student Applications</a></li>
                            <li><a href="${templatePrefix}events.html">Upcoming Events</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-section">
                        <h4>About</h4>
                        <ul>
                            <li><a href="${templatePrefix}about.html#mission">Our Mission</a></li>
                            <li><a href="${templatePrefix}about.html#team">Board Members</a></li>
                            <li><a href="${templatePrefix}about.html#impact">Impact Reports</a></li>
                            <li><a href="${templatePrefix}about.html#contact">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <p>&copy; Driving Forward Institute NFP Inc. - Copyright 2021</p>
                </div>
            </div>
        </footer>
    `;
    
    // Insert footer at the end of body
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

// Shared JavaScript functionality
function initializeSharedFunctionality() {
    // Enhanced animations and interactions
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards and sections for animation
    document.querySelectorAll('.program-card, .user-card, .stat-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
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

    // Newsletter form handling
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('.newsletter-input').value;
            alert('Thank you for subscribing! We\'ll keep you updated on our programs and impact.');
            this.reset();
        });
    }

    // Header background effect on scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (header) {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = 'none';
            }
        }
    });

    // Get Involved Page - Volunteer Button Switching
    const volunteerButtons = document.querySelectorAll('.volunteer-btn');
    const volunteerInfos = document.querySelectorAll('.volunteer-info');
    
    if (volunteerButtons.length > 0) {
        volunteerButtons.forEach(button => {
            button.addEventListener('click', function() {
                const targetVolunteer = this.getAttribute('data-volunteer');
                
                // Remove active class from all buttons
                volunteerButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Hide all volunteer info sections
                volunteerInfos.forEach(info => {
                    info.classList.remove('active');
                });
                
                // Show target volunteer info with fade effect
                const targetInfo = document.getElementById(targetVolunteer + '-info');
                if (targetInfo) {
                    setTimeout(() => {
                        targetInfo.classList.add('active');
                    }, 100);
                }
            });
        });
    }
    
    // FAQ Collapsible functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                const faqItem = this.parentElement;
                const isActive = faqItem.classList.contains('active');
                
                // Close all FAQ items
                document.querySelectorAll('.faq-item').forEach(item => {
                    item.classList.remove('active');
                });
                
                // If this item wasn't active, open it
                if (!isActive) {
                    faqItem.classList.add('active');
                }
            });
        });
    }
}

// Hero carousel functionality (only for main page)
function initializeHeroCarousel() {
    const heroCarouselSlides = document.querySelectorAll('.hero-carousel-slide');
    const heroCarouselDots = document.querySelectorAll('.hero-carousel-dot');
    
    if (heroCarouselSlides.length === 0) return; // Exit if no carousel found
    
    // Create a carousel class to encapsulate all functionality
    class HeroCarousel {
        constructor(slides, dots) {
            this.slides = slides;
            this.dots = dots;
            this.currentSlide = 0;
            this.totalSlides = slides.length;
            this.autoInterval = null;
            this.isPlaying = false;
            this.lastInteraction = 0; // Track when user last interacted
            
            this.init();
        }
        
        init() {
            // Set up initial state
            this.showSlide(0);
            this.setupEventListeners();
            this.start();
        }
        
        showSlide(index) {
            // Update current slide
            this.currentSlide = index;
            
            // Update slides
            this.slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
            
            // Update dots
            this.dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }
        
        nextSlide() {
            const nextIndex = (this.currentSlide + 1) % this.totalSlides;
            this.showSlide(nextIndex);
        }
        
        goToSlide(index) {
            this.showSlide(index);
        }
        
        start() {
            if (this.isPlaying) return; // Already playing
            
            this.isPlaying = true;
            this.autoInterval = setInterval(() => {
                // Only auto-advance if user hasn't interacted recently
                const timeSinceInteraction = Date.now() - this.lastInteraction;
                if (timeSinceInteraction > 500) { // 500ms buffer
                    this.nextSlide();
                }
            }, 4000);
        }
        
        stop() {
            if (!this.isPlaying) return; // Already stopped
            
            this.isPlaying = false;
            if (this.autoInterval) {
                clearInterval(this.autoInterval);
                this.autoInterval = null;
            }
        }
        
        restart() {
            this.stop();
            // Small delay to ensure clean restart
            setTimeout(() => this.start(), 50);
        }
        
        handleUserInteraction() {
            this.lastInteraction = Date.now();
            this.restart();
        }
        
        setupEventListeners() {
            // Dot click handlers
            this.dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    this.goToSlide(index);
                    this.handleUserInteraction();
                });
            });
            
            // Hover handlers
            const carousel = document.querySelector('.hero-carousel');
            if (carousel) {
                carousel.addEventListener('mouseenter', () => {
                    this.stop();
                });
                
                carousel.addEventListener('mouseleave', () => {
                    this.handleUserInteraction();
                });
            }
        }
        
        destroy() {
            this.stop();
            // Remove event listeners if needed
        }
    }
    
    // Create and initialize the carousel
    const carousel = new HeroCarousel(heroCarouselSlides, heroCarouselDots);
    
    // Store reference for potential cleanup
    window.heroCarouselInstance = carousel;
}

// LinkedIn posts carousel functionality (for news page)
function initializeLinkedInCarousel() {
    const linkedinPosts = document.querySelectorAll('.linkedin-post');
    const carouselDots = document.querySelectorAll('.carousel-dot');
    const prevBtn = document.getElementById('prev-post');
    const nextBtn = document.getElementById('next-post');
    
    if (linkedinPosts.length === 0) return; // Exit if no carousel found
    
    let currentPost = 0;
    const totalPosts = linkedinPosts.length;

    function showPost(postIndex) {
        // Clear all position classes
        linkedinPosts.forEach(post => {
            post.classList.remove('active', 'prev', 'next', 'hidden');
        });
        
        // Set positions for 3D effect
        linkedinPosts.forEach((post, index) => {
            if (index === postIndex) {
                post.classList.add('active');
            } else if (index === (postIndex - 1 + totalPosts) % totalPosts) {
                post.classList.add('prev');
            } else if (index === (postIndex + 1) % totalPosts) {
                post.classList.add('next');
            } else {
                post.classList.add('hidden');
            }
        });
        
        // Update dots
        carouselDots.forEach(dot => dot.classList.remove('active'));
        carouselDots[postIndex].classList.add('active');
        
        currentPost = postIndex;
    }

    function nextPost() {
        currentPost = (currentPost + 1) % totalPosts;
        showPost(currentPost);
    }

    function prevPost() {
        currentPost = (currentPost - 1 + totalPosts) % totalPosts;
        showPost(currentPost);
    }

    // Navigation button handlers
    if (nextBtn) nextBtn.addEventListener('click', nextPost);
    if (prevBtn) prevBtn.addEventListener('click', prevPost);

    // Dot navigation handlers
    carouselDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showPost(index);
        });
    });

    // Initialize the carousel with proper 3D positioning
    showPost(0);

    // Auto-advance carousel every 6 seconds
    let linkedinCarouselInterval = setInterval(nextPost, 6000);

    // Pause auto-advance on hover
    const linkedinCarousel = document.querySelector('.linkedin-carousel');
    if (linkedinCarousel) {
        linkedinCarousel.addEventListener('mouseenter', () => {
            clearInterval(linkedinCarouselInterval);
        });

        linkedinCarousel.addEventListener('mouseleave', () => {
            linkedinCarouselInterval = setInterval(nextPost, 6000);
        });
    }
}

// Make logo clickable to redirect to home
function makeLogoClickable() {
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.style.cursor = 'pointer';
        logo.addEventListener('click', function() {
            // Use same detection logic for correct path
            const isRootPage = window.location.pathname === '/' || window.location.pathname.endsWith('/index.html') || !window.location.pathname.includes('/templates/');
            const indexLink = isRootPage ? 'index.html' : '../index.html';
            window.location.href = indexLink;
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load announcement banner first
    loadAnnouncementBanner();
    
    // Load shared components
    loadNavbar();
    loadFooter();
    
    // Initialize shared functionality
    initializeSharedFunctionality();
    
    // Initialize hero carousel (only if present)
    initializeHeroCarousel();
    
    // Initialize LinkedIn carousel (only if present)
    initializeLinkedInCarousel();
    
    // Initialize testimonial carousels (only if present)
    initializeTestimonialCarousels();
    initializeSocialCarousel();
    
    // Make logo clickable after navbar is loaded
    setTimeout(makeLogoClickable, 100);
});

// Testimonial Carousel Functionality
function initializeTestimonialCarousels() {
    const carousels = document.querySelectorAll('.testimonial-carousel');
    
    carousels.forEach(carousel => {
        const slides = carousel.querySelectorAll('.testimonial-slide');
        if (slides.length <= 1) return;
        
        let currentSlide = 0;
        let carouselInterval;
        // Find or create dots container
        let dotsContainer = carousel.nextElementSibling;
        if (!dotsContainer || !dotsContainer.classList.contains('carousel-dots')) {
            dotsContainer = document.createElement('div');
            dotsContainer.className = 'carousel-dots';
            carousel.parentNode.appendChild(dotsContainer);
        }
        dotsContainer.innerHTML = '';
        const dots = [];
        for (let i = 0; i < slides.length; i++) {
            const dot = document.createElement('span');
            dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
            dot.addEventListener('click', () => {
                currentSlide = i;
                showSlide(currentSlide);
                resetCarousel();
            });
            dotsContainer.appendChild(dot);
            dots.push(dot);
        }
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('active', 'prev');
                if (i === index) {
                    slide.classList.add('active');
                } else if (i === (index - 1 + slides.length) % slides.length) {
                    slide.classList.add('prev');
                }
            });
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }
        function startCarousel() {
            carouselInterval = setInterval(nextSlide, 4000);
        }
        function stopCarousel() {
            clearInterval(carouselInterval);
        }
        function resetCarousel() {
            stopCarousel();
            startCarousel();
        }
        // Initialize first slide
        showSlide(0);
        // Start auto-rotation
        startCarousel();
        // Pause on hover
        carousel.addEventListener('mouseenter', stopCarousel);
        carousel.addEventListener('mouseleave', startCarousel);
        // Handle visibility change to pause when tab is not active
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                stopCarousel();
            } else {
                startCarousel();
            }
        });
    });
} 

// Social Media Carousel functionality
function initializeSocialCarousel() {
    const socialPosts = document.querySelectorAll('.social-post');
    const socialDots = document.querySelectorAll('.social-carousel-nav .carousel-dot');
    let currentSlide = 0;
    let autoSlideInterval;

    if (socialPosts.length === 0) return;

    function showSlide(index) {
        // Hide all posts
        socialPosts.forEach(post => post.classList.remove('active'));
        socialDots.forEach(dot => dot.classList.remove('active'));

        // Show selected post
        socialPosts[index].classList.add('active');
        socialDots[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        const nextIndex = (currentSlide + 1) % socialPosts.length;
        showSlide(nextIndex);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000); // 5 seconds
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Handle dot clicks
    socialDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            stopAutoSlide();
            setTimeout(startAutoSlide, 10000); // Resume after 10 seconds
        });
    });

    // Handle hover pause
    const socialCarousel = document.querySelector('.social-carousel');
    if (socialCarousel) {
        socialCarousel.addEventListener('mouseenter', stopAutoSlide);
        socialCarousel.addEventListener('mouseleave', startAutoSlide);
    }

    // Handle visibility change
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            stopAutoSlide();
        } else {
            startAutoSlide();
        }
    });

    // Initialize
    showSlide(0);
    startAutoSlide();
} 