import Img from '../assets/images/snow.png'
import earth from '../assets/images/earth.png'

const Section1 = () => {

  const template = `
  
  <div class="Section1 " id="Sec">


        <h1 >CHOOSE A PLANET</h1>

        <div class="Flex">

          <div class="planetholder">
            <img src=${Img} alt="" class="SunS"/>
            <span>Mars</span>
          </div>

          <div class="planetholder">
            <img src=${earth} alt="" class="SunS"/>
            <span>Earth</span>
          </div>

          <div class="planetholder">
            <img src=${Img} alt="" class="SunS"/>
            <span>Saturn</span>
          </div>

          <div class="planetholder">
            <img src=${Img} alt="" class="SunS"/>
            <span>Venus</span>
          </div>

          <div class="planetholder">
          <img src=${Img} alt="" class="SunS"/>
          <span>Uranus</span>
          </div>

          <div class="planetholder">
          <img src=${Img} alt="" class="SunS"/>
          <span>Mercury</span>
          </div>

          <div class="planetholder">
          <img src=${Img} alt="" class="SunS"/>
          <span>Jupiter</span>
          </div>

          <div class="planetholder">
          <img src=${Img} alt="" class="SunS"/>
          <span>Pluto</span>
          </div>

          <div class="planetholder">
          <img src=${Img} alt="" class="SunS"/>
          <span>Neptune</span>
          </div>
        </div>

        <div id="planetName"></div>

        <div class="FlexContent">

            <div class="MainTextHolder1" id="MainTextHolder1"></div>

            <div class="MainImgHolder" id="MainImgHolder" ></div>

            <div class="MainTextHolder2" id="MainTextHolder2"></div>

        </div>

    
  </div>
  `

	return template;
};

export default Section1;
