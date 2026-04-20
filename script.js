document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close mobile menu when clicking a link
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Form submission simulation
    const contactForm = document.getElementById('form-contacto');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Mensaje Enviado';
                submitBtn.style.backgroundColor = '#1FA39A';
                contactForm.reset();
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.backgroundColor = '';
                    submitBtn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }

    // Servicios Interactivos - Image Switcher & Modal
    const listItems = document.querySelectorAll('.benefit-list-item');
    const imageElement = document.getElementById('benefit-img');
    const modal = document.getElementById('service-modal');
    const modalClose = document.querySelector('.modal-close');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalIcon = document.querySelector('.modal-icon i');

    let autoSwitchInterval;
    let currentIndex = 0;
    let isModalOpen = false;

    if(listItems.length > 0 && imageElement) {
        const updateSelection = (index) => {
            listItems.forEach(i => i.classList.remove('active'));
            listItems[index].classList.add('active');
            
            imageElement.style.opacity = 0.3;
            imageElement.style.transform = 'scale(0.95)';
            setTimeout(() => {
                const newImg = listItems[index].getAttribute('data-img');
                imageElement.src = newImg;
                if (newImg.includes('logo')) {
                    imageElement.classList.add('logo-mode');
                } else {
                    imageElement.classList.remove('logo-mode');
                }
                imageElement.style.opacity = 1;
                imageElement.style.transform = 'scale(1)';
            }, 300);
            
            currentIndex = index;
        };

        const openModal = (item) => {
            isModalOpen = true;
            clearInterval(autoSwitchInterval);
            
            // Llenar datos del modal
            modalTitle.textContent = item.getAttribute('data-title');
            modalDesc.textContent = item.getAttribute('data-desc');
            
            // Copiar icono
            const iconClass = item.querySelector('.benefit-check i').className;
            modalIcon.className = iconClass;
            
            // Mostrar modal
            modal.classList.add('active');
        };

        const closeModal = () => {
            isModalOpen = false;
            modal.classList.remove('active');
            startAutoSwitch();
        };

        listItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                clearInterval(autoSwitchInterval);
                updateSelection(index);
                openModal(item);
            });
        });

        if(modalClose) {
            modalClose.addEventListener('click', closeModal);
        }

        // Cerrar modal al hacer clic fuera de la tarjeta
        if(modal) {
            modal.addEventListener('click', (e) => {
                if(e.target === modal) {
                    closeModal();
                }
            });
        }

        const startAutoSwitch = () => {
            clearInterval(autoSwitchInterval);
            autoSwitchInterval = setInterval(() => {
                if(!isModalOpen) {
                    let nextIndex = (currentIndex + 1) % listItems.length;
                    updateSelection(nextIndex);
                }
            }, 4500); // 4.5 seconds
        };

        startAutoSwitch();
    }

    // Scroll Animations (Intersection Observer)
    const scrollElements = document.querySelectorAll('.scroll-animate');
    
    const elementInView = (el, percentageScroll = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('show');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 90)) {
                displayScrollElement(el);
            }
        })
    }

    // Initialize Intersection Observer for better performance
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        scrollElements.forEach(el => {
            observer.observe(el);
        });
    } else {
        // Fallback for older browsers
        window.addEventListener('scroll', () => {
            handleScrollAnimation();
        });
        handleScrollAnimation();
    }
});
