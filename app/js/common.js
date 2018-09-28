$(function() {

	$('.popup').magnificPopup({
		fixedBgPos: true,
  	callbacks: {
    open: function() {
    	$('body,html').addClass('hidden-fix');
    	// Owl Carousel
			  let owl = $(".news-card");
			  owl.owlCarousel({
			    items: 1,
			    margin: 0,
			    loop: false,
			    nav: true,
			    mouseDrag: false,
			    touchDrag: true,
			    autoHeight:true,
			    responsive : {
					    // breakpoint from 0 up
					    0 : {
					        margin: 20,
					    },
					    // breakpoint from 480 up
					    480 : {
					        margin: 20,
					    },
					    // breakpoint from 768 up
					    768 : {
					        margin: 0,
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
					console.log(this);
					$(this).touchDrag = false;
					$('.news-card-item.finish-slide').addClass('active');
					$('.owl-nav').addClass('active');
					$('.owl-dots').addClass('active');
					$('.news-main-title').addClass('hide');
					$('.mfp-auto-cursor .mfp-content').addClass('scroll');
					$('body').on("touchmove", false);

					console.log('last slide');
	
					$('.news-card').data('owl.carousel').options.autoHeight = true
					if ($(window).width() < 800) {
			    	if($('.news-card-item.finish-slide').hasClass('active')) {
			    		$('.news-main-title').removeClass('hide');

			    	}
			    }

					} else {
						$('.owl-nav').removeClass('active', 'disabled');
						$('.owl-dots').removeClass('active');
						$('.mfp-content').removeClass('scroll');
					}
			  }).on('dragged.owl.carousel', function(e) {
			  	var el = $('.owl-item.active').find('.news-card-item');
			  	 if($(el).hasClass('dark-top')) {
				  	$('.news-main-title').addClass('dark');
				  	$('.mfp-close-btn-in .mfp-close').addClass('dark');
				  } else {
				  	$('.news-main-title').removeClass('dark');
				  	$('.mfp-close-btn-in .mfp-close').removeClass('dark');
				  }

			  });

      $.magnificPopup.instance.close = function() {
       $.magnificPopup.proto.close.call(this);
       goToStart();
       $('body,html').removeClass('hidden-fix');
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
		$('.owl-nav').removeClass('active', 'disabled');
		$('.owl-dots').removeClass('active');
		$('.news-card-item.finish-slide').removeClass('active');
		$('.news-main-title').removeClass('hide');
		$('body').unbind('touchmove');
		
	}

});

$(window).on('load', function () {

    if ($(window).width() < 800) {
    	if($('.news-card-item.finish-slide').hasClass('active')) {
    		$('.news-main-title').removeClass('hide');
    	}
    }

});
