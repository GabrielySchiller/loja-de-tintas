import './style/responsive.css';
import "./style/App.css";
import CardTinta from "./components/CardTinta";
import { useState } from 'react';

import { coresArray } from "./assets/database/cores-tintas";
import { arrayInformacoesLoja } from "./assets/database/informacoes-loja.js";
import { arrayAcessorios } from "./assets/database/acessorios.js";
import CardInformacoesLoja from "./components/CardInformacoesLoja.jsx";
import CardAcessorio from "./components/CardAcessorio.jsx";

function App() {

  
   const [menuAtivo, setMenuAtivo] = useState(false);

    const ativarMenu = () => {
    setMenuAtivo(!menuAtivo);
   };


  return (
    <div className="body">
      <header className="menu-desktop">
        <div className="logo">
          <a className="logo-link" href="#home">
            <img src="https://ik.imagekit.io/gabrielySchiller/projeto-tinta/gota-de-tinta.png?updatedAt=1748557409219" />
          </a>
        </div>

        <nav className="menu-links">
          <ul>
            <li className="btn-menu">
              <a href="#catalogo"> Catálogo</a>
            </li>
           
            <li className="btn-menu">
              <a href="#acessorios"> Acessórios complementares </a>
            </li>
            
            <li className="btn-menu">
              <a href="#sobre-nos"> Sobre </a>
            </li>
          
            <li className="btn-menu">
              <a href="#sobre-nos"> Horários </a>
            </li>
            
            <li className="btn-menu">
              <a href="https://wa.me"> Contato </a>
            </li>

            <li className="btn-menu-contato">
              <a href=""> Escolha sua cor</a>
            </li>
          </ul>
        </nav>
      </header>

      <header className="menu-mobile">
       
       {!menuAtivo && (
            <div onClick={ativarMenu} className="menu-toggle bar">
              <img
                src="https://ik.imagekit.io/gabrielySchiller/projeto-tinta/cardapio.png?updatedAt=1748990253837"
                alt="menu abrir"
              />
            </div>
        )}

        {menuAtivo && (
          <div onClick={ativarMenu} className="menu-toggle sair">
            <img className='sair-menu'
              src="https://ik.imagekit.io/gabrielySchiller/projeto-tinta/remover.png?updatedAt=1748990348071"
              alt="menu sair"
            />
          </div>
        )}

       

        <div className="logo">
          <a className="logo-link" href="#home">
            <img src="https://ik.imagekit.io/gabrielySchiller/projeto-tinta/gota-de-tinta.png?updatedAt=1748557409219" />
          </a>
        </div>

        <nav  className={`menu-list-mobile ${menuAtivo ? 'ativo' : ''}`}  >
          <ul>
            <li className="btn-menu-mobile">
              <a href="#catalogo"> Catálogo</a>
            </li>
              
            <li className="btn-menu-mobile">
              <a href="acessorios"> Acessórios complementares </a>
            </li>

            <li className="btn-menu-mobile">
              <a href="#sobre-nos"> Sobre </a>
            </li>
            
            <li className="btn-menu-mobile">
              <a href="#sobre-nos">Horários </a>
            </li>
           
            <li className="btn-menu-mobile">
              <a href="https://wa.me" target="blank"> Contato</a>
            </li>

            <li className="btn-menu-contato-mobile">
              <a href="https://wa.me"> Escolha sua cor</a>
            </li>
          </ul>
         
        </nav>
      </header>

      
      
      <section id="home">
       
        <div className="textos-home">
         
          <h2 className="title-home">
            Explore nossa loja e encontre o que precisa para dar vida ao seu
            projeto!
          </h2>

          <div className="btns-home">
            <a className="link-home" target="blank" href="https://wa.me">
              Entre em contato com um de nossos vendedores
            </a>
           
            <a className="link-home" target="blank" href="https://maps.app.goo.gl/NPDU7ZzzZAtenPMC8" >
              Nossa Localização
            </a>
          </div>
        </div>

        <div className="img-home">
          <img src="https://ik.imagekit.io/gabrielySchiller/projeto-tinta/6d9bdd84-49dc-4c09-9d5e-5a6765277179-removebg-preview%20(1).png?updatedAt=1749504971731" />
        </div>
      </section>

      
      
      <section id="catalogo">
        <div className="title-catalogo">
          <p>Nosso Catálogo</p>
        </div>

        <div className="catalogo-container">
          {coresArray.map((cor, index) => (
            <CardTinta
              key={cor.id}
              corNome={cor.corNome}
              corImagem={cor.corImagem}
            />
          ))}
        </div>
      </section>

     
      <section className="informacoes-servicos-loja">

        <div className='container-informacoes'>
        
          {arrayInformacoesLoja.map((informacao, index) => (
            <CardInformacoesLoja
            key={informacao.id}
            tituloInformacao={informacao.titulo}
            paragrafoInformacao={informacao.paragrafo}
            imagemInformacao={informacao.imagem}
            />
          ))}
        </div>
      </section>

     
      <section id="acessorios">
        <div className="title-acessorios">
          <p>Acessórios Complementares</p>
        </div>

        <div className="container-acessorios">
          {arrayAcessorios.map((acessorio, index) => (
            <CardAcessorio
              key={acessorio.id}
              nome={acessorio.nome}
              desconto={acessorio.descontoFaixa}
              avista={acessorio.precoAvista}
              parcelado={acessorio.precoParcelado}
              vezes={acessorio.vezesParcelado}
              pix={acessorio.precoPix}
              imagem={acessorio.imagem}
            />
          ))}
        </div>
      </section>

      
      <section id="sobre-nos">
        <div className="title-sobre">
          <p>Conheça um pouco da</p>
          <span className="span-sobre"> Color Tintas </span>
        </div>

        <div className="container-sobre">
          <div className="img-sobre">
            <img
              src="https://ik.imagekit.io/gabrielySchiller/projeto-tinta/freepik__the-style-is-candid-image-photography-with-natural__76419.jpeg?updatedAt=1749160163739"
              alt="imagem da loja fictícia Color tintas"
            />
          </div>

          <div className="textos-sobre">
            
            <p className="paragrafo-sobre">
              Na Color Tintas, você encontra uma ampla variedade de tintas imobiliárias,
               industriais, vernizes, acessórios de pintura, texturas e impermeabilizantes.
               Trabalhamos com as principais marcas do mercado, além de oferecer uma linha exclusiva
                de produtos desenvolvidos com alto padrão de qualidade.
               Nosso time é especializado e está sempre pronto para orientar na escolha da cor ideal, 
               indicar o produto certo para cada necessidade e dar dicas para que sua pintura tenha um acabamento perfeito.
            </p>
            <div className="horario">
              <p className="title-horario"> Horário de Funcionamento:</p>
              <p> • Segunda a Sexta: 08h às 18h;  </p>
              <p> • Sábado: 08h às 12h;  </p>
              <p> • Domingo: Fechado;</p>
            </div>

          </div>
        </div>
      </section>
          
           

      <footer>
        <p> <img src="https://ik.imagekit.io/gabrielySchiller/icons/mapas-e-bandeiras.png?updatedAt=1749164289513"/>  Pelotas , RS</p>
        <p> <img src="https://ik.imagekit.io/gabrielySchiller/icons/telefone.png?updatedAt=1749164344869"/>   +55 53 9900009</p>
        <p> Loja Fictícia | Imagens do site criadas por IA.</p>

        <div className="links-footer">
          <a
            target="_blank"
            href="https://icons8.com/icon/CuUOYOfd3Dy9/pix"
          ></a>{" "}
          ícones por{" "}
        
          <a target="_blank" href="https://icons8.com">
            Icons8
          </a>
          |
          <a
            href="https://www.flaticon.com/br/icones-gratis/menu-hamburguer"
            title="menu-hambúrguer ícones"
          >
            ícones - Flaticon
          </a>

        </div>
        
      </footer>
    </div>
  );
}

export default App;
