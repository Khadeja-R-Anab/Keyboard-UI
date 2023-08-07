import PrintKeys from "./PrintKeys";

export default function Keys() {

    const alphabets = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M']; //26
    const numbers = ['1','2','3','4','5','6','7','8','9','0']; //10
    const specialChars = ['ESC','-','+','BACK','TAB','[',']','\\','CAPS',';','\'','ENTER','SHIFT',',','.','/','SHIFT'] //17

    return (
        <>
            <PrintKeys 
                alphabets = {alphabets} 
                numbers = {numbers} 
                specialChars = {specialChars}
            />
        </>
    );

    // const keyValues=[
    //     ['ESC','1','2','3','4','5','6','7','8','9','0','-','+','BACK'], //14
    //     ['TAB','Q','W','E','R','T','Y','U','I','O','P','[',']','\\'], //14
    //     ['CAPS','A','S','D','F','G','H','J','K','L',';','\'','ENTER'],  //13
    //     ['SHIFT','Z','X','C','V','B','N','M',',','.','/','SHIFT']]; //12

    // return (
    //     <>
    //         {keyValues.map((items) => {
    //             return (
    //                 <ul class ="row">
    //                     {items.map((subItems) => {
    //                         return <li id={subItems}> {subItems} </li>
    //                     })}
    //                 </ul>
    //             );
    //         })}
    //     </>
    // );
}