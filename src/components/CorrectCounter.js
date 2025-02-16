import { useEffect, useState } from "react";

export default function CorrectCounter({timeEnded, 
    setKeyPressed, 
    selectedID, 
    setSelectedID, 
    correctKeys, 
    setCorrectKeys, 
    setIncorrectKeys, 
    numbers, 
    alphabets, 
    started}) {

    const [shuffledArray, setShuffledArray] = useState([]);

    function handleFocus(event) {
        event.target.focus();
    }

    function chooseRandom () {
        let allKeys = [...numbers, ...alphabets];

        for (let i = allKeys.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allKeys[i], allKeys[j]] = [allKeys[j], allKeys[i]];
        }

        setShuffledArray(allKeys);
        setSelectedID(allKeys.pop());
        shuffledArray.pop();

        console.log("Array Shuffled")
    }

    function releaseHandler(event) {
        if (timeEnded === 0 && started !== 0) {
            
            let keyElement = (event.key).toString().toUpperCase();

            if (keyElement === selectedID) {
                setSelectedID( shuffledArray.pop());
                setCorrectKeys(c => c + 1);
                if (shuffledArray.length === 0) {chooseRandom();}
            }
            else {
                setIncorrectKeys(i => i + 1);
            }

            setKeyPressed(null);
        }
    }

    function pressHandler (event) {
        if (timeEnded === 0 && started !== 0) {
            if (event.keyCode === 9) { event.preventDefault(); }

            let keyElement = (event.key).toString().toUpperCase();
            setKeyPressed(keyElement);
        }
    }

    useEffect(()=>{
        if (selectedID === null) {
            chooseRandom();
        }
    }, [selectedID]) 

    return (
        <div className="my-text"> 
            { timeEnded === 1 ? null 
                : <div>
                    <div className="my-text">Correct Keys Pressed : {correctKeys}</div>
                    <input autoFocus onKeyDown={pressHandler} onKeyUp={releaseHandler} onBlur={handleFocus} className="input-bar" spellCheck="false"/> 
                </div>
            }
        </div>
    );
}