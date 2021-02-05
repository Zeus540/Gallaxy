 //Scrolls to the Sun//
 var Sun = document.getElementById('Sun');

 //Navigation//
 var N = document.getElementById('N');
 var NW = document.getElementById('NW');
 var S = document.getElementById('S');
 var W = document.getElementById('W');
 var E = document.getElementById('E');

 var Row3m = document.getElementById('Row3m');
 
function Scroll(){
    alignToTop = true;
  

    Sun.scrollIntoView(alignToTop);
    console.log('scrolled');
    
    N.onclick = () =>{
        Row1m.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        console.log('scrolled to Row1m')
    }

    NW.onclick = () =>{
        Row1l.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        console.log('scrolled to Row1m')
    }
     
    S.onclick = () =>{
        Row3m.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        console.log('scrolled to Row3m')
    }

    W.onclick = () =>{
        Row2l.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        console.log('scrolled to Row2l')
    }

    
    E.onclick = () =>{
        Row2r.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        console.log('scrolled to Row2r')
    }
   
}
Scroll()





