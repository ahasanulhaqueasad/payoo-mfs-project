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
