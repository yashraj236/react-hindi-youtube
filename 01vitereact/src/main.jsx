import * as ReactDOM from 'react-dom';
import App from './App.jsx'
import React from 'react';


function MyApp(){
  return(
    <div>
      <h1>custom app | chai</h1>
      <App/>
    </div>


  )
}
const ReactElement = {
  type:'a',
  props:{
      href:'https://google.com',
      target:'_blank'
  },
  children:'Click me to visit google'
}


const AnotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const reactElement = React.createElement(
  'a',
  {
    href:'https://google.com',
    target:'_blank'
  },
  'click me'

)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement 
  
  )
