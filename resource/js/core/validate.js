/**
 * Created by zmouse on 2015/4/25.
 */
/*
$.extend({
    a : 1
});*/


/*
$.extend({

    validate : function(qq) {
        T
    }

});*/


(function($) {

    //$

    $.extend({

        validate : function(qq) {
            return /^[1-9]\d{4,11}$/.test(qq);
        }

    });

})(jQuery);