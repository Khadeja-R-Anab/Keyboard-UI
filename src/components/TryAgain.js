export default function TryAgain ( {setTimeEnded,
    setSelectedID,
    setKeyPressed,
    setCorrectKeys,
    setIncorrectKeys,
    setWasReset,
    setStarted }) {

    function refreshPage () {
        setTimeEnded(0);
        setSelectedID(null);
        setKeyPressed(null);
        setCorrectKeys(0);
        setIncorrectKeys(0);
        setWasReset(1);
        setStarted(0);
    }

    return (
        <>
            <button className="try-button" onClick={refreshPage}> Try Again </button>
        </>
    );
}