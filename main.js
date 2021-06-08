function preload()
{}
function setup()
{
    canvas=createCanvas(340, 320);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/If1UB9Mn6/model.json", modelLoaded);
}
function draw()
{
    image(video, 0, 0, 340, 320,);
    classifier.classify(video, gotResult);
}
function modelLoaded()
{
    console.log("Model loaded!");
}
function gotResult(error,results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("object_name").innerHTML=results[0].label;
        document.getElementById("accuracy_name").innerHTML=(results[0].confidence.toFixed(3))*100+"%";
    }
}