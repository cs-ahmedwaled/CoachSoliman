/* =====================================================================
   PRICING  |  الأسعار والباقات
   ---------------------------------------------------------------------
   Edit here: prices, package names, features, offers.
   عدّل هنا: الأسعار، أسماء الباقات، المميزات، العروض.

   Every package can have:
     name      اسم الباقة
     price     السعر (رقم أو نص)
     features  قايمة المميزات
     ribbon    شريط صغير فوق الكارت مثل "50% OFF"   (اختياري)
     popular   true = الكارت يتلون ويتميز            (اختياري)
     tag       كلمة صغيرة جنب العنوان مثل "Best value" (اختياري)
   To add a package: copy one { ... } block, paste it after a comma.
   To delete one: remove its whole { ... } block (and its comma).
   ===================================================================== */

const PRICING = {

  currency: "EGP",              /* العملة اللي بتظهر جنب كل سعر */
  subscribeLabel: "Subscribe",  /* كلمة الزرار على كل كارت */

  /* ---------- Online coaching packages | باقات الأونلاين ---------- */
  online: [
    {
      name: "1 Month", price: "600", ribbon: "50% OFF",
      features: ["Video training program", "Nutrition plan", "WhatsApp follow-up"]
    },
    {
      name: "2 Months", price: "1100", ribbon: "50% OFF",
      features: ["Everything in 1 Month", "Program update every 2 weeks"]
    },
    {
      name: "3 Months", price: "1500", ribbon: "50% OFF",
      features: ["Everything in 2 Months", "Monthly check-in call"],
      popular: true, tag: "Best value"
    },
    {
      name: "6 Months", price: "2500", ribbon: "50% OFF",
      features: ["Everything in 3 Months", "Priority replies", "Supplement guidance"]
    }
  ],

  /* ---------- Gym memberships | اشتراكات الجيم ---------- */

  /* المميزات دي بتتضاف تلقائي لكل باقة جيم تحت. غيّرها مرة واحدة هنا */
  gymCommonFeatures: [
    "InBody scan",
    "Personalized nutrition plan",
    "Personalized training program"
  ],

  gymCategories: [
    {
      title: "Basic", note: "Weights & fitness",
      plans: [
        { name: "12 sessions", price: "300",
          features: ["Weights & fitness sessions"] },
        { name: "16 sessions", price: "350",
          features: ["Weights & fitness sessions"] },
        { name: "24 sessions", price: "400",
          features: ["Full month · weights & fitness"],
          popular: true, tag: "Full month" }
      ]
    },
    {
      title: "Weight Loss", note: "Weights, fitness & cardio",
      plans: [
        { name: "12 sessions", price: "400",
          features: ["Weights, fitness & cardio"] },
        { name: "16 sessions", price: "500",
          features: ["Weights, fitness & cardio"] },
        { name: "24 sessions", price: "600",
          features: ["Full month · weights, fitness & cardio"],
          popular: true, tag: "Full month" }
      ]
    },
    {
      title: "VIP", note: "Weights, cardio & sauna",
      plans: [
        { name: "12 sessions", price: "500",
          features: ["Weights, fitness & cardio", "3 sauna sessions"] },
        { name: "16 sessions", price: "600",
          features: ["Weights, fitness & cardio", "4 sauna sessions"] },
        { name: "24 sessions", price: "750",
          features: ["Full month · weights, fitness & cardio", "6 sauna sessions"],
          popular: true, tag: "Full month" }
      ]
    }
  ],




recovery: [
  {
    name: "Iron Package", price: "400",
    features: [
      "Back cupping (hijama)",
      "Targeted muscle relief",
      "Post-session consultation",
      "Basic recovery kit"
    ]
  },
  {
    name: "Copper Package", price: "500",
    features: [
      "Chiropractic adjustment",
      "Machine massage",
      "Joint mobility assessment",
      "Post-session consultation"
    ]
  },
  {
    name: "Bronze Package", price: "750",
    features: ["Back cupping (hijama)", "Chiropractic", "Fire towel", "Machine massage"]
  },
  {
    name: "Silver Package", price: "1000",
    features: ["Full-body cupping (hijama)", "Chiropractic", "Fire towel", "Machine massage"]
  },
  {
    name: "Gold Package", price: "1500",
    features: ["Full-body cupping (sliding, dry & wet cupping)", "Chiropractic", "Full-body fire towel", "Machine massage", "Manual massage"],
    popular: true, tag: "Best value"
  }
],



  /* عرض الأصحاب. سيبه "" لو مش عايز يظهر */
  friendsOffer: "🎉 Friends offer (limited time): EGP 50 off any monthly subscription when two friends join together.",

  /* ---------- Kids Academy | أكاديمية الأطفال ---------- */
  kidsAcademy: [
    { name: "Gymnastics", price: "200", period: "/ month" },
    { name: "Kung Fu",    price: "200", period: "/ month" },
    { name: "Kickboxing", price: "200", period: "/ month" },
    { name: "Karate",     price: "200", period: "/ month" },
    { name: "MMA",        price: "250", period: "/ month" }
  ]
};
