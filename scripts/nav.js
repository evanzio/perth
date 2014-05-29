window.onload=function(navigation){

/**
 * We need to add a class of `responsive-nav--open` to
 * `#js-responsive-nav` ONLY when the nav is clicked AND
 * when we’re on a viewport of less than `responsiveNavBreakpoint`.
 * It needs removing when someone re-clicks the nav icon, or
 * when the viewport no longer matches `responsiveNavBreakpoint`.
 */

var responsiveNav = document.getElementById('js-responsive-nav');
//var responsiveNavBreakpoint = 720;

responsiveNav.addEventListener('click', function(navigation){
  // if(window.innerWidth < responsiveNavBreakpoint){
        responsiveNav.classList.toggle("responsive-nav--open");
 //   }
});    
    
}