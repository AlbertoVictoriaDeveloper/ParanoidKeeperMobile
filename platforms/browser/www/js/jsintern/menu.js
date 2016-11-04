$(document).ready(function(){
var menu = '<div class="menu_section">'+
    '<h3>Options</h3>'+
    '<ul class="nav side-menu">'+
        '<li><a><i class="fa fa-shield"></i> Passwords <span class="fa fa-chevron-down"></span></a>'+
            '<ul class="nav child_menu">'+
                '<li><a href="insertpass.html">Password Register</a></li>'+
                '<li><a href="seepass.html">See Passwords</a></li>'+
            '</ul>'+
        '</li>'+
    '</ul>'+
'</div>';
$("#sidebar-menu").html(menu);
});