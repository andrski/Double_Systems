'use strict'
// !!!!!!!!!!! no run script without value of any word!!!!!!!!
//!!!!!!!!!! for exaple !!!!!!!!! => ""
//!!!!! ONLY WITH ANY VALUE!!!!!!

let text = 'Lorem,  ipsum dolor sit amet consectetur yyy   ipsum  adipisicing elit yyy amet xx consectetur adipisicing elit. At, totam.'
let firstWord = 'i'
let secondWord = ' '

function wordsDistance(text, fw, sw){

let arr1 = [] // array for position coincidences for first word
let arr2 = [] // for second
let target1 = fw  //first world
let target2 = sw  // second
let pos1 = 0
let pos2 = 0
while (true) {
    
  let foundPos1 = text.indexOf(target1, pos1) //find positions of coincidences  in text
  if (foundPos1 === -1)   break

    arr1.push(foundPos1)
    console.log(arr1)
    pos1 = foundPos1 + 1 // continue from nexy position after coincidenc
    }

while (true) {
    
    let foundPos2 = text.indexOf(target2, pos2);
      if (foundPos2 === -1)   break
      
        arr2.push(foundPos2)
        console.log(arr2)
        pos2 = foundPos2 + 1 // продолжаем со следующей позиции
        }

let arrResult = []  // in this array push difference every element arr1 and every element arr2
for(let i = 0; i < arr1.length; i++){
    for(let j = 0; j < arr2.length; j++){
        arrResult.push(Math.abs( arr1[i]-arr2[j]))   //Math.abs -> get absolute value
    }
}
// if(target1 === target2){
//     return 0
// }

//return(Math.min.apply(null, arrResult) - target1.length) // find minimum value in result array and dif length first word
return (target1 === target2) ? 0 : (Math.min.apply(null, arrResult) - target1.length)
}
console.log( wordsDistance(text, firstWord, secondWord))