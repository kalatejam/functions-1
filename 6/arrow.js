// 1 Arrow functions
let sum = (a, b) => {
    let result = a + b;
    return result;
}

let result1 = sum(5,7);
console.log(result1); 
// 2
function Person() {
    this.name = 'John',
    this.age = 30,
    this.nickName = function () {        
        let innerFunc = () => {
            console.log(this.age);
        }
        innerFunc();
    }
}
const x = new Person();
x.nickName();
