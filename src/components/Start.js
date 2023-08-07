export default function Start ({started, setStarted}) {
    function starttimer () {
        setStarted(1);
    }

    return (
        <div className="overlay" >
            <div className="overlay-content" >
                <button onClick={starttimer} className="overlay-button"> START </button>
            </div>
        </div>
    );
}