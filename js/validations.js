const newGameForm = document.getElementById('newGameForm');
newGameForm.addEventListener('submit', validateBeforeSend, true);

const fieldToValidate       = 9;
let formValidationsCounter  = 0;

let errors = new Set([]);

function validateBeforeSend(e) {

  e.preventDefault();
  resetValidations();

  if(validateForm()){

    console.log('validate');

  } else {

    console.log('no validate');

    displayErrors(errors, document.getElementById('errores'))
    msg('error', 'Revisa los errores');

  }
}

function resetValidations() {
  removeErrors(document.getElementById('errores'));
  formValidationsCounter = 0;
  errors = new Set([]);
}

function validateForm() {

  formValidationsCounter = validateUserName()           ?  (formValidationsCounter + 1) : formValidationsCounter;
  formValidationsCounter = validatePassword()           ?  (formValidationsCounter + 1) : formValidationsCounter;
  formValidationsCounter = validatePasswordRelated()    ?  (formValidationsCounter + 1) : formValidationsCounter;
  formValidationsCounter = validateEmail()              ?  (formValidationsCounter + 1) : formValidationsCounter;
  formValidationsCounter = validateId()                 ?  (formValidationsCounter + 1) : formValidationsCounter;
  formValidationsCounter = validateDate()               ?  (formValidationsCounter + 1) : formValidationsCounter;
  formValidationsCounter = validateCountry()            ?  (formValidationsCounter + 1) : formValidationsCounter;
  formValidationsCounter = validatePaymentMethod()      ?  (formValidationsCounter + 1) : formValidationsCounter;
  formValidationsCounter = validateConditionsAccepted() ?  (formValidationsCounter + 1) : formValidationsCounter;

  return fieldToValidate === formValidationsCounter;

}


function validateUserName() {

  const numberOfValidations = 2;
  let validationsCounter    = 0;

  const inputValue = document.getElementById('userName').value;

  if(inputValue.length >= 6) {
    validationsCounter++;
  }else{
    errors = errors.add('Tu nombre de usuario tiene menos de 6 caracteres');
  }

  if(!/\s/.test(inputValue)) {
    validationsCounter++;
  }else{
    errors = errors.add('Tu nombre de usuario no puede contener espacios');
  }

  return numberOfValidations === validationsCounter;

}

function validatePassword() {

  const numberOfValidations = 4;
  let validationsCounter    = 0;

  const inputValue = document.getElementById('userPassword1').value;

  if(inputValue.length >= 6) {
    validationsCounter++;
  } else {
    errors = errors.add('Tu contraseña no debe ser menor de 6');
  }

  if(/[A-Z]/.test(inputValue)) {
    validationsCounter++;
  } else {
    errors = errors.add('Tu contraseña debe contener al menos una mayúscula');
  }

  if(/[a-z]/.test(inputValue)) {
    validationsCounter++;
  } else {
    errors = errors.add('Tu contraseña debe contener al menos una minúscula');
  }

  if(/[0-9]/.test(inputValue)) {
    validationsCounter++;
  } else {
    errors = errors.add('Tu contraseña debe contener al menos un número');
  }

  return numberOfValidations === validationsCounter;

}

function validatePasswordRelated() {

  const numberOfValidations = 1;
  let validationsCounter    = 0;

  const inputValue = document.getElementById('userPassword2').value;

  if(inputValue ===  document.getElementById('userPassword1').value) {
    validationsCounter++;
  }else{
    errors = errors.add('Las contraseñas no coinciden');
  }

  return numberOfValidations === validationsCounter;

}

function validateEmail(){

  const numberOfValidations = 2;
  let validationsCounter    = 0;

  const inputValue = document.getElementById('userEmail').value;

  if(/@/.test(inputValue)) {
    validationsCounter++;
  } else {
    errors = errors.add('El e-mail introducido no es válido, debe contener una arroba');
  }

  if(/\./.test(inputValue)) {
    validationsCounter++;
  } else {
    errors = errors.add('El e-mail introducido no es válido, debe contener un punto');
  }

  return numberOfValidations === validationsCounter;

}

function validateId() {

  const numberOfValidations = 1;
  let validationsCounter    = 0;

  const inputValue = document.getElementById('userID').value;

  if(/^[0-9]{8,8}[A-Za-z]$/.test(inputValue)) {
    validationsCounter++;
  } else {
    errors = errors.add('DNI no es válido');
  }

  return numberOfValidations === validationsCounter;

}

function validateDate() {

  const numberOfValidations = 1;
  let validationsCounter    = 0;

  const inputValue = document.getElementById('userDate').value;

  if(getAge(inputValue) >= 18){
    validationsCounter++;
  }else {
    errors = errors.add('Solo para mayores de edad');
  };

  return numberOfValidations === validationsCounter;

}

function validateCountry() {

  const numberOfValidations = 1;
  let validationsCounter    = 0;

  const radioBtnGroup = document.forms['newGameForm'].elements['userCountry'];

  for (var i = 0; i < radioBtnGroup.length; i++) {

    if(radioBtnGroup[i].checked) {
      validationsCounter++;
      errors.delete('Debes marcar algún país');
      break
    }
    errors = errors.add('Debes marcar algún país');
  }


  return numberOfValidations === validationsCounter;

}

function validatePaymentMethod() {

  const numberOfValidations = 1;
  let validationsCounter    = 0;

  const select = document.forms['newGameForm'].elements['paymentMethod'];

  if(select.selectedIndex != 0) {
    validationsCounter++;
  }else{
    errors = errors.add('Debes marcar algún método de pago');
  };

  return numberOfValidations === validationsCounter;

}

function validateConditionsAccepted() {

  const numberOfValidations = 1;
  let validationsCounter    = 0;

  const checkbox = document.forms['newGameForm'].elements['acceptsConditions'];

  if(checkbox.checked) {
    validationsCounter++;
  }else{
    errors = errors.add('Debes aceptar las condiciones del servicio');
  };

  return numberOfValidations === validationsCounter;

}
