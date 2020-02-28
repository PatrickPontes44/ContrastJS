
const days = ["Domingo", "Segunda", "Terça", 
"Quarta", "Quinta", "Sexta", "Sábado"];

const months = [
"Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho",
"Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const monthsTrad = [
    "January", "February", "March", "April", "May", "June", "July",
    "Augost", "September", "October", "November", "December"];

var date = new Date();

var year = date.getFullYear();
var month = months[date.getMonth()];
var monthTrad = monthsTrad[date.getMonth()];
var todayWeek = days[date.getDay()];
var todayMonth = date.getDate();
var firstDay = (new Date(`${year}, ${monthTrad}`)).getDay();
var daysMonth = new Date(year, date.getMonth()+1, 0).getDate();

function updateDom(){
    const root = document.documentElement;
    const headerDia = document.querySelector("#dia");
    const headerMes = document.querySelector("#mes");
    const listaDias = document.querySelector(".month-days");
    headerDia.innerHTML = todayWeek+", "+ todayMonth;
    headerMes.innerHTML = month;
    root.style.setProperty('--dayStart', firstDay);
    for(i=1; i<= daysMonth; i++){
        const listaDia = document.createElement("li");  
        if(i == todayMonth){
            listaDia.setAttribute("class", "today");
        }
        listaDia.innerHTML = i;
        listaDias.appendChild(listaDia);
    }
}



updateDom();
