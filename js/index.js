$(document).ready(function() {
    // 1. Target the slider element
    var $slider = $('.testimonial-slider');

    // 2. Check if the element exists to prevent errors
    if ($slider.length > 0) {
        
        $slider.slick({
            slidesToShow: 1,
            infinite: true,
            fade: true,         // <--- This is the key! It stops the box from sliding.
            arrows: false, // We use your custom buttons instead
            dots: false,
            adaptiveHeight: true
        });

        // 3. Attach click events to your buttons
        $('.next-btn').on('click', function() {
            $slider.slick('slickNext');
        });

        $('.prev-btn').on('click', function() {
            $slider.slick('slickPrev');
        });

        // 4. Progress bar and counter logic
        $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            var count = nextSlide + 1;
            $('.current-slide').text(count);
            var progress = (count / slick.slideCount) * 100;
            $('#slider-progress').css('width', progress + '%');
        });

        console.log("Slider is active!");
    } else {
        console.error("Could not find .testimonial-slider in the HTML");
    }
});