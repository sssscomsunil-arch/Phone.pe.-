const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");

const selectedPlan = document.getElementById("selectedPlan");

function openTelegramScreen(planName, price) {
  selectedPlan.textContent = `Selected Plan: ${planName} — ₹${price}`;

  screen1.classList.remove("active");
  screen3.classList.remove("active");
  screen2.classList.add("active");

  window.scrollTo(0, 0);
}

function goBack() {
  screen2.classList.remove("active");
  screen3.classList.remove("active");
  screen1.classList.add("active");

  window.scrollTo(0, 0);
}

function goNext() {
  screen2.classList.remove("active");
  screen3.classList.add("active");

  window.scrollTo(0, 0);
}

function goHome() {
  screen3.classList.remove("active");
  screen2.classList.remove("active");
  screen1.classList.add("active");

  window.scrollTo(0, 0);
}
