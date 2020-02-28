var bgBody = document.querySelector("body");
var bgCalendar = document.querySelector(".image-calendar");
var monthDays = document.querySelector(".month-days");
var dayPopUp = document.querySelector(".pop-upOverlay");
var imageBg = document.querySelector(".bgImg");
var textUrl = document.querySelector("#textUrl");

textUrl.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) { 
        imageBg.src = event.target.value; 
    }
});


function Alert (e){
    dayPopUp.style.display = "flex";

    var dayInfo = document.createElement("div");  
    dayInfo.setAttribute("class", "day-info");
    dayPopUp.appendChild(dayInfo);

    let header = document.createElement("h3");
    header.innerHTML = e.target.innerHTML;
    let paragraph = document.createElement("p");
    paragraph.innerHTML = "safkjskfaljaslkfaklsjlksajf";

    dayInfo.appendChild(header);
    dayInfo.appendChild(paragraph);

}
for(i=0;i<=monthDays.childElementCount-1;i++){
    monthDays.children[i].addEventListener("click",Alert);
}

dayPopUp.addEventListener('click', (e)=>{
    while (dayPopUp.firstChild) {
        dayPopUp.removeChild(dayPopUp.firstChild);
    } 
   e.target.style.display = "none";
})
