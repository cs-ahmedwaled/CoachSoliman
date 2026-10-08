/* =====================================================================
   I18N  |  تبديل اللغة (English ⇄ العربية)
   Loads last. It does not change any other file: it translates the page
   text in place and flips the page direction (LTR ⇄ RTL).
   WhatsApp messages and form values stay exactly as before (English).
   To fix or add an Arabic word, edit the AR table below.
   ===================================================================== */
(function () {
  "use strict";

  /* ---------- English → Arabic dictionary (exact text) ---------- */
  const AR = {
    /* menu */
    "Home": "الرئيسية", "Online": "أونلاين", "Gym": "الجيم", "Recovery": "ريكفري",
    "Coach": "الكوتش", "Calculator": "الحاسبة", "Contact": "تواصل",

    /* top / header / footer */
    "🔥 Free first session for new members this month. Ask on WhatsApp!": "🔥 أول حصة مجانية للمشتركين الجدد هذا الشهر. اسأل على واتساب!",
    "© Coach Soliman. Every request goes straight to WhatsApp.": "© Coach Soliman. كل طلب يصل مباشرة على واتساب.",
    "Toggle dark mode": "تبديل الوضع الداكن", "Switch language": "تغيير اللغة",
    "Back to top": "العودة للأعلى", "Photo viewer": "عارض الصور", "Close": "إغلاق",
    "Previous photo": "الصورة السابقة", "Next photo": "الصورة التالية",
    "Coach Soliman | Gym • Online Coaching": "Coach Soliman | جيم • تدريب أونلاين",

    /* home */
    "The iron won't lift itself.": "الحديد مش هيرفع نفسه.",
    "A fully equipped gym and online coaching built around you.": "جيم مجهز بالكامل وتدريب أونلاين مصمم خصيصًا لك.",
    "Start your journey": "ابدأ رحلتك", "Visit the gym": "زر الجيم",
    "Online Coaching": "التدريب أونلاين",
    "A custom training and nutrition plan, with weekly WhatsApp check-ins from anywhere.": "خطة تمرين وتغذية مخصصة لك، مع متابعة أسبوعية على واتساب من أي مكان.",
    "See packages →": "شاهد الباقات ←",
    "The Gym": "الجيم",
    "Imported machines, air conditioning, and separate women's and men's hours.": "أجهزة مستوردة، تكييف، ومواعيد منفصلة للسيدات والرجال.",
    "See memberships →": "شاهد الاشتراكات ←",
    "What members say": "آراء المشتركين", "FAQ": "الأسئلة الشائعة",

    /* online */
    "Video-guided programs, a nutrition plan built for you, and weekly follow-up on WhatsApp. Train at the gym or at home, with me in your corner.": "برامج تمرين بالفيديو، وخطة تغذية مصممة لك، ومتابعة أسبوعية على واتساب. تمرّن في الجيم أو في المنزل وأنا بجانبك.",
    "Packages": "الباقات", "Client results": "نتائج العملاء",
    "Subscribe now": "اشترك الآن", "Subscribe": "اشترك",
    "Answer a few quick questions and your request goes straight to my WhatsApp.": "أجب عن بضعة أسئلة سريعة ليصل طلبك مباشرة إلى واتساب الكوتش.",
    "Name": "الاسم", "Weight (kg)": "الوزن (كجم)", "Height (cm)": "الطول (سم)",
    "Goal": "الهدف", "Package": "الباقة",
    "Send request on WhatsApp": "أرسل الطلب على واتساب",
    "Fill in your details, choose your package, and your request opens on the coach's WhatsApp in a new window.": "املأ بياناتك واختر باقتك ليُفتح طلبك على واتساب الكوتش في نافذة جديدة.",
    "← Back to packages": "→ العودة إلى الباقات",
    "Custom nutrition": "تغذية مخصصة",
    "A meal plan built around your weight, goal and budget.": "خطة وجبات مبنية على وزنك وهدفك وميزانيتك.",
    "Video programs": "برامج بالفيديو",
    "Every exercise comes with a video so your form stays right.": "كل تمرين مرفق بفيديو ليظل أداؤك سليمًا.",
    "Ongoing support": "دعم مستمر",
    "Replies on WhatsApp and program updates every two weeks.": "ردود على واتساب وتحديث للبرنامج كل أسبوعين.",
    "50% OFF": "خصم 50%", "Best value": "الأفضل قيمة",
    "Video training program": "برنامج تمرين بالفيديو", "Nutrition plan": "خطة تغذية",
    "WhatsApp follow-up": "متابعة على واتساب",
    "Program update every 2 weeks": "تحديث البرنامج كل أسبوعين",
    "Monthly check-in call": "مكالمة متابعة شهرية", "Priority replies": "أولوية في الرد",
    "Supplement guidance": "إرشادات المكملات الغذائية",

    /* gym */
    "Plenty of space, good lighting, imported machines, and a clean floor you'll notice from day one.": "مساحة واسعة، إضاءة ممتازة، أجهزة مستوردة، ونظافة ستلاحظها من أول يوم.",
    "Facilities": "المرافق", "Memberships": "الاشتراكات",
    "Every package includes an InBody scan, a personalized nutrition plan and a personalized training program.": "تشمل كل باقة قياس InBody وخطة تغذية مخصصة وبرنامج تدريب مخصص.",
    "Kids Academy": "أكاديمية الأطفال",
    "Martial arts and fitness classes for kids, taught by specialized instructors.": "حصص فنون قتالية ولياقة للأطفال يقدمها مدربون متخصصون.",
    "Book a free trial": "احجز حصة تجريبية مجانية",
    "Pick a time that suits you and we'll confirm on WhatsApp.": "اختر الوقت المناسب لك وسنؤكد الحجز على واتساب.",
    "Phone": "الهاتف", "Preferred time": "الوقت المفضل", "Book on WhatsApp": "احجز على واتساب",
    "Hours & contact": "المواعيد والتواصل", "Opening hours": "مواعيد العمل",
    "Address:": "العنوان:", "Call:": "اتصل:",
    "· Open map": "· افتح الخريطة", "· Copy": "· نسخ", "· Copied ✓": "· تم النسخ ✓",
    "Ask about membership": "اسأل عن الاشتراك",
    "Men · every day: 12 – 2 PM and 6:30 PM – 2 AM": "الرجال · يوميًا: 12 – 2 م و6:30 م – 2 ص",
    "Women · every day: 3 – 6 PM, plus Sat, Mon & Wed: 9 – 11 AM": "السيدات · يوميًا: 3 – 6 م، بالإضافة إلى السبت والاثنين والأربعاء: 9 – 11 ص",
    "Men · 12 – 2 PM": "الرجال · 12 – 2 م", "Men · 6:30 PM – 2 AM": "الرجال · 6:30 م – 2 ص",
    "Women · 3 – 6 PM": "السيدات · 3 – 6 م", "Women · 9 – 11 AM (Sat, Mon, Wed)": "السيدات · 9 – 11 ص (السبت، الاثنين، الأربعاء)",
    "Basic": "أساسي", "Weight Loss": "إنقاص الوزن", "VIP": "VIP",
    "Weights & fitness": "أوزان ولياقة", "Weights, fitness & cardio": "أوزان ولياقة وكارديو",
    "Weights, cardio & sauna": "أوزان وكارديو وساونا",
    "Weights & fitness sessions": "حصص أوزان ولياقة",
    "Full month": "شهر كامل",
    "Full month · weights & fitness": "شهر كامل · أوزان ولياقة",
    "Full month · weights, fitness & cardio": "شهر كامل · أوزان ولياقة وكارديو",
    "InBody scan": "قياس InBody", "Personalized nutrition plan": "خطة تغذية مخصصة",
    "Personalized training program": "برنامج تدريب مخصص",
    "🎉 Friends offer (limited time): EGP 50 off any monthly subscription when two friends join together.": "🎉 عرض الأصدقاء (لفترة محدودة): خصم 50 جنيه على أي اشتراك شهري عند اشتراك صديقين معًا.",
    "EGP": "جنيه", "EGP / month": "جنيه / شهر",
    "Gymnastics": "جمباز", "Kung Fu": "كونغ فو", "Kickboxing": "كيك بوكسينج", "Karate": "كاراتيه",
    "Main training floor": "صالة التمرين الرئيسية", "Dumbbell rack": "رف الدمبل", "Cardio zone": "منطقة الكارديو",
    "Functional training room": "غرفة التدريب الوظيفي", "Precor machines": "أجهزة Precor",
    "Weight training area": "منطقة تمارين الأوزان",
    "❄️ Central A/C": "❄️ تكييف مركزي", "👩 Women's hours": "👩 مواعيد السيدات", "👨 Men's hours": "👨 مواعيد الرجال",
    "🥤 In-gym nutrition bar": "🥤 بار تغذية داخل الجيم", "🏋️ Imported machines": "🏋️ أجهزة مستوردة",
    "🚿 Lockers and showers": "🚿 خزائن وحمامات", "🅿️ Parking": "🅿️ موقف سيارات",

    /* recovery */
   /* recovery */
"Choose the recovery package that suits you.": "اختر باقة الريكفري المناسبة لك.",
"Iron Package": "الباقة الحديدية",
"Copper Package": "الباقة النحاسية",
"Bronze Package": "الباقة البرونزية",
"Silver Package": "الباقة الفضية",
"Gold Package": "الباقة الذهبية",
"Back cupping (hijama)": "حجامة للظهر",
"Full-body cupping (hijama)": "حجامة للجسم كامل",
"Full-body cupping (sliding, dry & wet cupping)": "حجامة للجسم كامل (حجامة منزلقة - حجامة جافة - حجامة تشريطية)",
"Chiropractic": "كايروبراكتيك",
"Chiropractic adjustment": "تقويم العظام (كايروبراكتيك)",
"Fire towel": "فوطة نارية",
"Full-body fire towel": "فوطة نارية للجسم كامل",
"Machine massage": "مساج بالأجهزة",
"Manual massage": "مساج يدوي",
"Targeted muscle relief": "تخفيف آلام العضلات",
"Post-session consultation": "استشارة ما بعد الجلسة",
"Basic recovery kit": "مجموعة ريكفري أساسية",
"Joint mobility assessment": "تقييم مرونة المفاصل",

    /* coach */
    "Meet the coach": "تعرّف على الكوتش", "Message the coach": "راسل الكوتش",
    "Coach Mohammed Soliman": "الكوتش محمد سليمان",
    "Certified fitness and nutrition coach. I've helped people transform their bodies for over 8 years, and I believe any goal is reachable with a clear plan and consistency.": "مدرب لياقة وتغذية معتمد. ساعدت الناس على تغيير أجسامهم لأكثر من 8 سنوات، وأؤمن بأن أي هدف يمكن الوصول إليه بخطة واضحة والتزام.",
    "Years of experience": "سنوات خبرة", "Clients coached": "عميل تم تدريبه", "Competitions": "مسابقات",
    "Certified Personal Trainer": "مدرب شخصي معتمد", "Sports Nutrition": "التغذية الرياضية",
    "Sports Physiotherapy": "العلاج الطبيعي الرياضي",
    /* التشهادات والصلاحيات الجديدة */
    "Certified Personal Trainer (ISSA)": "مدرب شخصي معتمد (ISSA)",
    "Sports Nutrition (ISSA)": "التغذية الرياضية (ISSA)",
    "Certified International Trainer": "مدرب دولي معتمد",
    "Member of the Sports Professions Syndicate": "عضو نقابة المهن الرياضية",

    /* reviews + FAQ */
    "Mohamed A.": "محمد أ.", "Sara H.": "سارة هـ.", "Online client": "عميل أونلاين", "Gym member": "مشترك بالجيم",
    "Lost 12 kg in 3 months. The plan is clear and the weekly follow-up is real.": "نزلت 12 كجم في 3 شهور. الخطة واضحة والمتابعة الأسبوعية حقيقية.",
    "The gym is spotless and the women's hours are comfortable. Great machines.": "الجيم نظيف جدًا ومواعيد السيدات مريحة. أجهزة ممتازة.",
    "How does online coaching work?": "كيف يعمل التدريب أونلاين؟",
    "You fill in a short form, I message you on WhatsApp, and you get a training and nutrition plan built for your goal, with regular check-ins.": "تملأ نموذجًا قصيرًا، ثم أراسلك على واتساب، وتحصل على خطة تمرين وتغذية مبنية على هدفك مع متابعة منتظمة.",
    "Can I train at home?": "هل أستطيع التمرن في المنزل؟",
    "Yes. Programs can be built for the gym or for home with minimal equipment.": "نعم. يمكن تصميم البرامج للجيم أو للمنزل بأدوات بسيطة.",
    "How do I pay?": "كيف أدفع؟",
    "We confirm the package on WhatsApp and agree on a payment method there.": "نؤكد الباقة على واتساب ونتفق هناك على طريقة الدفع.",
    "Do you offer a trial for the gym?": "هل توجد حصة تجريبية في الجيم؟",
    "Yes, message us on WhatsApp to book a free trial visit.": "نعم، راسلنا على واتساب لحجز زيارة تجريبية مجانية.",

    /* goals + calculator */
    "Build muscle": "بناء العضلات", "Cut and lose fat": "تنشيف وحرق الدهون", "Lose weight": "إنقاص الوزن",
    "General fitness": "لياقة عامة", "Lose fat": "حرق الدهون", "Maintain": "الحفاظ على الوزن",
    "Underweight": "نحافة", "Healthy range": "وزن صحي", "Overweight": "وزن زائد", "Obese": "سمنة",
    "Body calculator": "حاسبة الجسم",
    "Get your BMI, daily calories and a protein target in seconds. Then send the numbers to the coach for a real plan.": "احصل على مؤشر كتلة الجسم وسعراتك اليومية وهدف البروتين في ثوانٍ، ثم أرسل النتائج للكوتش للحصول على خطة حقيقية.",
    "Sex": "النوع", "Male": "ذكر", "Female": "أنثى", "Age": "العمر", "Activity": "النشاط",
    "Little or no exercise": "قليل أو بدون تمرين", "Light (1-3 days/week)": "خفيف (1-3 أيام/أسبوع)",
    "Moderate (3-5 days/week)": "متوسط (3-5 أيام/أسبوع)", "Heavy (6-7 days/week)": "مرتفع (6-7 أيام/أسبوع)",
    "Calculate": "احسب", "Estimates only, not medical advice.": "تقديرات فقط وليست نصيحة طبية.",
    "Maintenance kcal/day": "سعرات الثبات/يوم", "Protein/day": "البروتين/يوم", "Carbs/day": "الكربوهيدرات/يوم",
    "Fat/day": "الدهون/يوم", "Water/day": "الماء/يوم", "Reference weight (Devine)": "الوزن المرجعي (Devine)",
    "Send my numbers to the coach": "أرسل أرقامي للكوتش",
    "Strength calculator (1RM)": "حاسبة القوة (1RM)",
    "Enter a set you just lifted and get your estimated one-rep max, plus working weights.": "أدخل مجموعة قمت برفعها لتحصل على أقصى وزن تقديري لتكرار واحد، مع أوزان التمرين.",
    "Weight lifted (kg)": "الوزن المرفوع (كجم)", "Reps": "التكرارات", "Estimate 1RM": "احسب 1RM",
    "Estimated 1RM": "1RM التقديري",
    "Epley formula estimate. Warm up well and use a spotter for heavy lifts.": "تقدير بمعادلة Epley. سخّن جيدًا واستعن بمساعد في الأوزان الثقيلة.",
    "Rest timer": "مؤقت الراحة", "Start": "ابدأ", "Pause": "إيقاف مؤقت", "Reset": "إعادة", "Time's up!": "انتهى الوقت!",
    "Progress tracker": "متابعة التقدم",
    "Log your weight and watch the trend. Saved only on this device.": "سجّل وزنك وتابع التغيّر. يُحفظ على هذا الجهاز فقط.",
    "Date": "التاريخ", "Add entry": "إضافة", "Clear log": "مسح السجل",
    "Add one more entry to see your trend.": "أضف قياسًا آخر لتشاهد التغيّر.", "No entries yet.": "لا توجد قياسات بعد.",
    "Clear all entries?": "مسح كل القياسات؟",

    /* contact */
    "Contact us": "تواصل معنا",
    "WhatsApp is the fastest way to reach us. You can also find us on every platform.": "واتساب هو أسرع طريقة للتواصل معنا، ويمكنك أيضًا إيجادنا على جميع المنصات.",
    "Share this site": "شارك الموقع", "Link copied ✓": "تم نسخ الرابط ✓"
  };

  /* ---------- Patterns for text that has numbers / is built live ---------- */
  const monthName = n => n == 1 ? "شهر واحد" : n == 2 ? "شهران" : n <= 10 ? n + " أشهر" : n + " شهرًا";
  const monthOf   = n => n == 1 ? "شهر" : n == 2 ? "شهرين" : n <= 10 ? n + " أشهر" : n + " شهرًا";
  const UNIT = { kg: "كجم", g: "جم", L: "لتر" };
  const DAY = { Sun: "الأحد", Mon: "الاثنين", Tue: "الثلاثاء", Wed: "الأربعاء", Thu: "الخميس", Fri: "الجمعة", Sat: "السبت",
                today: "اليوم", tomorrow: "غدًا" };
  const ampm = s => s.replace(/ AM$/, " ص").replace(/ PM$/, " م");

  const PATTERNS = [
    [/^(\d+) Months?$/, (m) => monthName(+m[1])],
    [/^Everything in (\d+) Months?$/, (m) => "كل مميزات باقة " + monthOf(+m[1])],
    [/^(\d+) sessions?$/, (m) => m[1] + " حصة"],
    [/^(\d+) sauna sessions?$/, (m) => m[1] + " حصص ساونا"],
    [/^≈ ([\d.]+) EGP \/ (month|session)$/, (m) => "≈ " + m[1] + " جنيه / " + (m[2] === "month" ? "شهر" : "حصة")],
    [/^([\d.]+) (kg|g|L)$/, (m) => m[1] + " " + UNIT[m[2]]],
    [/^(\d+)% · about (\d+) reps$/, (m) => m[1] + "% · حوالي " + m[2] + " تكرار"],
    [/^Client (\d+)$/, (m) => "العميل " + m[1]],
    [/^(\d+(?:\.\d+)?) min$/, (m) => m[1] + " دقيقة"],
    [/^Target kcal\/day \((.+)\)$/, (m) => "السعرات المستهدفة/يوم (" + tr(m[1]) + ")"],
    [/^(.+) - (\d+) EGP$/, (m) => tr(m[1]) + " - " + m[2] + " جنيه"],
    [/^● (Men|Women): (.+)$/, (m) => "● " + (m[1] === "Men" ? "الرجال" : "السيدات") + ": " + openText(m[2])],
    [/^(.+ → .+ · .+ → .+) kg \((.+) kg\)$/, (m) => m[1] + " كجم (" + m[2] + " كجم)"]
  ];

  function openText(s) {
    let m;
    if ((m = /^open now · until (.+)$/.exec(s))) return "مفتوح الآن · حتى " + ampm(m[1]);
    if ((m = /^closed · opens (\S+) (.+)$/.exec(s))) return "مغلق · يفتح " + (DAY[m[1]] || m[1]) + " " + ampm(m[2]);
    if (s === "closed") return "مغلق";
    return s;
  }

  /* Translate one trimmed string. Returns the same string if unknown. */
  function tr(t) {
    if (Object.prototype.hasOwnProperty.call(AR, t)) return AR[t];
    for (const [re, fn] of PATTERNS) { const m = re.exec(t); if (m) return fn(m); }
    if (t.indexOf(" · ") > -1) {                 /* "Name · Role", "BMI · Healthy range" */
      const parts = t.split(" · "), out = parts.map(p => tr(p));
      if (out.some((p, i) => p !== parts[i])) return out.join(" · ");
    }
    return t;
  }
  function trKeep(s) {                            /* keep leading/trailing spaces */
    const t = s.trim();
    if (!t) return s;
    const r = tr(t);
    return r === t ? s : s.replace(t, () => r);
  }

  /* ---------- Apply / restore on the live page ---------- */
  let lang = "en";
  const textRec = new WeakMap();   /* text node → { en, ar } */
  const attrRec = new WeakMap();   /* element → { attr: { en, ar } } */
  const ATTRS = ["aria-label", "alt", "title"];

  function skip(node) {
    const p = node.parentElement;
    return !p || /^(SCRIPT|STYLE|NOSCRIPT)$/.test(p.tagName) || p.closest(".logo");
  }

  function doText(node) {
    if (skip(node)) return;
    const rec = textRec.get(node);
    if (lang === "ar") {
      if (rec && node.data === rec.ar) return;               /* our own write */
      const en = node.data, ar = trKeep(en);
      textRec.set(node, { en, ar });
      if (ar !== en) {
        const p = node.parentElement;                         /* keep <option> values in English */
        if (p && p.tagName === "OPTION" && !p.hasAttribute("value")) p.setAttribute("value", en.trim());
        node.data = ar;
      }
    } else if (rec && node.data === rec.ar) {
      node.data = rec.en;
      textRec.delete(node);
    }
  }

  function doAttr(el, name) {
    if (!el.hasAttribute(name)) return;
    const all = attrRec.get(el) || {}, rec = all[name], cur = el.getAttribute(name);
    if (lang === "ar") {
      if (rec && cur === rec.ar) return;
      const ar = trKeep(cur);
      all[name] = { en: cur, ar }; attrRec.set(el, all);
      if (ar !== cur) el.setAttribute(name, ar);
    } else if (rec && cur === rec.ar) {
      el.setAttribute(name, rec.en);
      delete all[name];
    }
  }

  function walk(root) {
    if (root.nodeType === 3) { doText(root); return; }
    if (root.nodeType !== 1) return;
    ATTRS.forEach(a => doAttr(root, a));
    root.querySelectorAll("[aria-label],[alt],[title]").forEach(el => ATTRS.forEach(a => doAttr(el, a)));
    const tw = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (tw.nextNode()) nodes.push(tw.currentNode);
    nodes.forEach(doText);
  }

  /* Catch text the page builds later (calculator results, timer, "open now"...) */
  const observer = new MutationObserver(records => {
    if (lang !== "ar") return;
    records.forEach(r => {
      if (r.type === "childList") r.addedNodes.forEach(walk);
      else if (r.type === "characterData") doText(r.target);
      else if (r.type === "attributes") doAttr(r.target, r.attributeName);
    });
  });
  observer.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS });

  /* Native confirm() box (used by "Clear log") */
  const nativeConfirm = window.confirm;
  window.confirm = msg => nativeConfirm.call(window, lang === "ar" ? trKeep(String(msg)) : msg);

  /* ---------- Switch ---------- */
  const enTitle = document.title, btn = document.getElementById("langBtn");

  function setLang(next, save) {
    lang = next;
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    walk(document.body);
    document.title = lang === "ar" ? tr(enTitle) : enTitle;
    btn.textContent = lang === "ar" ? "EN" : "ع";
    btn.setAttribute("aria-label", lang === "ar" ? "Switch to English" : "التبديل إلى العربية");
    if (save) { try { localStorage.setItem("lang", lang); } catch (e) { /* storage blocked */ } }
  }

  btn.onclick = () => setLang(lang === "ar" ? "en" : "ar", true);

  let saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) { /* ignore */ }
  if (saved === "ar") setLang("ar", false);
})();
