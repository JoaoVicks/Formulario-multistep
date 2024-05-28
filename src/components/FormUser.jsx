import React from 'react'
import '../styles/FormUser.css'
import { MdOutlineEmail } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
const FormUser = () => {
  return (
    <form>
      <label>
        <span>E-mail <MdOutlineEmail/></span>
        <input type="email" placeholder='example@gmail.com' />
      </label>
      <label>
        <span>Senha <IoLockClosedOutline/></span>
        <input type="text" placeholder='example123'/>
      </label>
    </form>
  )
}

export default FormUser