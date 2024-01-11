function moverCuadro() {
    document.getElementById('no').style.transform = 'translateX(' + getRandomInt(-10, 10) + 'px)';
} /*  Esta función se llama cuando el cursor pasa sobre la opción "No". Mueve la opción "No" 
de manera aleatoria, dando un efecto de "esquiva el ratón".*/

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} //Esta función devuelve un número entero aleatorio dentro de un rango.
/*se utiliza para generar un valor aleatorio que determina cuánto 
se desplazará horizontalmente el cuadro cuando el ratón se posicione sobre la opción "No" */

function responder(respuesta) {
    if (respuesta === 'si') {
        document.getElementById('titulo').innerHTML = 'Yo también te amo';
        document.getElementById('si').style.display = 'none';  
        document.getElementById('no').style.display = 'none';  
    } else {
        alert('El universo dice que deberias reconsiderar tu respuesta...');
    }
} /* Esta función se llama cuando se hace clic en una opción. Si la respuesta es "si",
 cambia el contenido del título a "Yo también te amo"
 y oculta los botones "Sí" y "No". Si la respuesta es "no", 
 muestra una alerta sugiriendo reconsiderar la respuesta.  */