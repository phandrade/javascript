$(document).ready(function(){
    $('.collapsible').collapsible();

    var elem = document.querySelector('.collapsible.expandable');
    var instance = M.Collapsible.init(elem, {
    accordion: false
    });
    $('.materialboxed').materialbox();
    $('.slider').slider();
});

