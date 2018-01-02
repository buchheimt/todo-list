$("li").on("click", function() {
    $(this).toggleClass("completed");
});

$("li span").on("click", function(e) {
    e.stopPropagation();
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
});