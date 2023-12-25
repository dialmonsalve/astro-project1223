import type { ReactNode } from 'react';
import { usePokemonStore } from '@/store/pokemon.store';

interface Props {
  children: ReactNode;
}
export const FrontChassis = ({ children }: Props) => {

  const isChangeThemePokedex = usePokemonStore(
    (state) => state.isChangeThemePokedex
  );
  return (
    <div id="front-bg" className={`pokedex-front original  ${
      isChangeThemePokedex ? 'black' : 'original'
    }`}>
      {children}
    </div>
  );
};
