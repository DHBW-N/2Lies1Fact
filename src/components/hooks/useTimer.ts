import { useEffect, useState } from "react";

export function useTimer(initialTime: number, onTimeout: () => void) {
    const [time, setTime] = useState(initialTime);

    useEffect(() => {
        if (time <= 0) {
            onTimeout();
            return;
        }
        const t = setTimeout(() => setTime(time - 1), 1000);
        return () => clearTimeout(t);
    }, [time]);

    return [time, setTime] as const;
}