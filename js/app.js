$(".menu-btn").on("click", function (e) {
    e.preventDefault();
    $(".menu").toggleClass("menu_active");
    $("body").toggleClass("hidden");
    $(".content-show").toggleClass("content_active");
});

$(".menu-btn").on("click", function (e) {
    e.preventDefault;
    $(this).toggleClass("menu-btn_active");
});