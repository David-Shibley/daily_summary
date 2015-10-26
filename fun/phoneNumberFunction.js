//All together, without comments:
sums = numbers.map(function (m) {
    return {
        number: m,
        score: m.match(/\d/g).reduce(function (p, c) {
            return +p + +c;
        })
    }
}).sort(function (a, b) {
    if (a.score < b.score) return 1;
    if (a.score > b.score) return -1;
    return 0;
});

//Broken down...

//Define an array of phone numbers
var numbers = ['123-456-7777', '111-222-3333', '963-481-7945'];

//Map takes an array, does something with each element, then returns that result
var sums = numbers.map(function (m) {
    //In this case, we return an object containing the original number, and a score
    return {
        number: m,
        //The score is calculated by adding up each number.  The match expression creates an array of all terms (g modifier) matching the expression.  \d matches a single digit, so we end up with an array of each digit in the number.
        //Reduce applies a function to each item in an array, and adds them up
        score: m.match(/\d/g).reduce(function (p, c) {
            //The + before p and c coerces them to numbers (they're strings right now, since match returns an array of strings)
            //Both numbers are then added
            return +p + +c;
        })
    }
}).sort(function (a, b) {
    //Now that we have the scores of all numbers, we can sort the array to find the highest score
    if (a.score < b.score) return 1;
    if (a.score > b.score) return -1;
    return 0;
});
