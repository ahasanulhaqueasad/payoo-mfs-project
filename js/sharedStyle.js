function getInputFieldValueById(id) {
  const inputValueNumber = document.getElementById(id).value;
  const inputValue = parseInt(inputValueNumber);
  return inputValue;
}

function getTextValueById(id) {
  const textValueNumber = document.getElementById(id).innerText;
  const textValue = parseInt(textValueNumber);
  return textValue;
}

function showSectionById(id) {
  // hide all the sections
  document.getElementById("add-money-form").classList.add("hidden");
  document.getElementById("cash-out-form").classList.add("hidden");
  document.getElementById("transaction-card").classList.add("hidden");

  // show the section when you provide id as a prameter
  document.getElementById(id).classList.remove("hidden");
}
