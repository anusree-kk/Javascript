/* eslint-disable linebreak-style */

/* eslint-disable semi */

/* eslint-disable quotes */

// const a = 5
// const b = 6
// let add = document.querySelector(".firstdiv")
// let multi = document.querySelector(".seconddiv")
// let div = document.querySelector(".thirddiv")
// add.addEventListener("click", function addition() {
//     let c = a + b
//     add.innerHTML = c
//     console.log(c)
// })
// multi.addEventListener("click", function mutiplication() {
//     let d = a * b
//     multi.innerHTML = d
//     console.log(d)
// })
// div.addEventListener("click", function division() {
//     let e = a / b
//     div.innerHTML = e
//     console.log(e)
// })
// let pi = 3.14
// let r = window.prompt("enter a radius:")
// r = Number(r)
// let area=2*pi*r
// area = area.toFixed(2)
// alert("The radius is:"+area)

// let Num=Number(window.prompt("Enter a number"))
// let result =( Num % 2 == 0)? "even":"odd"
// alert(`The given number is ${result}`)

// const number= Number(window.prompt("Enter a limit"))
// let sum = 0
// for(let i=1 ; i<=number ; i++){
//     sum +=i
// }
// alert("The total sum is:"+sum)
// let arr = ["mango", "orange", "grapes", "pappaya"]
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] > arr[i + 1]){

//         var ab=2
//         console.log("The array after sorting" + arr)

//     }
//     console.log(ab)
// }
// function addition(){
//     // let abc=19
//     // const bc= 3
// }
// addition()
// console.log("the const variable declaration value")
// // console.log(abc)
// var carname= "toyota"
// document.querySelector(".BigInt").innerHTML="I can display"+window.carname


// let para = document.createElement("p")
// let text = document.createTextNode("This is paragraph2")
// para.appendChild(text)
// let div1 = document.getElementById("paragraph")
// let para1 = document.getElementById("paragraph1")
// div1.insertBefore(para,para1)
// function nameprint(){
//     let a= 30
//     if(a>=0){
//         console.log("The number is an integer"+a)

//     } 
// }nameprint()


// let currentPlayer = "x"
// let column1 = document.querySelector(".column1")
// let column2 = document.querySelector(".column2")
// let column3 = document.querySelector(".column3")
// let column4 = document.querySelector(".column4")
// let column5 = document.querySelector(".column5")
// let column6 = document.querySelector(".column6")
// let column7 = document.querySelector(".column7")
// let column8 = document.querySelector(".column8")
// let column9 = document.querySelector(".column9")

// let message = document.querySelector(".showmesg")
// const columns = [column1, column2, column3, column4, column5, column6, column7, column8, column9];

// for (let i = 0; i < columns.length; i++) {
//     columns[i].addEventListener("click", () => {
//         if (columns[i].textContent === "" && !gamestop()) {
//             columns[i].textContent = currentPlayer
//             currentPlayer = currentPlayer === "x" ? "o" : "x"
//             updateMessage()
//         }
//     })
// }
// function gamestop() {
//     return checkwinner("x") || checkwinner("o") || boardIsFull()
// }
// function boardIsFull() {
//     for (let i = 0; i < columns.length; i++) {
//         if (columns[i].textContent === "") {
//             return false
//         }
//     }
//     return true
// }
// function checkwinner(player) {
//     if ((column1.textContent === player && column2.textContent === player && column3.textContent === player) ||
//         (column4.textContent === player && column5.textContent === player && column6.textContent === player) ||
//         (column7.textContent === player && column8.textContent === player && column9.textContent === player) ||
//         (column1.textContent === player && column4.textContent === player && column7.textContent === player) ||
//         (column1.textContent === player && column5.textContent === player && column9.textContent === player) ||
//         (column2.textContent === player && column5.textContent === player && column8.textContent === player) ||
//         (column3.textContent === player && column6.textContent === player && column9.textContent === player) ||
//         (column3.textContent === player && column5.textContent === player && column7.textContent === player)) {
//         return true
//     }
//     return false
// }
// function updateMessage() {
//     if (checkwinner("x")) {
//         message.textContent = "player x wins"
//     } else if (checkwinner("o")) {
//         message.textContent = "player o wins"
//     } else if (boardIsFull) {
//         message.textContent = "it's a draw"
//     } else {
//         message.textContent = "player" + currentPlayer + "'s turn"
//     }
// }
// const resetbutton = document.getElementById("resetbutton")
// resetbutton.addEventListener("click", function () {
//     resetBoard()
// })
// function resetBoard() {
//     currentPlayer = "x"
//     columns.forEach((column) => {
//         column.textContent = ""
//     })
// }
// let a = [2, 4, 6]
// let b=[1, 3, 5]
// let c=[...a,...b]
// console.log(b)
// console.log(c)
// let d=b
// d.push(6)
// console.log(b)
// console.log(d)
// const object1 = { a: 3, b: 2, c: 5, d: [{ a: 33 }, { b: 4 }, { c: 5 }] }
// let sum = 0
// for (let i = 0; i < object1.length; i++) {
//     sum += object1[i].a
// }
// console.log(sum)
// const key = object1.d[1].b
// console.log(key)
// using spread operator:
// let e =[...b]
// console.log(b)
// e.push('6')
// console.log(e)
// let c = [...a, 3, 5]
// console, console.log(c);

// let person1 = [{ name: "anu" }, { age: 23 }, { secondname: "kevin" }, { place: "calicut" }]
// let mergedobjects={...person1,...person2}
// console.log(mergedobjects)
// let square=a.map((num) =>Math.sqrt(num))
// console.log(square)
// let addition= a.map((number) => number+2)
// console.log(addition)
// let changedarray = person1.map(({ key, value }) => ({ [key]: value }))
// console.log(changedarray)
// let array1 = [3, 4, 6, 8]
// console.log(array1)
// array1.forEach((element, i) => {
//     array1[i] = element + element
// })
// console.log(array1)
// let arr = [3, 5, 6, 8, 0]
// console.log(arr)
// let newmaparray = arr.map((element) => {
//     return element * element
// })
// console.log(newmaparray)
// var d = 2.34
// var b = 5.0
// var n = b + d
// document.write(n)
// window.alert("this is original");
// // let x + let y = let c
// window.print()
// window.alert("welcome")
// console.log("")

// var i = 0
// for (let i = 0; i < 5; ++i) {
//     alert(i)
// }
// alert(i)
// var i = 0;
// for (i = 0; i < 5; i++) {
//     alert(i);
// }
// alert(i);
// const names = {
//     name1: "anu",
//     name2: "sree",
//     full_name: () => {
//         return this.name1 + this.name2
//     }
// }
// console.log(names)
// let arr1 = [1, 2, 4, 5]
// let arr2 = [3, 5, 7]
// for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//         if (arr1[i] != arr2[j]) {
//             break
//         }
//         console.log(arr1[i])

//     }
// }

// my_array = [1, 2, 2, 3, 4, 4, 5, 6, 6]

// # Create an empty list to store unique elements
// unique_elements = []

// # Iterate through the array using a for loop
// for item in my_array:
//     # Check if the element is not already in the unique_elements list
//     if item not in unique_elements:
//         unique_elements.append(item)

// # Print the unique elements
// for item in unique_elements:
//     print(item)




//     const uniqueElements = [];

// for (let i = 0; i < myArray.length; i++) {
//     let isUnique = true;
//     for (let j = i + 1; j < myArray.length; j++) {
//         if (myArray[i] === myArray[j]) {
//             isUnique = false;
//             break;
//         }
//     }

//     if (isUnique) {
//         uniqueElements.push(myArray[i]);
//     }
// }

// // Print the unique elements
// for (let item of uniqueElements) {
//     console.log(item);
// }
// In this JavaScript code, the outer for loop iterates through the elements of the array, and the inner for loop checks for duplicates by comparing the current element myArray[i] with the subsequent elements myArray[j]. If no duplicates are found, the element is considered unique and added to the uniqueElements array.

// The output will be:

// Copy code
// 1
// 2
// 3
// 4
// 5
// 6
// As mentioned earlier, this approach has a time complexity of O(n^2) because of the nested loops, which may not be efficient for large arrays. More efficient algorithms and data structures are available for finding unique elements in an array with a time complexity of O(n).




// function findUniqueElements(arr1, arr2) {
//     // Combine both arrays into one
//     const combinedArray = arr1.concat(arr2);

//     // Use filter to create an array of unique elements
//     const uniqueElements = combinedArray.filter((item, index) => {
//         return combinedArray.indexOf(item) === index;
//     });

//     return uniqueElements;
// }

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];

// const uniqueElements = findUniqueElements(array1, array2);
// console.log(uniqueElements);

// let cars = [
//     {
//         "color": "purple",
//         "type": "minivan",
//         "registration": ["A", "B"],
//         "capacity": 7
//     },
//     {
//         "color": "red",
//         "type": "station wagon",
//         "registration": { "a": "D" },
//         "capacity": 5
//     }
// ]

// const valueD = cars[1].registration.a;
// console.log(valueD);

// let para=document.getElementById("paragraph1");
// para.addEventListener("click",function(){
// para.style.display="none"
// })

// if ("0") {
//     console.log("succecss")
// }
// else {
//     console.log("string true")
// }
// if ("0" == true) {
//     console.log("assignment success")
// }
// else {
//     console.log("assignment failed")
// }
// // Call this x == y.
// if ("string" == true)

//     // Rule 6: If Type(y) is Boolean,
//     //         return the result of the comparison x == ToNumber(y).
//     if ("string" == Number(true))

//         // Rule 5: If Type(x) is String and Type(y) is Number,
//         //         return the result of the comparison ToNumber(x) == y.  
//         if (Number("string") == Number(true))

//             // The above is equivalent to:
//             if (NaN == 1)

//                 // And NaN compared to *anything* is false, so the end result is:
//

