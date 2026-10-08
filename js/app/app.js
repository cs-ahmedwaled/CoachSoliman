/* =====================================================================
   APP  |  نقطة البداية: التنقل بين الصفحات + الوضع الداكن + تشغيل كل حاجة
   ===================================================================== */

/* ---------- Page routing (#home, #gym, ...) ---------- */
function route() {
  /* "join" is a hidden page (opened from Online packages), so it is not in the menu */
  const validPages = [...SITE.nav.map(item => item.id), "join"];
  const hash = location.hash.slice(1);
  const id = validPages.includes(hash) ? hash : "home";

  $$(".page").forEach(page => page.classList.toggle("on", page.id === id));
  /* while on "join", keep "Online" highlighted in the menu */
  $$("nav a").forEach(a => a.classList.toggle("on", a.dataset.p === (id === "join" ? "online" : id)));
  window.scrollTo(0, 0);
}

/* ---------- Dark / light toggle (remembers the choice) ---------- */
function initTheme() {
  const root = document.documentElement;
  const systemDark = matchMedia("(prefers-color-scheme:dark)");

  try {
    const saved = localStorage.getItem("theme");
    if (saved) root.dataset.theme = saved;
  } catch (e) { /* storage blocked: ignore */ }

  $("#themeBtn").onclick = () => {
    const isDark = root.dataset.theme ? root.dataset.theme === "dark" : systemDark.matches;
    root.dataset.theme = isDark ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) { /* ignore */ }
  };
}

/* ---------- Start ---------- */
renderAll();
initLightbox();
initForms();
initCalculator();
initTheme();
addEventListener("hashchange", route);
route();
