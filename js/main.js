// ============================================================
//  MoneyTracker - Login (ÜA4)
// ============================================================

// Login-Button aus dem HTML holen
const loginButton = document.getElementById("login");

// Beim Klick: Email und Passwort in der Konsole ausgeben
loginButton.addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log("Email: " + email + ", Password: " + password);
});
