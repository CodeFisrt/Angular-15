(function ($) {
    "use strict"

    //typed initiate
    if ($('.typed-text-output')).length == 1){
        var typed_strings = $('.typed-text').text();
        var typed = new typed('.typed-text-output',{
            strings:typed_stringss.split(','),
            typespeed:100,
            backspeed:20,
            smartbackspace:false,
            loop:true
        });
    }
})(jQuery);