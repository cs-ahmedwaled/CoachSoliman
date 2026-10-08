/* =====================================================================
   WHATSAPP MESSAGES  |  رسايل الواتساب
   ---------------------------------------------------------------------
   Edit here: the text that arrives on your WhatsApp when someone
   taps a button or sends a form.
   عدّل هنا: نص الرسالة اللي بتوصلك على الواتساب لما حد يضغط زرار أو يبعت فورم.

   Words inside { } are filled in automatically. Keep them as they are,
   but you can move them or delete them.
   الكلمات اللي بين { } بتتملى لوحدها. سيبها زي ما هي (تقدر تحركها مكانها).
   Use \n for a new line.
   ===================================================================== */

const MESSAGES = {

  /* Quick buttons | الأزرار السريعة */
  quick: {
    question:   "Hi, I'd like to ask a question",                       /* زرار الواتساب العايم */
    membership: "Hi, I'd like to ask about a gym membership",           /* Ask about membership */
    trial:      "Hi, I'd like to book a free trial visit at the gym",   /* Book a free trial */
    coach:      "Hi Coach, I'd like to start training with you"         /* Message the coach */
  },

  /* Package buttons | أزرار الباقات
     Available: {category} {plan} {price} */
  gymJoin:    "Hi, I'd like to join the gym - {category} {plan} ({price})",
  recoveryJoin: "Hi, I'd like to book the Recovery {plan} ({price})",
  kidsEnroll: "Hi, I'd like to enroll my child in {plan} ({price})",

  /* Online coaching form | فورم الاشتراك أونلاين
     Available: {name} {weight} {height} {goal} {package} */
  onlineRequest:
    "Online coaching request\nName: {name}\nWeight: {weight} kg\nHeight: {height} cm\nGoal: {goal}\nPackage: {package}",

  /* Calculator "send to coach" button | زرار إرسال نتيجة الحاسبة
     Available: {weight} {height} {age} {goal} {bmi} {kcal} {protein} */
  calculator:
    "Hi Coach, my name is {name} , and I used the calculator.\nWeight: {weight} kg, Height: {height} cm, Age: {age}\nGoal: {goal}\nBMI {bmi}, target {kcal} kcal, protein {protein} g.\nI'd like a plan."
};
