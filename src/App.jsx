
import './App.css'
import FormUser from './components/FormUser';
import FormThanks from './components/FormThanks';
import FormOpiniao from './components/FormOpiniao';
import { useSteps } from './Hooks/useSteps';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import Steps from './components/Steps';
import { useState } from 'react';


function App() {

const dataList= {
  email:"",
  password:"",
  reacao:"",
  opinion:""

}

const alterarDados = (key, valor)=>{
setData((prev)=>{
  return {...prev, [key]: valor}
})
}

  const [data,setData]= useState(dataList)

  const steps = [<FormUser data={data} alterarDados = {alterarDados} />, <FormOpiniao  data={data} alterarDados = {alterarDados} />, <FormThanks  data={data}/>]
  
  const { currentStep, currentComponent, changeSteps, firstStep, lastStep } = useSteps(steps)

  return (
    <div className="app">
      <div className="header">
        <h2>Pesquisa de Satisfação</h2>
        <p>Nós agradecemos a sua preferência por escolher o nosso produto,
          você poderia deixar sua opinião sobre a sua experiência com os nossos serviços ?</p>
        <Steps currentStep={currentStep} />
      </div>


      <form className="container-form" onSubmit={(e) => changeSteps(currentStep + 1,e)}>
        {currentComponent}
            
        <div className="container-buttons">
          {!firstStep && (
            <button type='button' onClick={(e) => changeSteps(currentStep - 1)}>
              <FaAngleLeft />
              <span>Voltar</span>
            </button>)
          }

          {!lastStep ? (
            <button type='submit'>
              <span>Avançar</span>
              <FaAngleRight />
            </button>
          )
            : (
              <button type='submit'>
                <span>Enviar</span>
                <IoSend />
              </button>)
          }

        </div>
      </form>

    </div>
  )
}

export default App
