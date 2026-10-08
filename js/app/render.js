/* =====================================================================
   RENDER  |  بناء الصفحات من ملفات البيانات
   Reads js/data/*.js and fills the empty containers in index.html.
   You don't need to edit this to change content or prices.
   ===================================================================== */

/* ---------- Plan cards (online, gym, kids) ---------- */

/* linkAttrs = the attributes of the Subscribe button (where it goes) */
function planCard(plan, linkAttrs) {
  const ribbon   = plan.ribbon ? `<span class="ribbon">${esc(plan.ribbon)}</span>` : "";
  const tag      = plan.tag    ? `<span class="tag">${esc(plan.tag)}</span>` : "";
  const features = plan.features && plan.features.length
    ? `<ul>${plan.features.map(f => `<li>${esc(f)}</li>`).join("")}</ul>`
    : "";
  return `
    <div class="card plan ${plan.popular ? "pop" : ""}">
      ${ribbon}${tag}
      <h3>${esc(plan.name)}</h3>
      <div class="price">${esc(plan.price)} <small>${esc(unitOf(plan))}</small></div>
      ${features}
      <a class="btn ${plan.popular ? "btn-accent" : ""}" ${linkAttrs}>${esc(PRICING.subscribeLabel)}</a>
    </div>`;
}

const whatsappAttrs = message =>
  `data-wa="${esc(message)}" target="_blank" rel="noopener"`;

function renderOnlinePlans() {
  $("#onlinePlans").innerHTML = PRICING.online
    .map(plan => planCard(plan, `href="#join" data-plan="${esc(plan.name)}"`))
    .join("");
}

function renderGymPlans() {
  $("#gymPlans").innerHTML = PRICING.gymCategories.map(category => `
    <h3 class="cat-title">${esc(category.title)}<span>${esc(category.note)}</span></h3>
    <div class="grid">
      ${category.plans.map(plan => {
        const full = { ...plan, features: [...(plan.features || []), ...PRICING.gymCommonFeatures] };
        const message = fill(MESSAGES.gymJoin, {
          category: category.title, plan: plan.name, price: priceText(plan)
        });
        return planCard(full, whatsappAttrs(message));
      }).join("")}
    </div>`).join("");
}

function renderKidsPlans() {
  $("#kidsPlans").innerHTML = PRICING.kidsAcademy.map(plan =>
    planCard(plan, whatsappAttrs(fill(MESSAGES.kidsEnroll, {
      plan: plan.name, price: priceText(plan)
    })))
  ).join("");
}

function renderRecoveryPlans() {
  $("#recoveryPlans").innerHTML = PRICING.recovery
    .map(plan => planCard(plan, whatsappAttrs(fill(MESSAGES.recoveryJoin, {
      plan: plan.name, price: priceText(plan)
    }))))
    .join("");
}

function renderFriendsOffer() {
  const box = $("#friendsOffer");
  if (PRICING.friendsOffer) box.textContent = PRICING.friendsOffer;
  else box.hidden = true;
}

/* ---------- Select menus ---------- */

function renderSelects() {
  /* Package menu in both subscribe forms */
  const packages = PRICING.online
    .map(plan => `<option>${esc(plan.name)} - ${esc(priceText(plan))}</option>`).join("");
  $("#planSel").innerHTML = packages;
  $("#joinPlan").innerHTML = packages;

  /* Goal menu in both subscribe forms */
  const goals = SETTINGS.leadGoals.map(g => `<option>${esc(g)}</option>`).join("");
  $$("[data-lead-goals]").forEach(select => { select.innerHTML = goals; });

  /* Goal menu in the calculator */
  $("#calcGoal").innerHTML = Object.entries(SETTINGS.calculator.goals)
    .map(([key, goal]) => `<option value="${esc(key)}">${esc(goal.label)}</option>`).join("");
}

/* ---------- Photos ---------- */

function photoCards(list, listName, extraClass) {
  return list.map((photo, i) => `
    <div class="gcard ${extraClass}" data-list="${listName}" data-i="${i}">
      <img src="${esc(photo.src)}" alt="${esc(photo.caption)}" loading="lazy">
      <span>${esc(photo.caption)}</span>
    </div>`).join("");
}

function renderPhotos() {
  $("#gallery").innerHTML = photoCards(CONTENT.gallery, "gallery", "");
  $("#results").innerHTML = photoCards(CONTENT.results, "results", "rcard");
  $$("[data-photo]").forEach(img => {
    img.src = CONTENT.coach.photo;
    img.alt = CONTENT.coach.name;
  });
}

/* ---------- Text sections ---------- */

function renderNav() {
  $("#nav").innerHTML = SITE.nav
    .map(item => `<a href="#${esc(item.id)}" data-p="${esc(item.id)}">${esc(item.label)}</a>`).join("");
}

function renderOnlineBenefits() {
  $("#onlineBenefits").innerHTML = CONTENT.onlineBenefits
    .map(b => `<div class="card"><h3>${esc(b.title)}</h3><p class="note">${esc(b.text)}</p></div>`).join("");
}

function renderCoach() {
  $("#stats").innerHTML = CONTENT.coach.stats
    .map(s => `<div><b>${esc(s.value)}</b>${esc(s.label)}</div>`).join("");
  $("#certs").innerHTML = CONTENT.coach.certificates
    .map(c => `<span class="chip">${esc(c)}</span>`).join("");
}

function renderFeatures() {
  $("#features").innerHTML = CONTENT.features.map(f => `<span class="chip">${esc(f)}</span>`).join("");
}

function renderReviews() {
  $("#reviews").innerHTML = CONTENT.reviews.map(r => `
    <div class="card rev">
      <div class="stars">★★★★★</div>
      <p>${esc(r.text)}</p>
      <small>${esc(r.name)} · ${esc(r.role)}</small>
    </div>`).join("");
}

function renderFaq() {
  $("#faq").innerHTML = CONTENT.faq
    .map(item => `<details><summary>${esc(item.q)}</summary><p>${esc(item.a)}</p></details>`).join("");
}




// function renderContact() {
//   $("#hours").innerHTML = SITE.hours.map(esc).join("<br>");

//   /* Address line: hidden when address is empty in site.js */
//   $("#addressLine").hidden = !SITE.address;
//   if (SITE.mapLink) $("#mapLink").href = SITE.mapLink;
//   else $("#mapLink").hidden = true;

//   $("#soc").innerHTML = SITE.socials.map(s => {
//     const url = s.url === "auto" ? `https://wa.me/${SITE.whatsapp}` : s.url;
//     return `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(s.name)}<span>→</span></a>`;
//   }).join("");
// }


function renderContact() {
  $("#hours").innerHTML = SITE.hours.map(esc).join("<br>");

  /* Address line: hidden when address is empty in site.js */
  $("#addressLine").hidden = !SITE.address;
  if (SITE.mapLink) $("#mapLink").href = SITE.mapLink;
  else $("#mapLink").hidden = true;

  $("#soc").innerHTML = SITE.socials.map(s => {
    const url = s.url === "auto" ? `https://wa.me/${SITE.whatsapp}` : s.url;
    const iconHTML = s.icon ? `<i class="${esc(s.icon)}"></i> ` : "";
    return `<a href="${esc(url)}" target="_blank" rel="noopener">${iconHTML}${esc(s.name)}<span>→</span></a>`;
  }).join("");
}




function renderPromo() {
  if (SITE.promo && SITE.promo.on) {
    $("#promo").textContent = SITE.promo.text;
    $("#promo").hidden = false;
  }
}

/* ---------- Generic bindings used by index.html ---------- */

function bindTextAndLinks() {
  /* <span data-text="content.coach.name"> */
  $$("[data-text]").forEach(el => { el.textContent = lookup(el.dataset.text) ?? ""; });
  /* <a data-tel> shows the phone and makes it tappable */
  $$("[data-tel]").forEach(el => {
    el.textContent = SITE.phone;
    el.href = "tel:" + SITE.phone.replace(/\s/g, "");
  });
  /* <a data-wa-msg="quick.trial"> opens WhatsApp with a ready message from messages.js */
  $$("[data-wa-msg]").forEach(el => {
    el.href = waLink(lookup("messages." + el.dataset.waMsg));
  });
  /* Plan buttons built above carry the final message in data-wa */
  $$("[data-wa]").forEach(el => { el.href = waLink(el.dataset.wa); });
}

/* Run everything */
function renderAll() {
  renderNav();
  renderPromo();
  renderOnlineBenefits();
  renderOnlinePlans();
  renderGymPlans();
  renderKidsPlans();
  renderRecoveryPlans();
  renderFriendsOffer();
  renderSelects();
  renderPhotos();
  renderFeatures();
  renderCoach();
  renderReviews();
  renderFaq();
  renderContact();
  bindTextAndLinks();   /* must stay last: it links buttons created above */
}
