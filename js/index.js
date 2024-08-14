$(document).ready(function() {
    $('.project').on('mouseenter', function() {
        console.log('Mouse entered:', this); // Debugging
        $(this).stop(true, true).css('transform', 'scale(1.1)');
    }).on('mouseleave', function() {
        console.log('Mouse left:', this); // Debugging
        $(this).stop(true, true).css('transform', 'scale(1)');
    });
});