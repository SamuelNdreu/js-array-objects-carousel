// Consegna:
// Modifichiamo il codice dell'esercizio per renderlo funzionante con
// un array di oggetti, con una regola: non potete modificare l'array di oggetti in nessun caso.
// Dato un array di oggetti letterali con:
//  url dell’immagine
// titolo
// descrizione
// Creare un carosello.
// Milestone 0:
// Popoliamo dinamicamente il contenuto del carosello con i dati forniti dall'array di oggetti,
// dal js (dentro al nostro 'carousel-item', per capirci).
// Milestone 1:
// Al click dell'utente sulle frecce verso l'alto o verso il basso, l'immagine attiva diventerà visibile.
// Milestone 2:
// Aggiungiamo alla visualizzazione delle immagini anche titolo e testo relative alla singola immagine.
// Bonus 1:
// Aggiungere il ciclo infinito del carosello. Ovvero se l'immagine attiva è la prima e l'utente clicca la freccia verso l'alto,
// l'immagine che deve attivarsi sarà l'ultima e viceversa per l'ultima immagine se l'utente clicca la freccia verso il basso.
// Bonus 2:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
// Bonus 3:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva
// dovrà cambiare alla successiva.

const images = [
   {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
   },
   {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
   },
   {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
   },
   {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
   },
   {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
   }
];


const divCarouselImage = document.querySelector('div.carousel-image');


let counter = 0;
let divMyCarousel;

let imgPosition = [];


const buttonPrevious = document.querySelector('div.previous');
const buttonNext = document.querySelector('div.next');


for (let index = 0; index < images.length; index++) {
   divMyCarousel = document.createElement('div');
   divMyCarousel.innerHTML = `<img src="./${images[index].image}" alt="image">`
   divMyCarousel.classList.add('my_carousel-item')
   divCarouselImage.appendChild(divMyCarousel);
   imgPosition.push(divMyCarousel);
}

imgPosition[counter].classList.add('active');

//Aggiungo un evento click al buttone in alto
buttonPrevious.addEventListener('click', function() {
   imgPosition[counter].classList.remove('active');
   counter--;
   if (counter < 0){
      counter = imgPosition.length -1;
   }
   imgPosition[counter].classList.add('active');
   

});



//Aggiungo un evento click al buttone in basso
buttonNext.addEventListener('click', function(){
   imgPosition[counter].classList.remove('active');
   counter++;
   if (counter > imgPosition.length -1){
      counter = 0;
   }
   imgPosition[counter].classList.add('active');


});

