// JS Scripts

document.addEventListener('DOMContentLoaded', () => {

    // Preloader
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 1500); // Minimum load time for effect
    });

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up, .reveal');
    animatedElements.forEach(el => observer.observe(el));

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.05)";
            navbar.style.padding = "15px 0";
        } else {
            navbar.style.boxShadow = "none";
            navbar.style.padding = "20px 0";
        }
    });

    // Gallery Modal Steps
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalYear = document.getElementById('modalYear');
    const modalDesc = document.getElementById('modalDesc');
    // Create element for Art Form if it doesn't exist in HTML structure yet, or append to year/desc

    const closeBtn = document.getElementsByClassName('close')[0];

    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            const form = item.getAttribute('data-form');

            modal.style.display = "block";
            modalImg.src = img.src;
            modalImg.style.display = 'block';
            modalImg.style.backgroundColor = 'transparent';

            modalTitle.innerText = item.getAttribute('data-title');
            // Display Year and Art Form together
            modalYear.innerHTML = `${item.getAttribute('data-year')} <span style="margin: 0 10px; color: #ccc;">|</span> ${form}`;
            modalDesc.innerText = item.getAttribute('data-desc');
        });
    });

    closeBtn.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Contact Form Submission (Mock)
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerText;

        btn.innerText = 'Sending...';
        btn.style.background = '#8D7B68'; // Darker shade

        setTimeout(() => {
            btn.innerText = 'Message Sent!';
            btn.style.background = '#81C784'; // Success green (soft)
            contactForm.reset();

            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.background = ''; // Reset to CSS default
            }, 3000);
        }, 1500);
    });
});
