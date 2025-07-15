/**
 * The Header of the page
 */
export default function Header({ onBack }: { onBack: () => void }) {
    return (
        <header
            style={{
                pointerEvents: "none",
            }}
        >
            <button
                onClick={onBack}
                className={"returnButton"}
            >
                ⬅️ Back to main page
            </button>
            <h1 style={{ margin: "0 0 10px 0", pointerEvents: "auto" }}>2&nbsp;LIES 1&nbsp;FACT</h1>
            <div></div>
        </header>
    );
}
