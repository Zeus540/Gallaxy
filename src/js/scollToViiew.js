var element = document.getElementById('down')
var Section2 = document.getElementById('Sec')

var Info = document.getElementById('MainImgHolder')
var plantpicker = document.getElementsByClassName('planetholder');

element.onclick = () =>{
    Section2.scrollIntoView({behavior: "smooth", inline: "nearest"});
}
