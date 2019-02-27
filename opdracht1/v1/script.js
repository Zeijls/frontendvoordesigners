var knoproze = document.querySelector('label > input[name="roze"]');
var knopzwart = document.querySelector('label > input[name="zwart"]');
var knoprood = document.querySelector('label > input[name="rood"]');
var knopblauw = document.querySelector('label > input[name="blauw"]');
var knopgroen = document.querySelector('label > input[name="groen"]');

var main = document.querySelector('main');
// var zwartefoto = document.querySelector('[name="zwartefoto"]');

knopzwart.addEventListener('click', function(){
  main.classList.toggle('zwart');
});

knoproze.addEventListener('click', function(){
  main.classList.toggle('roze');
});

knoprood.addEventListener('click', function(){
  main.classList.toggle('rood');
});

knopblauw.addEventListener('click', function(){
  main.classList.toggle('blauw');
});

knopgroen.addEventListener('click', function(){
  main.classList.toggle('groen');
});
