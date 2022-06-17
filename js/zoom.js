import $ from 'jquery';

$(windows).scroll(function(){
    var scrollPos = $(this).scrollTop();
    $('#section1').css({
        'background-size': 100 + scrollPos + '%'
    });
});