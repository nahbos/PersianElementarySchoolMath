/*Add class when scroll down*/
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll >= 250) {
        $(".go-top").addClass("show");
    } else {
        $(".go-top").removeClass("show");
    }
});
/*Animation anchor*/
$('a').click(function () {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 1000);
});

// pagination
let numberPattern = /\d+/g;
let url_numbers = window.location.href.match(numberPattern);
let current_page = parseInt(url_numbers[url_numbers.length - 1])
console.log("current page : " + current_page)

function prevPage() {
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage() {
    current_page++;
    changePage(current_page);
}

function changePage(page) {

    window.location.href = `./book_3_${page}.html`;

}
$(document).ready(function () {


    $(".prev-page,.prev").click(function () {
        prevPage();
    })
    $(".next-page,.next").click(function () {
        nextPage();
    })

    let childs = $('.pagination').children(); //returns a HTMLCollection

    for (let i = 1; i < childs.length - 1; i++) { // iterate over it
        if ("ontouchstart" in document.documentElement) {
            childs[i].innerHTML = current_page + i - 1;
            console.log("your device is a touch screen device.");
            childs[1].classList.add("current");
            childs[4].classList.remove("current");
        } else {
            childs[i].innerHTML = current_page + i - 4;
            console.log("your device is NOT a touch device");
        }

        childs[i].onclick = function () { // attach event listener individually
            window.location.href = `./book_3_${childs[i].innerHTML}.html`;
        }
    }

});



window.onkeypress = function (e) {
    e = e || window.event;
    if (e.keyCode === 13) {
        console.log("enter hitted")
        document.documentElement.classList.toggle('dark-mode')
    }
}

function checkTamrinP94() {
    console.log("mohit labels: " + $(".triangles"))
    $(".triangle-answer").each(function (i, obj) {
        if(obj.value !== ""){
            if (obj.value !== "6") {
                obj.classList.add("is-invalid")
                obj.classList.remove("is-valid")
            } else {
                obj.classList.add("is-valid")
                obj.classList.remove("is-invalid")
            }
    
        }

    });

    $("#tamrin").find(".info-message").css("display", "flex")
    .hide()
    .fadeIn();
}

function checkFargangeNeveshtanP94(){
    $("#farhange-neveshtan").find(".info-message").css("display", "flex")
    .hide()
    .fadeIn();

}
(function ($) {
    $(document).on('click','.close', function() { 
        console.log("salam" + $(this).text())
        $(this).parent().fadeOut();
     });

})(jQuery);