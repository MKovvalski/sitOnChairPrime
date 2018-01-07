

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


//    wyszukanie elementów list + przycisk -- ///


    var chairs = document.querySelectorAll(".chairs li");
    var colors = document.querySelectorAll(".colors li");
    var patterns = document.querySelectorAll(".materials li");
    var transport = document.querySelector("#transport");
    console.log("d");
    console.log(transport);


//    wyszukiwanie elementów rachunku -- ///


    var choiceOfChair = document.querySelector(".title-in-form");
    var choiceOfColor = document.querySelector(".color");
    var choiceOfPattern = document.querySelector(".pattern");
    var choiceOfTransport = document.querySelector(".transport");


//    wyszukiwanie cen elementów rachunku -- ///


    var chairPrice = document.querySelector(".title-in-form-value");
    var colorPrice = document.querySelector(".color-value");
    var patternPrice = document.querySelector(".pattern-value");
    var transportPrice = document.querySelector(".transport-value");


//    wyszukiwanie sumy elementów -- ///


    var sumOfPrices = document.querySelector(".sum_number");
    console.log(sumOfPrices);


//    tworzenie eventów dla list -- ///

    var sum = 0; //założenie zmienianej sumy

    // event dla krzeseł -- //
    for (var i = 0; i < chairs.length; i++) {
        chairs[i].addEventListener("click", function () {
            sum -= parseInt(chairPrice.innerHTML);
            if (this.innerHTML === "Clair") {
                if (choiceOfChair.innerHTML === this.innerHTML) {
                    choiceOfChair.innerHTML = "";
                } else {
                    choiceOfChair.innerHTML = this.innerHTML
                }
                if (chairPrice.innerHTML === "200") {
                    chairPrice.innerHTML = "0";
                } else {
                    chairPrice.innerHTML = "200";
                }
            }
            if (this.innerHTML === "Margarita") {
                if (choiceOfChair.innerHTML === this.innerHTML) {
                    choiceOfChair.innerHTML = "";
                } else {
                    choiceOfChair.innerHTML = this.innerHTML
                }
                if (chairPrice.innerHTML === "300") {
                    chairPrice.innerHTML = "0";
                } else {
                    chairPrice.innerHTML = "300";
                }
            }
            if (this.innerHTML === "Selena") {
                if (choiceOfChair.innerHTML === this.innerHTML) {
                    choiceOfChair.innerHTML = "";
                } else {
                    choiceOfChair.innerHTML = this.innerHTML
                }
                if (chairPrice.innerHTML === "250") {
                    chairPrice.innerHTML = "0";
                } else {
                    chairPrice.innerHTML = "250";
                }
            }
            sum += parseInt(chairPrice.innerHTML);
            sumOfPrices.innerHTML = sum;
        })
    }


    // event dla kolorów -- //
    for (var i = 0; i <colors.length; i++) {
        colors[i].addEventListener("click", function () {
            sum -= parseInt(colorPrice.innerHTML);
            if (this.innerHTML === "Czerwony") {
                if (choiceOfColor.innerHTML === this.innerHTML) {
                    choiceOfColor.innerHTML = "";
                } else {
                    choiceOfColor.innerHTML = this.innerHTML;
                }
                if (colorPrice.innerHTML === "80") {
                    colorPrice.innerHTML = "0";
                } else {
                    colorPrice.innerHTML = "80";
                }
            }
            if (this.innerHTML === "Czarny") {
                if (choiceOfColor.innerHTML === this.innerHTML) {
                    choiceOfColor.innerHTML = "";
                } else {
                    choiceOfColor.innerHTML = this.innerHTML;
                }
                if (colorPrice.innerHTML === "90") {
                    colorPrice.innerHTML = "0";
                } else {
                    colorPrice.innerHTML = "90";
                }
            }
            if (this.innerHTML === "Pomarańczowy") {
                if (choiceOfColor.innerHTML === this.innerHTML) {
                    choiceOfColor.innerHTML = "";
                } else {
                    choiceOfColor.innerHTML = this.innerHTML;
                }
                if (colorPrice.innerHTML === "100") {
                    colorPrice.innerHTML = "0";
                } else {
                    colorPrice.innerHTML = "100";
                }
            }
            sum += parseInt(colorPrice.innerHTML);
            sumOfPrices.innerHTML = sum;
        })
    }


    // event dla tkanin -- //
    for (var i = 0; i < patterns.length; i++) {
        patterns[i].addEventListener("click", function () {
            sum -= parseInt(patternPrice.innerHTML);
            if (this.innerHTML === "Tkanina") {
                if (choiceOfPattern.innerHTML === this.innerHTML) {
                    choiceOfPattern.innerHTML = "";
            } else {
                    choiceOfPattern.innerHTML = this.innerHTML;
                }
                if (patternPrice.innerHTML === "80") {
                    patternPrice.innerHTML = "0";
                } else {
                    patternPrice.innerHTML = "80";
                }
            }
            if (this.innerHTML === "Skóra") {
                if (choiceOfPattern.innerHTML === this.innerHTML) {
                    choiceOfPattern.innerHTML = "";
                } else {
                    choiceOfPattern.innerHTML = this.innerHTML;
                }
                if (patternPrice.innerHTML === "90") {
                    patternPrice.innerHTML = "0";
                } else {
                    patternPrice.innerHTML = "90";
                }
            }
            sum += parseInt(patternPrice.innerHTML);
            sumOfPrices.innerHTML = sum;
        })
    }


    // event dla transportu -- //
    transport.addEventListener("click", function () {
        sum -= parseInt(transportPrice.innerHTML);
       if (transport.checked === true) {
           choiceOfTransport.innerHTML = "Transport";
           transportPrice.innerHTML = "80";
       } else {
           choiceOfTransport.innerHTML = "";
           transportPrice.innerHTML = "0";
       }
        sum += parseInt(transportPrice.innerHTML);
        sumOfPrices.innerHTML = sum;
    });


    // event dla sumy -- //


});





