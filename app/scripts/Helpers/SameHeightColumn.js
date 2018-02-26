$( document ).ready(function() {
    var heights = $(".singlecategory").map(function() {
        return $(this).height();
    }).get(),

    maxHeight = Math.max.apply(null, heights);

    $(".singlecategory").height(maxHeight);
});