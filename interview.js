///////////////////////////
function sayHi() {
  console.log(name);
  console.log(age);
  var name = 'BOLD';
  let age = 21;
}
sayHi();
//////////////////////
const a = "BOLD";
a = "BOLD 2"
////////////////////
const obj1 = {
  name: "My Name is BOLD"
};
obj.name = "BOLD";
/////////////
var obj = {
  name: "Bold 1"
}
var obj2 = {
  name: "Bold 2",
}
function printMe() {
  console.log(this.name);
}
////////////////


for (let i = 1; i <= 10; i++) {
  setTimeout(function () { console.log(i); }, 1000);
}

/////////////////

console.log("demo 1");
setTimeout(() => { console.log("set timeout") }, 0);
var p = Promise.resolve([1, 2, 3]);
p.then(function (v) { console.log("promise"); });
console.log("demo 2")

///////////////////////////
var obj = {
  x: 10,
  y: 20,
  sum: () => {
    console.log(this.x + this.y);
  },
  multiply() {
    console.log(this.x * this.y)
  },
  minus: function () {
    console.log(this.x - this.y);
  }
}
obj.sum();
obj.multiply()
obj.minus();
/////////////////////////////////////////////////
var a = []
for (var index = 0; index < 5; index++) {
  a.push(function () {
    console.log(index);
  })
}
for (var i = 0; i < a.length; i++) {
  a[i]();
}
//////////////////////////
var car = function (model, price) {
  this.model = model;
  this.price = price;
  return model + "_" + price
}
var car1 = new car("maruti", 1000);
var car2 = car("tata", 2000);
console.log(car1);
console.log(car2);
//////////////////////////////
function outer() {
  var a = 10;
  return function () {
    var a = 20;
    inner();
  }
  function inner() {
    console.log(a);
  }
}
outer()();
/////////////////////////////
{
  var moo = "Mooo"
  let baz = "Bazz";
  console.log(moo, baz);
}
console.log(moo);
console.log(baz);
//////////////////////////
var foo = "Foo";
let bar = "Bar";
console.log(this.foo);
console.log(this.bar);
//////////////////////////
//polyfilll or reverse a string
if (!String.prototype.reverse) {
  String.prototype.reverse = function (data) {
    return this.split('').reverse().join('')
  }
}
var a = "deepak".reverse();
///
if (!Function.prototype.myCall) {
  Function.prototype.myCall = function (obj, ...arg) {
    this.call(obj, ...arg);
  }
}