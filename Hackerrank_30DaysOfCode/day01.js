function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "

    var intVar = parseInt(readLine());
    var dblVar = parseFloat(readLine());
    var strVar = readLine();
    
    console.log(i + intVar);
    console.log((d + dblVar).toFixed(1));
    console.log(s + strVar);
}
