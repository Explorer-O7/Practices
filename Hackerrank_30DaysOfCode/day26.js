/* -- Nested Logic --
Task: Your local library needs your help! Given the expected and actual return dates for a library book, create a program that calculates the fine (if any). The fee structure is as follows:
 1. If the book is returned on or before the expected return date, no fine will be charged, i.e. fine = 0
 2. If the book is returned after the expected return day but still within the same calendar month and year as the expected return date, fine = 15 Hackos x (number of days late).
 3. If the book is returned after the expected return month but still within the same calendar year as the expected return date, the fine = 500 Hackos x (number of months late).
 4. If the book is returned after the calendar year in which it was expected, there is a fixed fine of 10000 Hackos. */

function processData(input) {
    input = input.split('\n');
    let returnedAt = input[0].split(' ');
    let dueOn = input[1].split(' ');
    let fine=0, date=0, month=1, year=2;
    if(returnedAt[year] > dueOn[year])
        fine = 10000;
    else if(returnedAt[month]>dueOn[month] && returnedAt[year]>=dueOn[year])
        fine = 500 * (returnedAt[month]-dueOn[month]);
    else if(returnedAt[date]>dueOn[date] && returnedAt[month]>=dueOn[month] && returnedAt[year]>=dueOn[year])
        fine = 15 * (returnedAt[date]-dueOn[date]);
    console.log(fine);
}
