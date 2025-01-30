const fondo = document.createElement('div')
fondo.classList.add('fondo')


const COLORES = [
	'#00ffb2',
	'#00ffe0',
	'#02ac97 ',
	'#00f5ff',
	'#0cd8e5 ',
	'#00ffb2',
	'#00ffe0',
	'#02ac97 ',
	'#00f5ff',
	'#0cd8e5 ',
]





for (let i = 0; i < 10; i++) {
	const div = document.createElement('div')
	div.classList.add('circle')
	div.style.backgroundColor = COLORES[i]

	div.style.left = Math.random() * (window.innerWidth - div.offsetWidth) + 'px'
	div.style.top = Math.random() * (window.innerHeight - div.offsetHeight) + 'px'
	fondo.appendChild(div)
}


document.body.appendChild(fondo)

document.addEventListener('DOMContentLoaded', () => {

	const circles = document.querySelectorAll(".circle");

	let desplazando = false;  // Variable que controla si estamos arrastrando

	// Al hacer clic en el elemento, comenzamos a moverlo

	circles.forEach((elemento) => {
		elemento.addEventListener('mousedown', (event) => {
			console.log(event.target)
			desplazando = true;

			// Guardamos la posición inicial del mouse y el div
			const offsetX = event.clientX - elemento.offsetLeft;
			const offsetY = event.clientY - elemento.offsetTop;

			// Función que se ejecuta cuando el mouse se mueve
			function moverElemento(mouseMoveEvent) {
				if (desplazando) {
					// Calculamos la nueva posición del div
					const nuevaPosX = mouseMoveEvent.clientX - offsetX;
					const nuevaPosY = mouseMoveEvent.clientY - offsetY;

					// Movemos el div a la nueva posición
					elemento.style.left = nuevaPosX + 'px';
					elemento.style.top = nuevaPosY + 'px';
				}
			}

			// Evento para mover el elemento con el mouse
			document.addEventListener('mousemove', moverElemento);

			// Cuando el mouse se suelta, dejamos de mover el elemento
			document.addEventListener('mouseup', () => {
				desplazando = false;

				// Dejamos de escuchar el movimiento del mouse
				document.removeEventListener('mousemove', moverElemento);
			});
		});
	});
})
