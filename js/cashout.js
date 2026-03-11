document
  .getElementById("cashout-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // 1. Get input values
    const cashOut = getInputFieldValueById("input-cashout");
    const accountPin = getInputFieldValueById("input-cashout-pin");
    const mainBalance = getTextValueById("total-balance");

    // 2. Validation: amount check
    if (isNaN(cashOut) || cashOut <= 0) {
      alert("Please enter a valid amount to withdraw.");
      return;
    }

    // 3. PIN verification (FIRST)
    if (accountPin !== 1234) {
      alert("Invalid PIN! Please try again.");
      return;
    }

    // 4. Balance check
    if (cashOut > mainBalance) {
      alert("Insufficient balance! You cannot withdraw more than you have.");
      return;
    }

    // 5. Transaction
    const newBalance = mainBalance - cashOut;
    document.getElementById("total-balance").innerText = newBalance;

    // Clear input fields
    document.getElementById("input-cashout").value = "";
    document.getElementById("input-cashout-pin").value = "";

    alert("Cash Out of TK-" + cashOut + " was successful.");
  });
