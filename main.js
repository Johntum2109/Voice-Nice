    var SpeechRecognition = window.webkitSpeechRecognition;

    var recognition = new SpeechRecognition();

    function start() 
    { 
        document.getElementById("textbox").innerHTML = "";
        recognition.start();
    }

    recognition.onresult = function run (event) 
    { 
        console.log(event);

        var Content = event.results[0][0].transcript;
        console.log(Content);
                                                                                                                                                                                
        document.getElementById("textbox").innerHTML = Content;
        if ( Content == "take my selfie") 
        { 
            speak();
        }
    }

    function speak() 
    { 
        var sync = window.speechSynthesis;
        var speakData = "taking your selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speakData);
        
        sync.speak(utterThis);

        Webcam.attach(camera);

        setTimeout(function(){
            take_snapshot();
            save();
        }, 5000);

        
    }

    function take_snapshot() 
    {
        Webcam.snap(function(data_uri) 
        { 
            document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
        });
    }

    var camera = document.getElementById("camera");
    Webcam.set({
        width: 320,
        height: 240,
        image_format: 'jpeg',
        jpeg_quality: 90
    });

    function save() 
    { 
        var link = document.getElementById("link");
        var image = document.getElementById("selfie_image").src;
        link.href = image;
        link.click();
    }