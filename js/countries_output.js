  
  $(document).ready(function() {
    var countriesShown = false;
    var triggerCountries = '#countries-container';
    var bottomOfCountries = $(triggerCountries).offset().top + $(triggerCountries).height();
    console.log('Bottom of Object: ' + bottomOfCountries);

    var bottomOfWindow = $(window).scrollTop() + $(window).height();
    console.log('Bottom of Window: ' + bottomOfWindow);
    if(bottomOfWindow > bottomOfCountries && countriesShown == false){
      $('.country-text').delay(700).animate({'opacity':'1'},2000);
      var cNb = 1;
      var cTotal = 12;
      var cTimer = 2000;
    while( cNb <= cTotal){
      $('#c' + cNb).delay(cTimer).animate({'opacity':'1'},2000);
      cNb++;
      cTimer+=500;
    }
    } else {
    }


    /* Every time the window is scrolled ... */
    if(countriesShown == false){
      $(window).scroll( function(){
          var bottomOfWindow = $(window).scrollTop() + $(window).height();
          console.log('Bottom of Window: ' + bottomOfWindow);
          /* If the object is completely visible in the window, fade it it */
          if( bottomOfWindow > bottomOfCountries && countriesShown == false){
            $('.country-text').delay(700).animate({'opacity':'1'},2000);
            var cNb = 1;
            var cTotal = 12;
            var cTimer = 2000;
          while( cNb <= cTotal){
            $('#c' + cNb).delay(cTimer).animate({'opacity':'1'},2000);
            cNb++;
            cTimer+=500;
          }
          } else {
          }
        
      });
    }
      
  });