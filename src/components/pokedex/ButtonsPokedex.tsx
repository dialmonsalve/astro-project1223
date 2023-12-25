
import { usePokemonStore } from '@/store/pokemon.store';

export const ButtonsPokedex = () => {
  const setThemePokedex = usePokemonStore((state) => state.setThemePokedex);

  const handleBlackColor = () => {
    setThemePokedex(true);
  };
  const handleOriginalColor = () => {
    setThemePokedex(false);
  };

  const isChangeThemePokedex = usePokemonStore(
    (state) => state.isChangeThemePokedex
  );

  return (
    <>
      <button
        onClick={handleBlackColor}
        className={`container-buttons__black ${isChangeThemePokedex ? 'active-black': '' }`}
      >
        Black Pokedex
      </button>
      <button
        onClick={handleOriginalColor}
        className={`container-buttons__original ${isChangeThemePokedex ? '': 'active-original' }`}
      >
        Original Pokedex
      </button>
    </>
  );
};
