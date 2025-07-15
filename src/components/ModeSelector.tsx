/**
 * The ModeSelector is visible when the webpage is opened. You can choose which game mode you want to play here
 */
export default function ModeSelector({ onSelect }: { onSelect: (mode: "classic" | "timer") => void }) {
    return (
        <div>
            <h1>🎭&nbsp;2&nbsp;Lies 1&nbsp;FACT</h1>
            <button onClick={() => onSelect("classic")}>🎮 Classic Mode</button>
            <button onClick={() => onSelect("timer")}>⏱️ Timer Mode</button>
        </div>
    );
}