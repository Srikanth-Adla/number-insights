
function isValidNum(num) {
    return typeof num === "number" && !Number.isNaN(num);
}
function numberInsights(array) {
    if (!array || !Array.isArray(array) || !array.length) return "Please send valid non-empty array"

    if (!isValidNum(array[0])) {
        return "Array must contain valid numbers only "
    }

    let firstElement = array[0]
    let insights = {
        largest: firstElement,
        smallest: firstElement,
        sum: firstElement,
        avg: 0,
        evenCount: firstElement % 2 === 0 ? 1 : 0,
        oddCount: firstElement % 2 !== 0 ? 1 : 0,
        positiveCount: firstElement > 0 ? 1 : 0,
        negativeCount: firstElement < 0 ? 1 : 0,
        zeroCount: firstElement === 0 ? 1 : 0,
    }
    /*
    Approach : 
    - Traverse the array once 
    - Update the statistics during the traversal 

    Time Complexity O(n)
    Space Complexity O(1)

    */
    for (let i = 1; i < array.length; i++) {
        if (!isValidNum(array[i])) {
            return "Array must contain valid numbers only "
        }
        let item = array[i]
        if (item > insights.largest) insights.largest = item;
        if ((item) < insights.smallest) insights.smallest = item;
        insights.sum += item
        if (item % 2 === 0) {
            insights.evenCount++
        } else {
            insights.oddCount++
        }
        if (item > 0) {
            insights.positiveCount++
        } else if (item < 0) {
            insights.negativeCount++
        } else {
            insights.zeroCount++
        }

    }
    insights.avg = insights.sum / array.length
    return insights
}


const testCases = [
    [],
    [10],
    [-5],
    [0],
    [2, 4, 5, 7, 8],
    [-8, -3, -15, -2, -10],
    [2, 4, 6, 8, 10],
    [1, 3, 5, 7, 9],
    [-10, 5, 0, 12, -3, 7],
    [5, 5, 5, 5, 5],
    [1000000, 9999999, 1234567, 7654321],
    [1.5, 2.5, 3.5, 4.5],
    [-2.5, 3.8, -1.2, 7.1],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    null,
    undefined,
    "hello",
    123,
    {},
    [1, 2, "hello", 4]
];

for (let item of testCases) {
    console.log(numberInsights(item))
}





