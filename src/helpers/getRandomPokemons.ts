import { shuffle } from './helpers';

const getPokemonById = async () => {
  const randomId = Math.random() * 1016;
  const id = Math.round(randomId);
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await resp.json();

  return {
    name: pokemon.name,
    id: pokemon.id,
  };
};

export const getRandomName = async () => {
  const correctPokemon = await getPokemonById();

  let question = {
    data: [
      {
        id: correctPokemon.id,
        name: correctPokemon.name,
      },
    ],
    correctAnswer: correctPokemon.id,
  };

  for (let i = 0; i < 3; i++) {
    const randomId = Math.random() * 1016;
    const id = Math.round(randomId);


    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    const data = await resp.json();

    question.data.push({
      id: data.id,
      name: data.name,
    });
  }
  const randomPokemon = shuffle(question.data);

  return {
    pokeId: correctPokemon.id,
    pokeName: correctPokemon.name,
    randomPokemon,
    correctAnswer: question.correctAnswer,
  };
};
