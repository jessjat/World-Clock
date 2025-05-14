
function updateTime(){
//Nairobi
let nairobiElement=document.querySelector("#nairobi");
let nairobiDateElement=nairobiElement.querySelector(".date");
let nairobiTimeElement=nairobiElement.querySelector(".time")
let nairobiTime=moment().tz("Africa/Nairobi");

nairobiDateElement.innerHTML = nairobiTime.format("MMMM Do YYYY");
nairobiTimeElement.innerHTML = nairobiTime.format ("h:mm:ss:ss [<small>]A[</small>]");

//Los Angeles
let losAngelesElement=document.querySelector("#los-angeles");
let losAngelesDateElement=losAngelesElement.querySelector(".date");
let losAngelesTimeElement=losAngelesElement.querySelector(".time")
let losAngelesTime=moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format ("h:mm:ss:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime,1000);