/*!!
  *	@title Scroll to
  *	@version 0.0.1
  *	@author ViZhe (Barsik^)
  *	@license MIT
*/
/*

	##ENABLE##

	class="b-scroll-to" data-scroll-to='{"direction": "bottom","speed": 10000}'
	class="b-scroll-to" data-scroll-to='{"direction": 50}
	class="b-scroll-to" data-scroll-to='{"direction": top}
	class="b-scroll-to" data-scroll-to='{"direction": ".goToMe"}

	$('.b-scroll-to').scrollTo({
		speed: 10000
	});

*/
(function($) {
  var scrollTo = function( elem, options ){
	  this.elem = elem;
	  this.$elem = $(elem);
	  this.options = options;
	  this.metadata = this.$elem.data( 'scroll-to' );
	};
	scrollTo.prototype = {
		defaults: {
			speed: 700,
			direction: "top"
		},
		init: function() {
			this.config = $.extend({}, this.defaults, this.options, this.metadata);
			if (this.config.direction == "top") {
				direction = 0;
			} else if (this.config.direction == "bottom") {
				direction = $("body").height();
			} else if ($.isNumeric(this.config.direction) ) {
				direction = this.config.direction;
			} else {
				direction = $(this.config.direction).offset().top;
			}
			$('body,html').animate({
				scrollTop: direction,
				}, this.config.speed );
		}
	}
	scrollTo.defaults = scrollTo.prototype.defaults;
	$.fn.scrollTo = function(options) {
		return this.click(function(e) {
			e.preventDefault();
			new scrollTo(this, options).init();
		});
	};
})(jQuery);