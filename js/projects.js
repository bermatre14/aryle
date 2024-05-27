$(function(){

    $('.project-filters select').on('change', function(){
        $(this).closest('form').submit();
    });

});