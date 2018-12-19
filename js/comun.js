//sistema de alertas
function msg(arg1, arg2, arg3 = 3){

    var alerta = document.getElementById('alerta');

    alerta.setAttribute('data-tipo', arg1);

    alerta.textContent = arg2;

    alerta.classList.add('activa');

    setTimeout(function(){

        alerta.classList.remove('activa');

    }, arg3 * 1000);

}
//
// function flashMsg(msgType, message, messageContainer, arg3=3){
//
//     messageContainer.setAttribute('data-tipo', msgType);
//     messageContainer.textContent = message;
//     messageContainer.classList.add('activa');
//
//     setTimeout(function(){
//
//         messageContainer.classList.remove('activa');
//
//     }, arg3 * 1000);
//
// }
//
function displayErrors(errors, errorsContainer) {
  removeErrors(errorsContainer);
  for (let error of errors) {
    addElement(error, 'li', errorsContainer);
  }
}

function removeErrors(errorsContainer) {
  for (let i = 0; i < errorsContainer.children.length; i) {
    errorsContainer.children[i].remove();
  }
}
