/* =====================================================================
   HELPERS  |  دوال مساعدة صغيرة
   Used by the other files in js/app/. You don't need to edit this.
   ===================================================================== */

/* Shortcuts for finding elements */
const $  = selector => document.querySelector(selector);
const $$ = selector => Array.from(document.querySelectorAll(selector));

/* Make text safe to place inside HTML, so any character you type in the
   data files (quotes, &, <) can never break the page. */
const esc = value => String(value ?? "").replace(/[&<>"']/g, ch => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
}[ch]));

/* Fill {placeholders} in a message template: fill("Hi {name}", {name:"Ali"}) */
const fill = (template, values) =>
  template.replace(/\{(\w+)\}/g, (match, key) => (key in values ? values[key] : match));

/* Read a value by path from the data files: lookup("content.coach.name") */
const lookup = path =>
  path.split(".").reduce(
    (obj, key) => (obj == null ? obj : obj[key]),
    { site: SITE, pricing: PRICING, content: CONTENT, messages: MESSAGES, settings: SETTINGS }
  );

/* Build a WhatsApp link that opens with a ready message */
const waLink = text => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

/* "EGP" or "EGP / month" for a plan */
const unitOf = plan => plan.unit || (PRICING.currency + (plan.period ? " " + plan.period : ""));

/* "300 EGP" for a plan */
const priceText = plan => `${plan.price} ${unitOf(plan)}`;
