import React from 'react'

import '../styles/FormUser.css'
import { MdOutlineEmail } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
const FormUser = () => {

  const [verifiEmail, setVerifiEmail] = React.useState(true);
  const [verifiSenha, setVerifiSenha] = React.useState(true);

  const verificationEmail = (e) => {
    const email = e.target.value;
    if (email === '') {
      setVerifiEmail(undefined); // Define como undefined se o campo estiver vazio
    } else {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      setVerifiEmail(regex.test(email));
    }
  }

  const verificationSenha = (e) => {
    const senha = e.target.value;
    if (senha === '') {
      setVerifiSenha(undefined); // Define como undefined se o campo estiver vazio
    } else {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
      setVerifiSenha(regex.test(senha));
    }
  }

  return (
    <div>
      <label>
        <span>E-mail <MdOutlineEmail /></span>

        <input className={verifiEmail !== false  ? '' : 'error'}
        type="email" placeholder='example@gmail.com'
        onChange={(e) => verificationEmail(e)} 
        required
        />

      </label>
      <label>
        <span>Senha <IoLockClosedOutline /></span>
        <input
            className={verifiSenha !== false ? '' : 'error'}
            type="password"
            placeholder='example123'
            onChange={verificationSenha} 
            required />
       
      </label>

      
    </div>
  )
}

export default FormUser