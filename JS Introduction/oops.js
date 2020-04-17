//Object  Oriented Programming in Javascript

//allows to create objects without defining the class
// Javascript object notation
/*
var bird={
    x:100,
    y:20,
    color:"blue",
    eggs:["One","Two","Three"],
    fly:function(){
        console.log("Bird is flying",this.x,this.y)
    }

};
//for loop
for(let i=0;i<bird.eggs.length;i++){
    console.log(bird.eggs[i])
}

//for each loop
bird.eggs.forEach(function(val,idx) {
    console.log(val,idx)
})

console.log(bird.fly())
*/

//Another way
function Fruit(taste,color){
    this.color=color;
    this.taste=taste
}

//new keyword
let mango=new Fruit("sweet","yello")
let  orange=new Fruit("sour","orange")
console.log(mango)
console.log(orange)

//One way
var apple={
    taste:"sweet",
    color:"red",

}

console.log(apple)


//Class keyword (ECMAScript  2015)
//class Declartion(Not Hosited)//opposite to function behaviour
class FruitClass{
    constructor(taste,color){
        this.taste=taste
        this.color=color
    }
}
let kiwi=new FruitClass('sour','green')
console.log(kiwi)



//class Expression( Not Hoisted)
let FruitClass2=class{
    constructor(taste,color){
        this.taste=taste
        this.color=color
    }
    
}
let kiwi2=new FruitClass2('sour','green')
console.log(kiwi2)




