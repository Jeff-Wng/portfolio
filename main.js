$(document).ready(function() {

    $('.threeBars').click(function() {
        $('.Nav').toggle("slide", {direction: 'right'}, 200);
        $('.Nav').toggleClass('displayNone');
        $(".Bar1").toggleClass('change1');
        $(".Bar2").toggleClass('change2');
        $(".Bar3").toggleClass('change3');
    })
})