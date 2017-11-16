$(document).ready(function() {


// Add jQuery here


//    ----------- shower -----------   //

        var showerSound = document.createElement('audio');
        showerSound.setAttribute('src', '/assets/sounds/shower.wav');
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
    

//    ----------- tea -----------   //
    
        var teaSound = document.createElement('audio');
        teaSound.setAttribute('src', '/assets/sounds/tea.wav');
        $.get();
        teaSound.addEventListener("load", function() {
          teaSound.play();
        }, true);
    

    var playing = false;


        $('#tea').click(function() {
            
            if (playing == false) {
            $(this).addClass('play');    
            teaSound.play();
            playing = true;
            
            } else {
                $(this).removeClass('play');
                playing = false;
                 teaSound.pause();
            }    
        });
    
//    ----------- book -----------   //
    
        var bookSound = document.createElement('audio');
        bookSound.setAttribute('src', '/assets/sounds/book.mp3');
        $.get();
        bookSound.addEventListener("load", function() {
          bookSound.play();
        }, true);
    

    var playing = false;


        $('#book').click(function() {
            
            if (playing == false) {
            $(this).addClass('play');    
            bookSound.play();
            playing = true;
            
            } else {
                $(this).removeClass('play');
                playing = false;
                 bookSound.pause();
            }    
        });
    
    
//    ----------- cooking -----------   //
    
        var cookingSound = document.createElement('audio');
        cookingSound.setAttribute('src', '/assets/sounds/cooking.wav');
        $.get();
        cookingSound.addEventListener("load", function() {
          cookingSound.play();
        }, true);
    

    var playing = false;


        $('#cooking').click(function() {
            
            if (playing == false) {
            $(this).addClass('play');    
            cookingSound.play();
            playing = true;
            
            } else {
                $(this).removeClass('play');
                playing = false;
                 cookingSound.pause();
            }    
        });
    
    
    
//    ----------- sleeping -----------   //
    
        var sleepingSound = document.createElement('audio');
        sleepingSound.setAttribute('src', '/assets/sounds/sleeping.wav');
        $.get();
        sleepingSound.addEventListener("load", function() {
          sleepingSound.play();
        }, true);
    

    var playing = false;


        $('#sleeping').click(function() {
            
            if (playing == false) {
            $(this).addClass('play');    
            sleepingSound.play();
            playing = true;
            
            } else {
                $(this).removeClass('play');
                playing = false;
                 sleepingSound.pause();
            }    
        });
    














  });
