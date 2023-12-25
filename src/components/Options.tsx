import { usePokemonStore } from "@/store/pokemon.store";

interface Props {
  questions: Questions;
}

interface Questions {
  pokeId: number;
  pokeName: string;
  randomPokemon: {
    id: string;
    name: string;
  }[];
  correctAnswer: number;
}
export const Options = ({ questions }: Props) => {

  const setIsCorrectAnswer = usePokemonStore((state) => state.setIsCorrectAnswer)

  const handleSelectionAnswer = (id: string) => {
    if (questions.correctAnswer === Number(id)) {

      console.log(questions.correctAnswer === Number(id));
      
      setIsCorrectAnswer(true)
    }
  };

  return (
    <div className="container-options">
      <div>
        <p
          onClick={() => handleSelectionAnswer(questions.randomPokemon[0].id)}
          className="container-options__option"
        >
          <span>a.</span> {questions.randomPokemon[0].name}
        </p>
        <p
          onClick={() => handleSelectionAnswer(questions.randomPokemon[1].id)}
          className="container-options__option"
        >
          <span>b.</span> {questions.randomPokemon[1].name}
        </p>
      </div>
      <div>
        <p
          onClick={() => handleSelectionAnswer(questions.randomPokemon[2].id)}
          className="container-options__option"
        >
          <span>c.</span> {questions.randomPokemon[2].name}
        </p>
        <p
          onClick={() => handleSelectionAnswer(questions.randomPokemon[3].id)}
          className="container-options__option"
        >
          <span>d.</span> {questions.randomPokemon[3].name}
        </p>
      </div>
    </div>
  );
};
