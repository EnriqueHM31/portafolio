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
