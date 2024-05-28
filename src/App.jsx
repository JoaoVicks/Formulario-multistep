import { useState } from 'react'
import './App.css'
import FormUser from './components/FormUser';
import FormThanks from './components/FormThanks';
import FormOpiniao from './components/FormOpiniao';
import { useSteps } from './Hooks/useSteps';
import { FaAngleLeft,FaAngleRight } from "react-icons/fa";


function App() {
  const steps = [<FormUser/> , <FormOpiniao/> , <FormThanks/>]
  const{currentStep,currentComponent}= useSteps(steps)

  return (
    <div className="app">
      <div className="header">
        <h2>Pesquisa de Satisfação</h2>
        <p>Nós agradecemos a sua preferência por escolher o nosso produto, 
          você poderia deixar sua opnião sobre a sua experiência com os nossos serviços ?</p>
      </div>
      {/* <p>passo a passo</p> */}
      
      <div className="container-form">
        {currentComponent}

        <div className="container-buttons">
          <button type='button'>
            <FaAngleLeft/>
            <span>Voltar</span>
          </button>
          <button type='submit'>
            <span>Seguir</span>
            <FaAngleRight/>
          </button>
        </div>
            </div>

    </div>
  )
}

export default App
