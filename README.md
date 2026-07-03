# ⚡ Pokédex Interativa (PIKACHU CATALOGANDO)

Uma aplicação web desenvolvida para consultar informações de Pokémon utilizando a **PokéAPI**. O usuário pode pesquisar qualquer Pokémon pelo nome e visualizar seus principais dados de forma rápida, intuitiva e com uma interface dinâmica.

## 📸 Demonstração

<img width="1919" height="964" alt="image" src="https://github.com/user-attachments/assets/862a51b2-5a0b-4df2-bfa0-6bc4322946c9" />

---

## 🚀 Funcionalidades

* 🔍 Pesquisa de Pokémon pelo nome.
* 🖼️ Exibição da imagem oficial do Pokémon.
* 📛 Nome e número da Pokédex.
* 🧬 Exibição do(s) tipo(s) do Pokémon.
* ⚖️ Informações de peso e altura.
* 🎨 Alteração automática da cor de fundo conforme o tipo principal do Pokémon.
* ❌ Tratamento de erros para Pokémon inexistentes.
* 📱 Interface responsiva.

---

## 🛠️ Tecnologias Utilizadas

* HTML5
* Tailwind CSS
* JavaScript (ES6+)
* Fetch API
* Async/Await
* PokéAPI

---

## 📂 Estrutura do Projeto

```text
📁 projeto
│
├── index.html
├── script.js
├── README.md
└── img/
    └── demo.png
```

---

## 🌐 API Utilizada

Este projeto consome dados da **PokéAPI**, uma API pública que fornece informações completas sobre os Pokémon.

🔗 https://pokeapi.co/api/v2/pokemon

Exemplo de requisição:

```text
https://pokeapi.co/api/v2/pokemon/pikachu
```

---

## ▶️ Como Executar

1. Clone este repositório:

```bash
git clone https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
```
2. Entre na pasta do projeto:
```bash
cd NOME-DO-REPOSITORIO
```

3. Abra o arquivo `index.html` no navegador.

Ou simplesmente acesse a versão publicada pelo GitHub Pages.

---

## 💡 Como Funciona

Ao pesquisar um Pokémon, a aplicação envia uma requisição para a PokéAPI utilizando `fetch()` com `async/await`.

Caso o Pokémon exista, são exibidas informações como:

* Nome
* Número na Pokédex
* Imagem
* Tipo(s)
* Altura
* Peso

Além disso, a aplicação identifica o tipo principal do Pokémon e altera automaticamente a cor de fundo da página para combinar com ele, proporcionando uma experiência mais dinâmica.

Se o Pokémon não existir, uma mensagem de erro é exibida ao usuário.

---

## 🎯 Objetivos do Projeto

Este projeto foi desenvolvido com o objetivo de praticar:

* Consumo de APIs REST.
* Manipulação do DOM.
* Programação assíncrona com `async` e `await`.
* Tratamento de erros utilizando `try...catch`.
* Organização de código JavaScript.
* Desenvolvimento de interfaces responsivas.

---

## 📚 Aprendizados

Durante o desenvolvimento deste projeto foi possível compreender melhor conceitos como:

* Requisições HTTP.
* Manipulação de objetos JSON.
* Atualização dinâmica de elementos HTML.
* Integração entre HTML, CSS e JavaScript.
* Consumo de APIs externas.

---

## 👨‍💻 Autor

Desenvolvido por **Eliabe Rafael Oliveira Silva**.

GitHub:
https://github.com/eliabits

---

## ⭐ Projeto Acadêmico

Este projeto foi desenvolvido para fins de estudo e prática de desenvolvimento web, utilizando tecnologias modernas para consumo de APIs e manipulação dinâmica de interfaces.

