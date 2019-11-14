import React, { Component } from 'react'; // Importante objeto React
import '../App.css'; // Importando CSS
import Rodape from '../componentes/Rodape'; //  Importando o componente Rodape

class Categoria extends Component {

    constructor(props){
        super(props);
        this.state = {
            listaCategorias : [],
            titulo : ''
        }
    }

    // Função que faz a requisão para a api 
    // Atribui os dados recebidos ao state listaCategorias
    // Caso ocorra um erro, exibe no console do navegador
    buscarCategorias(){
        fetch('https://localhost:5001/api/categorias')
        .then(resposta => resposta.json())
        .then(data => this.setState({ listaCategorias : data}))
        .catch((erro) => console.log(erro))
    }

    // Assim que a página for carregada, chama a função buscarCategorias
    componentDidMount(){
        this.buscarCategorias();
    }

    render() {
        return (
            <div className="App"> {/* Usando o CSS chamando o nome da classe (App) */}
                <header class="cabecalhoPrincipal">
                    <div class="container">
                        <img src={require("../assets/img/icon-login.png")} />

                        <nav class="cabecalhoPrincipal-nav">Administrador</nav>
                    </div>
                </header>

                <main class="conteudoPrincipal">
                    <section class="conteudoPrincipal-cadastro">
                        <h1 class="conteudoPrincipal-cadastro-titulo">Categorias</h1>
                        <div class="container" id="conteudoPrincipal-lista">
                            <table id="tabela-lista">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Título</th>
                                    </tr>
                                </thead>
                                
                                <tbody id="tabela-lista-corpo">
                                {
                                    this.state.listaCategorias.map(function(categoria){
                                        return (
                                            <tr key={categoria.categoriaId}>
                                        <td>categoria.categoriaId</td>
                                        <td>categoria.Titulo</td>
                                        <td>categoria.titulo</td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </table>
                        </div>

                        <div class="container" id="conteudoPrincipal-cadastro">
                            <h2 class="conteudoPrincipal-cadastro-titulo">
                                Cadastrar Tipo de Evento
            </h2>
                            <form>
                                <div class="container">
                                    <input
                                        type="text"
                                        id="nome-tipo-evento"
                                        placeholder="tipo do evento"
                                    />
                                    <button class="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro">Cadastrar</button>
                                </div>
                            </form>
                        </div>
                    </section>
                </main>
                <Rodape /> {/*Usando o componente rodape*/}
            </div>
        )
    }
}
export default Categoria; // Por padrão recebe o return e envia para o navegador 