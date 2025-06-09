import React from 'react'

function CardTinta({corNome , corImagem}) {
  return (
   <div className='card-tinta'>
    <div className='container-img-tinta'>
      <img src={corImagem}/>
    </div>

    <div className='textos-tinta'>
      <p className='nome-tinta'>{corNome}</p>
    </div>
   </div>
  )
}

export default CardTinta