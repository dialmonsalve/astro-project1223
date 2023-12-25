import { usePokemonStore } from '@/store/pokemon.store';
import { useEffect, type ReactNode } from 'react';

interface Props {
  id: string;
  name: string;
  children: ReactNode;
}

export const PokeImage = ({ id, name, children }: Props) => {
  const isCorrectAnswer = usePokemonStore((state) => state.isCorrectAnswer);
  const setIsCorrectAnswer = usePokemonStore((state) => state.setIsCorrectAnswer);

  useEffect(() => {
    setIsCorrectAnswer(false)
  }, [])
  

  return (
    <div className="pokedex-front__content--screen">
      {isCorrectAnswer ? (
        <a href={`/pokemon/${id}`}>{children}</a>
      ) : (
        <img
          className="pokedex-front__content--image hide-pokemon"
          id="pokemonImage"
          data-id={id}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt={name}
        />
      )}
    </div>
  );
};
