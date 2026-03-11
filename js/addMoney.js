document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // 1. Get input values from the form
    const inputAddMoney = document.getElementById("input-add-money").value;
    const inputAccountPin = document.getElementById("input-account-pin").value;

    // 2. Convert amount to a number (using parseFloat for decimal support)
    const addMoney = parseFloat(inputAddMoney);
    const accountPin = parseInt(inputAccountPin);

    // 3. Validation: Check if the amount is a valid number and greater than zero
    if (isNaN(addMoney) || addMoney <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    // 4. Verification: Check the security PIN (Standard check: 1234)
    if (accountPin === 1234) {
      const balanceElement = document.getElementById("total-balance");

      const balanceText = balanceElement.innerText;
      const currentBalance = parseFloat(balanceText);

      // 5. Calculate the new total balance
      const newBalance = currentBalance + addMoney;

      // 6. Update the UI with the new balance (formatted)
      balanceElement.innerText = newBalance;

      // Clear the input fields after successful transaction
      document.getElementById("input-add-money").value = "";
      document.getElementById("input-account-pin").value = "";

      alert("Successfully added TK-" + addMoney);
    } else {
      // Error handling for incorrect PIN
      alert("Invalid PIN! Please try again.");
    }
  });
