$(document).ready(function(){    
    /*открыть поп-ап*/
    $('.js-open-popup').on('click', function(){
      $('#js-popup').fadeToggle('300');
    });
    
    /*валидация на заполнение отправка формы и ответ*/
    $('.js-form-val').on('submit', function(e){
      e.preventDefault();
    
      const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      let form = $(this),
          fields = $(form).find('.js-val'),            
          valid = true;
    
      $.each($(fields), function(){
        if (!$.trim($(this).val())){
          $(this).addClass('error');
          valid = false;            
        } else {
          if(reg.test($.trim($(this).val())) == false) {
            valid = false;
            $(this).addClass('error');
          } else{
            $(this).removeClass('error');
          }
        }
      });
    
      if (valid){
        $.ajax({
    		url: "php/mail.php",
    		type: "POST",
    		response: "HTML",
    		data: $(this).serialize(),    
            success: function(data) {
    		  form.addClass('ready');                    
            },
    		error: function() {
    		  console.log("Не возможно отправить");
    		}
          });
        }
    });
    $('.js-val').on('keypress', function(){
      $(this).removeClass('error');
    });
    
    /*mob menu*/
    $('.js-open-menu').on('click', function(){
      $('#js-mob-menu').toggleClass('open');
    });   
  
    /*accordion*/
    $('.js-accordion-btn').on('click',  function(){
      if($(this).hasClass('open')){
        $(this).closest('.js-accordion-item').removeClass('open');
        $(this).removeClass('open').siblings('.js-accordion-hide').slideUp(250);
      } else{
        $('.js-accordion-item.open').removeClass('open');
        $('.js-accordion-btn.open').removeClass('open').siblings('.js-accordion-hide').slideUp(250);
        $(this).addClass('open').siblings('.js-accordion-hide').slideDown(250);
        $(this).closest('.js-accordion-item').addClass('open');
      }
    });
  
    /*fix header*/
    $(window).on('scroll', function(){
      if($(window).scrollTop() > $(window).height()){
        $('#js-header').addClass('fix');
      } else{
        $('#js-header').removeClass('fix');
      }
    });
});
