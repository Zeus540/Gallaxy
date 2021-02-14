var element = document.getElementById('down')
var Section2 = document.getElementById('Sec')
var Up = document.getElementById('backtotop')

var Info = document.getElementById('MainImgHolder')
var plantpicker = document.getElementsByClassName('planetholder');

element.onclick = () =>{
    Section2.scrollIntoView({behavior: "smooth", inline: "nearest"});
}

Up.onclick = () =>{
    Section2.scrollIntoView({behavior: "smooth", inline: "nearest"});

}
