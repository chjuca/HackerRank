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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {

    const time = s.split(':');
    const acron = time[2][2] + time[2][3]
    time[2] = time[2].replace(acron, '')

    if (acron === "PM") {
        time[0] = parseInt(time[0]) + 12
        if (time[0] === 24) {
            time[0] = '12'
        }
    } else {
        if (time[0] === '12') {
            time[0] = '00'
        }
    }

    console.log(`${time[0]}:${time[1]}:${time[2]}`);
    return `${time[0]}:${time[1]}:${time[2]}`
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
