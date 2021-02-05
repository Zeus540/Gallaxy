import Nav from './components/Nav'
import Welcome from './components/Welcome'

import './scss/app.scss'


const App = () =>{
  document.getElementById("root").innerHTML = `

  ${Welcome()}

  `;
}

App();