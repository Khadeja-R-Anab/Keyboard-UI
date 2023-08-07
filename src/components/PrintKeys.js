import {useEffect, useState} from "react";

import Row from "./PrintKeys/Row";
import PrintSpecial from "./PrintKeys/PrintSpecial"
import PrintNumeric from "./PrintKeys/PrintNumeric"
import PrintAlphabetic from "./PrintKeys/PrintAlphabetic"
import Timer from "./Timer";
import CorrectCounter from "./CorrectCounter";
import Start from "./Start";
import TryAgain from "./TryAgain";

export default function PrintKeys ({alphabets, numbers, specialChars}) {

    const [timeEnded, setTimeEnded] = useState(0);
    const [started, setStarted] = useState(0);
    const [selectedID, setSelectedID] = useState(null);
    const [keyPressed, setKeyPressed] = useState(null);
    const [correctKeys, setCorrectKeys] = useState(0);
    const [incorrectKeys, setIncorrectKeys] = useState(0);
    const [wasReset, setWasReset] = useState(0);
    
    return (
        < >
            <Timer setTimeEnded={setTimeEnded} started={started} wasReset={wasReset} setWasReset={setWasReset}/>

            <>
                { timeEnded === 0 ? 
                    <>
                            {/* change start and end index as required */}
                            <Row>
                                <PrintSpecial array={specialChars} startIndex={0} endIndex={1}/>
                                <PrintNumeric array={numbers} startIndex={0} endIndex={10} selectedID={selectedID} keyPressed={keyPressed}/>
                                <PrintSpecial array={specialChars} startIndex={1} endIndex={4}/>
                            </Row>
                            <Row>
                                <PrintSpecial array={specialChars} startIndex={4} endIndex={5}/>
                                <PrintAlphabetic array={alphabets} startIndex={0} endIndex={10} selectedID={selectedID} keyPressed={keyPressed}/>
                                <PrintSpecial array={specialChars} startIndex={5} endIndex={8}/>
                            </Row>
                            <Row>
                                <PrintSpecial array={specialChars} startIndex={8} endIndex={9}/>
                                <PrintAlphabetic array={alphabets} startIndex={10} endIndex={19} selectedID={selectedID} keyPressed={keyPressed}/>
                                <PrintSpecial array={specialChars} startIndex={9} endIndex={12}/>
                            </Row>
                            <Row>
                                <PrintSpecial array={specialChars} startIndex={12} endIndex={13}/>
                                <PrintAlphabetic array={alphabets} startIndex={19} endIndex={26} selectedID={selectedID} keyPressed={keyPressed}/>
                                <PrintSpecial array={specialChars} startIndex={13} endIndex={17}/>
                            </Row>

                    </> :   <div className="overlap"> 
                                <span> Correct Keys Pressed : {correctKeys} </span> 
                                <span> Incorrect Keys Pressed : {incorrectKeys} </span>
                                <div>
                                    <TryAgain setTimeEnded={setTimeEnded}
                                        setSelectedID={setSelectedID}
                                        setKeyPressed={setKeyPressed}
                                        setCorrectKeys={setCorrectKeys}
                                        setIncorrectKeys={setIncorrectKeys}
                                        setWasReset={setWasReset} 
                                        setStarted={setStarted}/>
                                </div>
                            </div> 
                }
            </>

            <CorrectCounter 
                timeEnded={timeEnded}
                setKeyPressed={setKeyPressed}
                selectedID={selectedID}
                setSelectedID={setSelectedID} 
                correctKeys={correctKeys}
                setCorrectKeys={setCorrectKeys}
                setIncorrectKeys={setIncorrectKeys} 
                numbers={numbers}
                alphabets={alphabets}  
                started = {started}
            />

            {started === 0 ? <Start started={started} setStarted = {setStarted}/> : null}
            
        </>
    )
}