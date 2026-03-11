document
  .getElementById("cashout-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // 1. Get input values
    const inputCashOut = document.getElementById("input-cashout").value;
    const inputAccountPin = document.getElementById("input-cashout-pin").value;

    // 2. Convert values (parseFloat allows for decimal transactions)
    const cashOutAmount = parseFloat(inputCashOut);
    const accountPin = parseInt(inputAccountPin);

    // 3. Validation: Ensure the amount is a valid number
    if (isNaN(cashOutAmount) || cashOutAmount <= 0) {
      alert("Please enter a valid amount to withdraw.");
      return;
    }

    // 4. Verification: Check PIN (Security Check)
    if (accountPin === 1234) {
      const balanceElement = document.getElementById("total-balance");

      // Get current balance and remove formatting (৳ and commas)
      const currentBalance = parseFloat(balanceElement.innerText);

      // 5. Logical Check: Does the user have enough money?
      if (cashOutAmount > currentBalance) {
        alert("Insufficient balance! You cannot withdraw more than you have.");
        return;
      }

      // 6. Final Step: Subtract and update UI
      const newBalance = currentBalance - cashOutAmount;
      balanceElement.innerText = newBalance;

      // Clear input fields
      document.getElementById("input-cashout").value = "";
      document.getElementById("input-cashout-pin").value = "";

      alert("Cash Out of TK-" + cashOutAmount + " was successful.");
    } else {
      alert("Invalid PIN! Please try again.");
    }
  });
