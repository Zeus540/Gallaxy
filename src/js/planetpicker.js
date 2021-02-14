import earth from '../assets/images/earth.png'
import mars from '../assets/images/mars.png'
import venus from '../assets/images/venus.png'
import uranus from '../assets/images/uranus.png'
import mercury from '../assets/images/mercury.png'
import saturn from '../assets/images/saturn.png'
import neptune from '../assets/images/neptune.png'
import jupiter from '../assets/images/jupiter.png'
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

    Name.innerHTML= `
    <h1 id="planetName">Mars</h1>
    `

    MainImg.innerHTML= `
    <img src=${mars} alt="" class="MainImg"/>
    `

    MainTextHolder1.innerHTML= `
    <p>
    Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet". The latter refers to the effect of the iron oxide prevalent on Mars's surface, which gives it a reddish appearance distinctive among the astronomical bodies visible to the naked eye. Mars is a terrestrial planet with a thin atmosphere, with surface features reminiscent of the impact craters of the Moon and the valleys, deserts and polar ice caps of Earth.
    </p>
    `
    
    MainTextHolder2.innerHTML= `
    <p>
    Mars has been explored by several uncrewed spacecraft. Mariner 4 was the first spacecraft to visit Mars; launched by NASA on 28 November 1964, it made its closest approach to the planet on 15 July 1965. Mariner 4 detected the weak Martian radiation belt, measured at about 0.1% that of Earth, and captured the first images of another planet from deep space.The Soviet Mars 3 mission included a lander, which achieved a soft landing in December 1971; however, contact was lost seconds after touchdown. 
    </p>
    `
    
    Name.scrollIntoView({behavior: "smooth" });
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

    Name.innerHTML= `
    <h1 id="planetName">Earth</h1>
    `

    MainImg.innerHTML= `
    <img src=${earth} alt=""  class="MainImg"/>
    `

   

    MainTextHolder1.innerHTML= `
    <p>
    Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29% of Earth's surface is land consisting of continents and islands. The remaining 71% is covered with water, mostly by oceans but also by lakes, rivers and other fresh water, which together constitute the hydrosphere. Much of Earth's polar regions are covered in ice. Earth's outer layer is divided into several rigid tectonic plates that migrate across the surface over many millions of years.
    </p>
    `

    MainTextHolder2.innerHTML= `
    <p>
Earth formed over 4.5 billion years ago. Within the first billion years of Earth's history, life appeared in the oceans and began to affect Earth's atmosphere and surface, leading to the proliferation of anaerobic and, later, aerobic organisms.  Earth's interior remains active with a solid iron inner core, a liquid outer core that generates Earth's magnetic field, and a convecting mantle that drives plate tectonics.
    </p>
    `
    Name.scrollIntoView({behavior: "smooth" });
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

Name.innerHTML= `
<h1 id="planetName">Saturn</h1>
`

MainImg.innerHTML= `
<img src=${saturn} alt="" class="MainImg"/>
`



MainTextHolder1.innerHTML= `
<p>
Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine times that of Earth. It only has one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive. Saturn is named after the Roman god of wealth and agriculture; its astronomical symbol (♄) represents the god's sickle. The Romans named the seventh day of the week Saturday, Sāturni diēs ("Saturn's Day") no later than the 2nd century for the planet Saturn.
</p>
`

MainTextHolder2.innerHTML= `
<p>
Saturn's interior is most likely composed of a core of iron–nickel and rock (silicon and oxygen compounds). Its core is surrounded by a deep layer of metallic hydrogen, an intermediate layer of liquid hydrogen and liquid helium, and finally a gaseous outer layer. Saturn has a pale yellow hue due to ammonia crystals in its upper atmosphere. An electrical current within the metallic hydrogen layer is thought to give rise to Saturn's planetary magnetic field, which is weaker than the Earth's, but has a magnetic moment 580 times that of Earth due to Saturn's larger size. 
</p>
`
Name.scrollIntoView({behavior: "smooth" });
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

Name.innerHTML= `
<h1 id="planetName">Venus</h1>
`

MainImg.innerHTML= `
<img src=${venus}  alt="" class="MainImg"/>
`



MainTextHolder1.innerHTML= `
<p>
Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasion, visible to the naked eye in broad daylight.Venus lies within Earth's orbit, and so never appears to venture far from the Sun, either setting in the west just after dusk or rising in the east a little while before dawn. Venus orbits the Sun every 224.7 Earth days. With a rotation period of 243 Earth days, it takes longer to rotate about its axis than any other planet in the Solar System by far, and does so in the opposite direction to all but Uranus (meaning the Sun rises in the west and sets in the east). 
</p>
`

MainTextHolder2.innerHTML= `
<p>
Venus is a terrestrial planet and is sometimes called Earth's "sister planet" because of their similar size, mass, proximity to the Sun, and bulk composition. It is radically different from Earth in other respects. It has the densest atmosphere of the four terrestrial planets, consisting of more than 96% carbon dioxide. The atmospheric pressure at the planet's surface is about 92 times the sea level pressure of Earth, or roughly the pressure at 900 m (3,000 ft) underwater on Earth. Venus has, by far, the hottest surface of any planet in the Solar System, with a mean temperature of 737 K (464 °C; 867 °F), even though Mercury is closer to the Sun. Venus is shrouded by an opaque layer of highly reflective clouds of sulfuric acid, preventing its surface from being seen from space in visible light. 
</p>
`
Name.scrollIntoView({behavior: "smooth" });
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

Name.innerHTML= `
<h1 id="planetName">Uranus</h1>
`

MainImg.innerHTML= `
<img src=${uranus} alt="" class="MainImg"/>
`



MainTextHolder1.innerHTML= `
<p>
Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus, who, according to Greek mythology, was the grandfather of Zeus (Jupiter) and father of Cronus (Saturn). It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have bulk chemical compositions which differ from that of the larger gas giants Jupiter and Saturn. For this reason, scientists often classify Uranus and Neptune as "ice giants" to distinguish them from the other gas giants. 
</p>
`

MainTextHolder2.innerHTML= `
<p>
Uranus's atmosphere is similar to Jupiter's and Saturn's in its primary composition of hydrogen and helium, but it contains more "ices" such as water, ammonia, and methane, along with traces of other hydrocarbons. It has the coldest planetary atmosphere in the Solar System, with a minimum temperature of 49 K (−224 °C; −371 °F), and has a complex, layered cloud structure with water thought to make up the lowest clouds and methane the uppermost layer of clouds. The interior of Uranus is mainly composed of ices and rock.
</p>
`
Name.scrollIntoView({behavior: "smooth" });
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

Name.innerHTML= `
<h1 id="planetName">Mercury</h1>
`

MainImg.innerHTML= `
<img src=${mercury} alt="" class="MainImg"/>
`



MainTextHolder1.innerHTML= `
<p>
Mercury is the smallest and closest planet to the sun in the Solar System. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the planets in the Solar System. It is named after the Greek god Hermes (Ερμής), translated into Latin as Mercurius (Mercury), god of commerce, messenger of the gods, mediator between gods and mortals.

Like Venus, Mercury orbits the Sun within Earth's orbit as an inferior planet, and its apparent distance from the Sun as viewed from Earth never exceeds 28°. 
</p>
`

MainTextHolder2.innerHTML= `
<p>
This proximity to the Sun means the planet can only be seen near the western horizon after sunset or eastern horizon before sunrise, usually in twilight. At this time, it may appear as a bright star-like object, but is often far more difficult to observe than Venus. The planet telescopically displays the complete range of phases, similar to Venus and the Moon, as it moves in its inner orbit relative to Earth, which recurs over its synodic period of approximately 116 days.
</p>
`
Name.scrollIntoView({behavior: "smooth" });
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
    
Name.innerHTML= `
<h1 id="planetName">Jupiter</h1>
`

MainImg.innerHTML= `
<img src=${jupiter} alt="" class="MainImg"/>
`



MainTextHolder1.innerHTML= `
<p>
Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky and has been observed since pre-historic times. When viewed from Earth, Jupiter is on average the third-brightest natural object in the night sky after the Moon and Venus. It is named after the Roman god Jupiter.
</p>
`

MainTextHolder2.innerHTML= `
<p>
Jupiter is primarily composed of hydrogen, but helium comprises one quarter of its mass and one tenth of its molecules. It may also have a rocky core of heavier elements, but like the other giant planets, Jupiter lacks a well-defined solid surface. Because of its rapid rotation, the planet's shape is that of an oblate spheroid (it has a slight but noticeable bulge around the equator). The outer atmosphere is visibly segregated into several bands at different latitudes,with turbulence and storms along their interacting boundaries.
</p>
`
Name.scrollIntoView({behavior: "smooth" });
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
    

Name.innerHTML= `
<h1 id="planetName">Neptune</h1>
`

MainImg.innerHTML= `
<img src=${neptune} alt="" class="MainImg"/>
`



MainTextHolder1.innerHTML= `
<p>
Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, slightly more massive than its near-twin Uranus. Neptune is denser and physically smaller than Uranus because its greater mass causes more gravitational compression of its atmosphere. The planet orbits the Sun once every 164.8 years at an average distance of 30.1 AU (4.5 billion km; 2.8 billion mi). It is named after the Roman god of the sea and has the astronomical symbol ♆, a stylised version of the god Neptune's trident.
</p>
`

MainTextHolder2.innerHTML= `
<p>
Neptune is not visible to the unaided eye and is the only planet in the Solar System found by mathematical prediction rather than by empirical observation. Unexpected changes in the orbit of Uranus led Alexis Bouvard to deduce that its orbit was subject to gravitational perturbation by an unknown planet. After Bouvard's death, the position of Neptune was predicted from his observations, independently, by John Couch Adams and Urbain Le Verrier. Neptune was subsequently observed with a telescope on 23 September 1846 by Johann Galle within a degree of the position predicted by Le Verrier.
</p>
`
Name.scrollIntoView({behavior: "smooth" });
console.log(MainImg);
}