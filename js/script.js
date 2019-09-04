$(document).ready(function() {
    var fadedIcon;
    var brightImage;

    function timer() {
        console.log("hello");
    }

    $('.tile-link').on('mouseenter', function() {
        fadedIcon = this.lastChild.previousElementSibling;
        brightImage = this.firstChild.nextElementSibling;
        $(fadedIcon).addClass('faded').removeClass('brightened');
        $(brightImage).addClass('brightened');

    });
    $('.tile-link').on('mouseleave', function() {
        fadedIcon = this.lastChild.previousElementSibling;
        brightImage = this.firstChild.nextElementSibling;
        
        $(brightImage).removeClass('brightened');
        $(fadedIcon).removeClass('faded').addClass('brightened');
     
    });
});