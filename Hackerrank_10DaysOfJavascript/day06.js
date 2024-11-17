/* -- Bitwise Operators --
Task: We define S to be a sequence of distinct sequential integers from 1 to n; in other words, S={1,2,3,...,n}. We want to know the maximum bitwise AND value of any two integers, a and b (where a<b), in sequence S that is also less than a given integer, k.
Complete the function so that given n and k, it returns the maximum a&b < k. */

function getMaxLessThanK(n, k) {
    let ans = 0;
    for(let a=1; a<=n; a++) {
        for(let b=1; b<a && a&b<k; b++) {
            ans = Math.max(ans, a&b);
        }
    }
    return ans;
}

function main() {
    const q = +(readLine());
    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);    
        console.log(getMaxLessThanK(n, k));
    }
}

/* -- Javascript Dates --
Task: Given a date string, dateString, in the format MM/DD/YYYY, find and return the day name for that date. Each day name must be one of the following strings: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, or Saturday. For example, the day name for the date 12/07/2016 is Wednesday. */

function getDayName(dateString) {
    const daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let dateObj = new Date(dateString);
    let dayNum = dateObj.getDay();
    return daysOfWeek[dayNum];
}

function main() {
    const d = +(readLine());
    for (let i = 0; i < d; i++) {
        const date = readLine();
        console.log(getDayName(date));
    }
}
