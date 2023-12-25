import type { ReactNode } from 'react';
import { usePokemonStore } from '@/store/pokemon.store';

interface Props {
  children: ReactNode;
}

export const BackChassis = ({ children }: Props) => {
  const isChangeThemePokedex = usePokemonStore(
    (state) => state.isChangeThemePokedex
  );

  return (
    <div
      className={`pokedex-back ${isChangeThemePokedex ? 'black' : 'original'}`}
    >
      <div className={`pokedex-back__frame ${
        isChangeThemePokedex ? 'gray' : 'original'
      }`}>
        {children}
      </div>
    </div>
  );
};
