img ="";
status = "";


function preload()
{
img = loadImage("dog_cat.jpg")

}

function setup()
{
canvas = createCanvas(640, 420);
canvas.center();
objectDetecter = ml5.objectDetecter('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw()
{
image(img,0,0,640,420);
fill("#FF0000");
text("Dog", 45, 75);
noFill();
stroke("#FF0000")
rect(30,60,450,350);

fill("FF0000");
text("Cat", 320, 120);
noFill();
stroke("#FF0000");
rect(300, 90, 270, 320 );
}


function gotresult(error, results)
{
if  (error) {
console.log(error);
}
console.log(results);
}
