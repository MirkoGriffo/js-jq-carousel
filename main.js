$(document).ready(function () {

    var nextBtn = $(".next");
    var prevBtn = $(".prev");


    //naviga tra le slide con mouse

    nextBtn.click(function () {

        nextPrevSlide("next");



    });

    prevBtn.click(function () {

        nextPrevSlide("prev");


    });

    //navigazione da tastiera

    $(document).keydown(function (e) {
        console.log(e);
        console.log(e.keyCode);

        if (e.keyCode == 37) {
            nextPrevSlide("prev");

        } else if (e.keyCode == 39) {
            nextPrevSlide("next");
        }


    });

});



/**********************
 FUNCTION
 *********************/

function nextPrevSlide(direction) {

    var activeImage = $(".images img.active");
    var activeCircle = $(".nav i.active");


    //reset
    activeImage.removeClass("active");
    activeCircle.removeClass("active");

    //next

    if (direction === "next") {
        if (activeImage.hasClass("last")) {

            $(".images img.first").addClass("active");
            $(".nav i.first").addClass("active");

        } else {


            activeImage.next("img").addClass("active");
            activeCircle.next("i").addClass("active");

        }

    }

    //prev
    else if (direction === "prev") {
        if (activeImage.hasClass("first")) {
            $(".images img.last").addClass("active");
            $(".nav i.last").addClass("active");

        }
        else {
            activeImage.prev("img").addClass("active");
            activeCircle.prev("i").addClass("active");
        }

    }
}