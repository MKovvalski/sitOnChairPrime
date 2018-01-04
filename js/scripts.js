

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

});

