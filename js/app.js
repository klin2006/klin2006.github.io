var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
showSlides(slideIndex += n);
}
function currentSlide(n){
showSlides(slideIndex = n);
}

function showSlides(n){
   var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n>slides.length) {slideIndex = 1}
    if(n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i ++){
            slides[i].style.display = "none";
      }
  slides[slideIndex-1].style.display = "block";
    }


function myFunction() {
    document.getElementById("myMenu").classList.toggle("show");
}

window.onclick = function (event){
    if (!event.target.matches('.dropButton')){
        var drops = document.querySelector("body");
       if (drops.classList.contains('show')){
           drops.classList.remove('show');
       }
    }
}

var collapse = document.getElementsByClassName("collapsible");
var j;
for (j = 0; j < collapse.length; j++){
    collapse[j].addEventListener("click", function(){
        this.classList.toggle("active");
        var projectContent = this.nextElementSibling;
        if (projectContent.style.display === "block"){
            projectContent.style.display = "none";
        } else{
            projectContent.style.display = "block";
        }
    });
}

var modal = document.getElementById("myModal");

var bioButton = document.getElementById("bioButton");

var span = document.getElementsByClassName("close")[0];

bioButton.onclick = function(){
    modal.style.display = "block";
}

span.onclick = function(){
    modal.style.display = "none";
}

window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = "none";
    }
}

var skillsButton = document.getElementById("skillsButton");
var modal2 = document.getElementById("myModal2");

var span = document.getElementsByClassName("close")[1];

skillsButton.onclick = function(){
    modal2.style.display = "block";
}

span.onclick = function(){
    modal2.style.display = "none";
}


window.onclick = function(event2){
    if (event2.target == modal2){
        modal2.style.display = "none";
    }
}

