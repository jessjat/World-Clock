
function updateTime(){
//Nairobi
let nairobiElement=document.querySelector("#nairobi");
if(nairobiElement){
let nairobiDateElement=nairobiElement.querySelector(".date");
let nairobiTimeElement=nairobiElement.querySelector(".time")
let nairobiTime=moment().tz("Africa/Nairobi");

nairobiDateElement.innerHTML = nairobiTime.format("MMMM Do YYYY");
nairobiTimeElement.innerHTML = nairobiTime.format ("h:mm:ss:ss [<small>]A[</small>]");
}
//Los Angeles
let losAngelesElement=document.querySelector("#los-angeles");
if(losAngelesElement){
let losAngelesDateElement=losAngelesElement.querySelector(".date");
let losAngelesTimeElement=losAngelesElement.querySelector(".time")
let losAngelesTime=moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format ("h:mm:ss:ss [<small>]A[</small>]");
}
}

function updateCity(event){
    let cityTimeZone = event.target.value;
     if(cityTimeZone==="current"){
       cityTimeZone=moment.tz.guess(); 
     }
    let cityTime=moment().tz(cityTimeZone);
    let cityName=cityTimeZone.replace("_"," ").split("/")[1];
    let citiesElement=document.querySelector("#cities");
    citiesElement.innerHTML=`
    <div class="city">
    <div>
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format("A")}</small></div>
    </div>
    <a href="/">All cities</a>`;
}
updateTime();
setInterval(updateTime,1000);

let citiesSelectElement=document.querySelector("#city");
citiesSelectElement.addEventListener("change",updateCity);