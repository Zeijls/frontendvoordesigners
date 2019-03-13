carousel = (function(){
  var carr = document.querySelector('.carrousel');
  var next = document.querySelector('.volgende');
  var prev = document.querySelector('.terug');
  var circles = document.querySelectorAll('.circles .circle');
  var circlesLength = circles.length;
  var currentCircle = circles[0];
  var counter = 0;
  var items = document.querySelectorAll('.carrousel div.slide');
  var itemsLength = items.length;
  var current = items[0];


  function slide(direction) {
    current.classList.remove('current');
    currentCircle.classList.remove('active');
    counter = counter + direction;
    if(direction === -1 && counter < 0 ) {
      counter = itemsLength - 1;
    }
    if(direction === 1 && !items[counter]) {
      counter = 0;
    }
    current = items[counter];
    currentCircle = circles[counter];
    current.classList.add('current');
    currentCircle.classList.add('active');
    console.log("Slide Called!")
  }

  next.addEventListener('click', function() {
    slide(1);
  });

  prev.addEventListener('click', function() {
    slide(-1);
  });

  window.onkeydown = function(event) {
  // Links
       if (event.keyCode == 37) {
          slide(-1);
       }

//Rechts
       else if (event.keyCode == 39) {
           slide(1);
       }
  };

})();
