 //Scrolls to the Sun//
 var Sun = document.getElementById('Sun');

 //Navigation//
 var Up = document.getElementById('up');
 var Down = document.getElementById('down');
 var Down = document.getElementById('down');
function Scroll(){
    alignToTop = true;

    Sun.scrollIntoView(alignToTop);
    console.log('scrolled');
    
    Up.onclick = () =>{
        Row1m.scrollIntoView(alignToTop);
        console.log('scrolled to Rowm1')
    }

     
    Down.onclick = () =>{
        Row3m.scrollIntoView(alignToTop);
        console.log('scrolled to Rowm3')
    }
   
   
}
Scroll()





