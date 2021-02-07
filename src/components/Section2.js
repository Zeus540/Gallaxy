import Img from '../assets/images/snow.png'
import Fore from '../assets/images/midright.png'
import Fore1 from '../assets/images/foregroundleft.png'
import Bg from '../assets/images/bg.png'
import Mist from '../assets/images/stars2.png'

const Section2 = () => {

    const template = `
    

      <div class="Section2">
     
      <div id="scene">

      <div data-depth="0.1" class="bg">
        <img src=${Bg} alt="" />
      </div>

  
      <div  class="earth">
        <img src=${Img} alt="" class="Sun"/>
     
      </div>

     
    
      <div data-depth="0.1" class="fore">
        <img src=${Fore} alt=""  class="Foreground"/>
      </div>
      
      <div data-depth="0.1" class="fore1">
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
  