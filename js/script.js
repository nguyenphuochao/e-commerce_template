$(document).ready(function () {
    $(".checkout input[name=payment]").change(function () {
        if ($(this).is(':checked')) {
            $(".checkout .payment-sumary").css('display', 'none');
            $(this).parent().next().css('display', 'block');
        }
    });
});
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}