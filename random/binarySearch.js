// Given a sorted array arr[] of n elements, write a function to search a given element x in arr[].

function searchElement(array, start, end, element) {
    if (end >= start) {
        const half = start + Math.floor((end - start) / 2);
        if (element === array[half]) {
            return half;
        } else if (array[half] > element) {
            return searchElement(array, start, half - 1, element);
        }
        return searchElement(array, half + 1, end, element);
    }
    return false;
}

const sortedArray = [2, 5, 8, 11, 12, 14, 15, 22, 25, 98, 102];
const start = 0;
const end = sortedArray.length - 1;
const exists = searchElement(sortedArray, start, end, 23);
console.log(exists);
