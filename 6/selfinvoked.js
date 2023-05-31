// 1 Printing Greeting with anonymous function
(function(name){
    console.log('Hello, ' + name);
}('John'));
// 2 Printing Greeting with declarative function
(function name(na){
    console.log('Hi,' + na);
}('Pranav'));
// 3 Printing simple result in function expression
var r1= (function(x){
    return x*x+x+1;
}(7));
console.log(r1);
// 4 Printing the result in an Array
var r=(function teja (a1,a2,a3,a4,x,y){
    var r1=a1(x,y);
    var r2=a2(x,y);
    var r3=a3(x,y);
    var r4=a4(x,y);
    return [r1,r2,r3,r4]
})
    (function a1(a,b){
       return (a+b);
    },
    function a2(a,b){
        return (a-b);
     },
     function a3(a,b){
        return (a*b);
     },
     function a4(a,b){
        return (a/b);
     },4,8);
     console.log(r);
// 5 Printing the result
var r=(function mat (f1, f2, x, y){
    var r1=f1(x, y);
    var r2=f2(x, y);
    return r1+r2;
})
    (function f1(a,b){
        return a+b;
    },
    function f2(a,b){
        return a*b;
    }, 10,12)
    
console.log(r);
// 6 Printing the Even Numbers 
var r=(function even (arr){
     evenarr=[];
    for(i=0; i<arr.length; i++){
        if (arr[i]%2==0){
            evenarr.push (arr[i]);            
        }
    }
    return evenarr;
})
([1,2,3,4,5,6,7,8,9]);
console.log(evenarr);


