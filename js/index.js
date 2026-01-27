        // Smooth Scroll
        function scrollToSection(sectionId) {
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        }

        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const sectionId = this.getAttribute('href').substring(1);
                scrollToSection(sectionId);
            });
        });

        // Animated Counters
        function animateCounter(id, target, duration) {
            const element = document.getElementById(id);
            let current = 0;
            const increment = target / (duration / 16);
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    element.textContent = target;
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(current);
                }
            }, 16);
        }

        // Observer for counter animation
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter('races-counter', 24, 2000);
                    animateCounter('countries-counter', 21, 2000);
                    animateCounter('laps-counter', 1547, 2500);
                    statsObserver.disconnect();
                }
            });
        });

        statsObserver.observe(document.getElementById('estadisticas'));

        // Contact Form
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Mensaje enviado con éxito. Te contactaremos pronto.');
            this.reset();
        });

        // Card click animation
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('click', function() {
                this.style.transform = 'scale(1.05) translateY(-10px)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 300);
            });
        });

        // Active nav link on scroll
        window.addEventListener('scroll', () => {
            let current = '';
            document.querySelectorAll('section').forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            document.querySelectorAll('nav a').forEach(link => {
                link.style.color = '';
                if (link.getAttribute('href').substring(1) === current) {
                    link.style.color = 'var(--white)';
                }
            });
        });
