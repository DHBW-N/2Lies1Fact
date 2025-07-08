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
  if (selected) className += isCorrect ? " correct" : " wrong";
  else if (showCorrect) className += " correct";

  return (
    <div className={className} onClick={onClick}>
      {fact}
    </div>
  );
}
