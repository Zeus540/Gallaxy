import Img from '../assets/images/snow.png'
import Fore from '../assets/images/midright.png'
import Fore1 from '../assets/images/foregroundleft.png'
import Bg from '../assets/images/bg.png'
import Backs from '../assets/images/backs.png'
import Moon from '../assets/images/moon.png'
import Stars from '../assets/images/stars2.png'

const Section2 = () => {

    const template = `
    

      <div class="Section2">
     
      <div id="scene">

      <div data-depth="0.1" class="bg">
        <img src=${Bg} alt="" />
      </div>

      <div data-depth="0.2" class="Stars">
      <img src=${Stars} alt="" />
    </div>

      <div data-depth="0.5" class="earth">
      <img src=${Img} alt="" class="Sun"/>
    </div>

      <div data-depth="0.2" class="Backs">
      <img src=${Backs} alt="" />
    </div>

    <div  class="moon">
    <img src=${Moon} alt="" class="moonrover"/>
  </div>

     
  
  

    
      <div data-depth="0.15" class="fore">
        <img src=${Fore} alt=""  class="Foreground"/>
      </div>


      <div data-depth="0.2" class="fore1">
        <img src=${Fore1} alt=""  class="Foreground1"/>
      </div>

    

      </div>
      <div class="HeadingCenter" >
        <h1>SPACE</h1>
      </div>
  
      </div>
  

   
    `;
  
      return template;
  };
  
  export default Section2;
  