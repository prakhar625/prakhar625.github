// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

// MIT license

(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
            || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());


//overlay triggers
$( "#overlay-open-1" ).click(function() {
  console.log("click /n");
  $( ".overlay-data-1" ).addClass ('overlay-open');
  $( "body" ).addClass ('fix');
});

$( ".overlay-close-1" ).click(function() {
  $( ".overlay-data-1" ).removeClass ('overlay-open');
  $( "body" ).removeClass ('fix');
});


//smooth scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


/*//image-centering



$(document).ready(function() {
 var isDesktop = (function() {
  return !('ontouchstart' in window) // most browsers 
  || !('onmsgesturechange' in window); // ie10
 })();
 
 
 window.isDesktop = isDesktop;
 if( isDesktop ){ 

  
    $('img').each(function(){
    var imgwidth = $(this).width();
    var imgheight = $(this).height();

    if (imgwidth > imgheight) {
        $(this).css({
            "height": "100%",
            "width": "auto"
        });

        imgwidth = $(this).width();
        $(this).css({
          "margin-left": -0.5 * imgwidth + "px",
          "left":"50%",
          "position":"relative"
        });
    } else if (imgheight > imgwidth) {
        $(this).css({
            "width": "100%",                
            "height": "auto"
        });

        imgheight = $(this).height();
        $(this).css({
          "margin-top": -0.5 * imgheight + "px",
          "top":"50%",
          "position":"relative"
          });
    } else {
        $(this).css({
            "height": "100%",
            "width": "100%"
        })
    }
})

  }
});
*/