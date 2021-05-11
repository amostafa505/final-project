$(document).ready(function(){
$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    dots: false,
    nav:true,
    rtl:true,
    items:1,
})
$( ".owl-prev").html('<i class="far fa-arrow-alt-circle-right"></i>');
$( ".owl-next").html('<i class="far fa-arrow-alt-circle-left"></i>');
$('.next').removeClass('disabled');
$('.prev').removeClass('disabled');
}); 
