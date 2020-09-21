$(document).ready(function(){ 
  if($(window).width() > 767){
    let sticky = new Sticky('#js-fix-card');    
    new WOW().init();
  }
});