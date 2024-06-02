import React from 'react'
import {
  BsFillEmojiSmileFill,
  BsFillEmojiHeartEyesFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from "react-icons/bs"
import { FiMessageSquare } from "react-icons/fi";
import '../styles/FormOpniao.css';

const FormOpiniao = () => {
  return (
    <div className="form-opniao">
      <div className="score-container">
        <label className='score'>
          <div>
            <input required type="radio" name='score' value='Insatisfeito' />
            <BsFillEmojiFrownFill />
          </div>
          <p>Insatisfeito</p>
        </label>
        <label className='score'>
          <div>
            <input required type="radio" name='score' value='Neutro' />
            <BsFillEmojiNeutralFill />
          </div>
          <p>Neutro</p>
        </label>
        <label className='score'>
          <div>
            <input required type="radio" name='score' value='Satisfeito' />
            <BsFillEmojiSmileFill />
          </div>
          <p>Satisfeito</p>
        </label>
        <label className='score'>
          <div>
            <input required type="radio" name='score' value='Insatisfeito' />
            <BsFillEmojiHeartEyesFill />
          </div>
          <p>Extremamente Satisfeito</p>
        </label>
      </div>

      <label>
        <p>Opnião do Usuário <span><FiMessageSquare /></span></p>
        <textarea name="textOpniao"
          id="iTextOpniao"
          placeholder='Digite sua opnião aqui'>
        </textarea>
      </label>
    </div>
  )
}

export default FormOpiniao