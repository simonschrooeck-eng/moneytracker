// ============================================================
//  MoneyTracker - Ansichtswechsel Login/Main (ÜA5_2)
// ============================================================

const loginButton = document.getElementById("login");
const logoutButton = document.getElementById("logout");
const loginView = document.getElementById("loginView");
const mainView = document.getElementById("mainView");

// Login: Anmeldedaten ausgeben und zur Main-Ansicht wechseln
loginButton.addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log("Email: " + email + ", Password: " + password);

  loginView.classList.add("d-none");        // Login ausblenden
  mainView.classList.remove("d-none");      // Main einblenden
  logoutButton.classList.remove("d-none");  // Log-out-Button zeigen
});

// Logout: zurueck zur Login-Ansicht
logoutButton.addEventListener("click", function () {
  mainView.classList.add("d-none");
  loginView.classList.remove("d-none");
  logoutButton.classList.add("d-none");
});
