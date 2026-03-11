document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const accoutNumber = getInputFieldValueById("input-account-number");
    const accountPin = getInputFieldValueById("input-account-pin");

    if (accountPin === 1234) {
      window.location.href = "home.html";
    } else {
      alert("Invalid PIN! Please try again.");
    }
  });
