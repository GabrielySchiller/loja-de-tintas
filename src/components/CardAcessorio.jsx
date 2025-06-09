import React from 'react'

function CardAcessorio({desconto, imagem , nome , avista , parcelado , vezes, pix}) {
  return (
    <div className='card-acessorio'>
        <a className='btn-acessorio' href='https://wa.me' target='blank'>


        <div className='caixa-acessorio-img-desconto'>
            <div className='desconto-faixa-acessorio'> {desconto} </div>

            <div className='img-acessorio'>
                <img src={imagem} alt='imagem acessorio'/>
            </div>
        </div>

        <div className='descricao-acessorio'>

            <p className='nome-acessorio'> {nome} </p>

            <div className='caixa-preco-acessorio'>
                <p className='preco-acessorio'> A partir de <span className='destaque-preco'> R${avista} </span> ou </p>
                <p className='preco-acessorio'> <span className='destaque-preco' >{vezes}x</span> de <span className='destaque-preco' > R$ {parcelado}</span> </p>
                <p className='preco-acessorio'> ou <span className='destaque-preco' >R${pix}</span> via Pix </p>
            </div>

        </div>

     </a>


    </div>
  )
}

export default CardAcessorio