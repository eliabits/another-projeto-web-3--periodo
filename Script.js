const formulario = document.getElementById("pokemon-form");
const input = document.getElementById("pokemon-input");
const card = document.getElementById("pokemon-card");
const imagem = document.getElementById("pokemon-img");
const nome = document.getElementById("pokemon-name");
const numero = document.getElementById("pokemon-id");
const tipo = document.getElementById("pokemon-type");
const altura = document.getElementById("pokemon-height");
const peso = document.getElementById("pokemon-weight");
const habilidades = document.getElementById("pokemon-abilities");
const cores = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD"
};

// ==============================
// Quando o usuário enviar o formulário
// ==============================
formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    const pokemon = input.value.toLowerCase().trim();
    if (pokemon === "") {
        alert("Digite o nome ou número de um Pokémon.");
        return;
    }
    buscarPokemon(pokemon);
});
// =============================
// Função assíncrona responsável por consultar a API
// ==============================
async function buscarPokemon(pokemon) {
    try {
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        if (!resposta.ok) {
            throw new Error("Pokémon não encontrado.");
        }
        const dados = await resposta.json();
        preencherCard(dados);
    } catch (erro) {
        card.classList.add("hidden");
        alert(erro.message);
    }
}
// ==============================
// Preenche o card com os dados recebidos
// ==============================
function preencherCard(dados) {
    card.classList.remove("hidden");
    const tipoPrincipal = dados.types[0].type.name;
    const cor = cores[tipoPrincipal] || "#FFFFFF";
    card.style.backgroundColor = cor;
    imagem.src = dados.sprites.front_default;
    nome.textContent =
        dados.name.charAt(0).toUpperCase() +
        dados.name.slice(1);
    numero.textContent = "#" + dados.id;
    tipo.textContent = dados.types
        .map(item => item.type.name)
        .join(", ");
    altura.textContent = (dados.height / 10) + " m";
    peso.textContent = (dados.weight / 10) + " kg";
    habilidades.textContent = dados.abilities
        .map(item => item.ability.name)
        .join(", ");
}