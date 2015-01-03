window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);

//menu

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

//news
//open
var arrow = document.getElementsByClassName("arrow");
(function() {
  var section = document.getElementsByClassName("page1__el");
  if(section && section.length > 0) {
    for(var i=0; i < section.length; i++) {
      var sections = section[i];
      sections.addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.add('active');
        arrow[0].classList.add("active");
      });
    }
  }
})();
//close
var sectionopen = document.getElementsByClassName("page1__el active")

arrow[0].addEventListener("click", function(){
  this.classList.remove("active");
  sectionopen[0].classList.remove("active");
});
//remplacer les toggle par add

//Faire la flêche et le paramètre
