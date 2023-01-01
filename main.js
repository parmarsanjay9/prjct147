status = " ";

function setup(){
    canvas = createCanvas(380, 480)
    canvas.position(480, 200)

    video = createCapture(VIDEO);
    video.hide();
    video.size(380, 480);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("model_status").innerHTM = "Status : Detecting object";
    value_of_inputbox = document.getElementById("input").value;
}

function draw(){
    image(video, 0, 0, 380, 480);
}