import type { ReactNode } from 'react';
import { usePokemonStore } from '@/store/pokemon.store';

interface Props {
  children: ReactNode;
}
export const FrontFrame = ({ children }: Props) => {
  const isChangeThemePokedex = usePokemonStore(
    (state) => state.isChangeThemePokedex
  );
  return (
    <div
      className={`pokedex-front__content ${
        isChangeThemePokedex ? 'gray' : 'original'
      }`}
    >
      {children}
    </div>
  );
};
