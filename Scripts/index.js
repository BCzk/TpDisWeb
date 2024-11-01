/* --- Imágenes Originales --- */
var firstImgOr = "../Recursos/Juegos/stalkinggaze-image.png";
var secondImgOr = "../Recursos/Juegos/rotobox-image.png";
var thirdImgOr = "../Recursos/Juegos/paranoid-image.png";

/* --- Imágenes Hover --- */
var firstImgHo = "../Recursos/Juegos/stalkinggaze-hover.png";
var secondImgHo = "../Recursos/Juegos/rotobox-hover.png";
var thirdImgHo = "../Recursos/Juegos/paranoid-hover.png";

/* --- Mouse Enter --- */
$(".lista-fotos").mouseenter(function () {

    /* --- Primera imagen --- */
    $("#img1").stop(true, true).fadeOut(500, function () {
        $("#img1").attr("src", firstImgHo);
    });
    $("#img1").stop(true, true).fadeIn(500);

    /* --- Segunda imagen --- */
    $("#img2").stop(true, true).fadeOut(500, function () {
        $("#img2").attr("src", secondImgHo);
    });
    $("#img2").stop(true, true).fadeIn(500);

    /* --- Tercera imagen --- */
    $("#img3").stop(true, true).fadeOut(500, function () {
        $("#img3").attr("src", thirdImgHo);
    });
    $("#img3").stop(true, true).fadeIn(500);
});

/* --- Mouse Leave --- */
$(".lista-fotos").mouseleave(function () {

    /* --- Primera imagen --- */
    $("#img1").stop(true, true).fadeOut(500, function () {
        $("#img1").attr("src", firstImgOr);
    });
    $("#img1").stop(true, true).fadeIn(500);

    /* --- Segunda imagen --- */
    $("#img2").stop(true, true).fadeOut(500, function () {
        $("#img2").attr("src", secondImgOr);
    });
    $("#img2").stop(true, true).fadeIn(500);

    /* --- Tercera imagen --- */
    $("#img3").stop(true, true).fadeOut(500, function () {
        $("#img3").attr("src", thirdImgOr);
    });
    $("#img3").stop(true, true).fadeIn(500);
});

