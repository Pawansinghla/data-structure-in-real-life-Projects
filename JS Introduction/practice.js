let a=10
let b=[1,2,3,4,4]
console.log(a)
console.log(b)
console.log("Hello world")


c=20//globaal variable
var d=30//function scope
let e=50//block scope

function  fun(){
    let a=5
    if(a==5){
        f=10//global can be access anywhere
        console.log("Inside",f);
    }
    console.log("Outside",f)

}

//square_root(25)
//sqrt_n(20)
/*
fun()
console.log("Global",f)

//function declartion
function square_root(n){// this function move on top so it can be call anywhere
    console.log("In first sqrt fn")
    return Math.sqrt(n)
}
console.log(square_root(25))

//function Hoisting

//function expression
var sqrt_n=function(){
    console.log("In second sqrt fn");
    return ;
}
sqrt_n(10)*/

//Array
let arr=["Apple","Mango" , "Guava" ]
console.log(arr)

for(let i=0;i<5;i++){
    console.log(arr[i])
}
arr.push("banana")// insert at last
arr.pop();//remove from back
arr.shift()//remove from front
arr.unshift('Kiwi')// insert at front
arr.indexOf('kiwi')// finds you the index
if(arr[0]=='Apple')
console.log('find')
else
console.log("Not find")




var canvas=document.getElementById('mycanvas')
console.log(canvas)
console.log(canvas.width)


//Event Listeners

canvas=document.getElementById("mycanvas")
function f(){
    console.log("you clicked on thr document");
}
canvas.addEventListener('click',f);

function f2(e){
    console.log("A key got pressed",e.key)
}
document.addEventListener('keydown',f2)






