/* =====================================================================
   TOOLS  |  أدوات إضافية: 1RM، تايمر راحة، متابعة الوزن، سعر الشهر/الحصة، مشاركة
   Loads after extras.js. Nothing here touches the older files.
   ===================================================================== */
(function () {

  /* 1) Strength calculator (Epley 1RM) */
  const rm = $("#fRm");
  rm.onsubmit = e => {
    e.preventDefault();
    const w = +rm.elements.w.value, r = +rm.elements.r.value;
    const one = w * (1 + r / 30), kg = p => Math.round(one * p / 2.5) * 2.5;
    const card = (v, l) => `<div class="card"><b>${v} kg</b><span>${l}</span></div>`;
    $("#rmOut").innerHTML = `<div class="res">${
      card(Math.round(one * 10) / 10, "Estimated 1RM") + card(kg(.85), "85% · about 6 reps") +
      card(kg(.75), "75% · about 10 reps") + card(kg(.65), "65% · about 15 reps")}</div>
      <p class="note disclaimer">Epley formula estimate. Warm up well and use a spotter for heavy lifts.</p>`;
  };

  /* 2) Rest timer */
  const PRESETS = [60, 90, 120, 180];
  let base = 90, left = 90, timer = null, audio = null;
  const show = () => { $("#tTime").textContent = String(Math.floor(left / 60)).padStart(2, "0") + ":" + String(left % 60).padStart(2, "0"); };
  const stop = () => { clearInterval(timer); timer = null; $("#tStart").textContent = "Start"; };
  const unlock = () => { try { audio = audio || new (window.AudioContext || window.webkitAudioContext)(); audio.resume(); } catch (e) { /* no audio */ } };
  function beep() {
    try {
      const o = audio.createOscillator(), g = audio.createGain();
      o.connect(g); g.connect(audio.destination); g.gain.value = .2; o.frequency.value = 880;
      o.start(); o.stop(audio.currentTime + .6);
    } catch (e) { /* no audio */ }
    if (navigator.vibrate) navigator.vibrate([300, 150, 300]);
  }
  $("#tPresets").innerHTML = PRESETS.map(s => `<button type="button" class="chip" data-s="${s}">${s / 60} min</button>`).join("");
  $$("#tPresets .chip").forEach(b => { b.onclick = () => { stop(); base = left = +b.dataset.s; show(); }; });
  $("#tStart").onclick = () => {
    if (timer) { stop(); return; }
    if (left <= 0) left = base;
    unlock();
    $("#tStart").textContent = "Pause";
    const end = Date.now() + left * 1000;
    timer = setInterval(() => {
      left = Math.max(0, Math.round((end - Date.now()) / 1000));
      show();
      if (left <= 0) { stop(); beep(); $("#tTime").textContent = "Time's up!"; }
    }, 250);
  };
  $("#tReset").onclick = () => { stop(); left = base; show(); };
  show();

  /* 3) Weight tracker (saved on this device only) */
  const KEY = "weightLog", form = $("#fLog");
  const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; } };
  const save = list => { try { localStorage.setItem(KEY, JSON.stringify(list)); } catch (e) { /* storage blocked */ } };
  function draw() {
    const log = load().sort((a, b) => a.d.localeCompare(b.d)).slice(-30), box = $("#logChart");
    if (log.length < 2) {
      box.innerHTML = `<p class="note">${log.length ? "Add one more entry to see your trend." : "No entries yet."}</p>`;
      return;
    }
    const ws = log.map(x => x.w), lo = Math.min(...ws) - 1, hi = Math.max(...ws) + 1;
    const X = i => 10 + i * (280 / (log.length - 1)), Y = w => 110 - (w - lo) / (hi - lo) * 100;
    const diff = (ws[ws.length - 1] - ws[0]).toFixed(1);
    box.innerHTML = `<svg viewBox="0 0 300 120" class="chart" role="img" aria-label="Weight trend">
      <polyline points="${log.map((x, i) => X(i).toFixed(1) + "," + Y(x.w).toFixed(1)).join(" ")}"/>
      ${log.map((x, i) => `<circle cx="${X(i).toFixed(1)}" cy="${Y(x.w).toFixed(1)}" r="3"/>`).join("")}</svg>
      <p class="note">${esc(log[0].d)} → ${esc(log[log.length - 1].d)} · ${ws[0]} → ${ws[ws.length - 1]} kg (${diff > 0 ? "+" : ""}${diff} kg)</p>`;
  }
  form.elements.d.value = new Date().toLocaleDateString("en-CA");
  form.onsubmit = e => {
    e.preventDefault();
    const d = form.elements.d.value;
    save(load().filter(x => x.d !== d).concat({ d, w: +form.elements.w.value }));
    form.elements.w.value = "";
    draw();
  };
  $("#logClear").onclick = () => { if (confirm("Clear all entries?")) { save([]); draw(); } };
  draw();

  /* 4) Price hints on plan cards: per month / per session */
  const cur = PRICING.currency, fmt = n => String(Math.round(n * 10) / 10);
  const hint = (card, text) => card.querySelector(".price").insertAdjacentHTML("afterend", `<p class="hint">${esc(text)}</p>`);
  $$("#onlinePlans .plan").forEach((c, i) => {
    const p = PRICING.online[i], m = /(\d+)\s*month/i.exec(p.name);
    if (m && +m[1] > 1) hint(c, `≈ ${fmt(p.price / m[1])} ${cur} / month`);
  });
  const gymPlans = PRICING.gymCategories.flatMap(c => c.plans);
  $$("#gymPlans .plan").forEach((c, i) => {
    const m = /(\d+)\s*session/i.exec(gymPlans[i].name);
    if (m) hint(c, `≈ ${fmt(gymPlans[i].price / m[1])} ${cur} / session`);
  });

  /* 5) Share button */
  const share = $("#shareBtn");
  if (!navigator.share && !navigator.clipboard) share.hidden = true;
  share.onclick = async () => {
    const data = { title: document.title, url: location.href.split("#")[0] };
    try {
      if (navigator.share) await navigator.share(data);
      else { await navigator.clipboard.writeText(data.url); share.textContent = "Link copied ✓"; }
    } catch (e) { /* cancelled */ }
  };
})();
