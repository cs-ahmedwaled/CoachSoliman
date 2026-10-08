/* =====================================================================
   SETTINGS  |  إعدادات الفورم والحاسبة
   ---------------------------------------------------------------------
   Edit here: the "Goal" choices in the subscribe forms, and the
   numbers the body calculator uses.
   عدّل هنا: اختيارات "الهدف" في فورم الاشتراك، وأرقام الحاسبة.
   ===================================================================== */

const SETTINGS = {

  /* اختيارات "Goal" في فورمات الاشتراك (بتظهر في الفورمين) */
  leadGoals: [
    "Build muscle",
    "Cut and lose fat",
    "Lose weight",
    "General fitness"
  ],

  calculator: {

    /* أقل سعرات ممكن الحاسبة تقترحها */
    minCalories: 1200,

    /* جرام بروتين لكل كيلو من وزن الجسم */
    proteinPerKg: 1.8,

    /* الأهداف: المفتاح (cut / keep / bulk) ثابت، غيّر الاسم والسعرات بس.
       kcalChange = بتتضاف أو بتتخصم من سعرات الثبات */
    goals: {
      cut:  { label: "Lose fat",     kcalChange: -500 },
      keep: { label: "Maintain",     kcalChange: 0 },
      bulk: { label: "Build muscle", kcalChange: 300 }
    },

    /* تصنيف BMI: أول سطر ينطبق عليه الرقم (below = أقل من) */
    bmiRanges: [
      { below: 18.5,     label: "Underweight" },
      { below: 25,       label: "Healthy range" },
      { below: 30,       label: "Overweight" },
      { below: Infinity, label: "Obese" }
    ]
  }
};
