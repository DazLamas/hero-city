var objPartida = {
    iniciada: false,
    saldo: 3000,
    recaudacion: 0,
    visitantes: 0,
    parque: []
};



// Ejecución panel nueva partida
nuevaPartida.onclick = () => {

    if (!objPartida.iniciada) {

        open("paneles/nuevapartida.html", 'Nueva partida');//'scrollbars=yes,width=700,height=1000,toolbar=yes'

    } else {

        msg('error', 'Ya has iniciado una partida previamente, no es posible crear una nueva partida');

    }
}




// Ejecución panel construcción
const celdas = document.getElementsByClassName('celda');

for (let elm of celdas) {

    elm.onclick = () => {

        if (!objPartida.iniciada) {

            msg('error', 'Inicia una partida para poder construir.');

        } else {

            if (elm.dataset.edificioCelda != 'vacia') {

                msg('error', 'Elige una celda vacía para construir.');

            } else {

                open('paneles/nuevoEdificio.html', 'Construir', 'width=600,height=1200,scrollbars=yes,toolbar=no')
            }
        }
    }
}


//Ejecución panel recaudación
recaudarCaja.onclick = () => {

    if (!objPartida.iniciada) {

        msg('error', 'Inicia una partida para acceder a la recaudación.');

    } else {

        if (objPartida.recaudacion < 200) {

            msg('error', 'Tienes ' + objPartida.recaudacion + '$ en caja. Necesitas un mínimo de 200$.');

        } else {

            open("paneles/recaudarEntradas.html", 'Recaudar', 'scrollbars=yes,width=700,height=300,toolbar=yes');
        }
    }
}










// intervalo de actualización
setInterval( () => {

    // Evolución parque [TODO]



    // Actualización estadísticas panel
    document.getElementById('contadorEdificios').textContent = objPartida.parque.length + " edificios";

    document.getElementById('contadorVisitantes').textContent = objPartida.visitantes + " visitantes";

    document.getElementById('contadorRecaudacion').textContent = objPartida.recaudacion + " $ en caja";

    document.getElementById('contadorSaldoActual').textContent = objPartida.saldo + " $";



}, 100);
