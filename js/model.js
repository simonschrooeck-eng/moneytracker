// ============================================================
//  Datenmodell des MoneyTrackers (ÜA6)
// ============================================================

// Ein BalanceItem ist EIN einzelner Eintrag (Einnahme oder Ausgabe).
class BalanceItem {
  constructor(description, isIncome, amount, date) {
    this.description = description; // Text, z.B. "Einkaufen"
    this.isIncome = isIncome;      // true = Einnahme, false = Ausgabe
    this.amount = amount;          // immer ein positiver Betrag (Zahl)
    this.date = date;              // Datum als String, z.B. "2023-05-15"
  }

  // Betrag mit Vorzeichen: Einnahmen positiv, Ausgaben negativ.
  getSignedAmount() {
    return this.isIncome ? this.amount : -this.amount;
  }
}

// Ein BalancePoint sammelt ALLE Eintraege und kennt den Kontostand.
class BalancePoint {
  constructor() {
    this.items = []; // Liste aller BalanceItems
  }

  // Fuegt einen neuen Eintrag zur Liste hinzu.
  add(item) {
    this.items.push(item);
  }

  // Kontostand = Summe aller vorzeichenbehafteten Betraege.
  getBalance() {
    let sum = 0;
    for (const item of this.items) {
      sum += item.getSignedAmount();
    }
    return sum;
  }
}
