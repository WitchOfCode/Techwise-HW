// Global bankroll variable (player’s risk money)
let playerBankroll = 2022; // initialized to their "luck year"

// Get bankroll
function getBankroll() {
  return playerBankroll;
}

// Set bankroll (only integers)
function setBankroll(newBalance) {
  if (Number.isInteger(newBalance) && newBalance >= 0) {
    playerBankroll = newBalance;
  } else {
    console.error("Bankroll must be a non-negative integer.");
  }
}