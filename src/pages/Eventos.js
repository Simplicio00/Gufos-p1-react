import React, {Component} from 'react';
import '../assets/css/cabecalho.css';
import '../assets/css/flexbox.css';
import '../assets/css/reset.css';
import '../assets/css/rodape.css';
import '../assets/css/style.css';

class Eventos extends Component{
  render(){
    return (<div>
          <body>
    <header class="cabecalhoPrincipal">
      <div class="container">
        <img src="./assets/img/icon-login.png" />

        <nav class="cabecalhoPrincipal-nav">
          Administrador
        </nav>
      </div>
    </header>

    <main class="conteudoPrincipal">
      <section class="conteudoPrincipal-cadastro">
        <h1 class="conteudoPrincipal-cadastro-titulo">Eventos</h1>
        <div class="container" id="conteudoPrincipal-lista">
          <table id="tabela-lista">
            <thead>
              <tr>
                <th>#</th>
                <th>Evento</th>
                <th>Data</th>
                <th>Acesso Livre</th>
                <th>Tipo do Evento</th>
              </tr>
            </thead>

            <tbody id="tabela-lista-corpo"></tbody>
          </table>
        </div>

        <div class="container" id="conteudoPrincipal-cadastro">
          <h2 class="conteudoPrincipal-cadastro-titulo">Cadastrar Evento</h2>
          <div class="container">
            <input
              type="text"
              id="evento__titulo"
              placeholder="título do evento"
            />
            <input type="text" id="evento__data" placeholder="dd/MM/yyyy" />
            <select id="option__acessolivre">
              <option value="1">Livre</option>
              <option value="0">Restrito</option>
            </select>
            <select id="option__tipoevento">
              <option value="0" disabled>Tipo do Evento</option>
            </select>
            <textarea
              rows="3"
              cols="50"
              placeholder="descrição do evento"
              id="evento__descricao"
            ></textarea>
          </div>
          <button
            class="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro"
            onclick="cadastrarEvento()"
          >
            Cadastrar
          </button>
        </div>
      </section>
    </main>

    <footer class="rodapePrincipal">
      <section class="rodapePrincipal-patrocinadores">
        <div class="container">
          <p>Escola SENAI de Informática - 2019</p>
        </div>
      </section>
    </footer>
  </body>
    </div>
    )
}
}

export default Eventos;