$(function() {

    var $menuBar = $(".bars");

    $menuBar.on('click', function(){
        $('.menu').slideToggle(700)
                  /*.css({
                      position: "relative"
                  });*/
    });
});