import { useState } from 'react'

import './App.css'
import Fondo from './components/Fondo'
import Header from './components/Header'
import TaskList from './components/TaskList'
import Footer from './components/Footer'
import Barra from './components/Barra'


let cambioFondo = 'fondo2'; 
let menuVisible = '';
function App() {

  const [fondo1, setFondo1] = useState('');
  const [menu, setMenu] = useState(false);

const cambiarFondo =()=>{

  if(cambioFondo == 'fondo2'){
    setFondo1(cambioFondo);
    cambioFondo = 'fondo3';
  } else
  if(cambioFondo == 'fondo3'){
    setFondo1(cambioFondo);
    cambioFondo = 'fondo4';
  } else
  if(cambioFondo == 'fondo4'){
    setFondo1(cambioFondo);
    cambioFondo = 'fondo5';
  } else
  if(cambioFondo == 'fondo5'){
    setFondo1('fondo5');
    cambioFondo = '';
  } else
  if(cambioFondo == ''){
    setFondo1(cambioFondo);
    cambioFondo = 'fondo2';
  }
}

const mostrarMenu = () =>{
  if(!menuVisible){
    setMenu(true);
    menuVisible = 'menuVisible';
  }
  else {
    menuVisible = '';
    setMenu(false);

  }
}

return (
  <>
    <div className='main'>
      <Barra menuVisible={menuVisible}/>
      <Header cambiarFondo={cambiarFondo} mostrarMenu={mostrarMenu}/>
      <TaskList/>
      <Fondo fondo1={fondo1}/>
      <Footer/>
    </div>
    </>
  )
}

export default App
