/**
 * Contenido rico de cada modal de servicio (6 ítems, orden fijo en el DOM).
 * Textos corporativos reales — Alianzas Valderrama S.A.S.
 */
const SERVICE_MODAL_RICH_HTML = [
    // 0 — Contabilidad Integral
    `
<div class="modal-svc-leadbox" role="region" aria-label="Mensaje estratégico">
    <p class="modal-svc-lead-p modal-svc-lead-p--open">Transformamos sus operaciones diarias en información financiera estructurada bajo estándares técnicos, garantizando un control total de sus recursos y una base sólida para la toma de decisiones gerenciales.</p>
    <p class="modal-svc-lead-p">Una contabilidad disciplinada es el mapa de su negocio: habilita cierres confiables, decisiones oportunas y una posición defendible frente a socios, bancos y entes de control.</p>
</div>
<div class="modal-svc-includes">
    <p class="modal-svc-includes-title">Incluye</p>
    <ul class="modal-svc-includes-list">
        <li>Registro y clasificación de operaciones bajo NIIF y estándares locales</li>
        <li>Elaboración de estados financieros con notas revelatorias</li>
        <li>Conciliaciones bancarias y depuración de cuentas</li>
        <li>Cierre contable mensual, trimestral y anual</li>
        <li>Control de activos fijos y depreciaciones</li>
    </ul>
</div>`.trim(),
    // 1 — Gestión Tributaria
    `
<div class="modal-svc-leadbox" role="region" aria-label="Mensaje estratégico">
    <p class="modal-svc-lead-p modal-svc-lead-p--open">Maximizamos la eficiencia fiscal de su organización mediante una planeación estratégica que asegura el cumplimiento oportuno de las obligaciones, mitigando riesgos y optimizando el flujo de caja.</p>
    <p class="modal-svc-lead-p">Documentar, liquidar y presentar en plazo reduce exposición a sanciones, optimiza la carga legal y libera a la dirección de improvisaciones fiscales de alto costo.</p>
</div>
<div class="modal-svc-includes">
    <p class="modal-svc-includes-title">Incluye</p>
    <ul class="modal-svc-includes-list">
        <li>Declaraciones de impuestos (IVA, Renta, ICA, Retenciones)</li>
        <li>Planeación tributaria y optimización fiscal legal</li>
        <li>Calendario tributario personalizado y alertas de vencimientos</li>
        <li>Información exógena y medios magnéticos</li>
        <li>Actualización normativa permanente</li>
    </ul>
</div>`.trim(),
    // 2 — Consultoría Estratégica Financiera
    `
<div class="modal-svc-leadbox" role="region" aria-label="Mensaje estratégico">
    <p class="modal-svc-lead-p modal-svc-lead-p--open">Analizamos la estructura de capital y rentabilidad de su negocio para diseñar hojas de ruta que impulsen el crecimiento sostenible, la inversión inteligente y la estabilidad a largo plazo.</p>
    <p class="modal-svc-lead-p">KPIs, proyecciones y escenarios vinculados a su visión conectan números con decisiones estratégicas: fortalecen la confianza con bancos, socios e inversionistas.</p>
</div>
<div class="modal-svc-includes">
    <p class="modal-svc-includes-title">Incluye</p>
    <ul class="modal-svc-includes-list">
        <li>Análisis financiero integral y diagnóstico de rentabilidad</li>
        <li>Proyecciones financieras y modelos de presupuesto</li>
        <li>Indicadores de gestión (KPIs) alineados a su estrategia</li>
        <li>Estructuración para acceso a crédito e inversión</li>
        <li>Acompañamiento en toma de decisiones de alto impacto</li>
    </ul>
</div>`.trim(),
    // 3 — Presentación de Informes a Entidades de Control
    `
<div class="modal-svc-leadbox" role="region" aria-label="Mensaje estratégico">
    <p class="modal-svc-lead-p modal-svc-lead-p--open">Aseguramos la transparencia institucional gestionando con precisión el reporte de información exógena, Supersociedades y demás entes reguladores para evitar sanciones y contingencias legales.</p>
    <p class="modal-svc-lead-p">La puntualidad y el formato adecuado de los informes requeridos preserva su buena fe institucional, licencias e imagen corporativa en mercados y sectores regulados.</p>
</div>
<div class="modal-svc-includes">
    <p class="modal-svc-includes-title">Incluye</p>
    <ul class="modal-svc-includes-list">
        <li>Informes financieros ante Supersociedades y Cámara de Comercio</li>
        <li>Reportes SAGRILAFT y PTEE (prevención lavado de activos)</li>
        <li>Información exógena y reportes a la DIAN</li>
        <li>Validación de cumplimiento normativo y regulatorio</li>
        <li>Preparación de evidencia ante auditorías externas</li>
    </ul>
</div>`.trim(),
    // 4 — Atención de Requerimientos y Procesos ante la DIAN
    `
<div class="modal-svc-leadbox" role="region" aria-label="Mensaje estratégico">
    <p class="modal-svc-lead-p modal-svc-lead-p--open">Representamos técnicamente a su empresa en procesos de fiscalización y respuesta a requerimientos, defendiendo sus intereses con argumentos jurídicos y contables sólidos ante la autoridad tributaria.</p>
    <p class="modal-svc-lead-p">La relación con la DIAN no es un trámite colateral: es un frente crítico donde se defienden activos, flujo de caja y crédito fiscal. Una respuesta oportuna y técnicamente sólida reduce la exposición, evita sanciones y protege la continuidad del negocio.</p>
    <p class="modal-svc-lead-p">Nuestro acompañamiento pone a su organización en posición de control, con criterio jurídico-contable y trazabilidad de la información, para que lo vital —liquidez, continuidad y buena fe— no quede a merced de la improvisación.</p>
</div>
<div class="modal-svc-includes">
    <p class="modal-svc-includes-title">Incluye</p>
    <ul class="modal-svc-includes-list">
        <li>Respuesta fundamentada a oficios, requerimientos y exigencias de documentación</li>
        <li>Gestión de procesos de visita, fiscalización y actas de inspección</li>
        <li>Devoluciones, compensaciones y recuperación de saldos a favor</li>
        <li>Estrategia y representación en auditorías y etapas de recurso</li>
    </ul>
</div>`.trim(),
    // 5 — Consultoría Especializada
    `
<div class="modal-svc-leadbox" role="region" aria-label="Mensaje estratégico">
    <p class="modal-svc-lead-p modal-svc-lead-p--open">Brindamos soluciones a medida para retos complejos como fusiones, valoraciones de empresas o auditorías específicas, aportando visión experta donde los procesos estándar no son suficientes.</p>
    <p class="modal-svc-lead-p">Cada brecha o proyecto crítico merece un enfoque diseñado para su etapa de madurez, con ejecución técnica y gobierno de la información alineado a su junta directiva o propietarios.</p>
</div>
<div class="modal-svc-includes">
    <p class="modal-svc-includes-title">Puede incluir</p>
    <ul class="modal-svc-includes-list">
        <li>Valoración de empresas y due diligence financiero</li>
        <li>Asesoría en fusiones, escisiones y reorganizaciones societarias</li>
        <li>Implementación y migración de sistemas contables</li>
        <li>Reestructuración financiera y saneamiento contable</li>
        <li>Diagnóstico empresarial integral y plan de acción</li>
        <li>Asesoría para creación y formalización de empresas</li>
    </ul>
</div>`.trim(),
];

document.addEventListener('DOMContentLoaded', () => {
    // Hero background sequence: video -> image 1 -> image 2
    const heroBg = document.querySelector('.hero-bg');
    const heroBgVideo = document.querySelector('.hero-bg-video');
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (heroBg) {
        const firstImageDurationMs = 2000;
        const videoFallbackMs = 20000;

        const activateHeroStage = (stageClass) => {
            heroBg.classList.remove('is-video', 'is-image-1', 'is-image-2');
            heroBg.classList.add(stageClass);
        };

        if (reduceMotion || !heroBgVideo) {
            activateHeroStage('is-image-2');
        } else {
            const showFirstImage = () => {
                activateHeroStage('is-image-1');
                window.setTimeout(() => {
                    activateHeroStage('is-image-2');
                }, firstImageDurationMs);
            };

            activateHeroStage('is-video');

            const endVideoSequence = () => {
                showFirstImage();
            };

            heroBgVideo.currentTime = 0;
            heroBgVideo.volume = 0;
            heroBgVideo.muted = true;
            heroBgVideo.addEventListener('ended', endVideoSequence, { once: true });
            heroBgVideo.addEventListener('error', endVideoSequence, { once: true });

            const playPromise = heroBgVideo.play();
            if (playPromise && typeof playPromise.catch === 'function') {
                playPromise.catch(() => {
                    endVideoSequence();
                });
            }

            // Fallback in case ended event doesn't trigger in some browsers.
            window.setTimeout(() => {
                if (heroBg.classList.contains('is-video')) {
                    endVideoSequence();
                }
            }, videoFallbackMs);
        }
    }

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    const navOverlay = document.getElementById('nav-overlay');
    const setMenuOpen = (open) => {
        document.body.classList.toggle('nav-open', open);
        if (navOverlay) {
            navOverlay.setAttribute('aria-hidden', open ? 'false' : 'true');
        }
        document.body.style.overflow = open ? 'hidden' : '';
    };

    const closeMenu = () => {
        if (!navLinks || !navLinks.classList.contains('active')) return;
        navLinks.classList.remove('active');
        if (menuToggle) {
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
        setMenuOpen(false);
    };

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            const open = navLinks.classList.contains('active');
            if (open) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
            setMenuOpen(open);
        });
    }

    if (navOverlay) {
        navOverlay.addEventListener('click', closeMenu);
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) closeMenu();
    });

    // Close mobile menu when clicking a link
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                closeMenu();
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
    const modalCta = document.querySelector('.modal-cta');

    let autoSwitchInterval;
    let currentIndex = 0;
    let isModalOpen = false;
    let serviceModalScrollLocked = false;

    const lockServiceModalScroll = () => {
        if (serviceModalScrollLocked) return;
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
        serviceModalScrollLocked = true;
    };

    const unlockServiceModalScroll = () => {
        if (!serviceModalScrollLocked) return;
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        serviceModalScrollLocked = false;
    };

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

        const openModal = (item, index) => {
            if (!modal || !modalTitle || !modalDesc) return;
            isModalOpen = true;
            clearInterval(autoSwitchInterval);
            
            modalTitle.textContent = item.getAttribute('data-title');
            const fromAttr = item.getAttribute('data-desc');
            if (fromAttr && fromAttr.trim()) {
                modalDesc.className = 'modal-desc';
                modalDesc.textContent = fromAttr;
            } else {
                modalDesc.className = 'modal-desc modal-desc--rich';
                modalDesc.innerHTML = SERVICE_MODAL_RICH_HTML[index] || '';
            }
            
            const iconEl = item.querySelector('.benefit-check i');
            if (modalIcon && iconEl) {
                modalIcon.className = iconEl.className;
            }
            
            modal.setAttribute('aria-hidden', 'false');
            lockServiceModalScroll();
            modal.classList.add('active');
            if (modalClose && typeof modalClose.focus === 'function') {
                window.requestAnimationFrame(() => modalClose.focus());
            }
        };

        const closeModal = () => {
            if (!modal) return;
            isModalOpen = false;
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
            unlockServiceModalScroll();
            startAutoSwitch();
        };

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isModalOpen) {
                closeModal();
            }
        });

        if (modalCta) {
            modalCta.addEventListener('click', () => {
                closeModal();
            });
        }

        listItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                clearInterval(autoSwitchInterval);
                updateSelection(index);
                openModal(item, index);
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

/* =========================================
   Objetivos — Contadores animados + SVG draw
   ========================================= */
(function initObjCards() {
    const cards = document.querySelectorAll('.obj-card');
    if (!cards.length) return;

    function animateCounter(el) {
        const target   = parseInt(el.dataset.target, 10);
        const suffix   = el.dataset.suffix || '';
        const duration = 1400;
        const step     = 16;
        const steps    = Math.ceil(duration / step);
        let frame      = 0;
        const timer = setInterval(() => {
            frame++;
            const current = Math.round(target * (frame / steps));
            el.textContent = current + suffix;
            if (frame >= steps) {
                el.textContent = target + suffix;
                clearInterval(timer);
            }
        }, step);
    }

    const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const card = entry.target;
            card.classList.add('show');
            card.querySelectorAll('.obj-counter').forEach(c => animateCounter(c));
            obs.unobserve(card);
        });
    }, { threshold: 0.25 });

    cards.forEach(card => obs.observe(card));
})();
