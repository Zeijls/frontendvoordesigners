var body = document.querySelector('body');
var alleGenresKnop = document.querySelector('.genres');
var actionKnop = document.querySelector('.action');
var adventureKnop = document.querySelector('.adventure');
var crimeKnop = document.querySelector('.crime');
var dramaKnop = document.querySelector('.drama');
var horrorKnop = document.querySelector('.horror');
var thrillerKnop = document.querySelector('.thriller');

alleGenresKnop.addEventListener('click', function(){
    body.classList = '';
});


actionKnop.addEventListener('click', function(){
    body.classList = '';
  body.classList.toggle('action');
});

adventureKnop.addEventListener('click', function(){
    body.classList = '';
  body.classList.toggle('adventure');
});

crimeKnop.addEventListener('click', function(){
    body.classList = '';
  body.classList.toggle('crime');
});

dramaKnop.addEventListener('click', function(){
    body.classList = '';
  body.classList.toggle('drama');
});

horrorKnop.addEventListener('click', function(){
    body.classList = '';
  body.classList.toggle('horror');
});

thrillerKnop.addEventListener('click', function(){
    body.classList = '';
  body.classList.toggle('thriller');
});



