function getAge(dateInputValue) {

  const userBirthday = new Date(dateInputValue);
  const today = new Date();

  const age = today.getFullYear() - userBirthday.getFullYear();
  const month = today.getMonth() - userBirthday.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < userBirthday.getDate())) {
      age--;
  }
  return age;
}

function addElement(message = "", elementTag, elementContainer) {

  const newElement = document.createElement(elementTag);
  const text       = document.createTextNode(message);

  newElement.appendChild(text);

  elementContainer.appendChild(newElement);
}
