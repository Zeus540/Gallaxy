const Sun = document.getElementsByClassName('Sun');
alignToTop = true;

function centerSolarSystem(){

    Sun[0].scrollIntoView(alignToTop);
    console.log('scroll')
}

centerSolarSystem();

setInterval(centerSolarSystem,100)