/*

  ANIMACION DEL  SCROLL AL HACER CLIC EN LOS ENLACES DEL LANDING PAGE

*/
$(document).ready(function() {
    $('a[href="#galeria"]').click(function() {
        var destino = $(this.hash);
        if (destino.length == 0) {
            destino = $('a[href="#galeria"]');
        }
        $('html, body').animate({ scrollTop: destino.offset().top }, 1000);
        // $("html, body").addClass("animated bounceOut").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        //     $('html, body').removeClass("animated bounceOut");
        // });
        return false;
    });
});


$(document).ready(function() {
    $('a[href="#contactenos"]').click(function() {
        var destino = $(this.hash);
        if (destino.length == 0) {
            destino = $('a[href="#contactenos"]');
        }

        $('html, body').animate({ scrollTop: destino.offset().top }, 1000);
        // $("html, body").addClass("animated bounceOut").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        //     $('html, body').removeClass("animated bounceOut");
        // });
        return false;
    });
});

$(document).ready(function() {
    $('a[href="#top"]').click(function() {
        var destino = $(this.hash);
        if (destino.length == 0) {
            destino = $('a[href="#top"]');
        }

        $('html, body').animate({ scrollTop: destino.offset().top }, 1000);
        // $("html, body").addClass("animated bounceOut").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        //     $('html, body').removeClass("animated bounceOut");
        // });
        return false;
    });
});
/*FIN DE ANIMACION DEL  SCROLL AL HACER CLIC EN LOS ENLACES DEL LANDING PAGE*/




$(document).on("scroll", function() {
    //sacamos el desplazamiento actual de la página
    var desplazamientoActual = $(document).scrollTop();
    //accedemos al control de "ir arriba"
    var controlArriba = $("#subir");
    //compruebo si debo mostrar el botón
    if (desplazamientoActual > 150 && controlArriba.hasClass("d-none")) {
        controlArriba.addClass("d-block animated fadeInUp ");
        controlArriba.fadeIn(1000);
    }
    //controlo si debo ocultar el botón
    if (desplazamientoActual < 150 && controlArriba.hasClass("d-block")) {
        controlArriba.css("animation-iteration-count") == ("infinite");
        controlArriba.removeClass("d-block");
        controlArriba.addClass("d-none animated ");
        controlArriba.fadeOut(1000);
    }


});

//  pasar animacion de animate.css
// $("#galery-housing").click(function() {
//     $("#imagenes .sport,.org-fru,.events").css("display", "none");
//     $("#imagenes .housing").css("display", "block");

//     $(".housing .img-fluid").addClass("animated fadeInUp").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
//         $('.housing .img-fluid').removeClass("animated fadeInUp");
//     });
// });



// lightbox.option({
//     'resizeDuration': 200,
//     'wrapAround': true
// });