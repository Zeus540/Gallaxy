 //Scrolls to the Sun//
 var Sun = document.getElementById('Sun');

 //Navigation//
 var N = document.getElementById('N');
 var NW = document.getElementById('NW');
 var Down = document.getElementById('down');
 var Left = document.getElementById('left');
 var Right = document.getElementById('right');

function Scroll(){
    alignToTop = true;
    document.body.style.overflow = 'hidden';
    Sun.scrollIntoView(alignToTop);
    console.log('scrolled');
    
    N.onclick = () =>{
        Row1m.scrollIntoView(alignToTop);
        console.log('scrolled to Row1m')
    }

    NW.onclick = () =>{
        Row1l.scrollIntoView(alignToTop);
        console.log('scrolled to Row1m')
    }
     
    Down.onclick = () =>{
        Row3m.scrollIntoView(alignToTop);
        console.log('scrolled to Row3m')
    }

    Left.onclick = () =>{
        Row2l.scrollIntoView(alignToTop);
        console.log('scrolled to Row2l')
    }

    
    Right.onclick = () =>{
        Row2r.scrollIntoView(alignToTop);
        console.log('scrolled to Row2r')
    }
   
}
Scroll()





