import React from 'react';  // importando o objeto react para a utilização na página
import './App.css';  // importando o css
import Rodape from './componentes/Rodape';
import './assets/css/cabecalho.css';
import './assets/css/flexbox.css';
import './assets/css/reset.css';
import './assets/css/rodape.css';
import './assets/css/style.css';


function App() { // Retorna o que está sendo declarado para o navegador
  return (
    <div> 
       <header className="cabecalhoPrincipal">
        <div className="container">
          <img src={require("./assets/img/icon-login.png")} />

          <nav className="cabecalhoPrincipal-nav">
            <a>Home</a>
            <a>Eventos</a>
            <a>Contato</a>
            <a className="cabecalhoPrincipal-nav-login" href="login">Login</a>
          </nav>
        </div>
      </header>

      <section className="conteudoImagem">
        <div>
          <h1>Gufos</h1>
          <h2>Área de eventos da Escola SENAI de Informática.</h2>
        </div>
      </section>

      <main className="conteudoPrincipal">
        <section id="conteudoPrincipal-eventos">
          <h1 id="conteudoPrincipal-eventos-titulo">Próximos Eventos</h1>
          <div className="container">
            <nav>
              <ul className="conteudoPrincipal-dados">
                <li className="conteudoPrincipal-dados-link eventos">
                  <h2>Título do Evento</h2>
                  <p>
                    Breve descrição sobre o evento. Lorem ipsum lorem ipsum
                    lorem ipsum.
                  </p>
                  <button>conectar</button>
                </li>

                <li className="conteudoPrincipal-dados-link eventos">
                  <h2>Título do Evento</h2>
                  <p>
                    Breve descrição sobre o evento. Lorem ipsum lorem ipsum
                    lorem ipsum.
                  </p>
                  <button>conectar</button>
                </li>

                <li className="conteudoPrincipal-dados-link eventos">
                  <h2>Título do Evento</h2>
                  <p>
                    Breve descrição sobre o evento. Lorem ipsum lorem ipsum
                    lorem ipsum.
                  </p>
                  <button>conectar</button>
                </li>

                <li className="conteudoPrincipal-dados-link eventos">
                  <h2>Título do Evento</h2>
                  <p>
                    Breve descrição sobre o evento. Lorem ipsum lorem ipsum
                    lorem ipsum.
                  </p>
                  <button>conectar</button>
                </li>
              </ul>
            </nav>
          </div>
        </section>

        <section id="conteudoPrincipal-visao">
          <h1 id="conteudoPrincipal-visao-titulo">Por Quê Participar?</h1>
          <div className="container">
            <p className="visao-texto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Nullam auctor suscipit eros sed blandit. <br />
              Fusce euismod neque sed dapibus sollicitudin. <br />Duis vel lacus
              vestibulum, molestie dui eu, bibendum nunc.
            </p>
          </div>
        </section>

        <section id="conteudoPrincipal-contato">
          <h1 id="conteudoPrincipal-contato-titulo">Contato</h1>
          <div className="container conteudo-contato-titulo">
            <div className="contato-mapa conteudo-contato-mapa"></div>
            <div className="contato-endereco conteudo-contato-endereco">
              Alameda Barão de Limeira, 539 <br />
              São Paulo - SP
            </div>
          </div>
        </section>
      </main>
      <Rodape/>
      
    </div>
  );
}
export default App;