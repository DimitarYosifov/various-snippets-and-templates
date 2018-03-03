// function repeatIt(count, func) {
//     for (let i = 1; i <= count; i++)
//         func(i);
// }


// let starsFunc = function (i) {
//     console.log("**".repeat(i))
// };
// // repeatIt(3, starsFunc)
// repeatIt(3, function (x) {
//     console.log( x);
// });

//IIFE

// (function (count) {
//     for (let i = 1; i <= count; i++)
//         console.log('+'.repeat(i));
// })(4);


//CLOSURE

// let f = (function (z,op) {
//     let x = 0;
//
//     return function(z,op) {
//         if(op==='-'){
//             x-=z
//         }
//         else {
//             x+=z
//         }
//
//         // x++
//         console.log(x);
//     }
// })();
// f(4,'-');
// f(4,'-');
// f(4,'+');
// f(4,'-');

// function oi(x) {
//     x=x||244
//     console.log(x)
// }
// x=0
// oi(x)
// ////244
// x=3
// oi(x)
// //3


// function isAdult(age) {
//     return age && age > 17 ;
// }
// console.log(isAdult(18))////true
// console.log(isAdult(10))////false

// let nameSpace= {
//     add:function (num1,num2) {
//
//         return num2+num1
//     }
// }
//
// console.log(nameSpace.add(20,30))////50

// //MAP
// let myArray=[1,2,3,4,5] ;
// myArray=myArray.map(element => element*9)
// console.log(myArray)
// //[ 8, 16, 24, 32, 40 ]
//
// let myArray2=[1,2,3,4,5] ;
// myArray2=myArray2.map(element => element>2)
// console.log(myArray2)
// //[ false, false, true, true, true ]


////FIND
// let myArray=[1,2,3,4,5]
// console.log(myArray.find(element => element >3))
////4

//FINDINDEX
// let myArray=[1,2,3,4,5]
// console.log(myArray.findIndex(element => element >3))
//3

// //EVERY
// let myArray = [1, 2, 3, 4, 5]
// console.log(myArray.every(element => element > 3))
// //false

// SOME
// let myArray = [1, 2, 3, 4, 5]
// console.log(myArray.some(element => element > 3))
// //true

//FILTER
// let myArray=[1,2,3,4,5]
// console.log(myArray.filter(element => element >3))
//[ 4, 5 ]

//SHIFT
// let myArray=[1,2,3,4,5]
// myArray.shift()
// console.log(myArray)
//[ 2, 3, 4, 5 ]

// //CONCAT
// var arr1 ='ss'
// var arr2= 'rr'
// console.log(arr1.concat(arr2))
// //[ 1, 3, 4, 6, 2, 9 ]

// INCLUDES
// let myArray=[1,2,3,4,5]
// console.log(myArray.includes(2))
//true

//REDUCE
// let myArray = [1, 2, 3, 4, 5]
// console.log(myArray.reduce((prev, curr) => prev + curr))
//15

// //Array.prototype
// let myArray=[1,2,3,4,5]
// Array.prototype.mitko=function () {
//     for (var i = 0; i < myArray.length; i++) {
//         this[i]=this[i]+9
//     }
// }
// myArray.mitko()
// console.log(myArray)

// //CLASS
// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
//     get area() {
//         return this.calcArea();
//     }
//     calcArea() {
//         return this.height * this.width;
//     }
// }
// const square = new Rectangle(10, 10);
// console.log(square.area);
// //100


// document.getElementById('test').innerHTML=aa

// var bar = true;
// console.log(bar + 0);         //true
// console.log(bar + "xyz");       // truexyz
// console.log(bar + true+true);   //     3
// console.log(bar + false);       // 1


// // OBJECTS\GET KEYS/GET VALUES
// let aa = {
//     a: 1,
//     b: 2,
//     c: 3
// }
//
// for (w in aa) {
//     console.log(aa[w])///1,2,3
// }
// for (w in aa) {
//     console.log(w)///a,b,c
// }


// //SORT ARR OF OBJECTS BY VALUES
// arr.sort((a, b) => a.value.localeCompare(b.value));
// //if value is not string
// arr.sort((a, b) => a.value.toString().localeCompare(b.value))


//    https://randomuser.me/api/?results=10


//    ---------------------------------------------------------------
// CALLBACK
//    ---------------------------------------------------------------

//            function a() {
//                console.log('aa');
//            }
//
//            function b(callback) {
//                console.log('bb');
//                setTimeout(function () {
//                    callback()
//                },2000)
//            }
//            b(a)

//    ---------------------------------------------------------------
//PROMISE PATTERN 1
//    ---------------------------------------------------------------

//    let getPromises = function () {
//        promise1
//            .then(x => {
//                console.log(x);
//            })
//            .catch(x => {
//                console.log(x);
//            })
//    }
//
//    let promise1 = new Promise(function (resolve, reject) {
//        var data = [1]
//        var err = 'errorr'
//        setTimeout(function () {
//            if (data[0] === 1) {
//                resolve(data)
//            }
//            else {
//                reject(err)
//            }
//        }, 1000);
//    })
//    getPromises()

//    ---------------------------------------------------------------
//PROMISE PATTERN 2 (USING VARIABLES)
//    ---------------------------------------------------------------

//    let api = new Promise(function (resolve, reject) {
//        setTimeout(function () {
//            resolve('timeout 1s')
//        }, 1000)
//    })
//
//    let api2 = new Promise(function (resolve, reject) {
//        setTimeout(function () {
//            resolve('timeout 2s')
//        }, 2000)
//    })
//
//    let api3 = new Promise(function (resolve, reject) {
//        setTimeout(function () {
//            resolve('timeout 3s')
//        }, 3000)
//    })
//
//    let prom = function () {
//        api.then(function (result) {
//            console.log(result)
//            return api2;
//        }).then(function (result2) {
//            console.log(result2)
//            return api3;
//        }).then(function (result3) {
//            console.log(result3)
//            // do work
//        }).catch(function (error) {
//            //handle any error that may occur before this point
//        }).then(function () {
//            console.log('44')
//            //do something whether there was an error or not
//            //like hiding an spinner if you were performing an AJAX request.
//        });
//    }
////    prom()

//    ---------------------------------------------------------------
//PROMISE PATTERN 3 PROMISE ALL USING VARIABLES (WAITS FOR ALL PROMISES TO FINISH)
//    ---------------------------------------------------------------

//    Promise.all([api, api2, api3]).then(function(result) {
//        console.log(result)
//        //do work. result is an array contains the values of the three fulfilled promises.
//    }).catch(function(error) {
//        //handle the error. At least one of the promises rejected.
//    });

//    ---------------------------------------------------------------
//PROMISE PATTERN 4 ((USING FUNCTIONS))
//    ---------------------------------------------------------------

//    function one() {
//        return new Promise(resolve => {
//            setTimeout(function () {
//                resolve(22)
//            }, 1000)
//        })
//    }
//
//    function two(x) {
//        return new Promise(resolve => {
//            setTimeout(function () {
//                resolve(x+33)
//            }, 2000)
//        })
//    }
//
//    function three(x) {
//        return new Promise(resolve => {
//            setTimeout(function () {
//                resolve(x+44)
//            }, 2000)
//        })
//    }
//
//
//    function getResults(callback) {
//        return one().then(two).then(three)
//    }
//
//    getResults().then(result=>{
//        console.log(result);
//    })


//    ---------------------------------------------------------------
//   FOREACH  VS MAP
//    ---------------------------------------------------------------
//  It’s important to also understand that using map() may be preferable if you favor functional programming.
//  This is because forEach() affects and changes our original Array, whereas map()
//  returns an entirely new Array — thus leaving the original array unchanged.


//    let arr = [1, 2, 3, 4, 5];
//
//    arr.forEach((num, index) => {
//        return arr[index] = num * 2;
//    });
//
//    let doubled = arr.map(num => {
//        return num * 2;
//    });

// arr = [2, 4, 6, 8, 10]
//    ---------------------------------------------------------------
