import Section1 from './components/Section1'
import Section2 from './components/Section2'

import './scss/app.scss'


const App = () =>{
  document.getElementById("root").innerHTML = `
 
  ${Section2()}
  ${Section1()}
  `;
}

App();