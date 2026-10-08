/* =====================================================================
   EXTRAS  |  ميزات إضافية (بتشتغل فوق الموقع من غير ما تغيّر الكود القديم)
   Loads after app.js. Data lives in js/data/extras.js
   ===================================================================== */
(function () {
  const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;

  /* 1) Free-trial booking form → WhatsApp */
  const trial = $("#fTrial");
  if (trial) {
    trial.elements.time.innerHTML = EXTRAS.trialTimes.map(t => `<option>${esc(t)}</option>`).join("");
    trial.onsubmit = e => {
      e.preventDefault();
      const f = Object.fromEntries(new FormData(trial));
      window.open(waLink(fill(EXTRAS.trialMessage, f)), "_blank", "noopener");
    };
  }

  /* 2) "Open now" live status for men and women (Cairo time) */
  const fmtT = h => {
    const x = h % 24, hr = Math.floor(x), mn = Math.round((x - hr) * 60);
    return (hr % 12 || 12) + (mn ? ":" + String(mn).padStart(2, "0") : "") + (hr < 12 ? " AM" : " PM");
  };
  function status(sched, day, h) {
    const prev = (sched[(day + 6) % 7] || []).filter(r => r[1] > 24).map(r => [r[0] - 24, r[1] - 24]);
    const open = prev.concat(sched[day] || []).find(r => h >= r[0] && h < r[1]);
    if (open) return { on: true, text: `open now · until ${fmtT(open[1])}` };
    for (let i = 0; i < 8; i++) {
      const d = (day + i) % 7, next = (sched[d] || []).find(r => i > 0 || h < r[0]);
      if (next) return { on: false, text: `closed · opens ${i === 0 ? "today" : i === 1 ? "tomorrow" : DAYS[d]} ${fmtT(next[0])}` };
    }
    return { on: false, text: "closed" };
  }
  function openNow() {
    const box = $("#openNow"); if (!box) return;
    const p = Object.fromEntries(new Intl.DateTimeFormat("en-US", {
      timeZone: EXTRAS.timezone, weekday: "short", hour: "numeric", minute: "numeric", hourCycle: "h23"
    }).formatToParts(new Date()).map(x => [x.type, x.value]));
    const day = DAYS.indexOf(p.weekday), h = +p.hour + +p.minute / 60;
    box.innerHTML = Object.values(EXTRAS.schedule).map(g => {
      const st = status(g.days, day, h);
      return `<span class="open-now${st.on ? " on" : ""}">● ${esc(g.label)}: ${esc(st.text)}</span>`;
    }).join("");
  }
  openNow();
  setInterval(openNow, 60000);

  /* 2b) Copy address button (replaces the map link) */
  const copyBtn = $("#copyAddr");
  if (copyBtn) {
    if (!SITE.address || !navigator.clipboard) copyBtn.hidden = true;
    copyBtn.onclick = async () => {
      try { await navigator.clipboard.writeText(SITE.address); copyBtn.textContent = "· Copied ✓"; } catch (e) { /* blocked */ }
    };
  }

  /* 3) Calculator extras: macros, water, reference weight (added after the original results) */
  const calc = $("#fCalc");
  calc.addEventListener("submit", () => {
    const f = Object.fromEntries(new FormData(calc)), c = SETTINGS.calculator, goal = c.goals[f.goal];
    const w = +f.weight, hgt = +f.height, age = +f.age;
    const bmr = 10 * w + 6.25 * hgt - 5 * age + (f.sex === "m" ? 5 : -161);
    const kcal = Math.max(c.minCalories, Math.round(bmr * +f.activity) + goal.kcalChange);
    const protein = Math.round(w * c.proteinPerKg);
    const fat = Math.round(kcal * EXTRAS.fatShare / 9);
    const carbs = Math.max(0, Math.round((kcal - protein * 4 - fat * 9) / 4));
    const water = (w * 0.035).toFixed(1);
    const ideal = Math.round((f.sex === "m" ? 50 : 45.5) + 2.3 * Math.max(0, hgt / 2.54 - 60));
    const card = (v, l) => `<div class="card"><b>${v}</b><span>${l}</span></div>`;
    const grid = $("#calcOut .res");
    if (grid) grid.insertAdjacentHTML("beforeend",
      card(carbs + " g", "Carbs/day") + card(fat + " g", "Fat/day") +
      card(water + " L", "Water/day") + card(ideal + " kg", "Reference weight (Devine)"));
  });

  /* 4) Animated stat counters on the Coach page */
  function counters() {
    if (reduce || location.hash !== "#coach") return;
    $$("#stats b").forEach(b => {
      const m = b.textContent.match(/^(\d+)(.*)$/);
      if (!m || b.dataset.done) return;
      b.dataset.done = 1;
      const end = +m[1], t0 = performance.now();
      (function tick(t) {
        const k = Math.min(1, (t - t0) / 1200);
        b.textContent = Math.round(end * k) + m[2];
        if (k < 1) requestAnimationFrame(tick);
      })(t0);
    });
  }
  addEventListener("hashchange", counters);
  counters();

  /* 5) Back-to-top button */
  const up = document.createElement("button");
  up.className = "to-top"; up.hidden = true; up.textContent = "↑";
  up.setAttribute("aria-label", "Back to top");
  up.onclick = () => scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  document.body.append(up);
  addEventListener("scroll", () => { up.hidden = scrollY < 600; }, { passive: true });

  /* 6) Fade-in on scroll */
  if ("IntersectionObserver" in window && !reduce) {
    const io = new IntersectionObserver(list => list.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    }), { threshold: 0.1 });
    $$(".card, .gcard, .path, details").forEach(el => { el.classList.add("reveal"); io.observe(el); });
  }

  /* 7) SEO: structured data for Google (built from site.js + extras.js) */
  const names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const hh = h => { const x = h % 24; return String(Math.floor(x)).padStart(2, "0") + ":" + String(Math.round((x % 1) * 60)).padStart(2, "0"); };
  const ld = {
    "@context": "https://schema.org", "@type": "HealthClub",
    name: "Coach Soliman", telephone: SITE.phone,
    image: new URL(CONTENT.coach.photo, location.href).href,
    logo: new URL("images/logo.png", location.href).href,
    address: SITE.address ? { "@type": "PostalAddress", streetAddress: SITE.address, addressCountry: "EG" } : undefined,
    sameAs: SITE.socials.filter(s => s.url !== "auto").map(s => s.url),
    openingHoursSpecification: Object.values(EXTRAS.schedule).flatMap(g => Object.entries(g.days).flatMap(([d, rs]) => rs.map(r => ({
      "@type": "OpeningHoursSpecification", name: g.label, dayOfWeek: names[d], opens: hh(r[0]), closes: hh(r[1])
    }))))
  };
  const s = document.createElement("script");
  s.type = "application/ld+json"; s.textContent = JSON.stringify(ld);
  document.head.append(s);
})();
