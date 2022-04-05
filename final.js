status_model="";

function setup(){
    canvas=createCanvas(480, 360);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(480, 360);
    video.hide();
}

function start(){
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
    document.getElementById("object_name").value
}

function modelLoaded(){
    console.log("Model is Loaded");
    status_model = true;
}

function draw(){
    image(video ,0 ,0 ,480 ,360);
}
