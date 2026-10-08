/* =====================================================================
   SITE INFO  |  بيانات الموقع العامة
   ---------------------------------------------------------------------
   Edit here: WhatsApp number, phone, address, hours, social links,
   the top promo bar, and the menu.
   عدّل هنا: رقم الواتساب، التليفون، العنوان، المواعيد، السوشيال،
   بانر العروض اللي فوق، وقايمة التنقل.
   Write plain text only (no HTML tags).
   ===================================================================== */

const SITE = {

  /* رقم الواتساب: صيغة دولية بدون + ولا مسافات. مثال: 201012345678 */
  whatsapp: "201556044771",

  /* رقم التليفون المعروض في الصفحة */
  phone: "+20 155 604 4771",

  /* العنوان ولينك الخريطة. سيبهم فاضيين "" لو مش عايز يظهروا */
  address: "بهنباي – شارع المنشية – بجوار صيدلية د/ أحمد الهادي، الزقازيق",
  mapLink: "",

  /* مواعيد الشغل: كل سطر بين علامتين تنصيص */
  hours: [
    "Men · every day: 12 – 2 PM and 6:30 PM – 2 AM",
    "Women · every day: 3 – 6 PM, plus Sat, Mon & Wed: 9 – 11 AM"
  ],

  /* بانر العروض اللي فوق الموقع. on:false يخفيه */
  promo: {
    on: true,
    text: "🔥 Free first session for new members this month. Ask on WhatsApp!"
  },

  /* قايمة التنقل. id لازم يطابق id الصفحة في index.html. الترتيب = ترتيب الظهور */
  nav: [
    { id: "home",     label: "Home" },
    { id: "online",   label: "Online Coaching" },
    { id: "gym",      label: "Gym" },
    { id: "recovery", label: "Recovery" },
    { id: "coach",    label: "Coach" },
    { id: "tools",    label: "Calculator" },
    { id: "contact",  label: "Contact" }
  ],

  /* لينكات السوشيال. url:"auto" معناها يتبني لوحده من رقم الواتساب فوق */
  // socials: [
  //   { name: "WhatsApp",  url: "auto" },
  //   { name: "Instagram", url: "https://www.instagram.com/mohamed_soliman1995/" },
  //   { name: "Facebook",  url: "https://www.facebook.com/share/1FkpUjHo4k/" },
  //   { name: "TikTok",    url: "https://www.tiktok.com/@elcoachmohamedsoliman" },
  //   { name: "YouTube",   url: "https://www.youtube.com/channel/UC_hvExWah3LdlDTCSiYtg3w" }
  // ]



  /* لينكات السوشيال مع الأيقونات */
  socials: [
    { name: "WhatsApp",  icon: "fab fa-whatsapp",  url: "auto" },
    { name: "Instagram", icon: "fab fa-instagram", url: "https://www.instagram.com/mohamed_soliman1995/" },
    { name: "Facebook",  icon: "fab fa-facebook",  url: "https://www.facebook.com/share/1FkpUjHo4k/" },
    { name: "TikTok",    icon: "fab fa-tiktok",    url: "https://www.tiktok.com/@elcoachmohamedsoliman" },
    { name: "YouTube",   icon: "fab fa-youtube",   url: "https://www.youtube.com/channel/UC_hvExWah3LdlDTCSiYtg3w" }
  ]



};
