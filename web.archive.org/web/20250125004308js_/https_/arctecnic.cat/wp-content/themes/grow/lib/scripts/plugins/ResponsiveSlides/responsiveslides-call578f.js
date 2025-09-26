var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/**
 * Function for ResponsiveSlides used on homepage slider.
 *
 * jQuery effects used in theme.
 */

//----------------------------------------------------------------------------------
//	RESPONSIVE SLIDER - HOMEPAGE
//----------------------------------------------------------------------------------

// Control ThinkUpSlider features
jQuery(document).ready(function() {

	jQuery( '.rslides-inner .slides' ).each( function(i) {

	// Set slides to transition automatically
	slideAuto = true;

	// Set transition time between slides
	if ( ! jQuery( this ).closest( '.rslides-container' ).attr('data-speed') ) {
		slideSpeed = 6000;
	} else {
		slideSpeed = jQuery( this ).closest( '.rslides-container' ).attr('data-speed')
		
		// Disable auto-scroll if slider speed id equal to 0
		if ( slideSpeed == 'off' ) {
			slideSpeed = null;
			slideAuto = false;
		}
	}

	jQuery( this ).responsiveSlides({
		auto: slideAuto,        // Boolean:  Animate automatically, true or false
		speed: 500,             // Integer:  Speed of the transition, in milliseconds
		timeout: slideSpeed,    // Integer:  Time between slide transitions, in milliseconds
		pager: true,            // Boolean:  Show pager, true or false
		nav: true,              // Boolean:  Show navigation, true or false
		random: false,          // Boolean:  Randomize the order of the slides, true or false
		pause: true,            // Boolean:  Pause on hover, true or false
		pauseControls: true,    // Boolean:  Pause when hovering controls, true or false
		prevText: " ",          // String:   Text for the "previous" button
		nextText: " ",          // String:   Text for the "next" button
		maxwidth: "",           // Integer:  Max-width of the slideshow, in pixels
		navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
		manualControls: "",     // Selector: Declare custom pager navigation
		namespace: "rslides",   // String:   Change the default namespace used
		before: function(){},   // Function: Before callback
		after: function(){}     // Function: After callback
	});
	
	});
});

// Homepage Responsive Slider
jQuery(document).ready(function() {

	// Supported Platforms
	var slider = jQuery( '#slider .rslides-inner .slides' );

	slider.each(function() {
		var el = jQuery(this);
		el
			.attr( 'data-aspectRatio', slider.height() / 1140 )
			.attr( 'data-oldWidth', el.width() );
		});

	jQuery(document).ready(function() {
		slider.each( function() {
		var el = jQuery(this),
			newWidth = el.parents().width(),
			oldWidth = el.attr( 'data-oldWidth' );

			el
				.removeAttr( 'height' )
				.removeAttr( 'width' )
				.width( newWidth )
				.height( newWidth * el.attr( 'data-aspectRatio' ) );
		});

	}).resize();

	jQuery(window)
		.resize( function() {
			slider.each( function() {
			var el = jQuery(this),
				newWidth = el.parents().width(),
				oldWidth = el.attr( 'data-oldWidth' );

				el
					.removeAttr( 'height' )
					.removeAttr( 'width' )
					.width( newWidth )
		    		.height( newWidth * el.attr( 'data-aspectRatio' ) );
			});

		}).resize();

});

// Homepage Responsive Slider (inner li)
jQuery(document).ready(function() {

	// Supported Platforms
	var slider_li = jQuery( '#slider .rslides-inner .slides li' );

	slider_li.each(function() {
		var el = jQuery(this);
		el
			.attr( 'data-aspectRatio', slider_li.height() / 1140 )
			.attr( 'data-oldWidth', el.width() );
		});

	jQuery(document).ready(function() {
		slider_li.each( function() {
		var el = jQuery(this),
			newWidth = el.parents().width(),
			oldWidth = el.attr( 'data-oldWidth' );

			el
				.removeAttr( 'height' )
				.removeAttr( 'width' )
				.width( newWidth )
				.height( newWidth * el.attr( 'data-aspectRatio' ) );
		});

	}).resize();

	jQuery(window)
		.resize( function() {
			slider_li.each( function() {
			var el = jQuery(this),
				newWidth = el.parents().width(),
				oldWidth = el.attr( 'data-oldWidth' );

				el
					.removeAttr( 'height' )
					.removeAttr( 'width' )
					.width( newWidth )
		    		.height( newWidth * el.attr( 'data-aspectRatio' ) );
			});

		}).resize();

});


//----------------------------------------------------------------------------------
//	RESPONSIVE SLIDER - SHORTCODE
//----------------------------------------------------------------------------------

// Homepage Responsive Slider
jQuery(document).ready(function() {

	jQuery( '.rslides-sc' ).each( function( i, element ) {

		var instanceID = 'rslides-sc-' + i;

		jQuery( element ).attr( 'id', instanceID );


		// Supported Platforms
		var slider = jQuery( element ).find( '.rslides-inner .slides' );

		var width = jQuery(window).width();
		if( width >= 1140 || jQuery( 'body' ).hasClass( 'layout-fixed' ) ) {
			var slider_height = jQuery( element ).data( 'height' );
		} else {
			var slider_height = jQuery( element ).data( 'height' ) * (width / 1140);
		}

		jQuery( element ).find( '.rslides' ).css( { 'height': slider_height, 'max-height': slider_height } );
		jQuery( element ).find( '.rslides li' ).css( { 'height': slider_height, 'max-height': slider_height } );
		jQuery( element ).find( '.rslides img' ).css( { 'max-height': slider_height } );

		slider.each(function() {
			var el = jQuery(this);
			el
				.attr( 'data-aspectRatio', slider.height() / slider.width() )
				.attr( 'data-oldWidth', el.width() );
			});

		jQuery(document).ready(function() {
			slider.each( function() {
			var el = jQuery(this),
				newWidth = el.parents().width(),
				oldWidth = el.attr( 'data-oldWidth' );

				el
					.removeAttr( 'height' )
					.removeAttr( 'width' )
					.width( newWidth )
					.height( newWidth * el.attr( 'data-aspectRatio' ) );
			});

		}).resize();

		jQuery(window)
			.resize( function() {
				slider.each( function() {
				var el = jQuery(this),
					newWidth = el.parents().width(),
					oldWidth = el.attr( 'data-oldWidth' );

					el
						.removeAttr( 'height' )
						.removeAttr( 'width' )
						.width( newWidth )
						.height( newWidth * el.attr( 'data-aspectRatio' ) );
				});

			}).resize();
	});
});

// Homepage Responsive Slider (inner li)
jQuery(document).ready(function() {

	jQuery( '.rslides-sc' ).each( function( i, element ) {

		var instanceID = 'rslides-sc-' + i;

		jQuery( element ).attr( 'id', instanceID );
		
		// Supported Platforms
		var slider_li = jQuery( element ).find( '.rslides-inner .slides li' );

		slider_li.each(function() {
			var el = jQuery(this);
			el
				.attr( 'data-aspectRatio', slider_li.height() / slider_li.width() )
				.attr( 'data-oldWidth', el.width() );
			});

		jQuery(document).ready(function() {
			slider_li.each( function() {
			var el = jQuery(this),
				newWidth = el.parents().width(),
				oldWidth = el.attr( 'data-oldWidth' );

				el
					.removeAttr( 'height' )
					.removeAttr( 'width' )
					.width( newWidth )
					.height( newWidth * el.attr( 'data-aspectRatio' ) );
			});

		}).resize();

		jQuery(window)
			.resize( function() {
				slider_li.each( function() {
				var el = jQuery(this),
					newWidth = el.parents().width(),
					oldWidth = el.attr( 'data-oldWidth' );

					el
						.removeAttr( 'height' )
						.removeAttr( 'width' )
						.width( newWidth )
						.height( newWidth * el.attr( 'data-aspectRatio' ) );
				});

			}).resize();
	});
});




//----------------------------------------------------------------------------------
//	THINKUPSLIDER SLIDER - SHORTCODE
//----------------------------------------------------------------------------------

// Homepage Responsive Slider
jQuery(document).ready(function() {

	jQuery( '.thinkupslider-sc' ).each( function( i, element ) {

		var instanceID = 'thinkupslider-sc-' + i;

		jQuery( element ).attr( 'id', instanceID );


		// Supported Platforms
		var slider = jQuery( element ).find( '.rslides-inner .slides' );

		var width = jQuery(window).width();
		if( width >= 1140 || jQuery( 'body' ).hasClass( 'layout-fixed' ) ) {
			var slider_height = jQuery( element ).data( 'height' );
		} else {
			var slider_height = jQuery( element ).data( 'height' ) * (width / 1140);
		}

		jQuery( element ).find( '.rslides' ).css( { 'height': slider_height, 'max-height': slider_height } );
		jQuery( element ).find( '.rslides li' ).css( { 'height': slider_height, 'max-height': slider_height } );
		jQuery( element ).find( '.rslides img' ).css( { 'max-height': slider_height } );

		slider.each(function() {
			var el = jQuery(this);
			el
				.attr( 'data-aspectRatio', slider.height() / slider.width() )
				.attr( 'data-oldWidth', el.width() );
			});

		jQuery(document).ready(function() {
			slider.each( function() {
			var el = jQuery(this),
				newWidth = el.parents().width(),
				oldWidth = el.attr( 'data-oldWidth' );

				el
					.removeAttr( 'height' )
					.removeAttr( 'width' )
					.width( newWidth )
					.height( newWidth * el.attr( 'data-aspectRatio' ) );
			});

		}).resize();

		jQuery(window)
			.resize( function() {
				slider.each( function() {
				var el = jQuery(this),
					newWidth = el.parents().width(),
					oldWidth = el.attr( 'data-oldWidth' );

					el
						.removeAttr( 'height' )
						.removeAttr( 'width' )
						.width( newWidth )
						.height( newWidth * el.attr( 'data-aspectRatio' ) );
				});

			}).resize();
	});
});

// Homepage Responsive Slider (inner li)
jQuery(document).ready(function() {

	jQuery( '.thinkupslider-sc' ).each( function( i, element ) {

		var instanceID = 'thinkupslider-sc-' + i;

		jQuery( element ).attr( 'id', instanceID );
		
		// Supported Platforms
		var slider_li = jQuery( element ).find( '.rslides-inner .slides li' );

		slider_li.each(function() {
			var el = jQuery(this);
			el
				.attr( 'data-aspectRatio', slider_li.height() / slider_li.width() )
				.attr( 'data-oldWidth', el.width() );
			});

		jQuery(document).ready(function() {
			slider_li.each( function() {
			var el = jQuery(this),
				newWidth = el.parents().width(),
				oldWidth = el.attr( 'data-oldWidth' );

				el
					.removeAttr( 'height' )
					.removeAttr( 'width' )
					.width( newWidth )
					.height( newWidth * el.attr( 'data-aspectRatio' ) );
			});

		}).resize();

		jQuery(window)
			.resize( function() {
				slider_li.each( function() {
				var el = jQuery(this),
					newWidth = el.parents().width(),
					oldWidth = el.attr( 'data-oldWidth' );

					el
						.removeAttr( 'height' )
						.removeAttr( 'width' )
						.width( newWidth )
						.height( newWidth * el.attr( 'data-aspectRatio' ) );
				});

			}).resize();
	});
});

}
/*
     FILE ARCHIVED ON 00:43:08 Jan 25, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:07:21 Sep 26, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.226 (2)
  exclusion.robots: 0.045 (2)
  exclusion.robots.policy: 0.022 (2)
  esindex: 0.024 (2)
  cdx.remote: 26.657 (2)
  LoadShardBlock: 302.93 (6)
  PetaboxLoader3.datanode: 214.944 (8)
  PetaboxLoader3.resolve: 186.697 (4)
  load_resource: 212.834 (2)
*/