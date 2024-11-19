/* -- Binary Calculator --
Task: Implement a simple calculator that performs the following operations on binary numbers: addition, subtraction, multiplication, and division. Note that division operation must be integer division only; for example, 1001/100=10, 1110/101=10, and 101/1=101.
The calculator's initial state must look like this:
  +-----------------------------+
  |                             |
  +-----------------------------+
  |  0  | |  1  | |  C  | |  =  |
  |  +  | |  -  | |  *  | |  /  |

 * Element IDs. Each element in the document must have an id, specified below:
   innerText	    id  	  Description/Behavior
                  res     Contains the result of button presses.
                 btns	    A button container that displays all eight calculator buttons.
        0	       btn0	    A button expressing binary digit 0.
        1	       btn1	    A button expressing binary digit 1.
        C	      btnClr	  A button to clear the contents of res.
        =	      btnEql    A button to evaluate the contents of the expression in res.
        +	      btnSum    A button for the addition operation.
        -	      btnSub    A button for the subtraction operation.
        *	      btnMul    A button for the multiplication operation.
        /	      btnDiv    A button for the integer division operation.
 * Styling. The document's elements must have the following styles:
  * body has a width of 33%.
  * res has a background-color of lightgray, a border that is solid, a height of 48px, and a font-size of 20px.
  * btn0 and btn1 have a background-color of lightgreen and a color of brown.
  * btnClr and btnEql have a background-color of darkgreen and a color of white.
  * btnSum, btnSub, btnMul, and btnDiv have a background-color of black, a color of red.
  * All the buttons in btns have a width of 25%, a height of 36px, a font-size of 18px, margin of 0px, and float value left.
The .js and .css files are in different directories, so use the link tag to provide the CSS file path and the script tag to provide the JS file path. */

// index.html
/* <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Testing</title>
        <link rel="stylesheet" href="css/binaryCalculator.css" type="text/css">
    </head>
    <body>
        <div id="bin-calc">
            <input id="res" type="text" />
            <div id="btns">
                <button id="btn-0" type="button">0</button>
                <button id="btn-1" type="button">1</button>
                <button id="btn-clr" type="button">C</button>
                <button id="btn-eql" type="button">=</button>
                <button id="btn-sum" type="button">+</button>
                <button id="btn-sub" type="button">-</button>
                <button id="btn-mul" type="button">*</button>
                <button id="btn-div" type="button">/</button>
            </div>
        </div>
        <script src="js/binaryCalculator.js" type="text/javascript"></script>
    </body>
</html>*/

// css/binaryCalculator.css
/* #bin-calc {
    padding: 20px;
    width: 33%;
    height: 130px;
    background-color: grey;
    border: 2px solid black;
    border-radius: 10px;
}
   #res {
    width: 98%;
    height: 48px;
    background-color: lightgray;
    font-size: 20px;
    border: solid;
}
   #btns > button {
    margin: 0px;
    width: 25%;
    height: 36px;
    font-size: 20px;
    font-weight: bold;
    float: left;
}
   #btn-0, #btn-1 {
    background-color: lightgreen;
    color: black;
}
   #btn-clr, #btn-eql {
    background-color: darkgreen;
    color: white;
}
   #btn-sum, #btn-sub, #btn-mul, #btn-div {
    background-color: black;
    color: red;
} */

// js/binaryCalculator.js
const btn_0 = document.getElementById("btn-0");
const btn_1 = document.getElementById("btn-1");
const res = document.getElementById("res");
const btnClr = document.getElementById("btn-clr");
const btnEql = document.getElementById("btn-eql");
const btnSum = document.getElementById("btn-sum");
const btnSub = document.getElementById("btn-sub");
const btnMul = document.getElementById("btn-mul");
const btnDiv = document.getElementById("btn-div");
        
res.addEventListener("keyup", ()=>{
    res.value = "";
});
btnClr.addEventListener("click", ()=>{
    res.value = "";
});
btnEql.addEventListener("click", ()=>{
    let binExp = res.value;
    if(binExp.includes('+')) {
        const operands = binExp.split('+');
        let op1 = operands[0];
        let op2 = operands[1];
        let result = parseInt(op1, 2) + parseInt(op2, 2);
        res.value = result.toString(2);
    } else if(binExp.includes('-')) {
        const operands = binExp.split('-');
        let op1 = operands[0];
        let op2 = operands[1];
        let result = parseInt(op1, 2) - parseInt(op2, 2);
        res.value = result.toString(2);
    } else if(binExp.includes('*')) {
        const operands = binExp.split('*');
        let op1 = operands[0];
        let op2 = operands[1];
        let result = parseInt(op1, 2) * parseInt(op2, 2);
        res.value = result.toString(2);
    } else if(binExp.includes('/')) {
        const operands = binExp.split('/');
        let op1 = operands[0];
        let op2 = operands[1];
        let result = parseInt(op1, 2) / parseInt(op2, 2);
        if(result==Infinity || result==NaN)
            res.value = "";
        else
            res.value = Math.floor(result).toString(2);
    } else {
        res.value = "";
    }
});
btn_0.addEventListener("click", ()=>{
    res.value += "0";
});
btn_1.addEventListener("click", ()=>{
    res.value += "1";
});
btnSum.addEventListener("click", ()=>{
    let resStr = res.value;
    if(resStr=='' || resStr.endsWith('+') || resStr.endsWith('-') || resStr.endsWith('*') || resStr.endsWith('/'))
        res.value += "";
    else
        res.value += "+";
});
btnSub.addEventListener("click", ()=>{
    let resStr = res.value;
    if(resStr=='' || resStr.endsWith('+') || resStr.endsWith('-') || resStr.endsWith('*') || resStr.endsWith('/'))
        res.value += "";
    else
        res.value += "-";
});
btnMul.addEventListener("click", ()=>{
    let resStr = res.value;
        if(resStr=='' || resStr.endsWith('+') || resStr.endsWith('-') || resStr.endsWith('*') || resStr.endsWith('/'))
            res.value += "";
        else
            res.value += "*";
});
btnDiv.addEventListener("click", ()=>{
    let resStr = res.value;
    if(resStr=='' || resStr.endsWith('+') || resStr.endsWith('-') || resStr.endsWith('*') || resStr.endsWith('/'))
        res.value += "";
    else
        res.value += "/";
});
