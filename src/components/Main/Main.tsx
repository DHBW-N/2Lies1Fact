import {useEffect, useState} from "react";

function Main() {
    const [fact, setFact] = useState<string>("DummyText");
    const [lies, setLies] = useState<string[]>();

    useEffect(() => {
        fetch("http://localhost:3000/api/fact").then(res => res.json().then(data => {setFact(data.fact)}));
        fetch("http://localhost:3000/api/lies").then(res => res.json().then(data => {setLies(data.lies)}));
    }, []);

    return (
        <>
            <div className={'flex justify-center items-center h-11/12'}>
            <div className={'flex align-center py-5 px-8 justify-center w-full flex-wrap'}>
                <button className={'bg-blue-300 inline m-1 border p-2 w-1/5 min-w-50'}>{fact}</button>
                <button className={'bg-blue-300 inline m-1 border p-2 w-1/5 min-w-50'}>{lies?.[0]}</button>
                <button className={'bg-blue-300 inline m-1 border p-2 w-1/5 min-w-50'}>{lies?.[1]}</button>
            </div>
            </div>
        </>
    );
}

export default Main;