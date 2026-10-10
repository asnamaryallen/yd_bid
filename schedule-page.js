const items = [
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
const el = (id) => document.getElementById(id);
function render() {
  const q = el("scheduleSearch").value.toLowerCase().trim(),
    rows = items.filter((r) => r.join(" ").toLowerCase().includes(q));
  el("scheduleBody").innerHTML = rows
    .map(
      (r) =>
        "<tr><td>" +
        r[2] +
        "</td><td>" +
        r[0] +
        "</td><td>" +
        r[1] +
        "</td></tr>",
    )
    .join("");
  el("scheduleMobile").innerHTML = rows
    .map(
      (r) =>
        '<article class="schedule-item"><div class="schedule-item-time">' +
        r[2] +
        '</div><div><div class="schedule-item-name">' +
        r[0] +
        '</div><div class="schedule-item-venue">↗ ' +
        r[1] +
        "</div></div></article>",
    )
    .join("");
}
el("scheduleSearch").addEventListener("input", render);
el("menuToggle").addEventListener("click", () => {
  const open = el("mainNav").classList.toggle("open");
  el("menuToggle").setAttribute("aria-expanded", String(open));
  el("menuToggle").textContent = open ? "×" : "☰";
});
render();
