/* Show and hide menu */

$(window).scroll(function() {
        
        'use strict';//to indicate that the code should be executed in "strict mode".
        
        if($(window).scrollTop() < 80 ) { //80px
            
            $('.navbar').css ({
             'opacity':'1'    
                
            });
           
            
        } else {
            
            $('.navbar').css ({
                  'opacity':'0.6' 
            });
            
            
            
            
            
            
        }
       
        
    });
    
    //add smooth scrolling (menu button moving)
$(document).ready(function() {
    
    'use strict';
   
    
    $('.nav-item, #scroll-to-top').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
    
    
});
 
 
/* active menu item on click */
$(document).ready(function() {
    
     'use strict';
    
    
    $('.navbar-nav li a').click(function(){
        
        'use strict';
        
        $('.navbar-nav li a').parent().removeClass("active");
        
        $(this).parent().addClass("active");
    
    });
});

 

 
// highlight menu item on scroll
$(document).ready(function() {
    
    'use strict';
    
    $(window).scroll( function() {
        
        'use strict';
        
        $("section").each(function()  {
            
            'use strict';
            
            var bb = $(this).attr("id");  // ABOUT, CONTACT, DOWNLOAD
            var hei = $(this).outerHeight();// height de la section including padding, border, and optionally margi (nouterHeight(true))
            var grttop = $(this).offset().top - 70;//Get the current coordinates of the first element
            
            if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei) {
             
                $(".navbar-nav li a[href='#" + bb + "']").parent().addClass("active");
           
            } else {
                $(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("active");
                
            }
            
            
        });
    
    
    });
    
    
});


 

 


 



// Add animation/ Initialize Woo
$(document).ready(function() {
    
    'use strict';
   
    new WOW().init();
    
});


 








