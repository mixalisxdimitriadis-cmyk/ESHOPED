/* NICTORYS × MALLIRIS — DARK 2 · μόνο ό,τι χρειάζεται το νέο header/hero/panels */
(function () {
  "use strict";

  /* ------------------------------------------------ hero fade carousel */
  var slides = Array.prototype.slice.call(document.querySelectorAll(".em-slide"));
  var dots   = Array.prototype.slice.call(document.querySelectorAll(".em-hero-dots button"));
  var hero   = document.querySelector(".em-hero");
  var idx = 0, timer = null;

  function show(i) {
    if (!slides.length) return;
    idx = (i + slides.length) % slides.length;
    slides.forEach(function (s, k) { s.classList.toggle("is-active", k === idx); });
    dots.forEach(function (d, k) { d.classList.toggle("is-active", k === idx); });
  }
  function play() {
    stop();
    timer = setInterval(function () { show(idx + 1); }, 5000);
  }
  function stop() { if (timer) { clearInterval(timer); timer = null; } }

  if (slides.length) {
    show(0);
    play();
    if (hero) {
      hero.addEventListener("mouseenter", stop);
      hero.addEventListener("mouseleave", play);
      var hx = 0;
      hero.addEventListener("touchstart", function (e) { hx = e.touches[0].clientX; }, { passive: true });
      hero.addEventListener("touchend", function (e) {
        var dx = e.changedTouches[0].clientX - hx;
        if (Math.abs(dx) > 45) { show(idx + (dx < 0 ? 1 : -1)); play(); }
      }, { passive: true });
    }
    dots.forEach(function (d, k) { d.addEventListener("click", function () { show(k); play(); }); });
    document.querySelectorAll(".em-hero-arrow--prev").forEach(function (b) {
      b.addEventListener("click", function () { show(idx - 1); play(); });
    });
    document.querySelectorAll(".em-hero-arrow--next").forEach(function (b) {
      b.addEventListener("click", function () { show(idx + 1); play(); });
    });
  }

  /* ------------------------------------------------------- mega panels */
  var panels = {
    products: document.getElementById("em-panel-products"),
    brands:   document.getElementById("em-panel-brands")
  };
  function closeAll(except) {
    Object.keys(panels).forEach(function (k) {
      var p = panels[k];
      if (p && p !== except) p.classList.remove("is-open");
    });
    document.querySelectorAll(".em-cta[data-panel], .em-nav [data-panel]").forEach(function (b) {
      var t = panels[b.getAttribute("data-panel")];
      if (t && t !== except) b.setAttribute("aria-expanded", "false");
    });
  }
  document.querySelectorAll("[data-panel]").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault(); e.stopPropagation();
      var key = btn.getAttribute("data-panel");
      var p = panels[key];
      if (!p) return;
      var open = p.classList.toggle("is-open");
      closeAll(p);
      if (open) { p.classList.add("is-open"); }
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });
  document.addEventListener("click", function (e) {
    if (e.target.closest(".em-panel") || e.target.closest("[data-panel]")) return;
    closeAll(null);
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeAll(null); });

  /* --------------------------------------------------- tabs μέσα στο panel */
  var tabs  = Array.prototype.slice.call(document.querySelectorAll(".em-tab"));
  var bodies = Array.prototype.slice.call(document.querySelectorAll(".em-tabbody"));
  tabs.forEach(function (t, k) {
    t.addEventListener("click", function () {
      tabs.forEach(function (x, j) { x.classList.toggle("is-active", j === k); });
      bodies.forEach(function (x, j) { x.classList.toggle("is-active", j === k); });
    });
  });

  /* ---------------------------------------------------------- mobile nav */
  var burger = document.querySelector(".em-burger");
  var header = document.querySelector(".em-header");
  if (burger && header) {
    burger.addEventListener("click", function () { header.classList.toggle("is-open"); });
  }

  /* τα λογότυπα κατασκευαστών είναι lazy μέσα σε κλειστό panel: τα ενεργοποιούμε με το άνοιγμα */
  document.querySelectorAll('[data-panel="brands"]').forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll("#em-panel-brands img").forEach(function (im) {
        if (im.loading !== "eager") im.loading = "eager";
      });
    });
  });
})();
