// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {


    const newArr = [];
    console.log(arr);
    arr.forEach((item) => {
        newArr.push(item.name)
    })
    console.log(newArr);
    return newArr;
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    const newArr = [];
    arr.forEach((booger) => {
        newArr.push(booger.type)
    })
    return newArr.reverse();
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    console.log(arr);
    const newArr = [];

    arr.forEach((booger2) => {
        let es = { nombre: booger2.name, tipo: booger2.type };
        newArr.push(es)



    })
    console.log(newArr);
    return newArr;
}

