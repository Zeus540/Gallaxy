import Img from '../assets/images/Sun.png'
import Fore from '../assets/images/fore.png'
import Bg from '../assets/images/2399.jpg'
import Mist from '../assets/images/Mist.png'

const Section2 = () => {

    const template = `
    

      <div class="Section2">
     
      <div id="scene">

      <div data-depth="0.1" class="bg">
        <img src=${Bg} alt="" />
      </div>

      <div data-depth="1.2"  class="earth">
        <img src=${Img} alt="" class="Sun"/>
     
      </div>

      <div data-depth="0.2" class="fore">
        <img src=${Fore} alt=""  class="Foreground"/>
      </div>
     
      
      </div>
      <div class="HeadingCenter">
      <h1>JOURNEY INTO SPACE</h1>
    </div>
  
      </div>
  

   
    `;
  
      return template;
  };
  
  export default Section2;
  