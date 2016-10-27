;(function($){

    $.fn.customFormElement = function(options){

        var settings = $.extend({
            className: 'js-custom'
        }, options);

        this.each(function(){

        var $el = $(this);

        switch($el.prop('tagName')){

            case 'INPUT':
                $el.wrap('<span class="' + settings.className + '-' + $el.prop('type') + '" />');
                var $parent = $el.parent();
                var type = $el.attr('type');
                $('<label for="' + $el.prop('id') + '" />').appendTo($el.parent());

                if ($el.prop('checked') == true){

                    $parent.addClass('checked');
                }

                $el.on('change', function(){

                    if ($el.prop('checked') == true){

                        $parent.addClass('checked');

                        if (type == 'radio'){

                            $('input[name=' + $el.attr('name') + ']').each(function(){

                                if ($(this).prop('checked') == false){

                                    $(this).parent().removeClass('checked');
                                }
                            });
                        }

                    } else{

                        $parent.removeClass('checked');
                    }
                });
                break;

            case 'SELECT':
                $el.wrap('<span class="' + settings.className + '-select" />');
                var $parent = $el.parent();
                var options = $el.children();

                var label = $('<span class="js-label" />')
                    .html($(options[$el.prop('selectedIndex')]).html())
                    .appendTo($parent);

                var list = $('<ul class="options" />').appendTo($parent);

                $(options).each(function(index){

                    var li = $('<li class="option">' + $(this).html() + '</li>').appendTo(list);
                    if (index == $el.prop('selectedIndex')){

                        $(li).addClass('selected');
                    }
                });

                $(label).click(function(){

                    $parent.toggleClass('open');
                });

                $(document.body).click(function(){

                    $parent.removeClass('open');
                });

                $parent.click(function(e){

                    e.stopPropagation();
                });

                $(list).children().each(function(index){

                    $(this).click(function(){

                        $(list).find('.selected').removeClass('selected');
                        $(this).addClass('selected');
                        $el.val($(options[index]).val());
                        label.html($(options[index]).html());
                        $parent.removeClass('open');
                        $el.trigger('change');
                    });
                });

                $el.on('change', function(){

                    var options = $el.children();
                    label.html($(options[$el.prop('selectedIndex')]).html());
                });
                break;
            }
        });

        return this;
    };

})(jQuery);
