$(document).delegate('div[data-widget="pfischi.widget_rtr"] > div > a[data-icon="minus"]', {
	'click': function (event, response) {
        	var uid = $(this).parent().parent().attr('id');
                var step = $('#' + uid).attr('data-step');
                var item = $('#' + uid + 'set').attr('data-item');
                io.write(item, 0);
        }
});

$(document).delegate('div[data-widget="pfischi.widget_rtr"] > div > a[data-icon="plus"]', {
	'click': function (event, response) {
        	var uid = $(this).parent().parent().attr('id');
                var step = $('#' + uid).attr('data-step');
                var item = $('#' + uid + 'set').attr('data-item');
                io.write(item, 1);
        }
});

