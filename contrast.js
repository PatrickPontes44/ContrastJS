function startContrast(){
    var root = document.documentElement;
    var img = document.querySelector(".bgImg");
    var canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
    var pixelData = canvas.getContext('2d').getImageData(5, 5, 1, 1).data;
    console.log(pixelData);
    var finalColor = [0,0,0];

    for(i=0; i<=2; i++){
        finalColor[i] = (255-pixelData[i]);
    }
    console.log(finalColor);
    var contrastDay = "rgba("+pixelData[0]+","+pixelData[1]+","+pixelData[2]+","+0.7+")";
    var contrastHeader = "rgb("+finalColor[0]+","+finalColor[1]+","+finalColor[2]+")";
    root.style.setProperty('--contrastHeader', contrastHeader);
    root.style.setProperty('--contrastDay', contrastDay);
}
startContrast();
