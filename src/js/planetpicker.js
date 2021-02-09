import earth from '../assets/images/earth.png'
import snow from '../assets/images/snow.png'
var MainTextHolder1 = document.getElementById('MainTextHolder1')
var MainTextHolder2 = document.getElementById('MainTextHolder2')
var element = document.getElementsByClassName('planetholder');
var MainImg = document.getElementById('MainImgHolder');
var Name = document.getElementById('planetName');


element[0].onclick = () =>{

    element[1].style.transform = "scale(1)";
    element[0].style.transform = "scale(1.5)";
    element[2].style.transform = "scale(1)";
    element[3].style.transform = "scale(1)";
    element[4].style.transform = "scale(1)";
    element[5].style.transform = "scale(1)";
    element[6].style.transform = "scale(1)";
    element[7].style.transform = "scale(1)";
    element[8].style.transform = "scale(1)";

    Name.innerHTML= `
    <h1 id="planetName">Mars</h1>
    `

    MainImg.innerHTML= `
    <img src=${snow} alt="" class="MainImg"/>
    `

    MainTextHolder1.innerHTML= `
    <h1 id="planetName">Snow</h1>
    `
   
    
    MainTextHolder2.innerHTML= `
    <h1 id="planetName">Snow</h1>
    `

    console.log(MainImg);
}


element[1].onclick = () =>{

  
        element[0].style.transform = "scale(1)";
        element[1].style.transform = "scale(1.5)";
        element[2].style.transform = "scale(1)";
        element[3].style.transform = "scale(1)";
        element[4].style.transform = "scale(1)";
        element[5].style.transform = "scale(1)";
        element[6].style.transform = "scale(1)";
        element[7].style.transform = "scale(1)";
        element[8].style.transform = "scale(1)";

    Name.innerHTML= `
    <h1 id="planetName">Earth</h1>
    `

    MainImg.innerHTML= `
    <img src=${earth} alt=""  class="MainImg"/>
    `

   

    MainTextHolder1.innerHTML= `
    <p>
    Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29% of Earth's surface is land consisting of continents and islands. The remaining 71% is covered with water, mostly by oceans but also by lakes, rivers and other fresh water, which together constitute the hydrosphere. Much of Earth's polar regions are covered in ice. Earth's outer layer is divided into several rigid tectonic plates that migrate across the surface over many millions of years. Earth's interior remains active with a solid iron inner core, a liquid outer core that generates Earth's magnetic field, and a convecting mantle that drives plate tectonics.
    </p>
    `

    MainTextHolder2.innerHTML= `
    <p>
Earth formed over 4.5 billion years ago. Within the first billion years of Earth's history, life appeared in the oceans and began to affect Earth's atmosphere and surface, leading to the proliferation of anaerobic and, later, aerobic organisms. 
    </p>
    `

    console.log(MainImg);
}


element[2].onclick = () =>{

  
    element[1].style.transform = "scale(1)";
    element[2].style.transform = "scale(1.5)";
    element[0].style.transform = "scale(1)";
    element[3].style.transform = "scale(1)";
    element[4].style.transform = "scale(1)";
    element[5].style.transform = "scale(1)";
    element[6].style.transform = "scale(1)";
    element[7].style.transform = "scale(1)";
    element[8].style.transform = "scale(1)";

Name.innerHTML= `
<h1 id="planetName">Saturn</h1>
`

MainImg.innerHTML= `
<img src=${earth} alt="" class="MainImg"/>
`



MainTextHolder1.innerHTML= `
<p>
Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29% of Earth's surface is land consisting of continents and islands. The remaining 71% is covered with water, mostly by oceans but also by lakes, rivers and other fresh water, which together constitute the hydrosphere. Much of Earth's polar regions are covered in ice. Earth's outer layer is divided into several rigid tectonic plates that migrate across the surface over many millions of years. Earth's interior remains active with a solid iron inner core, a liquid outer core that generates Earth's magnetic field, and a convecting mantle that drives plate tectonics.
</p>
`

MainTextHolder2.innerHTML= `
<p>
Earth formed over 4.5 billion years ago. Within the first billion years of Earth's history, life appeared in the oceans and began to affect Earth's atmosphere and surface, leading to the proliferation of anaerobic and, later, aerobic organisms. 
</p>
`

console.log(MainImg);
}


element[3].onclick = () =>{

  
    element[2].style.transform = "scale(1)";
    element[3].style.transform = "scale(1.5)";
    element[1].style.transform = "scale(1)";
    element[0].style.transform = "scale(1)";
    element[4].style.transform = "scale(1)";
    element[5].style.transform = "scale(1)";
    element[6].style.transform = "scale(1)";
    element[7].style.transform = "scale(1)";
    element[8].style.transform = "scale(1)";

Name.innerHTML= `
<h1 id="planetName">Venus</h1>
`

MainImg.innerHTML= `
<img src=${earth}  alt="" class="MainImg"/>
`



MainTextHolder1.innerHTML= `
<p>
Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29% of Earth's surface is land consisting of continents and islands. The remaining 71% is covered with water, mostly by oceans but also by lakes, rivers and other fresh water, which together constitute the hydrosphere. Much of Earth's polar regions are covered in ice. Earth's outer layer is divided into several rigid tectonic plates that migrate across the surface over many millions of years. Earth's interior remains active with a solid iron inner core, a liquid outer core that generates Earth's magnetic field, and a convecting mantle that drives plate tectonics.
</p>
`

MainTextHolder2.innerHTML= `
<p>
Earth formed over 4.5 billion years ago. Within the first billion years of Earth's history, life appeared in the oceans and began to affect Earth's atmosphere and surface, leading to the proliferation of anaerobic and, later, aerobic organisms. 
</p>
`

console.log(MainImg);
}



element[4].onclick = () =>{

  
    element[0].style.transform = "scale(1)";
    element[4].style.transform = "scale(1.5)";
    element[2].style.transform = "scale(1)";
    element[3].style.transform = "scale(1)";
    element[1].style.transform = "scale(1)";
    element[5].style.transform = "scale(1)";
    element[6].style.transform = "scale(1)";
    element[7].style.transform = "scale(1)";
    element[8].style.transform = "scale(1)";

Name.innerHTML= `
<h1 id="planetName">Uranus</h1>
`

MainImg.innerHTML= `
<img src=${earth} alt="" class="MainImg"/>
`



MainTextHolder1.innerHTML= `
<p>
Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29% of Earth's surface is land consisting of continents and islands. The remaining 71% is covered with water, mostly by oceans but also by lakes, rivers and other fresh water, which together constitute the hydrosphere. Much of Earth's polar regions are covered in ice. Earth's outer layer is divided into several rigid tectonic plates that migrate across the surface over many millions of years. Earth's interior remains active with a solid iron inner core, a liquid outer core that generates Earth's magnetic field, and a convecting mantle that drives plate tectonics.
</p>
`

MainTextHolder2.innerHTML= `
<p>
Earth formed over 4.5 billion years ago. Within the first billion years of Earth's history, life appeared in the oceans and began to affect Earth's atmosphere and surface, leading to the proliferation of anaerobic and, later, aerobic organisms. 
</p>
`

console.log(MainImg);
}


element[5].onclick = () =>{

  
    element[0].style.transform = "scale(1)";
    element[5].style.transform = "scale(1.5)";
    element[2].style.transform = "scale(1)";
    element[3].style.transform = "scale(1)";
    element[4].style.transform = "scale(1)";
    element[1].style.transform = "scale(1)";
    element[6].style.transform = "scale(1)";
    element[7].style.transform = "scale(1)";
    element[8].style.transform = "scale(1)";

Name.innerHTML= `
<h1 id="planetName">Mercury</h1>
`

MainImg.innerHTML= `
<img src=${earth} alt="" class="MainImg"/>
`



MainTextHolder1.innerHTML= `
<p>
Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29% of Earth's surface is land consisting of continents and islands. The remaining 71% is covered with water, mostly by oceans but also by lakes, rivers and other fresh water, which together constitute the hydrosphere. Much of Earth's polar regions are covered in ice. Earth's outer layer is divided into several rigid tectonic plates that migrate across the surface over many millions of years. Earth's interior remains active with a solid iron inner core, a liquid outer core that generates Earth's magnetic field, and a convecting mantle that drives plate tectonics.
</p>
`

MainTextHolder2.innerHTML= `
<p>
Earth formed over 4.5 billion years ago. Within the first billion years of Earth's history, life appeared in the oceans and began to affect Earth's atmosphere and surface, leading to the proliferation of anaerobic and, later, aerobic organisms. 
</p>
`

console.log(MainImg);
}


element[6].onclick = () =>{

  
    element[0].style.transform = "scale(1)";
    element[6].style.transform = "scale(1.5)";
    element[2].style.transform = "scale(1)";
    element[3].style.transform = "scale(1)";
    element[4].style.transform = "scale(1)";
    element[5].style.transform = "scale(1)";
    element[1].style.transform = "scale(1)";
    element[7].style.transform = "scale(1)";
    element[8].style.transform = "scale(1)";
    
Name.innerHTML= `
<h1 id="planetName">Jupiter</h1>
`

MainImg.innerHTML= `
<img src=${earth} alt="" class="MainImg"/>
`



MainTextHolder1.innerHTML= `
<p>
Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29% of Earth's surface is land consisting of continents and islands. The remaining 71% is covered with water, mostly by oceans but also by lakes, rivers and other fresh water, which together constitute the hydrosphere. Much of Earth's polar regions are covered in ice. Earth's outer layer is divided into several rigid tectonic plates that migrate across the surface over many millions of years. Earth's interior remains active with a solid iron inner core, a liquid outer core that generates Earth's magnetic field, and a convecting mantle that drives plate tectonics.
</p>
`

MainTextHolder2.innerHTML= `
<p>
Earth formed over 4.5 billion years ago. Within the first billion years of Earth's history, life appeared in the oceans and began to affect Earth's atmosphere and surface, leading to the proliferation of anaerobic and, later, aerobic organisms. 
</p>
`

console.log(MainImg);
}



element[7].onclick = () =>{

  
    element[0].style.transform = "scale(1)";
    element[7].style.transform = "scale(1.5)";
    element[2].style.transform = "scale(1)";
    element[3].style.transform = "scale(1)";
    element[4].style.transform = "scale(1)";
    element[5].style.transform = "scale(1)";
    element[6].style.transform = "scale(1)";
    element[1].style.transform = "scale(1)";
    element[8].style.transform = "scale(1)";

Name.innerHTML= `
<h1 id="planetName">Pluto</h1>
`

MainImg.innerHTML= `
<img src=${earth} alt="" class="MainImg"/>
`



MainTextHolder1.innerHTML= `
<p>
Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29% of Earth's surface is land consisting of continents and islands. The remaining 71% is covered with water, mostly by oceans but also by lakes, rivers and other fresh water, which together constitute the hydrosphere. Much of Earth's polar regions are covered in ice. Earth's outer layer is divided into several rigid tectonic plates that migrate across the surface over many millions of years. Earth's interior remains active with a solid iron inner core, a liquid outer core that generates Earth's magnetic field, and a convecting mantle that drives plate tectonics.
</p>
`

MainTextHolder2.innerHTML= `
<p>
Earth formed over 4.5 billion years ago. Within the first billion years of Earth's history, life appeared in the oceans and began to affect Earth's atmosphere and surface, leading to the proliferation of anaerobic and, later, aerobic organisms. 
</p>
`

console.log(MainImg);
}



element[8].onclick = () =>{

  
    element[0].style.transform = "scale(1)";
    element[8].style.transform = "scale(1.5)";
    element[2].style.transform = "scale(1)";
    element[3].style.transform = "scale(1)";
    element[4].style.transform = "scale(1)";
    element[5].style.transform = "scale(1)";
    element[6].style.transform = "scale(1)";
    element[1].style.transform = "scale(1)";
    element[7].style.transform = "scale(1)";

Name.innerHTML= `
<h1 id="planetName">Neptune</h1>
`

MainImg.innerHTML= `
<img src=${earth} alt="" class="MainImg"/>
`



MainTextHolder1.innerHTML= `
<p>
Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29% of Earth's surface is land consisting of continents and islands. The remaining 71% is covered with water, mostly by oceans but also by lakes, rivers and other fresh water, which together constitute the hydrosphere. Much of Earth's polar regions are covered in ice. Earth's outer layer is divided into several rigid tectonic plates that migrate across the surface over many millions of years. Earth's interior remains active with a solid iron inner core, a liquid outer core that generates Earth's magnetic field, and a convecting mantle that drives plate tectonics.
</p>
`

MainTextHolder2.innerHTML= `
<p>
Earth formed over 4.5 billion years ago. Within the first billion years of Earth's history, life appeared in the oceans and began to affect Earth's atmosphere and surface, leading to the proliferation of anaerobic and, later, aerobic organisms. 
</p>
`

console.log(MainImg);
}