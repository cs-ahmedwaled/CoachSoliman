/* =====================================================================
   FORMS  |  فورمات الاشتراك (بتبعت على الواتساب)
   The message text lives in js/data/messages.js
   ===================================================================== */

/* newTab = true opens WhatsApp in a new tab, false opens it in this tab */
function bindLeadForm(selector, newTab) {
  $(selector).onsubmit = e => {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(e.target));
    const url = waLink(fill(MESSAGES.onlineRequest, {
      name: f.name, weight: f.weight, height: f.height, goal: f.goal, package: f.plan
    }));
    if (newTab) window.open(url, "_blank", "noopener");
    else location.href = url;
  };
}

function initForms() {
  bindLeadForm("#fOnline", false);   /* form at the bottom of the Online page */
  bindLeadForm("#fJoin", true);      /* form on the Subscribe page */

  /* Tapping "Subscribe" on an online package pre-selects it in the Subscribe form */
  $$("[data-plan]").forEach(link => {
    link.onclick = () => {
      $("#joinPlan").selectedIndex = PRICING.online.findIndex(p => p.name === link.dataset.plan);
    };
  });
}
