;(function($){

  $.fn.customFormElement = function(options){

    var settings = $.extend({
      className: 'js-custom'
    });

    this.each(function(){

      var $el = $(this);

      switch($el.prop('tagName')){

        case 'INPUT':
        $el.wrap('<span class="' + settings.className + '-' + $el.prop('type') + '" />');
          $('<label for="' + $el.prop('id') + '" />').appendTo($el.parent());
          break;

        case 'SELECT':
          $el.wrap('<span class="' + settings.className + '-select" />');
          var $parent = $el.parent();
          var options = $el.children();
          var label = $('<span class="js-label" />')
            .html($(options[$el.prop('selectedIndex')]).html())
            .appendTo($parent);

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
