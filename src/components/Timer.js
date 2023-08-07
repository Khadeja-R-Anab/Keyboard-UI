import { useEffect, useState } from "react";

export default function Timer({setTimeEnded, started, wasReset, setWasReset}) {
    
    const [timeRemaining, setTimeRemaining] = useState(10);

    useEffect(() => {
        if (wasReset === 1) {
            setTimeRemaining(10);
            setWasReset(0);
        }
    }, [wasReset])

    useEffect(() => {
        if (started !== 0) {
            if (timeRemaining !== 0) {
                setTimeout(() => {
                    setTimeRemaining(timeRemaining - 1);
                }, 1000);
            } else {
                setTimeEnded(1);
            }
        }
    }, [timeRemaining, started])

    return (
        <div className="my-text"> 
                {timeRemaining === 0 ? null : `Time Remaining: ${timeRemaining} s`}
        </div>
    );
}