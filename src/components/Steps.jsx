import React from 'react'
import '../styles/Steps.css'
import { FaCheck , FaUserAlt} from "react-icons/fa";
import { IoSend } from "react-icons/io5";

const Steps = ({currentStep}) => {
  return (
   <div className="container-steps">

    <div className="step active">
        <FaUserAlt/>
        <p>Verificação</p>
    </div>

    <div className={`step ${currentStep >= 1 ? "active" : "" }`}>
        <FaCheck/>
        <p>Avaliação</p>
    </div>

    <div className={`step ${currentStep >= 2 ? "active" : "" }`}>
        <IoSend/>
        <p>Agradecimento</p>
    </div>

   </div>
  )
}

export default Steps