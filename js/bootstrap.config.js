$('[data-toggle="tooltip"]').tooltip();
$('[data-toggle="popover"]').popover(); 

var search_tpl = $('#search-tpl').html();
$('#search-content').attr('data-content', search_tpl);

var login_tpl = $('#login-tpl').html();
$('#login-content').attr('data-content', login_tpl);

