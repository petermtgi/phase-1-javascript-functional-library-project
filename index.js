// Collection Functions (Arrays or Objects)

function myEach(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let value of values) callback(value);
    return collection;
}

function myMap(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    return values.map(callback);
}

function myReduce(collection, callback, acc) {
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    let startIndex = 0;
    
    if (acc === undefined) {
        acc = values[0];
        startIndex = 1;
    }
    
    for (let i = startIndex; i < values.length; i++) {
        acc = callback(acc, values[i], collection);
    }
    return acc;
}

function myFind(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let value of values) {
        if (predicate(value)) return value;
    }
    return undefined;
}

function myFilter(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    return values.filter(predicate);
}

function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

// Array Functions

function myFirst(array, n) {
    return n !== undefined ? array.slice(0, n) : array[0];
}

function myLast(array, n) {
    return n !== undefined ? array.slice(-n) : array[array.length - 1];
}

// Bonus Functions

function mySortBy(array, callback) {
    return [...array].sort((a, b) => {
        let valA = callback(a), valB = callback(b);
        return valA > valB ? 1 : valA < valB ? -1 : 0;
    });
}

function myFlatten(array, shallow = false, newArr = []) {
    for (let item of array) {
        if (Array.isArray(item)) {
            shallow ? newArr.push(...item) : myFlatten(item, shallow, newArr);
        } else {
            newArr.push(item);
        }
    }
    return newArr;
}

// Object Functions

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}

module.exports = {
    myEach, myMap, myReduce, myFind, myFilter, mySize,
    myFirst, myLast, mySortBy, myFlatten, myKeys, myValues
};
