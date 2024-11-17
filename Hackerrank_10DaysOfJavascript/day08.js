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
