/**
 * Informs the user about several things like game status or errors.
 */
export default function StatusMessage({ text }: { text: string }) {
    return <div style={{ marginTop: "1rem" }}>{text}</div>;
}