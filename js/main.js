// ============================================================
//  MoneyTracker - Hauptlogik
// ============================================================

// Zentraler Behaelter fuer alle Eintraege
const balancePoint = new BalancePoint();

const loginButton = document.getElementById("login");
const logoutButton = document.getElementById("logout");
const loginView = document.getElementById("loginView");
const mainView = document.getElementById("mainView");
const submitButton = document.getElementById("submit");

// Login
loginButton.addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log("Email: " + email + ", Password: " + password);
  loginView.classList.add("d-none");
  mainView.classList.remove("d-none");
  logoutButton.classList.remove("d-none");
});

// Logout
logoutButton.addEventListener("click", function () {
  mainView.classList.add("d-none");
  loginView.classList.remove("d-none");
  logoutButton.classList.add("d-none");
});

// Absenden
submitButton.addEventListener("click", function () {
  // TODO (ÜA7): Eintrag aus dem Formular auslesen und zum BalancePoint hinzufügen
});
