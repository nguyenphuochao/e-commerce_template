$(document).ready(function () {
    // Checkout select
    $(".checkout input[name=payment]").change(function () {
        if ($(this).is(':checked')) {
            $(".checkout .payment-sumary").css('display', 'none');
            $(this).parent().next().css('display', 'block');
        }
    });
    // Menu mobile
    $(".nav-mobile .menu-mobile-parent").click(function () {
        $(this).parent().next('.menu-mobile-child').toggle();
        $(this).toggleClass("fa-angle-down fa-angle-up");
    });
});
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}