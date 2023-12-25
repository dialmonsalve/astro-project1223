import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface PokemonState {
  isCorrectAnswer: boolean;
  isChangeThemePokedex: boolean
}

interface ActionsPokemon {
  setIsCorrectAnswer: (isCorrectAnswer:boolean) => void;
  setThemePokedex: (changeThemePokedex:boolean) => void;
}

const STATE: PokemonState = {
  isCorrectAnswer: false,
  isChangeThemePokedex: false,
};

export const usePokemonStore = create<PokemonState & ActionsPokemon>()(
  devtools((set) => ({
    ...STATE,
    setIsCorrectAnswer: (isCorrectAnswer) => {
      set({ isCorrectAnswer }, false, "setCorrectAnswer");
    },
    setThemePokedex: (isChangeThemePokedex) => {
      set({ isChangeThemePokedex }, false, "setThemePokedex");
    }
  }),{name:'Pokemon'})
);
