$(function() {
    'use strict';

    // TABINATION & GROUP TABINATION
    $(document).on('click', '.tabination .nav-tabs li', function () {
        $(this).parent().find('li').removeClass('active');
        $(this).addClass('active');
        $(this).parent().parent().find('.tab-pane').removeClass('active');
        var selected_tab = $(this).find('a').attr('href');
        $(this).parent().parent().find('#' + selected_tab).addClass('active');
        return false;
    });

});