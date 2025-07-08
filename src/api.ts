export async function fetchTruth(): Promise<string> {
    const res = await fetch("http://localhost:3000/api/fact");
    const data = await res.json();
    return data.fact;
}

export async function fetchLies(): Promise<string[]> {
    const res = await fetch("http://localhost:3000/api/lies");
    const data = await res.json();
    return data.lies;
}