document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  // Toggle do menu mobile
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation(); // impede o clique de propagar
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
      navToggle.setAttribute('aria-expanded', navMenu.classList.contains('active'));
    });

    // Fecha o menu ao clicar fora dele
    document.addEventListener('click', (e) => {
      const isClickInsideMenu = navMenu.contains(e.target);
      const isClickOnToggle = navToggle.contains(e.target);

      if (!isClickInsideMenu && !isClickOnToggle) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Navegação suave + fechar menu
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const offsetTop = target.offsetTop - 60;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }

        // Fecha o menu mobile
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Formulário fake (simulação)
  if (form && status) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      status.textContent = 'Enviando...';

      setTimeout(() => {
        status.textContent = 'Mensagem enviada com sucesso! Obrigado pelo contato.';
        form.reset();
      }, 1500);
    });
  }
});
