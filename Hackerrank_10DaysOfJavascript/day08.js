/* -- Create a Button --
Task: Complete the code so that it creates a clickable button satisfying the following properties:
 * The button's id is btn.
 * The button's initial text label is 0. After each click, the button must increment by 1. Recall that the button's text label is the JS object's innerHTML property.
 * The button has the following style properties:
  * A width of 96px.
  * A height of 48px.
  * The font-size attribute is 24px.
Note: The .js and .css files are in different directories, so use the link tag to provide the CSS file path and the script tag to provide the JS file path. */

// index.html
/* <!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Button</title>
        <link rel="stylesheet" href="css/button.css" type="text/css">
    </head>
    <body>
        <button id="btn" type="button" onClick="countUp()">0</button>
        <script src="js/button.js" type="text/javascript"></script>
    </body>
</html> */

// css/button.css
/* #btn {
    width: 96px;
    height: 48px;
    font-size: 24px;
} */

// js/button.js
function countUp() {
    const btn = document.getElementById("btn");
    btn.innerHTML = `${parseInt(btn.innerText)+1}`;
}

/* -- Buttons Container --
Task: We want to create nine buttons enclosed in a div, laid out so they form a 3x3 grid. Each button has a distinct label from 1 to 9, and the labels on the outer buttons must rotate in the clockwise direction each time we click the middle button.
Complete the code so that it satisfies the following criteria:
 * Initial State. The initial layout looks like this:
    | 1 | 2 | 3 |
    | 4 | 5 | 6 |
    | 7 | 8 | 9 |
 * Element IDs. Each element in the document must have an id, specified below:
  * The button container div's id must be btns.
  * The initial innerHTML labels must have the following button ids:
    innerHTML	 id
        1  	  btn1
        2	    btn2
        3	    btn3
        4	    btn4
        5	    btn5
        6	    btn6
        7	    btn7
        8	    btn8
        9	    btn9
 * Styling. The document's elements must have the following styles:
  * The width of btns is 75%, relative to the document body's width.
  * Each button (i.e., btn1 through btn9) satisfies the following:
   * The width is 30%, relative to its container width.
   * The height is 48px.
   * The font-size is 24px.
 * Behavior. Each time btn5 is clicked, the innerHTML text on the grid's outer buttons (i.e., bt1, btn2, btn3, btn4, btn6, btn7, btn8, btn9) must rotate in the clockwise direction. Do not update the button id's.
Note: The .js and .css files are in different directories, so use the link tag to provide the CSS file path and the script tag to provide the JS file path. */

// index.html
/* <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Button Container</title>
        <link rel="stylesheet" href="css/buttonsGrid.css" type="text/css">
    </head>
    <body>
        <center>
            <div id="grid-container">
                <button id="btn1" type="button">1</button>
                <button id="btn2" type="button">2</button>
                <button id="btn3" type="button">3</button>
                <button id="btn4" type="button">4</button>
                <button id="btn5" type="button">5</button>
                <button id="btn6" type="button">6</button>
                <button id="btn7" type="button">7</button>
                <button id="btn8" type="button">8</button>
                <button id="btn9" type="button">9</button>
            </div>
        </center>
        <script src="js/buttonsGrid.js" type="text/javascript"></script>
    </body>
</html> */

// css/buttonsGrid.css
/* body {
   background-color: gray;
}
   #grid-container {
    display: grid;
    grid-template-rows: 100px 100px 100px;
    grid-template-columns: 100px 100px 100px;
    gap: 5px;
}
   #grid-container > button {
    font-size: 25px;
} */

// js/buttonsGrid.js
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");

btn5.addEventListener("click", ()=>{
    const temp = btn1.innerText;
    btn1.innerText = btn4.innerText;
    btn4.innerText = btn7.innerText;
    btn7.innerText = btn8.innerText;
    btn8.innerText = btn9.innerText;
    btn9.innerText = btn6.innerText;
    btn6.innerText = btn3.innerText;
    btn3.innerText = btn2.innerText;
    btn2.innerText = temp;
});
