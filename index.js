//RESUELVE LOS EJERCICIOS AQUÍ

//1º

const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

let [ , ana, ] = empleados;


//2º

let emailLuis = empleados[0].email;
console.log(emailLuis)


//3º

let {a=5, b=3} = {a:3, b:5}


//4º

const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
  };

const {today: maximaHoy} = HIGH_TEMPERATURES;
const {tomorrow: maximaManana} = HIGH_TEMPERATURES;
console.log(maximaHoy);
console.log(maximaManana);


//5º

function sumEveryOther(...num){
    return num.reduce((acc,item)=>acc+item)
}

//6º

function addOnlyNums(...item){
    return item.filter(item => item*1==item).reduce((acc,item)=>acc+item)
} 

console.log(addOnlyNums(2,4,2,"etg",4,7))


//7º

function countTheArgs(...arg){
    return arg.length
}


//8º

function combineTwoArrays(arr1,arr2){
    return [...arr1,...arr2]
}


//9º

/*
function onlyUniques(...arr){
    let newArr = [];

    for(let i=0; i<arr.length; i++){
        arr[i];
        for(let j=0; j<newArr.length+1; j++){
            if (newArr.length == 0){
                newArr[0] = arr[i];
            } else if (arr[i] == newArr[j]){
                break;
            } else if ((arr[i] != newArr[j]) && (j == newArr.length-1)){
                newArr.push(arr[i]);
            }
        }
    }
    return newArr
}
console.log(onlyUniques(1, 1, 2, 2, 3, 6, 7, 8))
*/

function onlyUniques(...arr){
    return arr.filter((currentV, index, array) => array.indexOf(currentV)==index)
}

console.log(onlyUniques(1, 1, 2, 2, 3, 6, 7, 8))


//10º
function combineAllArrays(...arr){
    return arr.reduce((acc, index) => [...acc, ...index])
}
console.log(combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]))


//11º

function sumAndSquare(...num){
    return num.map(index => index**2).reduce((acc,index) => acc + index)
}