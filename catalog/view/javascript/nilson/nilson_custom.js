/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
console.log('works');
var parallax_class = '';

var Parallax = {
    scrollFollowY: 0,
    y: 0,
    friction: 1/2,
    current_tick: 0,

    moveBackground: function() {
        Parallax.y = (Parallax.scrollFollowY) * Parallax.friction;
        jQuery('.parallax-layer').each(function(e){
            var depth = jQuery(this).attr('data-depth')*Parallax.y;
            jQuery(this).css({
                'transform': ' translate3d(0px, ' + depth + 'px, 0px)'
            })
        });
        window.requestAnimationFrame(Parallax.moveBackground);
    },

    init: function(){
        jQuery(document).scroll(function(e) {
            var scrollY = jQuery(document).scrollTop();
            Parallax.scrollFollowY = scrollY; 
        });
    }

}
Parallax.moveBackground();

Parallax.init();

