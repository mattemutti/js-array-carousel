
/* tools

- const/let
- for
- document.queryselector()
- addeventlistener

*/

// SETUP

// mettere le immagini in un array
const slides = [ 
	'01.webp',
	'02.webp',
	'03.webp',
	'04.webp',
	'05.webp',

]

//
const activeImage = 3;

const slideElements=document.querySelector('.slides');
//console.log(slides, activeImage, slideElements);

// seleziono il pulsante prev nella dom
const prevElement = document.querySelector('.prev')
// seleziono il pulsante next nella dom
const nextElement = document.querySelector('.next')
 
// generare le immmagini dentro all'elemento slides nella DOM
//con un ciclo for


for (let i = 0; i < slides.length; i++) {
	const slide = slides[i];
	console.log(slide);

const slideMurkUp = `<img class="${ i === activeImage ? 'active' : '' }" src="./assets/img/${slide}" alt="">`
 
//console.log(slideMurkUp);

//inserisce il markUp contenente la classe 'active' che ha il numero di activeImage attiva l'immagine con il nome slide
slideElements.insertAdjacentHTML('beforeend', slideMurkUp)

}


// mettere il listen al click prev

prevElement.addEventListener('click', function(){

	console.log("tornai indietro");


})


// mettere il listen al click next


nextElement.addEventListener('click', function(){

	console.log("vai avanti");


})

