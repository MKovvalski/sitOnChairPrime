

document.addEventListener("DOMContentLoaded", function () {

    // - wyskakujące opisy ------------//


    var arr = document.querySelectorAll('.article-box');
    for (var i=0; i<arr.length; i++) {
        arr[i].addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.toggle('active');
        })
    }

    // slider ---------------------- //


    var buttonPrev = document.querySelector(".main-slider-prev");
    var buttonNext = document.querySelector(".main-slider-next");
    var arrayOfChairs = document.querySelectorAll(".slide");

    console.log(arrayOfChairs);
    console.log(buttonNext);
    console.log(buttonPrev);


   var counter = 0;


   arrayOfChairs[0].style.display = "inline-block";


   buttonNext.addEventListener("click",function () {
      arrayOfChairs[counter].style.display= "none";
      counter++;
      arrayOfChairs[counter].style.display = "inline-block";

       // if (counter === 2) {  // działa do tyłu ale nie działa do przodu. Po przejściu na obrazek 1 nie jest wstanie przejść dalej
       //     arrayOfChairs[counter].style.display = "none";
       //     arrayOfChairs[0].style.display = "inline-block";
       //     counter = 0;
       // }
   });

    buttonPrev.addEventListener("click", function () {
       arrayOfChairs[counter].style.display="none";
       counter--;

       if (counter < 0 ) {
           counter = arrayOfChairs.length -1;

       }

       arrayOfChairs[counter].style.display= "inline-block";

    });


//    wyskakujące menu ------------------ //



    var submenu1 = document.querySelector(".main-nav-submenu");

    var hiddenmenu = document.querySelector(".hiddenMenu");

    console.log(hiddenmenu);


    hiddenmenu.addEventListener("mouseover", function () {
        submenu1.style.display="block";
    });

    hiddenmenu.addEventListener("mouseout", function () {
      submenu1.style.display="none";
    });

});