/* ============================================================
   Africa Football Academy — Main JavaScript
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {
  // ── Header scroll effect ──
  const header = document.querySelector(".main-header");
  if (header) {
    window.addEventListener("scroll", function () {
      header.classList.toggle("scrolled", window.scrollY > 60);
    });
  }

  // ── Hero Carousel ──
  initHeroCarousel();

  // ── Scroll reveal animations ──
  initScrollReveal();

  // ── Animated counters ──
  initCounters();

  // ── Progress bars ──
  initProgressBars();

  // ── Talent / News / Gallery filters ──
  initFilters();

  // ── Gallery lightbox ──
  initLightbox();

  // ── Form validation ──
  initForms();

  // ── WhatsApp tooltip dismiss ──
  const whatsappClose = document.querySelector(".whatsapp-tooltip-close");
  if (whatsappClose) {
    whatsappClose.addEventListener("click", function () {
      this.closest(".whatsapp-tooltip").style.display = "none";
    });
  }

  // ── Scroll to top ──
  initScrollTop();
});

/* ============================================================
   HERO CAROUSEL
   ============================================================ */
function initHeroCarousel() {
  const slides = document.querySelectorAll(".hero-slide");
  const indicators = document.querySelectorAll(".hero-indicator");
  const prevBtn = document.querySelector(".hero-arrow-prev");
  const nextBtn = document.querySelector(".hero-arrow-next");
  if (slides.length === 0) return;

  let current = 0;
  let interval;
  const DURATION = 5500;

  function goTo(index) {
    slides[current].classList.remove("active");
    indicators[current].classList.remove("active");
    // Reset bar fill
    const bar = indicators[current].querySelector(".bar-fill");
    if (bar) bar.style.width = "0";

    current = (index + slides.length) % slides.length;

    slides[current].classList.add("active");
    indicators[current].classList.add("active");
    // Trigger bar fill
    setTimeout(function () {
      const bar = indicators[current].querySelector(".bar-fill");
      if (bar) {
        bar.style.width = "0";
        requestAnimationFrame(function () {
          bar.style.width = "100%";
        });
      }
    }, 50);
  }

  function next() { goTo(current + 1); }
  function startAuto() {
    clearInterval(interval);
    interval = setInterval(next, DURATION);
  }

  // Start
  goTo(0);
  startAuto();

  // Indicators
  indicators.forEach(function (ind, i) {
    ind.addEventListener("click", function () {
      goTo(i);
      startAuto();
    });
  });

  // Arrows
  if (prevBtn) prevBtn.addEventListener("click", function () { goTo(current - 1); startAuto(); });
  if (nextBtn) nextBtn.addEventListener("click", function () { goTo(current + 1); startAuto(); });

  // Pause on hover
  const carousel = document.querySelector(".hero-carousel");
  if (carousel) {
    carousel.addEventListener("mouseenter", function () { clearInterval(interval); });
    carousel.addEventListener("mouseleave", startAuto);
  }

  // Keyboard
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") { goTo(current - 1); startAuto(); }
    if (e.key === "ArrowRight") { goTo(current + 1); startAuto(); }
  });
}

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
function initScrollReveal() {
  const elements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");
  if (elements.length === 0) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  elements.forEach(function (el) { observer.observe(el); });
}

/* ============================================================
   ANIMATED COUNTERS
   ============================================================ */
function initCounters() {
  const counters = document.querySelectorAll("[data-count]");
  if (counters.length === 0) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(function (el) { observer.observe(el); });
}

function animateCounter(el) {
  const target = parseInt(el.getAttribute("data-count"), 10);
  const suffix = el.getAttribute("data-suffix") || "";
  const duration = 2000;
  const step = Math.max(1, Math.floor(target / (duration / 16)));
  let current = 0;

  function update() {
    current += step;
    if (current >= target) {
      el.textContent = target.toLocaleString() + suffix;
      return;
    }
    el.textContent = current.toLocaleString() + suffix;
    requestAnimationFrame(update);
  }
  update();
}

/* ============================================================
   PROGRESS BARS
   ============================================================ */
function initProgressBars() {
  const bars = document.querySelectorAll(".progress-custom .bar");
  if (bars.length === 0) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const width = entry.target.getAttribute("data-width");
          setTimeout(function () {
            entry.target.style.width = width + "%";
          }, 200);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  bars.forEach(function (bar) { observer.observe(bar); });
}

/* ============================================================
   FILTERS (Talents, News, Gallery)
   ============================================================ */
function initFilters() {
  document.querySelectorAll("[data-filter-group]").forEach(function (group) {
    const buttons = group.querySelectorAll(".filter-btn");
    const targetId = group.getAttribute("data-filter-group");
    const items = document.querySelectorAll("[data-filter-category]");

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        // Update active button
        buttons.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");

        const filter = btn.getAttribute("data-filter");

        items.forEach(function (item) {
          if (filter === "all" || item.getAttribute("data-filter-category") === filter) {
            item.style.display = "";
            setTimeout(function () {
              item.style.opacity = "1";
              item.style.transform = "translateY(0)";
            }, 50);
          } else {
            item.style.opacity = "0";
            item.style.transform = "translateY(20px)";
            setTimeout(function () { item.style.display = "none"; }, 300);
          }
        });
      });
    });
  });
}

/* ============================================================
   GALLERY LIGHTBOX
   ============================================================ */
function initLightbox() {
  const lightbox = document.getElementById("galleryLightbox");
  if (!lightbox) return;

  const lightboxImg = lightbox.querySelector("img");
  const closeBtn = lightbox.querySelector(".lightbox-close");
  const prevBtn = lightbox.querySelector(".lightbox-prev");
  const nextBtn = lightbox.querySelector(".lightbox-next");
  const items = document.querySelectorAll(".gallery-item");
  let currentIndex = 0;
  const images = [];

  items.forEach(function (item, i) {
    const src = item.getAttribute("data-src") || item.querySelector("img")?.src;
    const alt = item.querySelector("img")?.alt || "";
    images.push({ src: src, alt: alt });

    item.addEventListener("click", function () {
      currentIndex = i;
      showImage(currentIndex);
      lightbox.classList.add("show");
      document.body.style.overflow = "hidden";
    });
  });

  function showImage(index) {
    if (images[index]) {
      lightboxImg.src = images[index].src;
      lightboxImg.alt = images[index].alt;
    }
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      lightbox.classList.remove("show");
      document.body.style.overflow = "";
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    });
  }

  // Close on backdrop click
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
      lightbox.classList.remove("show");
      document.body.style.overflow = "";
    }
  });

  // Keyboard
  document.addEventListener("keydown", function (e) {
    if (!lightbox.classList.contains("show")) return;
    if (e.key === "Escape") {
      lightbox.classList.remove("show");
      document.body.style.overflow = "";
    }
    if (e.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    }
    if (e.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }
  });
}

/* ============================================================
   FORM VALIDATION & SUBMISSION
   ============================================================ */
function initForms() {
  document.querySelectorAll("form[data-validate]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Basic validation
      let valid = true;
      form.querySelectorAll("[required]").forEach(function (input) {
        if (!input.value.trim()) {
          input.classList.add("is-invalid");
          valid = false;
        } else {
          input.classList.remove("is-invalid");
        }
        // Email validation
        if (input.type === "email" && input.value) {
          const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRe.test(input.value)) {
            input.classList.add("is-invalid");
            valid = false;
          }
        }
      });

      if (valid) {
        // Hide form, show success
        const successMsg = form.parentElement.querySelector(".form-success");
        if (successMsg) {
          form.style.display = "none";
          successMsg.style.display = "block";
        } else {
          alert("Formulaire envoyé avec succès !");
          form.reset();
        }
      }
    });

    // Remove invalid on input
    form.querySelectorAll("[required]").forEach(function (input) {
      input.addEventListener("input", function () {
        this.classList.remove("is-invalid");
      });
    });
  });
}

/* ============================================================
   SCROLL TO TOP
   ============================================================ */
function initScrollTop() {
  const btn = document.querySelector(".scroll-top");
  if (!btn) return;

  window.addEventListener("scroll", function () {
    btn.classList.toggle("visible", window.scrollY > 400);
  });

  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ============================================================
   NEWS / TALENT SEARCH
   ============================================================ */
function initSearch(inputId, targetClass) {
  const input = document.getElementById(inputId);
  if (!input) return;

  input.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    document.querySelectorAll("." + targetClass).forEach(function (item) {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(query) ? "" : "none";
    });
  });
}
