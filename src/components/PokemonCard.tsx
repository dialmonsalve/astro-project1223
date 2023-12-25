import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  id:string
}

export const PokemonCard = ({ children, id }: Props) => {
  return (
    <article className="poke-card">
      {children}

      <div className="poke-card__buttons">
    <button className="poke-card__buttons--add">Add</button>
    <a href={`/pokemon/${id}`} className="poke-card__buttons--more"
      >MAS...</a
    >
  </div>
    </article>
  );
};
