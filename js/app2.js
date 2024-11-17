$(document).ready(function() {
    $("#opacidad02").on("click",function() {
    $("#rectangulo").fadeTo("slow",0.2);
    });
    $("#opacidad08").on("click",function() {
    $("#rectangulo").fadeTo("fast",0.8);
    });
    $("#alternar01").on("click",function() {
    $("#rectangulo").fadeToggle();
    });
    $("#alternar02").on("click",function() {
    $("#rectangulo").fadeToggle(4000);
    });
    }); 