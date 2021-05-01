
import './App.css';
import Comentario from './components/Comentario'
import React, { Component } from 'react';

class App extends Component {
  state = {
    comentarios: [
      {
        nome: 'Renato',
        email: 'renatoroessler@gmail.com',
        data: new Date(2021, 3, 28, 5, 30, 0),
        mensagem: 'Olá, Tudo bem?'
      },
      {
        nome: 'Maria',
        email: 'Maria@gmail.com',
        data: new Date(2021, 3, 27, 6, 49, 0),
        mensagem: 'Olá, tudo bem sim!'
      }
    ],
    novoComentario: {
      nome: '',
      email: '',
      mensagem: ''
    }
  }

  adicionarComentario = (evento) => {
    evento.preventDefault();
    const novoComentario = { ...this.state.novoComentario, data: new Date() }

    this.setState({
      comentarios: [...this.state.comentarios, novoComentario],
      novoComentario: { nome: '', email: '', mensagem: '' }
    })

  }

  removerComentario = comentario => {
    let lista = this.state.comentarios;
    lista = lista.filter(c => c !== comentario)
    this.setState({ comentarios: lista })
  }

  digitacao = evento => {
    const { value, name } = evento.target;
    this.setState({ novoComentario: { ...this.state.novoComentario, [name]: value } })

  }

  render() {
    return (
      <div className="App">
        <h1>Meu primeiro Projeto</h1>

        {this.state.comentarios.map((comentario, indice) => (
          <Comentario
            key={indice}
            nome={comentario.nome}
            email={comentario.email}
            data={comentario.data}
            onRemove={this.removerComentario.bind(this, comentario)}>
            {comentario.mensagem}
          </Comentario>
        ))}

        <form method="post" onSubmit={this.adicionarComentario} className="Novo-Comentario">
          <h2>adicionar comentário</h2>
          <div>
            <input
              type="text"
              name="nome"
              placeholder="Digite seu nome"
              value={this.state.novoComentario.nome}
              required
              onChange={this.digitacao} />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Digite seu email"
              value={this.state.novoComentario.email}
              required
              onChange={this.digitacao} />

          </div>
          <div>
            <textarea
              name="mensagem"
              rows="4"
              value={this.state.novoComentario.mensagem}
              required
              onChange={this.digitacao}
            />
          </div>
          <button type="submit">adicionar comentário</button>
        </form>


      </div>
    );
  }
}

export default App;
