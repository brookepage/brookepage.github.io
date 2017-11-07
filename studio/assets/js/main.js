$(document).ready(function() {


// Add jQuery here



        var showerSound = document.createElement('audio');
        showerSound.setAttribute('src', 'http://www.soundjay.com/misc/sounds/bell-ringing-01.mp3');
        $.get();
        showerSound.addEventListener("load", function() {
          showerSound.play();
        }, true);
    
    

    var playing = false;




        $('#shower').click(function() {
            
            if (playing == false) {
            $(this).addClass('play');    
            showerSound.play();
            playing = true;
            
            } else {
                $(this).removeClass('play');
                playing = false;
                 showerSound.pause();
            }    
        });
    
//        $('#shower').click(function() {
//                if (playing == false) {
//                showerSound.play();
//                playing = true;
//
//                } else {
//                    playing = false;
//                     showerSound.pause();
//                }    
//            });


















  });
