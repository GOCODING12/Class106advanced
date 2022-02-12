function startClassification() 
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundclassifier('https://teachablemachine.withgoogle.com/models/Gl5mho-kz/model.json', modelReady);
} 
function modelReady() {
    classifier.classify(gotResults);
}