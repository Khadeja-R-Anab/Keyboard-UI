import { useEffect, useState } from "react";

export default function Timer({setTimeEnded, started}) {
    
    const [timeRemaining, setTimeRemaining] = useState(60);

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