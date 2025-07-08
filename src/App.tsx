import { useState } from "react";
import ModeSelector from "./components/ModeSelector";
import GamePage from "./components/pages/GamePage.tsx";

function App() {
    const [mode, setMode] = useState<"" | "classic" | "timer">("");

    return mode ? <GamePage mode={mode} onBack={() => setMode("")} /> : <ModeSelector onSelect={setMode} />;
}

export default App;