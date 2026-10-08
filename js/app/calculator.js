/* =====================================================================
   BODY CALCULATOR  |  حاسبة الجسم (BMI + سعرات + بروتين)
   Numbers and labels live in js/data/settings.js
   ===================================================================== */

function initCalculator() {
  const cfg = SETTINGS.calculator;

  $("#fCalc").onsubmit = e => {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(e.target));

    const name = f.name;

    const weight = +f.weight, height = +f.height, age = +f.age, activity = +f.activity;
    const goal = cfg.goals[f.goal];

    /* BMI */
    const bmi = weight / ((height / 100) ** 2);
    const bmiLabel = cfg.bmiRanges.find(r => bmi < r.below).label;

    /* Calories (Mifflin-St Jeor formula) */
    const bmr = 10 * weight + 6.25 * height - 5 * age + (f.sex === "m" ? 5 : -161);
    const maintenance = Math.round(bmr * activity);
    const target = Math.max(cfg.minCalories, maintenance + goal.kcalChange);

    /* Protein */
    const protein = Math.round(weight * cfg.proteinPerKg);

    const message = fill(MESSAGES.calculator, {
      name,
      weight, height, age, goal: goal.label,
      bmi: bmi.toFixed(1), kcal: target, protein
    });

    $("#calcOut").innerHTML = `
      <div class="res">
        <div class="card"><b>${esc(name)}</b><span>Name</span></div>
        <div class="card"><b>${bmi.toFixed(1)}</b><span>BMI · ${esc(bmiLabel)}</span></div>
        <div class="card"><b>${maintenance}</b><span>Maintenance kcal/day</span></div>
        <div class="card"><b>${target}</b><span>Target kcal/day (${esc(goal.label)})</span></div>
        <div class="card"><b>${protein} g</b><span>Protein/day</span></div>
      </div>
      <p class="calc-cta"><a class="btn btn-accent" href="${esc(waLink(message))}">Send my numbers to the coach</a></p>`;
  };
}
