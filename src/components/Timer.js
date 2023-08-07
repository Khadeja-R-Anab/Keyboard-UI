import { useEffect } from "react";

export default function Timer({timeRemaining, setTimeRemaining}) {
    
    useEffect(() => {
        if (timeRemaining !== 0) {
            
            setTimeout(() => {
                setTimeRemaining(timeRemaining - 1);
            }, 1000);
        }
    }, [timeRemaining])

    return (
        <div className="my-text"> 
                {timeRemaining === 0 ? null : `Time Remaining: ${timeRemaining} s`}
        </div>
    );
}