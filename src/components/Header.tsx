export default function Header({ onBack }: { onBack: () => void }) {
    return (
        <div
            style={{
                position: "absolute",
                top: 10,
                left: 0,
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                pointerEvents: "none",
            }}
        >
            <button
                onClick={onBack}
                style={{
                    position: "absolute",
                    left: 10,
                    pointerEvents: "auto",
                }}
            >
                ⬅️ Zurück
            </button>
            <h1 style={{ margin: "0 0 10px 0", pointerEvents: "auto" }}>2 LIES 1 TRUTH</h1>
        </div>
    );
}
