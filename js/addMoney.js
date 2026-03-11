// Add Money Button Event Listener
document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    // Prevent page reload when button is clicked
    event.preventDefault();

    //  Get input values from the input fields
    const addMoney = getInputFieldValueById("input-add-money");
    const accountPin = getInputFieldValueById("input-account-pin");

    //  Validation: Check if the amount is a valid number and greater than 0
    if (isNaN(addMoney) || addMoney <= 0) {
      alert("Please enter a valid amount.");
      return; // Stop the function if validation fails
    }

    // Security Check: Verify the account PIN
    if (accountPin !== 1234) {
      alert("Invalid PIN! Please try again.");
      return; // Stop if PIN is incorrect
    }

    // Get current balance from the UI
    const mainBalance = getTextValueById("total-balance");

    //  Calculate the new balance after adding money
    const newBalance = mainBalance + addMoney;

    //  Update the balance in the UI
    document.getElementById("total-balance").innerText = newBalance;

    // add to transaction history
    const div = document.createElement("div");
    div.innerHTML = `
  <div class="text-center bg-gray-50 p-3 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition duration-200">
    
    <!-- Left Section: Transaction Info -->
    <div>
      <p class="font-medium text-green-600">Add Money: ${addMoney}</p>
      <span class="text-blue-600 font-semibold">New Balance: ${newBalance} TK</span>
      <p class="text-xs text-gray-400 mt-0.5">${new Date().toLocaleString()}</p>
    </div>
  </div>
`;
    document.getElementById("transaction-container").appendChild(div);

    //  Clear the input fields after successful transaction
    document.getElementById("input-add-money").value = "";
    document.getElementById("input-account-pin").value = "";

    //  Show success message
    alert("Successfully added TK-" + addMoney);
  });
