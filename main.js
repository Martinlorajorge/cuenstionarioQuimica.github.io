const contenedor = document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");

const preguntas = [
	{
		pregunta: "1. Los elementos del grupo 1 son llamados?",
		respuestas: {
			a: "Halogenos",
			b: "Gases Inertes",
			c: "Metales Alcalinos",
		},
		respuestaCorrecta: "c",
	},
	{
		pregunta: "2. Los elementos del grupo 17 se denominan",
		respuestas: {
			a: "Halogeno",
			b: "Metales Alcalinosterreos",
			c: "Calcágenos",
		},
		respuestaCorrecta: "a",
	},
	{
		pregunta: "3. Las filas horizontales se denominan",
		respuestas: {
			a: "Grupos",
			b: "Periodos",
			c: "Familias",
		},
		respuestaCorrecta: "b",
	},
	{
		pregunta: "4. Los periodos comienzan con:",
		respuestas: {
			a: "No metal y terminan con un gas inerte",
			b: "Metal y terminan con un gas inerte",
			c: "Metaloide y terminan con un metal",
		},
		respuestaCorrecta: "b",
	},
	{
		pregunta: "5. Los elementos transurónidos se situán despues del:",
		respuestas: {
			a: "Plutonio",
			b: "Uranio",
			c: "Mercurio",
		},
		respuestaCorrecta: "b",
	},
	{
		pregunta: "6. Los 14 elemtos llamados Lántanidos se disponen en:",
		respuestas: {
			a: "Grupo 3B, periodo 6",
			b: "Grupo 3A, periodo 6",
			c: "Grupo 6A, periodo 3",
		},
		respuestaCorrecta: "a",
	},
	{
		pregunta: "7. Los gases inertes se caracterizan por:",
		respuestas: {
			a: "Gran actividad quimica",
			b: "Inactividad quimica",
			c: "ninguna de las dos opciones",
		},
		respuestaCorrecta: "b",
	},
	{
		pregunta: "8. Los elementos de tranzición Interna son llamados:",
		respuestas: {
			a: "Calcagenos",
			b: "Oxigenados",
			c: "Tierras raras",
		},
		respuestaCorrecta: "c",
	},
	{
		pregunta: "9. Los Metales se encuentran:",
		respuestas: {
			a: "A la izquierda de la tabla",
			b: "A la derecha de la tabla",
			c: "En la parte central de la tabla",
		},
		respuestaCorrecta: "a",
	},
	{
		pregunta:
			"10. En los elementos de transición, el electrón diferencial se encuentra en el subnivel:",
		respuestas: {
			a: "- F -",
			b: "- P -",
			c: "- D -",
		},
		respuestaCorrecta: "c",
	},
];

function mostrarTest() {
	const preguntasYrespuestas = [];

	preguntas.forEach((preguntaActual, numeroDePregunta) => {
		const respuestas = [];

		for (letraRespuesta in preguntaActual.respuestas) {
			respuestas.push(
				`<label class="radio">
					<input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}" />
					${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}
				</label>`
			);
		}

		preguntasYrespuestas.push(
			`<div class="cuestion">${preguntaActual.pregunta}</div>
			<div class="respuestas"> ${respuestas.join("")} </div>
			`
		);
	});

	contenedor.innerHTML = preguntasYrespuestas.join("");
}

mostrarTest();

function mostrarResultado() {
	const respuestas = contenedor.querySelectorAll(".respuestas");
	let respuestasCorrectas = 0;

	preguntas.forEach((preguntaActual, numeroDePregunta) => {
		const todasLasRespuestas = respuestas[numeroDePregunta];
		const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
		const respuestaElegida = (
			todasLasRespuestas.querySelector(checkboxRespuestas) || {}
		).value;

		if (respuestaElegida === preguntaActual.respuestaCorrecta) {
			respuestasCorrectas++;

			respuestas[numeroDePregunta].style.color = "blue";
		} else {
			respuestas[numeroDePregunta].style.color = "red";
		}
	});

	resultadoTest.innerHTML =
		"Usted ha acertado " +
		respuestasCorrectas +
		" preguntas de un total de " +
		preguntas.length;
}

botonRes.addEventListener("click", mostrarResultado);
