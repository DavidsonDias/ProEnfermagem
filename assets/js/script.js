document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  // === TOGGLE MENU MOBILE ===
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const isActive = navMenu.classList.toggle("active");
      navToggle.classList.toggle("active");
      navToggle.setAttribute("aria-expanded", isActive);
    });

    // Fecha o menu ao clicar fora
    document.addEventListener("click", (e) => {
      const clickedOutsideMenu = !navMenu.contains(e.target) && !navToggle.contains(e.target);
      if (clickedOutsideMenu) {
        navMenu.classList.remove("active");
        navToggle.classList.remove("active");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // === NAVEGAÇÃO SUAVE ===
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const offsetTop = target.offsetTop - 60;
          window.scrollTo({ top: offsetTop, behavior: "smooth" });
        }

        // Fecha o menu mobile após clique
        navMenu?.classList.remove("active");
        navToggle?.classList.remove("active");
        navToggle?.setAttribute("aria-expanded", "false");
      }
    });
  });

  // === FORMULÁRIO (simulação de envio) ===
  if (form && status) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      status.textContent = "Enviando...";

      setTimeout(() => {
        status.textContent = "Mensagem enviada com sucesso! Obrigado pelo contato.";
        form.reset();
      }, 1500);
    });
  }
});});
