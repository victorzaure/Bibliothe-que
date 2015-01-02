window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);

//menu

var opener = document.getElementsByClassName("menu__btn"),
bun1 = document.getElementsByClassName("bun1"),
bun2 = document.getElementsByClassName("bun2"),
bun3 = document.getElementsByClassName("bun3"),
menu = document.getElementsByClassName("menu__el");

opener[0].addEventListener("click", function (){
  bun1[0].classList.toggle("open");
  bun2[0].classList.toggle("open");
  bun3[0].classList.toggle("open");
  menu[0].classList.toggle("open");
});

//news

var news = document.getElementsByClassName("page1__el"),
ball = document.getElementsByClassName("el__photo"),
detail = document.getElementsByClassName("el__detail");

news[0].addEventListener("click", function(){
  ball[0].classList.toggle("open");
  news[0].classList.toggle("open");
  detail[0].classList.toggle("open");
//remplacer les toggle par add
});

//Faire la flêche et le paramètre
