/* ==========================================================================
   DIGITALIA AGENCY — script.js
   Fonctionnalités :
   1. Menu mobile
   2. Compteurs animés (statistiques)
   3. Suivi Google Analytics 4 (CTA, service_click, contact_click)
   4. Formulaire de devis : form_start, validation, form_submit
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {

  /* ----------------------------------------------------------------------
     1. MENU MOBILE
     ---------------------------------------------------------------------- */
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      mainNav.classList.toggle("open");
    });
    // Ferme le menu quand on clique sur un lien
    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("open");
      });
    });
  }

  /* ----------------------------------------------------------------------
     2. COMPTEURS ANIMÉS
     ---------------------------------------------------------------------- */
  const counters = document.querySelectorAll("[data-count]");
  const animateCounter = function (el) {
    const target = parseInt(el.getAttribute("data-count"), 10);
    const duration = 1200;
    const start = performance.now();

    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = Math.floor(progress * target);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target;
      }
    }
    requestAnimationFrame(step);
  };

  if ("IntersectionObserver" in window && counters.length) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach(function (el) { observer.observe(el); });
  } else {
    counters.forEach(animateCounter);
  }

  /* ----------------------------------------------------------------------
     3. SUIVI GOOGLE ANALYTICS 4 — ÉVÉNEMENTS PERSONNALISÉS
     ----------------------------------------------------------------------
     gtag() est défini dans le <head> de chaque page (config GA4).
     safeGtag() évite une erreur si le script GA4 n'est pas encore chargé
     (par exemple pendant les tests en local sans connexion internet).
     ---------------------------------------------------------------------- */
  function safeGtag(eventName, params) {
    if (typeof gtag === "function") {
      gtag("event", eventName, params);
    }
    // Trace console utile pour la démonstration / le DebugView
    console.log("[GA4 event]", eventName, params);
  }

  // 3.a — Clics sur les boutons "Demander un devis" (CTA)
  document.querySelectorAll('[data-track="cta_click"]').forEach(function (btn) {
    btn.addEventListener("click", function () {
      safeGtag("cta_click", {
        cta_text: "Demander un devis",
        cta_location: btn.getAttribute("data-cta-location") || "unknown"
      });
    });
  });

  // 3.b — Clics sur les services (page d'accueil et page services)
  document.querySelectorAll('[data-track="service_click"]').forEach(function (btn) {
    btn.addEventListener("click", function () {
      safeGtag("service_click", {
        service_name: btn.getAttribute("data-service-name") || "unknown"
      });
    });
  });

  // 3.c — Clics sur les informations de contact (email, téléphone, adresse)
  document.querySelectorAll('[data-track="contact_click"]').forEach(function (el) {
    el.addEventListener("click", function () {
      safeGtag("contact_click", {
        contact_type: el.getAttribute("data-contact-type") || "unknown"
      });
    });
  });

  /* ----------------------------------------------------------------------
     4. FORMULAIRE DE DEVIS — form_start / validation / form_submit
     ---------------------------------------------------------------------- */
  const form = document.getElementById("devisForm");
  if (form) {
    let formStarted = false;
    const successAlert = document.getElementById("formAlertSuccess");
    const errorAlert = document.getElementById("formAlertError");

    // Pré-remplissage du service si arrivée depuis la page Services (?service=SEO)
    const urlParams = new URLSearchParams(window.location.search);
    const preselected = urlParams.get("service");
    if (preselected) {
      const serviceSelect = document.getElementById("service");
      const match = Array.from(serviceSelect.options).find(function (opt) {
        return opt.value.toLowerCase().indexOf(preselected.toLowerCase()) !== -1;
      });
      if (match) serviceSelect.value = match.value;
    }

    // 4.a — Événement form_start : déclenché à la première interaction avec un champ
    form.querySelectorAll("input, select, textarea").forEach(function (field) {
      field.addEventListener("focus", function () {
        if (!formStarted) {
          formStarted = true;
          safeGtag("form_start", { form_name: "devis_request" });
        }
      });
    });

    // 4.b — Règles de validation
    const rules = {
      nom: function (v) { return v.trim().length >= 2; },
      email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()); },
      telephone: function (v) { return /^[0-9+\s().-]{8,20}$/.test(v.trim()); },
      service: function (v) { return v.trim().length > 0; },
      message: function (v) { return v.trim().length >= 10; }
    };
    const errorMessages = {
      nom: "Merci d'indiquer votre nom (2 caractères minimum).",
      email: "Merci d'indiquer une adresse email valide.",
      telephone: "Merci d'indiquer un numéro de téléphone valide.",
      service: "Merci de sélectionner un service.",
      message: "Votre message doit contenir au moins 10 caractères."
    };

    function validateField(name) {
      const field = form.querySelector('[name="' + name + '"]');
      const group = form.querySelector('[data-field="' + name + '"]');
      const errorSpan = group.querySelector(".field-error");
      const isValid = rules[name](field.value);

      if (isValid) {
        group.classList.remove("has-error");
        errorSpan.textContent = "";
      } else {
        group.classList.add("has-error");
        errorSpan.textContent = errorMessages[name];
      }
      return isValid;
    }

    // Validation en direct quand l'utilisateur quitte un champ
    Object.keys(rules).forEach(function (name) {
      const field = form.querySelector('[name="' + name + '"]');
      field.addEventListener("blur", function () { validateField(name); });
    });

    // 4.c — Soumission du formulaire
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      successAlert.style.display = "none";
      errorAlert.style.display = "none";

      let allValid = true;
      Object.keys(rules).forEach(function (name) {
        if (!validateField(name)) allValid = false;
      });

      if (!allValid) {
        errorAlert.style.display = "block";
        errorAlert.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }

      // Données du formulaire (démonstration uniquement — non transmises)
      const formData = {
        service: form.service.value,
        budget: form.budget.value || "non renseigné"
      };

      // 4.d — Événement clé de conversion : form_submit
      safeGtag("form_submit", {
        form_name: "devis_request",
        service_selected: formData.service,
        budget_range: formData.budget
      });

      successAlert.style.display = "block";
      successAlert.scrollIntoView({ behavior: "smooth", block: "center" });
      form.reset();
      formStarted = false;
    });
  }

});
