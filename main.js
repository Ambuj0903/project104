Webcam.set({
    width:750,
    height:350,
    image_format:"png",
    png_quality:90
    });
    
    camera = document.getElementById("camera");
    
    Webcam.attach(camera);
    
    function take_selfie() {
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">'
    
    });
    }
    
    console.log("ml5 version:", ml5.version);
    
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ILdwTkY6k/model.json",modelloaded);
    function modelloaded(){
        console.log("Model loaded!")
    }
    