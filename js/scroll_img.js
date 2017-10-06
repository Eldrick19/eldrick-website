$(document).ready(function(){
	console.log(theImages);
	var i = 0;
	var timer;

    $("#gallery-btn").click(function(){
        $("head").append("<style> #gallery:before{ -webkit-filter: blur(0px);} </style>");
        $("head").append("<style> #gallery:before{ opacity: 0;} </style>");

        $("head").append("<style> #gallery-text:hover { cursor: default;} </style>");
        $("head").append("<style> #gallery-btn:hover { cursor: default;} </style>");
        $("head").append("<style> #gallery-text { opacity: 0;} </style>");
        $("head").append("<style> #gallery-btn { opacity: 0;} </style>");

        $("head").append("<style> #img-prev {opacity: 1;} </style>");
        $("head").append("<style> #img-next {opacity: 1;} </style>");
    });

   	var nextImage = function nextImage() {
	   	$('#gallery').fadeTo('slow', 0, function(){
	   	$(this).css('background-image', 'radial-gradient(circle at 15% 15%,rgba(0,0,0,0.20),rgba(0,0,0,0.20)),url('+theImages[i] + ')');
	   	}).delay(500).fadeTo('slow', 1);
	   	i = i + 1;    		
	   	if (i == theImages.length) {
	   		i =  0;
	  	}
  	}

  	function resetTimer(){
		clearInterval(timer);
		timer = setInterval(nextImage, 8000);
	}

  	$('#img-next').click(function(){
  		nextImage();
  		resetTimer();
  	});

  	$('#gallery-btn').click(function(){
  		resetTimer();
	});


    $('#img-prev').click(function(){
    	prevImage();
    	resetTimer();
	});

	function prevImage(){
    	$('#gallery').fadeTo('slow', 0, function(){
			$(this).css('background-image', 'radial-gradient(circle at 15% 15%,rgba(0,0,0,0.20),rgba(0,0,0,0.20)),url(' + theImages[i] + ')');
		}).delay(500).fadeTo('slow', 1);
    	i = i - 1;
    	if (i == -1) {
			i = theImages.length - 1;
		}
    }
});
