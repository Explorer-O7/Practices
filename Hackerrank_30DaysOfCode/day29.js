/* -- Bitwise AND --
Task: Given set S={1,2,3,...,N}. Find two integers, A and B (where A<B), from set S such that the value of A&B is the maximum possible and also less than a given integer, K. In this case, & represents the bitwise AND operator. */

function bitwiseAnd(N, K) {
    let ans = 0;
    for(let A=1; A<=N-1; A++) {
        for(let B=A+1; B<=N; B++) {
            let bitwiseAND = A&B;
            if(bitwiseAND<K && bitwiseAND>ans)
                ans = bitwiseAND;
        }
    }
    return ans;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const t = parseInt(readLine().trim(), 10);
    for (let tItr = 0; tItr < t; tItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');
        const count = parseInt(firstMultipleInput[0], 10);
        const lim = parseInt(firstMultipleInput[1], 10);
        const res = bitwiseAnd(count, lim);
        ws.write(res + '\n');
    }
    ws.end();
}
