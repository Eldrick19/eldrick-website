//Start Slideshow only when in view
$(document).ready(function() {
    var slidesShown = false;
    var triggerSlideshow = '#slideshow-container';
    var bottomOfSlideshow = $(triggerSlideshow).offset().top + $(triggerSlideshow).height()/3;
    console.log('Bottom of Object: ' + bottomOfSlideshow);
    
    var bottomOfWindow = $(window).scrollTop() + $(window).height();
    console.log('Bottom of Window: ' + bottomOfWindow);
    /* If the object is completely visible in the window, fade it in */
    if( bottomOfWindow > bottomOfSlideshow && slidesShown == false){
        slidesShown = true;
        var js = document.createElement('script');
        js.setAttribute('type', 'text/javascript');
        js.src = './js/slideshow.js';
        document.body.appendChild(js);
    }

    /* Every time the window is scrolled ... */
    if(slidesShown == false){
        $(window).scroll( function(){
            var bottomOfWindow = $(window).scrollTop() + $(window).height();
            console.log('Bottom of Window: ' + bottomOfWindow);
            /* If the object is completely visible in the window, fade it in */
            if( bottomOfWindow > bottomOfSlideshow && slidesShown == false){
                slidesShown = true;
                var js = document.createElement('script');
                js.setAttribute('type', 'text/javascript');
                js.src = './js/slideshow.js';
                document.body.appendChild(js);
            }
        });
    }
      
});

function outputImages() {
    // Loop to output all images
    var i;
    for(i = 0; i < imgArray.length; i++){
        // Create singular image
        var div = document.createElement('div');
        var divNb = document.createElement('div');
        var img = document.createElement('img');
        var counterText = document.createElement('p');
        div.className = 'mySlides fadeIn';
        divNb.className = 'numbertext';
        img.className = 'img-style';
        img.src = './img/' + imgArray[i];
        counterText.appendChild(document.createTextNode((i+1) + '/' + imgArray.length));
        divNb.appendChild(counterText);
        div.appendChild(divNb);
        div.appendChild(img);
        
        //Append it to slideshow container
        var node = document.getElementById('slideshow-container');
        node.appendChild(div);
    }
}