// //--------------------------------------------- //--- 01 ---// ------------------
let array1 = [1, 0, 2, 3, 4, 3, 5, 6, 7, 8, 13]

// // resultado esperado = 32

let odd = 0
array1.forEach(function (arr) {
    if (arr % 2 !== 0) {
        odd += arr
    }
})

console.log(odd);

//--------------------------------------------- //--- 02 ---// ------------------
let color = ["Azul", "Verde", "Morado"]

function rev(arr) {
    arr.reverse()
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

rev(color)

//--------------------------------------------- //--- 03 ---// ------------------
let arr1 = [1, 0, 2, 3, 4];
let arr2 = [3, 5, 6, 7, 8, 13];

function sumParIndex(matrix1, matrix2) {
    let sumResult = []
    let maxLength = 0

    if (matrix1.length > matrix2.length) {
        maxLength = matrix1.length
    } else {
        maxLength = matrix2.length
    }

    for (let i = 0; i < maxLength; i++) {

        let num1 = 0
        let num2 = 0

        if (matrix1[i]) {
            num1 = matrix1[i]
        }

        if (matrix2[i]) {
            num2 = matrix2[i]
        }

        let sumPairwise = num1 + num2
        sumResult.push(sumPairwise)
    }
    return sumResult
}

console.log(sumParIndex(arr1, arr2));


//--------------------------------------------- //--- 04 ---// ------------------
//--------------------------------------------- //--- 05 ---// ------------------
//--------------------------------------------- //--- 06 ---// ------------------

const myObject = {
    name: "Paco",
    age: 28
}

function checkKey(obj, key) {
    if (Object.hasOwn(obj, key)) {
        delete obj[[key]]
        return true
    } else {
        return false
    }
}
console.log(checkKey(myObject, "name"));
console.log(myObject);


//--------------------------------------------- //--- 07 ---// ------------------


//--------------------------------------------- //--- 08 ---// ------------------
const arr = [[1, 2], [3, 4, 5, 6], [7, 8, 9], [0]];

function arrToElemts(arr) {
    console.log(arr.flat().join(" "))
}
arrToElemts(arr)



//--------------------------------------------- //--- 09 ---// ------------------

const drinks = [
    {
        name: "Cerveza",
        price: "3.50",
        ingredients: ["cebada", "lúpulo"]
    },
    {
        name: "Coca Cola",
        price: "3.00",
        ingredients: ["desconocido"]
    },
    {
        name: "Vino",
        price: "5.50",
        ingredients: ["uvas", "taninos"]
    },
    {
        name: "Vodka",
        price: "7.00",
        ingredients: ["patata", "agua", "etanol"]
    },
    {
        name: "Whiskey",
        price: "7.00",
        ingredients: ["trigo", "agua", "etanol"]
    },
    {
        name: "Zumo de naranja sin azúcar",
        price: "4.75",
        ingredients: ["naranjas", "aspartamo", "maltitol", "xilitol"]
    },
]

function drinkDetails(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`La bebida ${arr[i].name} tiene un precio de ${arr[i].price} euros, y los siguientes ingredientes: ${arr[i].ingredients} `);
    }
}
drinkDetails(drinks)



//--------------------------------------------- //--- 10 ---// ------------------


const names = [["name", "Pedro"], ["job", "Megateacher"], ["age", 35], ["city", "Melilla"], ["isMarried", false]]

function arrToObj(arr) {
    let obj = {};
    arr.forEach((e) => {
        let key = e[0];
        let value = e[1];
        obj[key] = value;
    });
    return obj;
}

console.log(arrToObj(names))



//--------------------------------------------- //--- 11 ---// ------------------
//--------------------------------------------- //--- 12 ---// ------------------
//--------------------------------------------- //--- 13 ---// ------------------
//--------------------------------------------- //--- 14 ---// ------------------
//--------------------------------------------- //--- 15 ---// ------------------
//--------------------------------------------- //--- 16 ---// ------------------
//--------------------------------------------- //--- 17 ---// ------------------

//--------------------------------------------- //--- Bonus 1 (Flat) ---// ------------------
const arrToFlat = [[1, 2], [3, 4], [5, 6], [7]];

function flattenArray(arr) {
    console.log(arr.flat());
    return
}

flattenArray(arrToFlat) // [1, 2, 3, 4, 5, 6, 7]







