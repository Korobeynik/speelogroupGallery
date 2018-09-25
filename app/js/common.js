$(function() {

	$('.popup').magnificPopup({
  callbacks: {
    open: function() {
    	// Owl Carousel
			  var owl = $(".news-card");
			  owl.owlCarousel({
			    items: 1,
			    margin: 0,
			    loop: false,
			    nav: true,
			    mouseDrag: false,
			    responsive:{
            0:{
                items:1,
                nav:true,
                autoplay:false,
                mouseDrag: true
            },
            600:{
                items:1,
                nav:false,
                autoplay:false,
                mouseDrag: true
            },
            1200:{
                items:1
            }
        },
			    navText: [
					  '<span class="arrow-left"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="45" viewBox="0 0 24 45"><path fill="#FFF" fill-rule="evenodd" d="M20.89 22.499L.379 2.176a1.26 1.26 0 0 1 0-1.801 1.29 1.29 0 0 1 1.817 0l21.426 21.228a1.26 1.26 0 0 1 0 1.801L2.196 44.623c-.247.245-.58.377-.904.377a1.26 1.26 0 0 1-.904-.377 1.261 1.261 0 0 1 0-1.801L20.89 22.499z"/></svg></span>',
					  '<span class="arrow-right"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="45" viewBox="0 0 24 45"><path fill="#FFF" fill-rule="evenodd" d="M20.89 22.499L.379 2.176a1.26 1.26 0 0 1 0-1.801 1.29 1.29 0 0 1 1.817 0l21.426 21.228a1.26 1.26 0 0 1 0 1.801L2.196 44.623c-.247.245-.58.377-.904.377a1.26 1.26 0 0 1-.904-.377 1.261 1.261 0 0 1 0-1.801L20.89 22.499z"/></svg></span>'
					],
			  }).on('change.owl.carousel', function(e) {
			     if (e.namespace && e.property.name === 'position' 
					&& e.relatedTarget.relative(e.property.value) === e.relatedTarget.items().length - 1) {
					// put your stuff here ...
					$('.news-card-item.finish-slide').addClass('active');
					$('.owl-nav').addClass('active');
					$('.owl-dots').addClass('active');
					$('.news-main-title').addClass('hide');
					console.log('last slide')

					}
			  });

      $.magnificPopup.instance.close = function() {
       $.magnificPopup.proto.close.call(this);
       goToStart();
        // Call the original close method to close the popup
      };
    }
  }
});



	$('.button-start').click(function(e) {
		e.preventDefault();
		goToStart();
	});

	$('.seeAlso-item').click(function() {
		goToStart();
	})

	function goToStart() {
		var carousel = $(".news-card");
		carousel.owlCarousel();
		carousel.trigger("to.owl.carousel", [0, 100, true]);
		$('.news-card-item.finish-slide').toggleClass('active');
		$('.owl-nav').removeClass('active');
		$('.owl-dots').removeClass('active');
		$('.news-card-item.finish-slide').removeClass('active');
		$('.news-main-title').removeClass('hide');
	}

});

$(window).on('load', function () {

    if ($(window).width() < 800) {

    }

});
