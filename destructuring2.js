// Destructuring (구조 분해 할당)

let arr = [1, 2, 3, 4, 5];

// let a = arr[0];
// let b = arr[1];
// let c = arr[2];

let [a, b, c, ...rest] = arr;   

console.log(a);
console.log(b);
console.log(c);
console.log(rest);