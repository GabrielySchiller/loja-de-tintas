import React from 'react'

function CardInformacoesLoja({tituloInformacao, paragrafoInformacao , imagemInformacao }) {
  return (
    <div className='card-infomacoes'>

         <img className='img-informacao' src={imagemInformacao}/>

         <div className='caixa-textos-informacao'>
            <p className='title-informacoes'> {tituloInformacao} </p>
            <p className='paragrafo-informacoes'> {paragrafoInformacao}</p>

         </div>
    </div>
  )
}

export default CardInformacoesLoja

