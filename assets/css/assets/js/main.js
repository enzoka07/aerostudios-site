(function () {
  const root = document.documentElement;

  // Theme: saved or system
  const saved = localStorage.getItem("aero.theme");
  if (saved) root.setAttribute("data-theme", saved);

  const toggle = document.getElementById("themeToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") || "dark";
      const next = current === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      localStorage.setItem("aero.theme", next);
    });
  }

  // Year in footer
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Reveal on scroll
  const revealEls = Array.from(document.querySelectorAll("[data-reveal]"));
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("revealed");
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => io.observe(el));

  // Count-up stats
  const counters = Array.from(document.querySelectorAll("[data-count]"));
  const countIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = parseInt(el.getAttribute("data-count"), 10);
        animateCount(el, target, 900);
        countIO.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach((c) => countIO.observe(c));

  function animateCount(el, target, duration) {
    const start = performance.now();
    const from = 0;
    function tick(now) {
      const t = Math.min(1, (now - start) / duration);
      const val = Math.floor(from + (target - from) * easeOutCubic(t));
      el.textContent = String(val);
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  // Micro-parallax for orbs (subtle)
  const orbs = Array.from(document.querySelectorAll(".orb"));
  if (orbs.length) {
    window.addEventListener("mousemove", (ev) => {
      const x = (ev.clientX / window.innerWidth - 0.5) * 18;
      const y = (ev.clientY / window.innerHeight - 0.5) * 14;
      orbs.forEach((o, i) => {
        const m = (i + 1) * 0.6;
        o.style.transform = `translate3d(${x * m}px, ${y * m}px, 0)`;
      });
    }, { passive: true });
  }
})();
