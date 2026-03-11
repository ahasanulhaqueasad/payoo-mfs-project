document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // 1. Get input values from the sharedStyle
    const addMoney = getInputFieldValueById("input-add-money");
    const accountPin = getInputFieldValueById("input-account-pin");

    // 3. Validation: Check if the amount is a valid number and greater than zero
    if (isNaN(addMoney) || addMoney <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    // 4. Verification: Check the security PIN (Standard check: 1234)
    if (accountPin === 1234) {
      const mainBalance = getTextValueById("total-balance");
      const newBalance = mainBalance + addMoney;
      document.getElementById("total-balance").innerText = newBalance;

      // Clear the input fields after successful transaction
      document.getElementById("input-add-money").value = "";
      document.getElementById("input-account-pin").value = "";
    } 
    else {
      // Error handling for incorrect PIN
      alert("Invalid PIN! Please try again.");
    }
    alert("Successfully added TK-" + addMoney);
  });
