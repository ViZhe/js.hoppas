/*!!
*	@title Header sticky
*	@version 0.0.2
*	@author ViZhe (Barsik^)
*	@license MIT
*
*/
/*
*	##ENABLE##
*	$('.b-header').headerSticky();
*
*
*	##Stylus##
*	.b-header
*		fixed 0 false false false
*		z-index 800
*		transform translateY(0px)
*		transition transform 0.4s
*
*	.b-header_scroll_down
*		transform translateY(-110%)
*
*/
(function($) {
	$.fn.headerSticky = function() {
		var e = this,
			scrollDiff = 0;

		$("body").css({
			paddingTop: e.outerHeight()
		});

		scrollTop = $(document).scrollTop();

		$(window).on("scroll", function() {
			scrollTop = $(document).scrollTop();

			if (scrollDiff < scrollTop) {
				e.addClass("b-header_scroll_down");

			} else if (scrollDiff > scrollTop) {
				e.removeClass("b-header_scroll_down");
			};
			scrollDiff = scrollTop;
		});
	};
})(jQuery);