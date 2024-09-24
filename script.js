// script.js

// Default PIN
const defaultPin = "12345";

// Initial account balance
let balance = 1000;

// Function to verify PIN
function verifyPin() {
  const enteredPin = document.getElementById("pin").value;
  const pinMessage = document.getElementById("pin-message");

  if (enteredPin === defaultPin) {
    pinMessage.innerText = "PIN correct! Access granted.";
    pinMessage.style.color = "green";

    // Hide the PIN section and show the ATM section
    document.getElementById("pin-section").style.display = "none";
    document.getElementById("atm").style.display = "block";
  } else {
    pinMessage.innerText = "Incorrect PIN. Please try again.";
    pinMessage.style.color = "red";
  }
}

// Function to check the balance
function checkBalance() {
  document.getElementById("message").innerText = `Your balance is: $${balance}`;
}

// Function to deposit money
function deposit() {
  const amount = parseFloat(document.getElementById("amount").value);
  if (isNaN(amount) || amount <= 0) {
    document.getElementById("message").innerText =
      "Please enter a valid amount.";
    return;
  }
  balance += amount;
  document.getElementById(
    "message"
  ).innerText = `Deposit successful. New balance: $${balance}`;
}

// Function to withdraw money
function withdraw() {
  const amount = parseFloat(document.getElementById("amount").value);
  if (isNaN(amount) || amount <= 0) {
    document.getElementById("message").innerText =
      "Please enter a valid amount.";
    return;
  }
  if (amount > balance) {
    document.getElementById("message").innerText = "Insufficient funds.";
    return;
  }
  balance -= amount;
  document.getElementById(
    "message"
  ).innerText = `Withdrawal successful. New balance: $${balance}`;
}
