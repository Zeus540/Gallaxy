import Img from '../assets/images/snow.png'
import earth from '../assets/images/earth.png'
import mars from '../assets/images/mars.png'
import venus from '../assets/images/venus.png'
import uranus from '../assets/images/uranus.png'
import mercury from '../assets/images/mercury.png'
import saturn from '../assets/images/saturn.png'
import neptune from '../assets/images/neptune.png'
import jupiter from '../assets/images/jupiter.png'

const Section1 = () => {

  const template = `
  
  <div class="Section1 " id="Sec">


        <h1 >CHOOSE A PLANET</h1>

        <div class="Flex">

          <div class="planetholder">
            <img src=${mars} alt="" class="SunS"/>
            <span>Mars</span>
          </div>

          <div class="planetholder">
            <img src=${earth} alt="" class="SunS"/>
            <span>Earth</span>
          </div>

          <div class="planetholder">
            <img src=${saturn} alt="" class="SunS"/>
            <span>Saturn</span>
          </div>

          <div class="planetholder">
            <img src=${venus} alt="" class="SunS"/>
            <span>Venus</span>
          </div>

          <div class="planetholder">
          <img src=${uranus} alt="" class="SunS"/>
          <span>Uranus</span>
          </div>

          <div class="planetholder">
          <img src=${mercury} alt="" class="SunS"/>
          <span>Mercury</span>
          </div>

          <div class="planetholder">
          <img src=${jupiter} alt="" class="SunS"/>
          <span>Jupiter</span>
          </div>

  

          <div class="planetholder">
          <img src=${neptune} alt="" class="SunS"/>
          <span>Neptune</span>
          </div>
        </div>

        <div id="planetName"></div>

        <div class="FlexContent">

            <div class="MainTextHolder1" id="MainTextHolder1"></div>

            <div class="MainImgHolder" id="MainImgHolder" ></div>

            <div class="MainTextHolder2" id="MainTextHolder2"></div>
            <div class=" Top">
              <button class="Mobile Up" id='backtotop'>up</button>
            </div>
    
        </div>
      
  </div>
  `

	return template;
};

export default Section1;
