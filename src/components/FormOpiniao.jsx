import React from 'react'
import {
  BsFillEmojiSmileFill,
  BsFillEmojiHeartEyesFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from "react-icons/bs"
import { FiMessageSquare } from "react-icons/fi";
import '../styles/FormOpiniao.css';

const FormOpiniao = ({ alterarDados, data }) => {
  return (
    <div className="form-opniao">
      <div className="score-container">
        <label className='score'>
          <div>
            <input
              onChange={(e) => { alterarDados('reacao', e.target.value) }}
              required type="radio"
              name='score'
              value='Insatisfeito' 
              checked={data.reacao === 'Insatisfeito'}
              />

            <BsFillEmojiFrownFill />
          </div>
          <p>Insatisfeito</p>
        </label>
        <label className='score'>
          <div>
            <input onChange={(e) => { alterarDados('reacao', e.target.value) }}
              required type="radio"
              name='score'
              value='Neutro'
              checked={data.reacao === 'Neutro'} />
 
            <BsFillEmojiNeutralFill />
          </div>
          <p>Neutro</p>
        </label>
        <label className='score'>
          <div>
            <input onChange={(e) => { alterarDados('reacao', e.target.value) }}
              required type="radio"
              name='score'
              value='Satisfeito'
              checked={data.reacao === 'Satisfeito'} />
              
            <BsFillEmojiSmileFill />
          </div>
          <p>Satisfeito</p>
        </label>
        <label className='score'>
          <div>
            <input onChange={(e) => { alterarDados('reacao', e.target.value) }}
              required type="radio"
              name='score'
              value='ExtremamenteSatisfeito' 
              checked={data.reacao === 'ExtremamenteSatisfeito'}
              />
            <BsFillEmojiHeartEyesFill />
          </div>
          <p>Extremamente Satisfeito</p>
        </label>
      </div>

      <label>
        <p>Opinião do Usuário <span><FiMessageSquare /></span></p>
        <textarea name="textOpniao"
          id="iTextOpniao"
          required
          onChange={(e) => alterarDados('opinion', e.target.value)}
          value={data.opinion || ''}
          placeholder='Digite sua opnião aqui...'>

        </textarea>
      </label>
    </div>
  )
}

export default FormOpiniao