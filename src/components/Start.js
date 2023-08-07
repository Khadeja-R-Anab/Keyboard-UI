export default function Start ({started, setStarted}) {
    function starttimer () {
        setStarted(1);
    }

    return (
        <div class="overlay" >
            <div class="overlay-content" >
                <button onClick={starttimer} class="overlay-button"> START </button>
            </div>
        </div>
    );
}