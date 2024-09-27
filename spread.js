let a = [1, 2];
let b = [1, 2];
let c = a;      //같은 a배열을 참조
let d = [...a]; //배열의 값만 가져옴 > side effect 발생 X
let e = [3, 4];
let f = [...a, ...e];

d.push(5);
c.push(3);

console.log(a == c);    //true
console.log(a == b);    //false

console.log(c);   //[1, 2, 3]
console.log(b);   //[1, 2]
console.log(a);   //[1, 2, 3]
console.log(d);   //[1, 2, 3, 5];
console.log(e);   //[3, 4]
console.log(f);   //[1, 2, 3, 4]