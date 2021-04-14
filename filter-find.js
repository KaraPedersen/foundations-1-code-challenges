// Use the filter or find array methods to solve these problems

/* 
Input:
[
    { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    },
    { 
        id: 'banana',
        price: 1,
        quantity: 3,
        category: 'fruit'
    },
    { 
        id: 'dog food',
        price: 5,
        quantity: 1,
        category: 'other'
    },
    { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
        { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
]

Output: 
[
    { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
        { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
]
*/



// export function getAllDairy(arr) {
//     const newArr = arr.filter(arr => arr.category === 'dairy')
//     return newArr;
// }

export function getAllDairy(arr) {
    return arr.filter(arr => arr.category === 'dairy')

}


/*
Output: 
[
    { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    }
]
*/

export function getAllFruitsThatCostMoreThanTwo(arr) {
    return arr.filter(arr => arr.price > 2 && arr.category === 'fruit')

}


/*
Output: 
    { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
*/

export function findTheCheese(arr) {
    return arr.find(arr => arr.id === 'cheese');

}



/*
Output: 
['apple', 'banana']
*/

export function listNamesOfAllFruits(arr) {
    const newArr = arr.filter((booger) => booger.category === 'fruit');
    return newArr.map(booger => booger.id);
}