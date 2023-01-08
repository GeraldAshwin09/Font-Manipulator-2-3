
leftWristX=0;
rigthWristX=0;
difference=0;
function setup()
{
    video= createCapture(VIDEO);
video.size(550, 500);

canvas=createCanvas(550,550);
canvas.position(560, 150);


poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses)
}

function modelLoaded()
{
    console.log("PoseNet is Initialised ");
}

function gotPoses()
{
    if(results.length > 0)
    {
        console.log(results);
   
    
        leftWristX= results[0].pose.leftWrist.X;
        rightWristX= results[0].pose.rightWrist.X;
difference=floor(leftWristX-rightWristX)
        console.log("leftWrist = " + leftWristX + "rigthWrist = " + rightWristX + "difference = "+ difference);
    }
}

function draw()
{
    background('#969A97');
    document.getElementById("font_size").innerHTML="Font-size of the text will be= " + difference + " px";
    textSize(difference);
    fill('#F90093');
    text("Ashwin", 50,400);
}