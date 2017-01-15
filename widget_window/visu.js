$(document).delegate('table[data-widget="pfischi.widget_window"]', {
    'update': function (event, response) {
        event.stopPropagation();
        $(this).val(response);
        $(this).trigger('draw');
    },

    'draw': function(event) {
        event.stopPropagation();
        if($(this).val() == $(this).attr('data-val-open')) {
            $(this).find('#' + this.id + '-1').show();
            $(this).find('#' + this.id + '-0').hide();
            $(this).find('#' + this.id + '-2').hide();
            $(this).find('#' + this.id + '-txt').html($(this).attr('data-txt-open'));
        }
        else if($(this).val() == $(this).attr('data-val-tilt')) {
            $(this).find('#' + this.id + '-2').show();
            $(this).find('#' + this.id + '-0').hide();
            $(this).find('#' + this.id + '-1').hide();
            $(this).find('#' + this.id + '-txt').html($(this).attr('data-txt-tilt'));
        }
        else {
            $(this).find('#' + this.id + '-0').show();
            $(this).find('#' + this.id + '-1').hide();
            $(this).find('#' + this.id + '-2').hide();
            $(this).find('#' + this.id + '-txt').html($(this).attr('data-txt-closed'));
        }
    }
});

