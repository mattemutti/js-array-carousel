
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
let activeImage = 3;

const slideElements=document.querySelector('.slides');
//console.log(slides, activeImage, slideElements);

// seleziono il pulsante prev nella dom
const prevElement = document.querySelector('.prev');
// seleziono il pulsante next nella dom
const nextElement = document.querySelector('.next');
 
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

	// decremento il valore di activeImage di 1
	activeImage--
	//console.log(activeImage);

	if (activeImage < 0) {
		activeImage = slides.length - 1;
	}

	// rimuoviamo la classe active dall'elemento che c'è l'ha già
	// selezioniamo l'immagine dek dom che ha quella classe attiva
	const currentImage =  document.querySelector('img.active');
	//console.log(currentImage);
	currentImage.classList.remove('active')

	
	// assegniamo la classe active all'immagine corrispondente   
	// seleziono la prossima slide delle immagini renderizzate
	const allSlide= document.querySelectorAll('.slides img')
	console.log(allSlide);
	console.log(allSlide[activeImage]);

	// al nodo della dom immagine con il numero activeimage attivi la classe active
	allSlide[activeImage].classList.add('active')


})


// mettere il listen al click next


nextElement.addEventListener('click', function(){

	console.log("vai avanti");

	// incrementiamo il valore di activeImage di 1
	activeImage++;
	//console.log(activeImage);
	//	console.log(activeImage > slides.length - 1);


	if (activeImage > slides.length - 1) {
		activeImage = 0;
	}

	// rimuoviamo la classe active dall'elemento che c'è l'ha già
	// selezioniamo l'immagine dek dom che ha quella classe attiva
	const currentImage =  document.querySelector('img.active');
	//console.log(currentImage);
	currentImage.classList.remove('active');

	
	// assegniamo la classe active all'immagine corrispondente   
	// seleziono la prossima slide delle immagini renderizzate
	const allSlide= document.querySelectorAll('.slides img');
	console.log(allSlide);
	console.log(allSlide[activeImage]);


	// al nodo della dom immagine con il numero activeimage attivi la classe active
	allSlide[activeImage].classList.add('active');


})

