/* alanward.tech — shared behavior
   Loaded by every page. Nothing here is required for the content to be
   readable; if this file fails, the site still renders in full. */

(function () {
  'use strict';

  /* ── Nav background on scroll ─────────────────────────────────────────── */

  var nav = document.getElementById('siteNav');

  if (nav) {
    var onScroll = function () {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ── Mobile navigation ────────────────────────────────────────────────── */

  var toggle = document.getElementById('navToggle');
  var drawer = document.getElementById('navDrawer');

  if (toggle && drawer) {
    var setDrawer = function (open) {
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      drawer.classList.toggle('open', open);
      drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
      document.body.style.overflow = open ? 'hidden' : '';

      if (open) {
        var first = drawer.querySelector('a');
        if (first) first.focus();
      }
    };

    setDrawer(false);

    toggle.addEventListener('click', function () {
      setDrawer(toggle.getAttribute('aria-expanded') !== 'true');
    });

    drawer.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        setDrawer(false);
        toggle.focus();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setDrawer(false);
        toggle.focus();
      }
    });

    // A resize past the breakpoint should never leave the drawer stranded open.
    window.addEventListener('resize', function () {
      if (window.innerWidth > 900) setDrawer(false);
    });
  }

  /* ── Reveal on scroll ─────────────────────────────────────────────────── */
  /* The hiding rule lives behind `.js` in the stylesheet, so this is purely
     additive. Anything the observer can't reach is revealed outright. */

  var reveals = document.querySelectorAll('[data-reveal]');
  var reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reveals.length) {
    // nothing to do
  } else if (reduceMotion || !('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(reveals, function (el) {
      el.classList.add('visible');
    });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    Array.prototype.forEach.call(reveals, function (el) {
      observer.observe(el);
    });

    // Safety net: if anything is still hidden after load, show it.
    window.addEventListener('load', function () {
      setTimeout(function () {
        Array.prototype.forEach.call(reveals, function (el) {
          var box = el.getBoundingClientRect();
          if (box.top < window.innerHeight) el.classList.add('visible');
        });
      }, 400);
    });
  }

  /* ── Email links ──────────────────────────────────────────────────────── */
  /* The markup already carries a working mailto: for crawlers and for anyone
     without script. This re-writes it at runtime so the address survives
     Cloudflare's email obfuscation, which rewrites plain mailto hrefs. */

  var user = 'alanflutetech';
  var domain = 'gmail.com';
  var href = 'mai' + 'lto:' + user + '@' + domain;

  Array.prototype.forEach.call(
    document.querySelectorAll('[data-email]'),
    function (el) { el.href = href; }
  );
})();
