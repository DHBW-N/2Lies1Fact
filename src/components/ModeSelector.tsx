export default function ModeSelector({ onSelect }: { onSelect: (mode: "classic" | "timer") => void }) {
    return (
        <div>
            <h1>🎭 2 Lies 1 Truth</h1>
            <button onClick={() => onSelect("classic")}>🎮 Classic Mode</button>
            <button onClick={() => onSelect("timer")}>⏱️ Timer Mode</button>
        </div>
    );
}