const events = [
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
    capacity: 40,
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80",
    poster: "PLAY TO WIN",
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
    capacity: 24,
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=900&q=80",
    poster: "BUILD IT BIG",
    tone: "#a9d8ee",
  },
  {
    id: "3d-rendering",
    name: "3D Rendering Workshop",
    category: "Technical",
    date: "10 Oct",
    time: "9:00 AM – 1:00 PM",
    venue: "Room 308",
    description:
      "Explore the art of turning imagination into dimensional worlds.",
    fee: 150,
    seats: 12,
    capacity: 20,
    image:
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=900&q=80",
    poster: "MAKE IT REAL",
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
    capacity: 30,
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80",
    poster: "FUTURE FORWARD",
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
    capacity: 20,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    poster: "POWER UP",
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
    capacity: 24,
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80",
    poster: "SAY IT LOUD",
    tone: "#f0a6bb",
  },
  {
    id: "layam",
    name: "Layam",
    category: "Cultural",
    date: "10 Oct",
    time: "9:00 AM – 11:30 AM",
    venue: "Seminar Hall",
    description: "Feel the rhythm. Find the pulse. Bring your own energy.",
    fee: 75,
    seats: 26,
    capacity: 30,
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    poster: "FIND THE BEAT",
    tone: "#a9d8ee",
  },
  {
    id: "brush-beyond",
    name: "Brush and Beyond",
    category: "Cultural",
    date: "10 Oct",
    time: "10:00 AM – 12:00 PM",
    venue: "S7 ERE – Room 118",
    description: "A creative playground for the wonderfully imaginative.",
    fee: 50,
    seats: 9,
    capacity: 18,
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=80",
    poster: "MAKE A MESS",
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
    capacity: 40,
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80",
    poster: "ROLL CAMERA",
    tone: "#b7d5a0",
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
    capacity: 100,
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
    poster: "BATTLE THE NOISE",
    tone: "#ef4d32",
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
    capacity: 24,
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&q=80",
    poster: "OWN THE STAGE",
    tone: "#f0a6bb",
  },
  {
    id: "thamarassery",
    name: "Thamarassery Churam + ft Sachin Warrier",
    category: "Proshow",
    date: "10 Oct",
    time: "6:30 PM – 8:30 PM",
    venue: "Main Stage",
    description:
      "Mainstage demo listing based on the supplied day schedule. Verify ticketing details with organisers.",
    fee: 0,
    seats: 120,
    capacity: 120,
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=900&q=80",
    poster: "MAIN STAGE",
    tone: "#a9d8ee",
  },
];
const schedule = [
  ["Vaakevedha", "Civil Seminar Hall", "9:00 AM – 1:00 PM"],
  ["Gameforge", "PTA Hall", "9:00 AM – 1:00 PM"],
  ["Bid-to-Build", "Room 511", "9:00 AM – 1:00 PM"],
  ["3D Rendering Workshop", "Room 308", "9:00 AM – 1:00 PM"],
  ["Sustainable Engineering & Green Tech", "Room 312", "9:00 AM – 1:00 PM"],
  ["Volt Forge", "Room 218 (Lab)", "9:00 AM – 1:00 PM"],
  ["Ring & Win", "Main Entrance Hall (Left Side)", "9:00 AM – 5:00 PM"],
  ["Seoul Arcade", "Main Entrance Hall (Right Side)", "9:00 AM – 5:00 PM"],
  ["Layam", "Seminar Hall", "9:00 AM – 11:30 AM"],
  ["Brush and Beyond", "S7 ERE – Room 118", "10:00 AM – 12:00 PM"],
  ["Frame Fusion Screening", "LITAA Hall", "10:00 AM – 12:00 PM"],
  ["Battle of Bands", "Main Stage", "10:00 AM – 2:30 PM"],
  ["Pitch Perfect", "Amphicourt", "1:00 PM – 3:00 PM"],
  ["Xplore VLSI", "Room 512", "1:00 PM – 5:00 PM"],
  ["Echo", "Seminar Hall", "2:30 PM – 5:00 PM"],
  ["Build with Sticks", "S7 ERE – Room 118", "2:30 PM – 5:30 PM"],
  ["Sound Check", "Main Stage", "2:30 PM onwards"],
  [
    "Thamarassery Churam + ft Sachin Warrier",
    "Main Stage",
    "6:30 PM – 8:30 PM",
  ],
  ["Dalchum Showcase", "Main Stage", "8:45 PM – 9:00 PM"],
  ["Stomp the Yard", "Main Stage", "9:00 PM – 10:30 PM"],
];
const $ = (id) => document.getElementById(id);
let activeCategory = "All";
let registrations = JSON.parse(
  localStorage.getItem("yd26_registrations") || "[]",
);
let seatState = JSON.parse(localStorage.getItem("yd26_seats") || "{}");
let savedEvents = JSON.parse(localStorage.getItem("yd26_saved") || "[]");
const seatsLeft = (event) =>
  Object.prototype.hasOwnProperty.call(seatState, event.id)
    ? seatState[event.id]
    : event.seats;
const isFull = (event) => seatsLeft(event) <= 0;
function renderEvents() {
  const query = $("eventSearch").value.trim().toLowerCase();
  const shown = events.filter(
    (e) =>
      (activeCategory === "All" || e.category === activeCategory) &&
      `${e.name} ${e.category} ${e.venue} ${e.description}`
        .toLowerCase()
        .includes(query),
  );
  $("eventGrid").innerHTML = shown
    .map(
      (e) =>
        `<article class="event-card"><div class="event-poster" style="background:${e.tone}"><img src="${e.image}" alt="${e.name} event artwork" loading="lazy" onerror="this.style.display='none';this.parentElement.style.background='${e.tone}'"><span class="poster-stamp">${isFull(e) ? "FULL" : e.category.toUpperCase()}</span><span class="poster-title">${e.name}</span></div><div class="event-body"><span class="event-category">${e.category}</span><h3>${e.name}</h3><p class="event-description">${e.description}</p><div class="event-meta"><span><b>DATE / TIME</b>${e.date}<br>${e.time}</span><span><b>VENUE</b>${e.venue}</span><span><b>DEMO FEE</b>${e.fee === 0 ? "FREE" : "₹" + e.fee}</span><span><b>STATUS</b>${isFull(e) ? "REGISTRATION FULL" : "OPEN · DEMO"}</span></div><div class="event-bottom"><span class="seat-count ${isFull(e) ? "full" : ""}">${isFull(e) ? "✕ FULL" : `✳ ${seatsLeft(e)} SEATS LEFT`}</span><div class="event-actions"><button class="mini-button" data-save="${e.id}" aria-label="Save ${e.name}">${savedEvents.includes(e.id) ? "♥ SAVED" : "♡ SAVE"}</button><button class="mini-button primary" data-register="${e.id}" ${isFull(e) ? "disabled" : ""}>${isFull(e) ? "FULL" : "REGISTER ↗"}</button></div></div></div></article>`,
    )
    .join("");
  $("emptyState").hidden = shown.length > 0;
}
function renderSchedule() {
  const q = $("scheduleSearch").value.trim().toLowerCase();
  const rows = schedule.filter((r) => r.join(" ").toLowerCase().includes(q));
  $("scheduleBody").innerHTML = rows
    .map((r) => `<tr><td>${r[2]}</td><td>${r[0]}</td><td>${r[1]}</td></tr>`)
    .join("");
  $("scheduleMobile").innerHTML = rows
    .map(
      (r) =>
        `<article class="schedule-item"><div class="schedule-item-time">${r[2]}</div><div><div class="schedule-item-name">${r[0]}</div><div class="schedule-item-venue">↗ ${r[1]}</div></div></article>`,
    )
    .join("");
}
function renderMyEvents() {
  const el = $("myEvents");
  const list = registrations
    .filter((r) => r.name)
    .filter((r) => savedEvents.includes(r.eventId) || r.confirmed);
  el.innerHTML = list.length
    ? list
        .map(
          (r) => `<span class="saved-pill">✳ ${r.eventName} — ${r.name}</span>`,
        )
        .join("")
    : "<p>No registered events yet. Save an event or register to start your list.</p>";
}
function saveState() {
  localStorage.setItem("yd26_registrations", JSON.stringify(registrations));
  localStorage.setItem("yd26_seats", JSON.stringify(seatState));
  localStorage.setItem("yd26_saved", JSON.stringify(savedEvents));
}
function openRegistration(id) {
  const e = events.find((x) => x.id === id);
  if (!e || isFull(e)) return;
  $("selectedEventId").value = e.id;
  $("modalEventLine").textContent =
    `${e.name} · ${e.date} · ${e.venue} · DEMO FEE ${e.fee === 0 ? "FREE" : "₹" + e.fee}`;
  $("registrationModal").hidden = false;
  document.body.classList.add("modal-open");
  setTimeout(() => $("studentName").focus(), 50);
}
function closeModal(id) {
  $(id).hidden = true;
  if ($("registrationModal").hidden && $("successModal").hidden)
    document.body.classList.remove("modal-open");
}
function showError(id, message) {
  $(id).textContent = message;
  const input = $(id.replace("Error", ""));
  if (input) input.classList.toggle("invalid", Boolean(message));
}
document.addEventListener("click", (e) => {
  const reg = e.target.closest("[data-register]");
  if (reg) {
    openRegistration(reg.dataset.register);
    return;
  }
  const save = e.target.closest("[data-save]");
  if (save) {
    const id = save.dataset.save;
    savedEvents = savedEvents.includes(id)
      ? savedEvents.filter((x) => x !== id)
      : [...savedEvents, id];
    saveState();
    renderEvents();
    renderMyEvents();
  }
});
$("eventSearch").addEventListener("input", renderEvents);
$("scheduleSearch").addEventListener("input", renderSchedule);
$("categoryFilters").addEventListener("click", (e) => {
  const btn = e.target.closest("[data-category]");
  if (!btn) return;
  activeCategory = btn.dataset.category;
  document
    .querySelectorAll(".filter-chip")
    .forEach((b) => b.classList.toggle("active", b === btn));
  renderEvents();
});
document.querySelectorAll("[data-world]").forEach((card) =>
  card.addEventListener("click", () => {
    activeCategory = card.dataset.world;
    document
      .querySelectorAll(".filter-chip")
      .forEach((b) =>
        b.classList.toggle("active", b.dataset.category === activeCategory),
      );
    renderEvents();
  }),
);
$("registrationForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = $("studentName").value.trim(),
    email = $("studentEmail").value.trim(),
    phone = $("studentPhone").value.replace(/[\s()-]/g, ""),
    eventId = $("selectedEventId").value,
    event = events.find((x) => x.id === eventId);
  let valid = true;
  const nameOk = name.length >= 2,
    emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    phoneOk = /^(\+91)?[6-9]\d{9}$/.test(phone);
  showError(
    "nameError",
    nameOk ? "" : "Please enter your name (at least 2 characters).",
  );
  showError(
    "emailError",
    emailOk ? "" : "Enter a valid email address, such as name@example.com.",
  );
  showError(
    "phoneError",
    phoneOk ? "" : "Enter a valid 10-digit Indian mobile number.",
  );
  valid = nameOk && emailOk && phoneOk;
  if (!event || isFull(event)) {
    valid = false;
    showError(
      "phoneError",
      "This event is full now. Please choose another event.",
    );
  }
  if (!valid) return;
  const duplicate = registrations.some(
    (r) =>
      r.eventId === eventId && r.email.toLowerCase() === email.toLowerCase(),
  );
  if (duplicate) {
    showError(
      "emailError",
      "This email is already registered for this demo event.",
    );
    return;
  }
  registrations.push({
    name,
    email,
    phone,
    eventId,
    eventName: event.name,
    confirmed: true,
    at: new Date().toISOString(),
  });
  seatState[eventId] = seatsLeft(event) - 1;
  savedEvents = [...new Set([...savedEvents, eventId])];
  saveState();
  $("successMessage").textContent =
    `You're all set, ${name}! Your demo registration for ${event.name} is recorded in this browser. Seats left: ${seatsLeft(event)}. No real ticket has been issued.`;
  $("registrationModal").hidden = true;
  $("successModal").hidden = false;
  renderEvents();
  renderMyEvents();
});
$("modalClose").addEventListener("click", () =>
  closeModal("registrationModal"),
);
$("successClose").addEventListener("click", () => closeModal("successModal"));
["registrationModal", "successModal"].forEach((id) =>
  $(id).addEventListener("click", (e) => {
    if (e.target === $(id)) closeModal(id);
  }),
);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal("registrationModal");
    closeModal("successModal");
  }
});
$("myEventsToggle").addEventListener("click", () => {
  const panel = $("myEvents");
  panel.hidden = !panel.hidden;
  $("myEventsToggle").querySelector("span").textContent = panel.hidden
    ? "＋"
    : "−";
  renderMyEvents();
});
$("menuToggle").addEventListener("click", () => {
  const open = $("mainNav").classList.toggle("open");
  $("menuToggle").setAttribute("aria-expanded", String(open));
  $("menuToggle").textContent = open ? "×" : "☰";
});
document.querySelectorAll("#mainNav a").forEach((a) =>
  a.addEventListener("click", () => {
    $("mainNav").classList.remove("open");
    $("menuToggle").setAttribute("aria-expanded", "false");
    $("menuToggle").textContent = "☰";
  }),
);
const revealObserver = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    }),
  { threshold: 0.12 },
);
document
  .querySelectorAll(".reveal")
  .forEach((el) => revealObserver.observe(el));
renderEvents();
renderSchedule();
renderMyEvents();
// Opening sequence: spiral loader -> cinematic title reveal -> homepage. Runs once per tab.
const introLoader = document.getElementById("introLoader");
const titleIntro = document.getElementById("titleIntro");
const titleVideo = document.getElementById("titleIntroVideo");
const skipIntro = document.getElementById("skipIntro");
let introFinished = false;
function finishTitleIntro() {
  if (introFinished) return;
  introFinished = true;
  if (titleIntro) {
    titleIntro.classList.add("title-intro-out");
    setTimeout(() => {
      titleIntro.hidden = true;
      document.body.classList.remove("intro-playing");
    }, 750);
  }
  sessionStorage.setItem("yd26_intro_seen", "1");
  if (titleVideo) {
    titleVideo.pause();
  }
}
function beginTitleIntro() {
  if (!titleIntro) return;
  introLoader?.classList.add("done");
  titleIntro.hidden = false;
  document.body.classList.add("intro-playing");
  requestAnimationFrame(() => titleIntro.classList.add("title-intro-live"));
  if (titleVideo) {
    const playPromise = titleVideo.play();
    if (playPromise && playPromise.catch)
      playPromise.catch(() => titleIntro.classList.add("video-fallback"));
    titleVideo.addEventListener(
      "ended",
      () => setTimeout(finishTitleIntro, 900),
      { once: true },
    );
    titleVideo.addEventListener(
      "error",
      () => titleIntro.classList.add("video-fallback"),
      { once: true },
    );
  }
  setTimeout(finishTitleIntro, 7500);
}
if (introLoader && titleIntro) {
  if (sessionStorage.getItem("yd26_intro_seen")) {
    introLoader.classList.add("done");
    titleIntro.hidden = true;
  } else {
    setTimeout(beginTitleIntro, 1300);
  }
  skipIntro?.addEventListener("click", finishTitleIntro);
}
