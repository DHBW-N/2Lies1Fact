/**
 * The scoreboard with the best 5 scores.
 */
export default function Scoreboard({ highscores }: { highscores: number[] }) {
  // Fülle das Array auf 5 Plätze mit 0, falls weniger als 5 Werte
  const filled = [...highscores, ...Array(5 - highscores.length).fill(0)];
  return (
    <div
      className={"scoreboard"}
    >
      <div style={{ fontWeight: "bold", marginBottom: "0.5em" }}>
        🏆 Highscores
      </div>
      {filled.slice(0, 5).map((score, idx) => (
        <div key={idx}>
          #{idx + 1} – {score}
        </div>
      ))}
    </div>
  );
}
