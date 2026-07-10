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
const tableBody = document.getElementById("tableBody");
const balanceLabel = document.getElementById("balance");

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
  const description = document.getElementById("description").value;
  const isIncome = document.getElementById("income").checked;
  const amount = parseFloat(document.getElementById("amount").value);
  const date = document.getElementById("date").value;

  const item = new BalanceItem(description, isIncome, amount, date);
  balancePoint.add(item);

  console.log("Alle Einträge:", balancePoint.items);
  console.log("Kontostand:", balancePoint.getBalance().toFixed(2), "€");

  renderTable(); // Tabelle aktualisieren (ÜA8)
});

// Tabelle aus allen Eintraegen aufbauen (ÜA8)
function renderTable() {
  tableBody.innerHTML = ""; // alte Zeilen entfernen

  for (const item of balancePoint.items) {
    const row = document.createElement("tr");
    // Einnahmen gruen, Ausgaben rot einfaerben
    row.className = item.isIncome ? "table-success" : "table-danger";
    row.innerHTML =
      "<td>" + item.date + "</td>" +
      "<td>" + item.description + "</td>" +
      "<td class='text-end'>" + item.amount.toFixed(2) + "</td>";
    tableBody.appendChild(row);
  }

  balanceLabel.textContent = balancePoint.getBalance().toFixed(2) + " €";
}
