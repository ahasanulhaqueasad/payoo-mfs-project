// Add Money Button Event Listener
document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    // Prevent page reload when button is clicked
    event.preventDefault();

    // 1️⃣ Get input values from the input fields
    const addMoney = getInputFieldValueById("input-add-money");
    const accountPin = getInputFieldValueById("input-account-pin");

    // 2️⃣ Validation: Check if the amount is a valid number and greater than 0
    if (isNaN(addMoney) || addMoney <= 0) {
      alert("Please enter a valid amount.");
      return; // Stop the function if validation fails
    }

    // 3️⃣ Security Check: Verify the account PIN
    if (accountPin !== 1234) {
      alert("Invalid PIN! Please try again.");
      return; // Stop if PIN is incorrect
    }

    // 4️⃣ Get current balance from the UI
    const mainBalance = getTextValueById("total-balance");

    // 5️⃣ Calculate the new balance after adding money
    const newBalance = mainBalance + addMoney;

    // 6️⃣ Update the balance in the UI
    document.getElementById("total-balance").innerText = newBalance;

    // 7️⃣ Clear the input fields after successful transaction
    document.getElementById("input-add-money").value = "";
    document.getElementById("input-account-pin").value = "";

    // 8️⃣ Show success message
    alert("Successfully added TK-" + addMoney);
  });
