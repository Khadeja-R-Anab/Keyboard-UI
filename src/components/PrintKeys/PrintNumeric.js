export default function PrintNumeric({array, startIndex, endIndex, selectedID, keyPressed}) {
    return (
        <>
            {array.slice(startIndex, endIndex).map((char) => { return <li id={char} key={char} className={keyPressed === char ? "pressed" : (selectedID === char ? "selected" : null)}> {char} </li>})}
        </>  
    );
}