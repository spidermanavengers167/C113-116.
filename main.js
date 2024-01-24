noseX=0;
noseY=0;
function preload(){
    mustacheNose=loadImage("https://i.postimg.cc/1RVPxvg4/m.png")
}
function setup(){
canvas=createCanvas(640,480)
canvas.center()
video=createCapture(VIDEO)
video.size(640,480)
video.hide()
poseNet=ml5.poseNet(video,modelLoaded)
poseNet.on('pose',GotPoses)
}
function draw(){
image(video,0,0,640,480)
//fill(255,0,0)
//stroke(255,0,0)
//circle(noseX,noseY,20)
image(mustacheNose,noseX,noseY,50,50)
}
function modelLoaded(){
    console.log("PoseNet Has been Initialized")
}
function GotPoses(results){
    if(results.length>0){
        console.log(results)
        noseX=results[0].pose.nose.x-25
        noseY=results[0].pose.nose.y
        console.log("nosex= "+results[0].pose.nose.x)
        console.log("nosey= "+results[0].pose.nose.y)
}
        
}
function take_snapshot(){
save("Hello.png")
}