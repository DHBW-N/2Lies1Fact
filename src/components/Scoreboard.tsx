export default function Scoreboard({ highscores }: { highscores: number[] }) {
  // Fülle das Array auf 5 Plätze mit 0, falls weniger als 5 Werte
  const filled = [...highscores, ...Array(5 - highscores.length).fill(0)];
  return (
    <div
      style={{
        position: "absolute",
        top: 10,
        right: 10,
        background: "rgba(0,0,0,0.8)",
        padding: "1rem",
        border: "2px solid #fff",
        borderRadius: "8px",
        minWidth: "120px",
        textAlign: "left",
      }}
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
