object = [];
img = "";
status = "";
objectDetector = "";
function setup()
{
    canvas = createCanvas(600, 300);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function preload()
{
    img = loadImage("kitchen.png");
}

function draw()
{

    if(status != undefined)
    {
        image(img, 0, 0, 600, 300);
        for(i = 0; i < object.length; i++)
            {
                document.getElementById("status").innerHTML = "Status : Object Detected";

                fill(255,0,0);
                percent = floor(object[i].confidence * 100);
                text(object[i].label + "" + percent + "%", object[i].x + 15, object[i].y + 15);
                noFill();
                stroke(255,0,0);
                rect(object[i].x, object[i].y, object[i].width, object[i].height);
            }
    }
}

function modelLoaded()
{
    console.log("modelLoaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error,results)
{
      if(error)
      {
          console.log(error);
      }
      console.log(results);
      object = results;
}
