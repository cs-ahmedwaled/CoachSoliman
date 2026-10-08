/* =====================================================================
   CONTENT  |  المحتوى
   ---------------------------------------------------------------------
   Edit here: coach info, photos, reviews, FAQ, gym features.
   عدّل هنا: بيانات الكوتش، الصور، الآراء، الأسئلة الشائعة، مميزات الجيم.
   Write plain text only (no HTML tags).
   To add an item: copy one { ... } block and paste it after a comma.
   ===================================================================== */

const CONTENT = {

  /* ---------- Coach | الكوتش ---------- */
  coach: {
    photo: "images/coach.jpg",
    name: "Coach Mohammed Soliman",
    bio: "Certified fitness and nutrition coach. I've helped people transform their bodies for over 8 years, and I believe any goal is reachable with a clear plan and consistency.",
    stats: [
      { value: "8+",   label: "Years of experience" },
      { value: "300+", label: "Clients coached" },
      { value: "12",   label: "Competitions" }
    ],
    certificates: [
      "Certified Personal Trainer (ISSA)",
      "Sports Nutrition (ISSA)",
      "Sports Physiotherapy",
      "Member of the Sports Professions Syndicate",
      "Certified International Trainer"
    ]
  },

  /* ---------- Online page: 3 benefit cards | مميزات الأونلاين ---------- */
  onlineBenefits: [
    { title: "Custom nutrition",  text: "A meal plan built around your weight, goal and budget." },
    { title: "Video programs",    text: "Every exercise comes with a video so your form stays right." },
    { title: "Ongoing support",   text: "Replies on WhatsApp and program updates every two weeks." }
  ],

  /* ---------- Gym photos | صور الجيم ---------- */
  /* src = مسار الصورة، caption = الكلمة اللي تظهر عليها. الصور جوه images/gallery/ */
  gallery: [
    { src: "images/gallery/weight-floor.jpg",     caption: "Main training floor" },
    { src: "images/gallery/dumbbell-rack.jpg",    caption: "Dumbbell rack" },
    { src: "images/gallery/cardio-zone.jpg",      caption: "Cardio zone" },
    { src: "images/gallery/functional-room.jpg",  caption: "Functional training room" },
    { src: "images/gallery/machines-row.jpg",     caption: "Precor machines" },
    { src: "images/gallery/training-area.jpg",    caption: "Weight training area" }
  ],

  /* ---------- Client results | نتايج العملاء ---------- */
  /* ---------- Client results | نتايج العملاء ---------- */
  /* ---------- Client results | نتايج العملاء ---------- */
  /* الصور جوه images/results/ */
  results: [
    { src: "images/results/client1.jpg", caption: "Client 1" },
    { src: "images/results/client2.jpg", caption: "Client 2" },
    { src: "images/results/client3.jpg", caption: "Client 3" },
    { src: "images/results/client4.jpg", caption: "Client 4" },
    { src: "images/results/client5.jpeg", caption: "Client 5" },
    { src: "images/results/client6.jpeg", caption: "Client 6" },
    { src: "images/results/client7.jpeg", caption: "Client 7" },
    { src: "images/results/client8.jpeg", caption: "Client 8" },
    { src: "images/results/client9.jpeg", caption: "Client 9" },
    { src: "images/results/client10.jpeg", caption: "Client 10" },
    { src: "images/results/client11.jpeg", caption: "Client 11" },
    { src: "images/results/client12.jpeg", caption: "Client 12" },
    { src: "images/results/client13.jpeg", caption: "Client 13" },
    { src: "images/results/client14.jpeg", caption: "Client 14" },
    { src: "images/results/client15.jpeg", caption: "Client 15" },
    { src: "images/results/client16.jpeg", caption: "Client 16" },
    { src: "images/results/client17.jpeg", caption: "Client 17" },
    { src: "images/results/client18.jpeg", caption: "Client 18" },
    { src: "images/results/client19.jpeg", caption: "Client 19" },
    { src: "images/results/client20.jpeg", caption: "Client 20" },
    { src: "images/results/client21.jpeg", caption: "Client 21" },
    { src: "images/results/client22.jpeg", caption: "Client 22" },
    { src: "images/results/client23.jpeg", caption: "Client 23" },
    { src: "images/results/client24.jpeg", caption: "Client 24" },
    { src: "images/results/client25.jpeg", caption: "Client 25" },
    { src: "images/results/client26.jpeg", caption: "Client 26" },
    { src: "images/results/client27.jpeg", caption: "Client 27" },
    { src: "images/results/client28.jpeg", caption: "Client 28" },
    { src: "images/results/client29.jpeg", caption: "Client 29" },
    { src: "images/results/client30.jpeg", caption: "Client 30" },
    { src: "images/results/client31.jpeg", caption: "Client 31" },
    { src: "images/results/client32.jpeg", caption: "Client 32" },

  ],

  /* ---------- Gym facilities | مميزات الجيم (الأيقونات الصغيرة) ---------- */
  features: [
    "❄️ Central A/C",
    "👩 Women's hours",
    "👨 Men's hours",
    "🥤 In-gym nutrition bar",
    "🏋️ Imported machines",
    "🚿 Lockers and showers",
    "🅿️ Parking"
  ],

  /* ---------- Reviews | آراء العملاء ---------- */
  reviews: [
    { name: "Mohamed A.", role: "Online client",
      text: "Lost 12 kg in 3 months. The plan is clear and the weekly follow-up is real." },
    { name: "Sara H.",    role: "Gym member",
      text: "The gym is spotless and the women's hours are comfortable. Great machines." }
  ],

  /* ---------- FAQ | الأسئلة الشائعة ---------- */
  faq: [
    { q: "How does online coaching work?",
      a: "You fill in a short form, I message you on WhatsApp, and you get a training and nutrition plan built for your goal, with regular check-ins." },
    { q: "Can I train at home?",
      a: "Yes. Programs can be built for the gym or for home with minimal equipment." },
    { q: "How do I pay?",
      a: "We confirm the package on WhatsApp and agree on a payment method there." },
    { q: "Do you offer a trial for the gym?",
      a: "Yes, message us on WhatsApp to book a free trial visit." }
  ]
};
