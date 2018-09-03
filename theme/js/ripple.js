function ripple() {
    var rippleSelectors = window.rippleSelectors || [
        '.ui-button',
        '.ui-widget.ui-steps:not(.ui-steps-readonly) .ui-steps-item .ui-menuitem-link'
    ];

    var rippleSelectorsAsString = rippleSelectors.join(", ");

    $(document.body).off('mousedown', rippleSelectorsAsString).on('mousedown', rippleSelectorsAsString, null, function (event) {
        var surface = $(this);
        // create .ink element
        surface.prepend("<div class='material-ink'></div>");
        var ink = surface.find(".material-ink");

        // set size of .ink
        if (!ink.height() && !ink.width()) {
            var d = 2 * Math.sqrt(Math.pow(surface.outerWidth(), 2) + Math.pow(surface.outerHeight(), 2));
            ink.css({height: d, width: d});
        }

        // get click coordinates
        // Logic:
        // click coordinates relative to page minus
        // surface's position relative to page minus
        // half of self height/width to make it controllable from the center
        var x = event.pageX - surface.offset().left - (ink.width() / 2);
        var y = event.pageY - surface.offset().top - (ink.height() / 2);

        var rippleColor = surface.data("ripple-color");

        //set the position and add class .animate
        ink.css({
            top: y + 'px',
            left: x + 'px',
            background: rippleColor,
            'pointer-events': 'none'
        }).addClass("animate");
    });

    $(document.body).off('mouseleave mouseup', rippleSelectorsAsString).on('mouseleave mouseup', rippleSelectorsAsString, null, function (event) {
        var surface = $(this);
        var ink = surface.find(".material-ink");
        surface.find(".material-ink").fadeOut(function () {
            $(this).remove();
        });
    });
}

ripple();


