// Start menu toggle
function toggleStartMenu() {
  const menu = document.getElementById("start-menu");
  menu.classList.toggle("hidden");
}

// Clock update
setInterval(() => {
  const now = new Date();
  const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  document.getElementById("clock").textContent = timeString;
}, 1000);

// Calculator logic
let calcInput = "";

function appendCalc(val) {
  calcInput += val;
  document.getElementById("calc-display").value = calcInput;
}

function calculate() {
  try {
    const result = eval(calcInput);
    document.getElementById("calc-display").value = result;
    calcInput = result.toString();
  } catch {
    document.getElementById("calc-display").value = "Error";
    calcInput = "";
  }
}

function clearCalc() {
  calcInput = "";
  document.getElementById("calc-display").value = "";
}

// Window control
function closeWindow(id) {
  document.getElementById(id).classList.add("hidden");
}

function minimizeWindow(id) {
  document.getElementById(id).style.display = "none";
}

function openCalculator() {
  document.getElementById("calculator").classList.remove("hidden");
  document.getElementById("calculator").style.display = "block";
}

// File Explorer logic with boot screen
function openFileExplorer() {
  const overlay = document.getElementById("boot-overlay");
  overlay.style.display = "block";

  setTimeout(() => {
    window.location.href = "logreader.html";
  }, 10000);
}
