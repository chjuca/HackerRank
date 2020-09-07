'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the encryption function below.
function encryption(s) {
    const ceil = Math.ceil(Math.sqrt(s.length));

    let temp = s;
    let array = [];

    while (temp) {
        array = array.concat(temp.substring(0, ceil));
        temp = temp.substring(ceil)
    }

    let result = [];

    for (let i = 0; i < ceil; i++) {
        result = result.concat(
            array.reduce((r, v) => {
                return r + (v[i] || "")
            }, "")
        )
    };
    return result.join(' ');

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = encryption(s);

    ws.write(result + "\n");

    ws.end();
}
