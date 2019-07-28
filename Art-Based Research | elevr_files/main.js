/* Initialize
*/
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
jQuery(document).ready(function ($) {
		$("[rel=tooltip]").tooltip();
		$('[data-toggle=tooltip]').tooltip();
		$("[rel=popover]").popover();
		//$('.collapse').collapse()
		$('#authorTab a').click(function (e) {e.preventDefault(); $(this).tab('show'); });
		$('.sc_tabs a').click(function (e) {e.preventDefault(); $(this).tab('show'); });
		
		$(".videofit").fitVids();
		$('.woocommerce-ordering .orderby').customSelect();
		$('.kad-select').customSelect();
		// Lightbox
			$.extend(true, $.magnificPopup.defaults, {
			tClose: '',
			image: {
				titleSrc: function(item) {
					return item.el.find('img').attr('alt');
					}
				}
		});
			$('.collapse-next').click(function (e) {
			//e.preventDefault();
		    var $target = $(this).siblings('.sf-dropdown-menu');
		     if($target.hasClass('in') ) {
		    	$target.collapse('toggle');
		    	$(this).removeClass('toggle-active');
		    } else {
		    	$target.collapse('toggle');
		    	$(this).addClass('toggle-active');
		    }
		});
		$("a[rel^='lightbox']").magnificPopup({type:'image'});
	    $("a[data-rel^='lightbox']").magnificPopup({type:'image'});
			$('.kad-light-gallery').each(function(){
				$(this).find('a[rel^="lightbox"]').magnificPopup({
					type: 'image',
					gallery: {
						enabled:true
						},
						image: {
							titleSrc: 'title'
						}
					});
			});
	    $('.kad-light-gallery').each(function(){
	      $(this).find("a[data-rel^='lightbox']").magnificPopup({
	        type: 'image',
	        gallery: {
	          enabled:true
	          },
	          image: {
	            titleSrc: 'title'
	          }
	        });
	    });
			$('.kad-light-wp-gallery').each(function(){
				$(this).find('a[rel^="lightbox"]').magnificPopup({
					type: 'image',
					gallery: {
						enabled:true
						},
						image: {
							titleSrc: function(item) {
							return item.el.find('img').attr('alt');
							}
						}
					});
			});
	    $('.kad-light-wp-gallery').each(function(){
	      $(this).find("a[data-rel^='lightbox']").magnificPopup({
	        type: 'image',
	        gallery: {
	          enabled:true
	          },
	          image: {
	            titleSrc: function(item) {
	            return item.el.find('img').attr('alt');
	            }
	          }
	        });
	    });

		//Superfish Menu
		$('ul.sf-menu').superfish({
			delay:       200,                            // one second delay on mouseout
			animation:   {opacity:'show',height:'show'},  // fade-in and slide-down animation
			speed:       'fast'                          // faster animation speed
		});
		//init Flexslider
     	$('.kt-flexslider').each(function(){
		 	var flex_speed = $(this).data('flex-speed'),
			flex_animation = $(this).data('flex-animation'),
			flex_animation_speed = $(this).data('flex-anim-speed'),
			flex_auto = $(this).data('flex-auto');
		 	$(this).flexslider({
		 		animation:flex_animation,
				animationSpeed: flex_animation_speed,
				slideshow: flex_auto,
				slideshowSpeed: flex_speed,
				start: function ( slider ) {
					slider.removeClass( 'loading' );
				}
			});
	    });
		//init masonry
		$('.init-masonry').each(function(){
	    	var masonrycontainer = $(this),
	    	masonry_selector = $(this).data('masonry-selector');
	    	masonrycontainer.imagesLoadedn( function(){
				masonrycontainer.masonry({itemSelector: masonry_selector});
			});
		});
		$('.kt-masonry-init').each(function(){
	    	var masonrycontainer = $(this),
	    	masonry_selector = $(this).data('masonry-selector');
	    	masonrycontainer.imagesLoadedn( function(){
				masonrycontainer.masonry({itemSelector: masonry_selector});
			});
		});
		//init carousel
	    jQuery('.initcaroufedsel').each(function(){
			  var container = jQuery(this);
	          var wcontainerclass = container.data('carousel-container'), 
	          cspeed = container.data('carousel-speed'), 
	          ctransition = container.data('carousel-transition'),
	          cauto = container.data('carousel-auto'),
	          carouselid = container.data('carousel-id'),
	          ss = container.data('carousel-ss'), 
	          xs = container.data('carousel-xs'),
	          sm = container.data('carousel-sm'),
	          md = container.data('carousel-md');
	          var wcontainer = jQuery(wcontainerclass);
	          function getUnitWidth() {var width;
	          if(jQuery(window).width() <= 540) {
	          width = wcontainer.width() / ss;
	          } else if(jQuery(window).width() <= 768) {
	          width = wcontainer.width() / xs;
	          } else if(jQuery(window).width() <= 990) {
	          width = wcontainer.width() / sm;
	          } else {
	          width = wcontainer.width() / md;
	          }
	          return width;
	          }

	          function setWidths() {
	          var unitWidth = getUnitWidth() -1;
	          container.children().css({ width: unitWidth });
	          }
	          setWidths();
	          function initCarousel() {
	          container.carouFredSel({
	            scroll: {items:1, easing: "swing", duration: ctransition, pauseOnHover : true}, 
	            auto: {play: cauto, timeoutDuration: cspeed},
	              prev: '#prevport-'+carouselid, next: '#nextport-'+carouselid, pagination: false, swipe: true, items: {visible: null}
	            });
		      }
		      container.imagesLoadedn( function(){
	          	initCarousel();
	      	});
	        	wcontainer.animate({'opacity' : 1});
	          	jQuery(window).on("debouncedresize", function( event ) {
	          		container.trigger("destroy");
	          		setWidths();
	          		initCarousel();
	          	});
	    });
	 	//init carouselslider
	    jQuery('.initcarouselslider').each(function(){
	     	  var container = jQuery(this);
	          var wcontainerclass = container.data('carousel-container'), 
	          cspeed = container.data('carousel-speed'), 
	          ctransition = container.data('carousel-transition'),
	          cauto = container.data('carousel-auto'),
	          carouselid = container.data('carousel-id'),
	          carheight = container.data('carousel-height'),
	          align = 'center';
	          var wcontainer = jQuery(wcontainerclass);

	          function setWidths() {
	            var unitWidth = container.width();
	            container.children().css({ width: unitWidth });
	              if(jQuery(window).width() <= 768) {
	                  carheight = null;
	                  container.children().css({ height: 'auto' });
	              }
	          }
	          setWidths();
	          function initCarouselslider() {
	            container.carouFredSel({
	              width: '100%',
	              height: carheight,
	              align: align,
	              auto: {play: cauto, timeoutDuration: cspeed},
	              scroll: {items : 1,easing: 'quadratic'},
	              items: {visible: 1,width: 'variable'},
	              prev: '#prevport-'+carouselid,
	              next: '#nextport-'+carouselid,
	              swipe: {onMouse: false,onTouch: true},
	            });
		      }
		      container.imagesLoadedn( function(){
	          	initCarouselslider();
	            wcontainer.animate({'opacity' : 1});
	            wcontainer.css({ height: 'auto' });
	            wcontainer.parent().removeClass('loading');
	      	});
	          	jQuery(window).on("debouncedresize", function( event ) {
	          		container.trigger("destroy");
	          		setWidths();
	          		initCarouselslider();
	          	});
	    });
});
if( isMobile.any() ) {
jQuery(document).ready(function ($) {
matchMedia('only screen and (max-width: 480px)').addListener(function(list){
			$('select.hasCustomSelect').removeAttr("style");
			$('select.hasCustomSelect').css({'width':'250px'});
	    	$('.kad-select.customSelect').remove();
	    	$('select.kad-select').customSelect();
	    	$('.customSelectInner').css('width','100%');
		});
	});
}
var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
if(isAndroid) {
	(function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{a(jQuery)}}(function(e){var o="left",n="right",d="up",v="down",c="in",w="out",l="none",r="auto",k="tswipe",s="pinch",x="tap",i="doubletap",b="longtap",A="horizontal",t="vertical",h="all",q=10,f="start",j="move",g="end",p="cancel",a="ontouchstart" in window,y="TouchtSwipe";var m={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,tswipe:null,tswipeLeft:null,tswipeRight:null,tswipeUp:null,tswipeDown:null,tswipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .notSwipe"};e.fn.tswipe=function(D){var C=e(this),B=C.data(y);if(B&&typeof D==="string"){if(B[D]){return B[D].apply(this,Array.prototype.slice.call(arguments,1))}else{e.error("Method "+D+" does not exist on jQuery.tswipe")}}else{if(!B&&(typeof D==="object"||!D)){return u.apply(this,arguments)}}return C};e.fn.tswipe.defaults=m;e.fn.tswipe.phases={PHASE_START:f,PHASE_MOVE:j,PHASE_END:g,PHASE_CANCEL:p};e.fn.tswipe.directions={LEFT:o,RIGHT:n,UP:d,DOWN:v,IN:c,OUT:w};e.fn.tswipe.pageScroll={NONE:l,HORIZONTAL:A,VERTICAL:t,AUTO:r};e.fn.tswipe.fingers={ONE:1,TWO:2,THREE:3,ALL:h};function u(B){if(B&&(B.allowPageScroll===undefined&&(B.tswipe!==undefined||B.tswipeStatus!==undefined))){B.allowPageScroll=l}if(B.click!==undefined&&B.tap===undefined){B.tap=B.click}if(!B){B={}}B=e.extend({},e.fn.tswipe.defaults,B);return this.each(function(){var D=e(this);var C=D.data(y);if(!C){C=new z(this,B);D.data(y,C)}})}function z(a0,aq){var av=(a||!aq.fallbackToMouseEvents),G=av?"touchstart":"mousedown",au=av?"touchmove":"mousemove",R=av?"touchend":"mouseup",P=av?null:"mouseleave",az="touchcancel";var ac=0,aL=null,Y=0,aX=0,aV=0,D=1,am=0,aF=0,J=null;var aN=e(a0);var W="start";var T=0;var aM=null;var Q=0,aY=0,a1=0,aa=0,K=0;var aS=null;try{aN.bind(G,aJ);aN.bind(az,a5)}catch(ag){e.error("events not supported "+G+","+az+" on jQuery.tswipe")}this.enable=function(){aN.bind(G,aJ);aN.bind(az,a5);return aN};this.disable=function(){aG();return aN};this.destroy=function(){aG();aN.data(y,null);return aN};this.option=function(a8,a7){if(aq[a8]!==undefined){if(a7===undefined){return aq[a8]}else{aq[a8]=a7}}else{e.error("Option "+a8+" does not exist on jQuery.tswipe.options")}return null};function aJ(a9){if(ax()){return}if(e(a9.target).closest(aq.excludedElements,aN).length>0){return}var ba=a9.originalEvent?a9.originalEvent:a9;var a8,a7=a?ba.touches[0]:ba;W=f;if(a){T=ba.touches.length}else{a9.preventDefault()}ac=0;aL=null;aF=null;Y=0;aX=0;aV=0;D=1;am=0;aM=af();J=X();O();if(!a||(T===aq.fingers||aq.fingers===h)||aT()){ae(0,a7);Q=ao();if(T==2){ae(1,ba.touches[1]);aX=aV=ap(aM[0].start,aM[1].start)}if(aq.tswipeStatus||aq.pinchStatus){a8=L(ba,W)}}else{a8=false}if(a8===false){W=p;L(ba,W);return a8}else{ak(true)}return null}function aZ(ba){var bd=ba.originalEvent?ba.originalEvent:ba;if(W===g||W===p||ai()){return}var a9,a8=a?bd.touches[0]:bd;var bb=aD(a8);aY=ao();if(a){T=bd.touches.length}W=j;if(T==2){if(aX==0){ae(1,bd.touches[1]);aX=aV=ap(aM[0].start,aM[1].start)}else{aD(bd.touches[1]);aV=ap(aM[0].end,aM[1].end);aF=an(aM[0].end,aM[1].end)}D=a3(aX,aV);am=Math.abs(aX-aV)}if((T===aq.fingers||aq.fingers===h)||!a||aT()){aL=aH(bb.start,bb.end);ah(ba,aL);ac=aO(bb.start,bb.end);Y=aI();aE(aL,ac);if(aq.tswipeStatus||aq.pinchStatus){a9=L(bd,W)}if(!aq.triggerOnTouchEnd||aq.triggerOnTouchLeave){var a7=true;if(aq.triggerOnTouchLeave){var bc=aU(this);a7=B(bb.end,bc)}if(!aq.triggerOnTouchEnd&&a7){W=ay(j)}else{if(aq.triggerOnTouchLeave&&!a7){W=ay(g)}}if(W==p||W==g){L(bd,W)}}}else{W=p;L(bd,W)}if(a9===false){W=p;L(bd,W)}}function I(a7){var a8=a7.originalEvent;if(a){if(a8.touches.length>0){C();return true}}if(ai()){T=aa}a7.preventDefault();aY=ao();Y=aI();if(a6()){W=p;L(a8,W)}else{if(aq.triggerOnTouchEnd||(aq.triggerOnTouchEnd==false&&W===j)){W=g;L(a8,W)}else{if(!aq.triggerOnTouchEnd&&a2()){W=g;aB(a8,W,x)}else{if(W===j){W=p;L(a8,W)}}}}ak(false);return null}function a5(){T=0;aY=0;Q=0;aX=0;aV=0;D=1;O();ak(false)}function H(a7){var a8=a7.originalEvent;if(aq.triggerOnTouchLeave){W=ay(g);L(a8,W)}}function aG(){aN.unbind(G,aJ);aN.unbind(az,a5);aN.unbind(au,aZ);aN.unbind(R,I);if(P){aN.unbind(P,H)}ak(false)}function ay(bb){var ba=bb;var a9=aw();var a8=aj();var a7=a6();if(!a9||a7){ba=p}else{if(a8&&bb==j&&(!aq.triggerOnTouchEnd||aq.triggerOnTouchLeave)){ba=g}else{if(!a8&&bb==g&&aq.triggerOnTouchLeave){ba=p}}}return ba}function L(a9,a7){var a8=undefined;if(F()||S()){a8=aB(a9,a7,k)}else{if((M()||aT())&&a8!==false){a8=aB(a9,a7,s)}}if(aC()&&a8!==false){a8=aB(a9,a7,i)}else{if(al()&&a8!==false){a8=aB(a9,a7,b)}else{if(ad()&&a8!==false){a8=aB(a9,a7,x)}}}if(a7===p){a5(a9)}if(a7===g){if(a){if(a9.touches.length==0){a5(a9)}}else{a5(a9)}}return a8}function aB(ba,a7,a9){var a8=undefined;if(a9==k){aN.trigger("tswipeStatus",[a7,aL||null,ac||0,Y||0,T]);if(aq.tswipeStatus){a8=aq.tswipeStatus.call(aN,ba,a7,aL||null,ac||0,Y||0,T);if(a8===false){return false}}if(a7==g&&aR()){aN.trigger("tswipe",[aL,ac,Y,T]);if(aq.tswipe){a8=aq.tswipe.call(aN,ba,aL,ac,Y,T);if(a8===false){return false}}switch(aL){case o:aN.trigger("tswipeLeft",[aL,ac,Y,T]);if(aq.tswipeLeft){a8=aq.tswipeLeft.call(aN,ba,aL,ac,Y,T)}break;case n:aN.trigger("tswipeRight",[aL,ac,Y,T]);if(aq.tswipeRight){a8=aq.tswipeRight.call(aN,ba,aL,ac,Y,T)}break;case d:aN.trigger("tswipeUp",[aL,ac,Y,T]);if(aq.tswipeUp){a8=aq.tswipeUp.call(aN,ba,aL,ac,Y,T)}break;case v:aN.trigger("tswipeDown",[aL,ac,Y,T]);if(aq.tswipeDown){a8=aq.tswipeDown.call(aN,ba,aL,ac,Y,T)}break}}}if(a9==s){aN.trigger("pinchStatus",[a7,aF||null,am||0,Y||0,T,D]);if(aq.pinchStatus){a8=aq.pinchStatus.call(aN,ba,a7,aF||null,am||0,Y||0,T,D);if(a8===false){return false}}if(a7==g&&a4()){switch(aF){case c:aN.trigger("pinchIn",[aF||null,am||0,Y||0,T,D]);if(aq.pinchIn){a8=aq.pinchIn.call(aN,ba,aF||null,am||0,Y||0,T,D)}break;case w:aN.trigger("pinchOut",[aF||null,am||0,Y||0,T,D]);if(aq.pinchOut){a8=aq.pinchOut.call(aN,ba,aF||null,am||0,Y||0,T,D)}break}}}if(a9==x){if(a7===p||a7===g){clearTimeout(aS);if(V()&&!E()){K=ao();aS=setTimeout(e.proxy(function(){K=null;aN.trigger("tap",[ba.target]);if(aq.tap){a8=aq.tap.call(aN,ba,ba.target)}},this),aq.doubleTapThreshold)}else{K=null;aN.trigger("tap",[ba.target]);if(aq.tap){a8=aq.tap.call(aN,ba,ba.target)}}}}else{if(a9==i){if(a7===p||a7===g){clearTimeout(aS);K=null;aN.trigger("doubletap",[ba.target]);if(aq.doubleTap){a8=aq.doubleTap.call(aN,ba,ba.target)}}}else{if(a9==b){if(a7===p||a7===g){clearTimeout(aS);K=null;aN.trigger("longtap",[ba.target]);if(aq.longTap){a8=aq.longTap.call(aN,ba,ba.target)}}}}}return a8}function aj(){var a7=true;if(aq.threshold!==null){a7=ac>=aq.threshold}return a7}function a6(){var a7=false;if(aq.cancelThreshold!==null&&aL!==null){a7=(aP(aL)-ac)>=aq.cancelThreshold}return a7}function ab(){if(aq.pinchThreshold!==null){return am>=aq.pinchThreshold}return true}function aw(){var a7;if(aq.maxTimeThreshold){if(Y>=aq.maxTimeThreshold){a7=false}else{a7=true}}else{a7=true}return a7}function ah(a7,a8){if(aq.allowPageScroll===l||aT()){a7.preventDefault()}else{var a9=aq.allowPageScroll===r;switch(a8){case o:if((aq.tswipeLeft&&a9)||(!a9&&aq.allowPageScroll!=A)){a7.preventDefault()}break;case n:if((aq.tswipeRight&&a9)||(!a9&&aq.allowPageScroll!=A)){a7.preventDefault()}break;case d:if((aq.tswipeUp&&a9)||(!a9&&aq.allowPageScroll!=t)){a7.preventDefault()}break;case v:if((aq.tswipeDown&&a9)||(!a9&&aq.allowPageScroll!=t)){a7.preventDefault()}break}}}function a4(){var a8=aK();var a7=U();var a9=ab();return a8&&a7&&a9}function aT(){return !!(aq.pinchStatus||aq.pinchIn||aq.pinchOut)}function M(){return !!(a4()&&aT())}function aR(){var ba=aw();var bc=aj();var a9=aK();var a7=U();var a8=a6();var bb=!a8&&a7&&a9&&bc&&ba;return bb}function S(){return !!(aq.tswipe||aq.tswipeStatus||aq.tswipeLeft||aq.tswipeRight||aq.tswipeUp||aq.tswipeDown)}function F(){return !!(aR()&&S())}function aK(){return((T===aq.fingers||aq.fingers===h)||!a)}function U(){return aM[0].end.x!==0}function a2(){return !!(aq.tap)}function V(){return !!(aq.doubleTap)}function aQ(){return !!(aq.longTap)}function N(){if(K==null){return false}var a7=ao();return(V()&&((a7-K)<=aq.doubleTapThreshold))}function E(){return N()}function at(){return((T===1||!a)&&(isNaN(ac)||ac===0))}function aW(){return((Y>aq.longTapThreshold)&&(ac<q))}function ad(){return !!(at()&&a2())}function aC(){return !!(N()&&V())}function al(){return !!(aW()&&aQ())}function C(){a1=ao();aa=event.touches.length+1}function O(){a1=0;aa=0}function ai(){var a7=false;if(a1){var a8=ao()-a1;if(a8<=aq.fingerReleaseThreshold){a7=true}}return a7}function ax(){return !!(aN.data(y+"_intouch")===true)}function ak(a7){if(a7===true){aN.bind(au,aZ);aN.bind(R,I);if(P){aN.bind(P,H)}}else{aN.unbind(au,aZ,false);aN.unbind(R,I,false);if(P){aN.unbind(P,H,false)}}aN.data(y+"_intouch",a7===true)}function ae(a8,a7){var a9=a7.identifier!==undefined?a7.identifier:0;aM[a8].identifier=a9;aM[a8].start.x=aM[a8].end.x=a7.pageX||a7.clientX;aM[a8].start.y=aM[a8].end.y=a7.pageY||a7.clientY;return aM[a8]}function aD(a7){var a9=a7.identifier!==undefined?a7.identifier:0;var a8=Z(a9);a8.end.x=a7.pageX||a7.clientX;a8.end.y=a7.pageY||a7.clientY;return a8}function Z(a8){for(var a7=0;a7<aM.length;a7++){if(aM[a7].identifier==a8){return aM[a7]}}}function af(){var a7=[];for(var a8=0;a8<=5;a8++){a7.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return a7}function aE(a7,a8){a8=Math.max(a8,aP(a7));J[a7].distance=a8}function aP(a7){if(J[a7]){return J[a7].distance}return undefined}function X(){var a7={};a7[o]=ar(o);a7[n]=ar(n);a7[d]=ar(d);a7[v]=ar(v);return a7}function ar(a7){return{direction:a7,distance:0}}function aI(){return aY-Q}function ap(ba,a9){var a8=Math.abs(ba.x-a9.x);var a7=Math.abs(ba.y-a9.y);return Math.round(Math.sqrt(a8*a8+a7*a7))}function a3(a7,a8){var a9=(a8/a7)*1;return a9.toFixed(2)}function an(){if(D<1){return w}else{return c}}function aO(a8,a7){return Math.round(Math.sqrt(Math.pow(a7.x-a8.x,2)+Math.pow(a7.y-a8.y,2)))}function aA(ba,a8){var a7=ba.x-a8.x;var bc=a8.y-ba.y;var a9=Math.atan2(bc,a7);var bb=Math.round(a9*180/Math.PI);if(bb<0){bb=360-Math.abs(bb)}return bb}function aH(a8,a7){var a9=aA(a8,a7);if((a9<=45)&&(a9>=0)){return o}else{if((a9<=360)&&(a9>=315)){return o}else{if((a9>=135)&&(a9<=225)){return n}else{if((a9>45)&&(a9<135)){return v}else{return d}}}}}function ao(){var a7=new Date();return a7.getTime()}function aU(a7){a7=e(a7);var a9=a7.offset();var a8={left:a9.left,right:a9.left+a7.outerWidth(),top:a9.top,bottom:a9.top+a7.outerHeight()};return a8}function B(a7,a8){return(a7.x>a8.left&&a7.x<a8.right&&a7.y>a8.top&&a7.y<a8.bottom)}}}));
	jQuery(document).ready(function ($) {
		$('.caroufedselclass').tswipe({
			              excludedElements:"button, input, select, textarea, .noSwipe",
						   tswipeLeft: function() {
							$('.caroufedselclass').trigger('next', 1);
						  },
						  tswipeRight: function() {
							$('.caroufedselclass').trigger('prev', 1);
						  },
						  tap: function(event, target) {
							window.open(jQuery(target).closest('.grid_item').find('a').attr('href'), '_self');
						  }
		});
	});
}