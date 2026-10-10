const eventData = [
  {
    id: "gameforge",
    name: "Gameforge",
    category: "Technical",
    date: "10 Oct",
    time: "9:00 AM – 1:00 PM",
    venue: "PTA Hall",
    description: "Bring your strategy, your squad, and your competitive side.",
    fee: 100,
    seats: 34,
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80",
    tone: "#ef4d32",
  },
  {
    id: "bid-to-build",
    name: "Bid-to-Build",
    category: "Technical",
    date: "10 Oct",
    time: "9:00 AM – 1:00 PM",
    venue: "Room 511",
    description: "Think fast, bid smart, and turn your idea into a build.",
    fee: 80,
    seats: 18,
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=900&q=80",
    tone: "#a9d8ee",
  },
  {
    id: "3d-rendering",
    name: "3D Rendering Workshop",
    category: "Technical",
    date: "10 Oct",
    time: "9:00 AM – 1:00 PM",
    venue: "Room 308",
    description: "Turn imagination into dimensional worlds.",
    fee: 150,
    seats: 12,
    image:
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=900&q=80",
    tone: "#f0a6bb",
  },
  {
    id: "green-tech",
    name: "Sustainable Engineering & Green Tech",
    category: "Technical",
    date: "10 Oct",
    time: "9:00 AM – 1:00 PM",
    venue: "Room 312",
    description: "Fresh ideas for a future worth building.",
    fee: 50,
    seats: 22,
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80",
    tone: "#b7d5a0",
  },
  {
    id: "volt-forge",
    name: "Volt Forge",
    category: "Technical",
    date: "10 Oct",
    time: "9:00 AM – 1:00 PM",
    venue: "Room 218 (Lab)",
    description: "Put your engineering instincts to the test.",
    fee: 100,
    seats: 0,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    tone: "#f6cf42",
  },
  {
    id: "vaakevedha",
    name: "Vaakevedha",
    category: "Cultural",
    date: "10 Oct",
    time: "9:00 AM – 1:00 PM",
    venue: "Civil Seminar Hall",
    description: "Words, wit, and ideas that deserve the spotlight.",
    fee: 50,
    seats: 16,
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80",
    tone: "#f0a6bb",
  },
  {
    id: "layam",
    name: "Layam",
    category: "Cultural",
    date: "10 Oct",
    time: "9:00 AM – 11:30 AM",
    venue: "Seminar Hall",
    description: "Feel the rhythm. Find the pulse.",
    fee: 75,
    seats: 26,
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    tone: "#a9d8ee",
  },
  {
    id: "brush-beyond",
    name: "Brush and Beyond",
    category: "Cultural",
    date: "10 Oct",
    time: "10:00 AM – 12:00 PM",
    venue: "S7 ERE – Room 118",
    description: "A creative playground for the imaginative.",
    fee: 50,
    seats: 9,
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=80",
    tone: "#f6cf42",
  },
  {
    id: "frame-fusion",
    name: "Frame Fusion Screening",
    category: "Cultural",
    date: "10 Oct",
    time: "10:00 AM – 12:00 PM",
    venue: "LITAA Hall",
    description: "Stories, frames, and the magic of seeing differently.",
    fee: 0,
    seats: 40,
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80",
    tone: "#b7d5a0",
  },
  {
    id: "pitch-perfect",
    name: "Pitch Perfect",
    category: "Cultural",
    date: "10 Oct",
    time: "1:00 PM – 3:00 PM",
    venue: "Amphicourt",
    description: "Own the mic and turn your moment into a memory.",
    fee: 60,
    seats: 20,
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&q=80",
    tone: "#f0a6bb",
  },
  {
    id: "battle-bands",
    name: "Battle of Bands",
    category: "Proshow",
    date: "10 Oct",
    time: "10:00 AM – 2:30 PM",
    venue: "Main Stage",
    description: "A demo listing for the loudest showdown of the day.",
    fee: 150,
    seats: 85,
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
    tone: "#ef4d32",
  },
  {
    id: "thamarassery",
    name: "Thamarassery Churam + ft Sachin Warrier",
    category: "Proshow",
    date: "10 Oct",
    time: "6:30 PM – 8:30 PM",
    venue: "Main Stage",
    description: "Verify ticketing and performer details with organisers.",
    fee: 0,
    seats: 120,
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=900&q=80",
    tone: "#a9d8ee",
  },
];
const pageCategory = document.body.classList.contains("tech-page")
  ? "Technical"
  : document.body.classList.contains("culture-page")
    ? "Cultural"
    : "Proshow";
const byId = (id) => document.getElementById(id);
let regs = JSON.parse(localStorage.getItem("yd26_registrations") || "[]"),
  seatState = JSON.parse(localStorage.getItem("yd26_seats") || "{}");
const left = (e) =>
  Object.prototype.hasOwnProperty.call(seatState, e.id)
    ? seatState[e.id]
    : e.seats;
function render() {
  const q = byId("pageSearch").value.toLowerCase().trim();
  const list = eventData.filter(
    (e) =>
      e.category === pageCategory &&
      [e.name, e.description, e.venue].join(" ").toLowerCase().includes(q),
  );
  byId("categoryGrid").innerHTML = list
    .map((e) => {
      const full = left(e) <= 0;
      return (
        '<article class="event-card"><div class="event-poster" style="background:' +
        e.tone +
        '"><img src="' +
        e.image +
        '" alt="' +
        e.name +
        ' event artwork" loading="lazy" onerror="this.style.display=\'none\'"><span class="poster-stamp">' +
        (full ? "FULL" : e.category.toUpperCase()) +
        '</span><span class="poster-title">' +
        e.name +
        '</span></div><div class="event-body"><span class="event-category">' +
        e.category +
        "</span><h3>" +
        e.name +
        '</h3><p class="event-description">' +
        e.description +
        '</p><div class="event-meta"><span><b>DATE / TIME</b>' +
        e.date +
        "<br>" +
        e.time +
        "</span><span><b>VENUE</b>" +
        e.venue +
        "</span><span><b>DEMO FEE</b>" +
        (e.fee ? "₹" + e.fee : "FREE") +
        "</span><span><b>STATUS</b>" +
        (full ? "REGISTRATION FULL" : "OPEN · DEMO") +
        '</span></div><div class="event-bottom"><span class="seat-count ' +
        (full ? "full" : "") +
        '">' +
        (full ? "✕ FULL" : "✳ " + left(e) + " SEATS LEFT") +
        '</span><button class="mini-button primary" data-register="' +
        e.id +
        '" ' +
        (full ? "disabled" : "") +
        ">" +
        (full ? "FULL" : "REGISTER ↗") +
        "</button></div></div></article>"
      );
    })
    .join("");
  byId("categoryEmpty").hidden = list.length > 0;
}
function openReg(id) {
  const e = eventData.find((x) => x.id === id);
  if (!e || left(e) <= 0) return;
  byId("selectedEventId").value = id;
  byId("modalEventLine").textContent =
    e.name +
    " · " +
    e.date +
    " · " +
    e.venue +
    " · DEMO FEE " +
    (e.fee ? "₹" + e.fee : "FREE");
  byId("registrationModal").hidden = false;
  document.body.classList.add("modal-open");
}
document.addEventListener("click", (e) => {
  const b = e.target.closest("[data-register]");
  if (b) openReg(b.dataset.register);
});
byId("pageSearch").addEventListener("input", render);
byId("registrationForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = byId("studentName").value.trim(),
    email = byId("studentEmail").value.trim(),
    phone = byId("studentPhone").value.replace(/[\s()-]/g, ""),
    event = eventData.find((x) => x.id === byId("selectedEventId").value);
  const checks = [
    ["nameError", name.length >= 2, "Enter your name (at least 2 characters)."],
    [
      "emailError",
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
      "Enter a valid email address.",
    ],
    [
      "phoneError",
      /^(\+91)?[6-9]\d{9}$/.test(phone),
      "Enter a valid 10-digit Indian mobile number.",
    ],
  ];
  let valid = true;
  checks.forEach(([id, ok, msg]) => {
    byId(id).textContent = ok ? "" : msg;
    if (!ok) valid = false;
  });
  if (!event || left(event) <= 0) valid = false;
  if (!valid) return;
  if (
    regs.some(
      (r) =>
        r.eventId === event.id && r.email.toLowerCase() === email.toLowerCase(),
    )
  ) {
    byId("emailError").textContent =
      "This email is already registered for this demo event.";
    return;
  }
  regs.push({
    name,
    email,
    phone,
    eventId: event.id,
    eventName: event.name,
    confirmed: true,
    at: new Date().toISOString(),
  });
  seatState[event.id] = left(event) - 1;
  localStorage.setItem("yd26_registrations", JSON.stringify(regs));
  localStorage.setItem("yd26_seats", JSON.stringify(seatState));
  byId("successMessage").textContent =
    "You’re all set, " +
    name +
    "! Your demo registration for " +
    event.name +
    " is saved in this browser. No real ticket has been issued.";
  byId("registrationModal").hidden = true;
  byId("successModal").hidden = false;
  render();
});
function close(id) {
  byId(id).hidden = true;
  if (byId("registrationModal").hidden && byId("successModal").hidden)
    document.body.classList.remove("modal-open");
}
byId("modalClose").addEventListener("click", () => close("registrationModal"));
byId("successClose").addEventListener("click", () => close("successModal"));
["registrationModal", "successModal"].forEach((id) =>
  byId(id).addEventListener("click", (e) => {
    if (e.target === byId(id)) close(id);
  }),
);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    close("registrationModal");
    close("successModal");
  }
});
byId("menuToggle").addEventListener("click", () => {
  const open = byId("mainNav").classList.toggle("open");
  byId("menuToggle").setAttribute("aria-expanded", String(open));
  byId("menuToggle").textContent = open ? "×" : "☰";
});
render();
