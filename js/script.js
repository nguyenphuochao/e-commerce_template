$(document).ready(function () {
    // Tìm kiếm sản phẩm auto submit
    $(".top-menu #fa-magnifying-glass").click(function () {
        $("#search_form").submit();
    });
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
    // Thumbnail image 
    $(".detail .thumbnail-image img").click(function () {
        $(".detail .thumbnail-image img").removeClass('active');
        var thumb_img = $(this).attr('src');
        $(".detail .big-img img").attr('src', thumb_img);
        $(this).addClass('active');
    });
    // Slick Thumbnail image 
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}