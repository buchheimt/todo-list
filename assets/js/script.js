$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

$("ul").on("click", "li span", function(e) {
    e.stopPropagation();
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
});

$("input[type='text']").on("keypress", function(e) {
    if (e.which === 13) {
        let todoText = $(this).val();
        $(this).val("");
        $("ul").append(`<li><span> X </span>${todoText}</li>`);
    }
});