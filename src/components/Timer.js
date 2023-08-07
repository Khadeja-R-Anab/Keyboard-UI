import { useEffect } from "react";

export default function Timer({timeRemaining, setTimeRemaining, started}) {
    
    useEffect(() => {
        if (started !== 0) {
            if (timeRemaining !== 0) {
            
                setTimeout(() => {
                    setTimeRemaining(timeRemaining - 1);
                }, 1000);
            }
        }
    }, [timeRemaining, started])

    return (
        <div className="my-text"> 
                {timeRemaining === 0 ? null : `Time Remaining: ${timeRemaining} s`}
        </div>
    );
}