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

// Absenden: neuen Eintrag erstellen (ÜA7)
submitButton.addEventListener("click", function () {
  // 1. Werte aus dem Formular auslesen
  const description = document.getElementById("description").value;
  const isIncome = document.getElementById("income").checked;
  const amount = parseFloat(document.getElementById("amount").value);
  const date = document.getElementById("date").value;

  // 2. BalanceItem erstellen
  const item = new BalanceItem(description, isIncome, amount, date);

  // 3. Zum BalancePoint hinzufügen
  balancePoint.add(item);

  // 4. Konsolenausgabe (wie in ÜA7 gefordert)
  console.log("Alle Einträge:", balancePoint.items);
  console.log("Kontostand:", balancePoint.getBalance().toFixed(2), "€");
});
