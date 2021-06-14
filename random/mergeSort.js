function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }

    const half = Math.floor(array.length - 1 / 2);

    const leftHalf = mergeSort(array.slice(0, half));
    const rightHalf = mergeSort(array.slice(-half));

    console.log(leftHalf, "---------> left");
    console.log(rightHalf, "---------> right");

    const mergedArray = mergeTwoArrays(leftHalf, rightHalf);
    console.log(mergedArray);
    return mergedArray;
}

function mergeTwoArrays(first, second) {
    let merged = [];
    let i = 0;
    let j = 0;
    while (i < first.length && j < second.length) {
        const firstArrElement = first[i];
        const secondArrElement = second[j];
        if (firstArrElement < secondArrElement) {
            merged.push(firstArrElement);
            i++;
        } else {
            merged.push(secondArrElement);
            j++;
        }
    }
    while (i < first.length) {
        merged.push(first[i]);
        i++;
    }
    while (j < second.length) {
        merged.push(second[j]);
        j++;
    }
    return merged;
}

const x = [5, 3, 1, 2, 92, 44, 4, 9, 10];
console.log(mergeSort(x));
