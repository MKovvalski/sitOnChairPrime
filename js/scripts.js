

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
       if (counter >= 2 ) {
           counter = 0;
           arrayOfChairs[counter].style.display = "inline-block";
       } else {
           arrayOfChairs[counter].style.display = "inline-block";
       }
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


    //    kalkulator ceny  ------------------ //


    var listOfArrows = document.querySelectorAll(".list_arrow");
    var listOfLists = document.querySelectorAll(".list_panel");


    console.log(listOfArrows);
    console.log(listOfLists);


    //    -----  otwieranie i zamykanie pól wyboru ----- ///

    // for (var i = 0; i < listOfArrows.length; i++) {
    //     listOfArrows[i].addEventListener("click", function () {
    //       if (this.nextElementSibling.style.display === "none") {
    //           this.style.display = "block";
    //       } else {
    //           this.style.display = "none";
    //       }
    //     })
    // }

    listOfArrows[0].addEventListener("click", function () {
        if (listOfLists[0].style.display === "block") {
            listOfLists[0].style.display = "none";
        } else {
            listOfLists[0].style.display = "block";
        }
        if (listOfLists[0].style.display === "block") {
            listOfLists[1].style.display = "none";
            listOfLists[2].style.display = "none";
        }
    });


    listOfArrows[1].addEventListener("click", function () {
        if (listOfLists[1].style.display === "block") {
            listOfLists[1].style.display = "none";
        } else {
            listOfLists[1].style.display = "block";
        }
        if (listOfLists[1].style.display === "block") {
            listOfLists[0].style.display = "none";
            listOfLists[2].style.display = "none";
        }
    });


    listOfArrows[2].addEventListener("click", function () {
        if (listOfLists[2].style.display === "block") {
            listOfLists[2].style.display = "none";
        } else {
            listOfLists[2].style.display = "block";
        }
        if (listOfLists[2].style.display === "block") {
            listOfLists[0].style.display = "none";
            listOfLists[1].style.display = "none";
        }
    });


//    wyszukanie elementów list -- ///


    var chairs = document.querySelectorAll(".chairs li");
    var colors = document.querySelectorAll(".colors li");
    var patterns = document.querySelectorAll(".materials li");


//    wyszukiwanie elementów rachunku -- ///


    var choiceOfChair = document.querySelector(".title-in-form");
    var choiceOfColor = document.querySelector(".color");
    var choiceOfPattern = document.querySelector(".pattern");
    var chocieOfTransport = document.querySelector(".transport");


//    wyszukiwanie cen elementów rachunku -- ///


    var chairPrice = document.querySelector(".title-in-form-value");
    var colorPrice = document.querySelector(".color-value");
    var patternPrice = document.querySelector(".pattern-value");
    var transportPrice = document.querySelector(".transport-value");


//    tworzenie eventów dla list -- ///


    for (var i = 0; i < chairs.length; i++) {
        chairs[i].addEventListener("click", function () {
            if (this.innerHTML === "Clair") {
                choiceOfChair.innerHTML = this.innerHTML;
                chairPrice.innerHTML = 200;
            }
            if (this.innerHTML === "Margarita") {
                choiceOfChair.innerHTML = this.innerHTML;
                chairPrice.innerHTML = 250;
            }
            if (this.innerHTML === "Selena") {
                choiceOfChair.innerHTML = this.innerHTML;
                chairPrice.innerHTML = 300;
            }
        })
    }


    for (var i = 0; i <colors.length; i++) {
        colors[i].addEventListener("click", function () {
            if (this.innerHTML === "Czerwony") {
                choiceOfColor.innerHTML = this.innerHTML;
                colorPrice.innerHTML = 80;
            }
            if (this.innerHTML === "Czarny") {
                choiceOfColor.innerHTML = this.innerHTML;
                colorPrice.innerHTML = 90;
            }
            if (this.innerHTML === "Pomarańczowy") {
                choiceOfColor.innerHTML = this.innerHTML;
                colorPrice.innerHTML = 100;
            }
        })
    }


    for (var i = 0; i < patterns.length; i++) {
        patterns[i].addEventListener("click", function () {
            if (this.innerHTML === "Tkanina") {
                choiceOfPattern.innerHTML = this.innerHTML;
                patternPrice.innerHTML = 80;
            }
            if (this.innerHTML === "Skóra") {
                choiceOfPattern.innerHTML = this.innerHTML;
                patternPrice.innerHTML = 80;
            }
        })
    }


});





