window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);

// Menu

var opener = document.getElementsByClassName("menu__btn"),
bun1 = document.getElementsByClassName("bun1"),
bun2 = document.getElementsByClassName("bun2"),
bun3 = document.getElementsByClassName("bun3"),
menu = document.getElementsByClassName("menu__el"),
mask = document.getElementsByClassName("mask");


opener[0].addEventListener("click", function (){
  bun1[0].classList.toggle("open");
  bun2[0].classList.toggle("open");
  bun3[0].classList.toggle("open");
  menu[0].classList.toggle("open");
  mask[0].classList.toggle("open");

});

// Flèche 1

var arrow1 = document.getElementsByClassName("arrow1");
(function() {
  var block = document.getElementsByClassName("page1__block");
  if(block && block.length > 0) {
    for(var i=0; i < block.length; i++) {
      var blocks = block[i];
      blocks.addEventListener('click', function(e) {
        e.preventDefault();
        arrow1[0].classList.toggle("active");
      });
    }
  }
})();

// Flèche 2

var arrow2 = document.getElementsByClassName("arrow2");
(function() {
  var block = document.getElementsByClassName("page1__block");
  if(block && block.length > 0) {
    for(var i=0; i < block.length; i++) {
      var blocks = block[i];
      blocks.addEventListener('click', function(e) {
        e.preventDefault();
        arrow2[0].classList.toggle("active");
      });
    }
  }
})();

// News

var arrow3 = document.getElementsByClassName("arrow3");
(function() {
  var section = document.getElementsByClassName("page1__el");
  if(section && section.length > 0) {
    for(var i=0; i < section.length; i++) {
      var sections = section[i];
      sections.addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.add('active');
        arrow3[0].classList.add("active");
      });
    }
  }
})();
// News close
var sectionopen = document.getElementsByClassName("page1__el active")

arrow3[0].addEventListener("click", function(){
  this.classList.remove("active");
  sectionopen[0].classList.remove("active");
});

// Configuration

var config1 = document.getElementsByClassName("config1"),
config2 = document.getElementsByClassName("config2"),
config3 = document.getElementsByClassName("config3");

config1[0].addEventListener("click", function (){
  config1[0].classList.toggle("active");
});

config2[0].addEventListener("click", function (){
  config2[0].classList.toggle("active");
});

config3[0].addEventListener("click", function (){
  config3[0].classList.toggle("active");
});
