export default function PrintSpecial({array, startIndex, endIndex}) {
    return (
        <>
            {array.slice(startIndex, endIndex).map((char) => { return <li id={char} key={char}> {char} </li>})}
        </>  
    );
}