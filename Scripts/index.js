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
/*    $("#img1").fadeOut(500, function () {*/
        $("#img1").attr("src", firstImgHo);
    //    $("#img1").load(function () { $("#img1").fadeIn(500); } );
    //});

    $("#img2").attr("src", secondImgHo);
    $("#img3").attr("src", thirdImgHo);
});

/* --- Mouse Leave --- */
$(".lista-fotos").mouseleave(function () {
    $("#img1").attr("src", firstImgOr);
    $("#img2").attr("src", secondImgOr);
    $("#img3").attr("src", thirdImgOr);
});
