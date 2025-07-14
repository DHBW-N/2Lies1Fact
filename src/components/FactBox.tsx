/**
 * The FactBox is the component which holds the fact/lies and shows them on the screen
 */
export default function FactBox({
  fact,
  onClick,
  selected,
  isCorrect,
  showCorrect,
}: {
  fact: string;
  onClick: () => void;
  selected: boolean;
  isCorrect: boolean;
  showCorrect?: boolean;
}) {
  let className = "fact-box";

  // For visual highlight of false and correct answers
  if (selected) className += isCorrect ? " correct" : " wrong";
  else if (showCorrect) className += " correct";

  return (
    <button className={className} onClick={onClick}>
      {fact}
    </button>
  );
}
