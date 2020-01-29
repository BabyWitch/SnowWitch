$(function() {
    $('.navToggle').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
    $(function(){
        $('.botton li').hover(function(){
            $("ul:not(:animated)", this).slideDown();
        }, function(){
            $("ul.button_content",this).slideUp();
        });
    });
});
