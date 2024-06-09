import React from 'react'
import '../styles/FormThanks.css'
import {
  BsFillEmojiSmileFill,
  BsFillEmojiHeartEyesFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from "react-icons/bs"

 const emojis = {
    Insatisfeito : <BsFillEmojiFrownFill/>,
    Neutro:<BsFillEmojiNeutralFill/>,
    Satisfeito: <BsFillEmojiSmileFill/>,
    ExtremamenteSatisfeito: <BsFillEmojiHeartEyesFill/>
   }
const FormThanks = ({data}) => {
  

  console.log(data)
  return (
    
    <div className='thanks-container'>
    <h2>
      Falta pouco...
    </h2>
    <p>A sua opnião é muito importante, em breve você receberá um cupom de
      10% de desconto em todas as suas próximas compras. 
    </p>
    <h3>Aqui está o resumo da sua avaliação:</h3>
    
    <p className='review-data'>
      <span>Satisfação com o produto: {emojis[data.reacao]}

      </span>
    </p>

    <p className='review-data'>
      <span>Comentário: {data.opinion}</span>
    </p>
    <p className='text-info'>Para concluir sua avaliação clique no botão abaixo.</p>
    </div>
  )
}

export default FormThanks