function hello(){
    console.log("Hello");
}

// hello();


function print1to10(){
    for(let i=1;i<=10;i++){
        console.log(i);
    }
}

// print1to10();


function isAdult(){
    let age = prompt("Enter your age");
    if(age>=18){
        console.log("You are adult");
    }else{
        console.log("You are not adult");
    }
}

// isAdult();


// que. make a function to print poem

function printPoem(){
    console.log(`  Sails flashing to the wind like weapons,
              sharks following the moans the fever and the dying;   
              horror the corposant and compass rose.`)
}

// printPoem();


//Create a function to roll a dice

function dice(){
    let rand = Math.floor(Math.random()*6)+1;
    console.log(rand);
}

// dice();


function printName(name){
    console.log(name);
}

// printName("sumit");

        // avg of three numbers

function avgofThree(a,b,c){
    console.log((a+b+c)/3);
}

// avgofThree(6,8,9);


                // Create a function that print multiplication table of a number

function MultiTable(num){
    for(let i=1;i<=10;i++){
        console.log(num*i);
    }
}

// MultiTable(5);


                // create programe for sum from 1 to n numbers

function sumofNUmber(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum = sum+i;

    }

    return sum;
}

// console.log(sumofNUmber(8));


let str=["my","name","is","sumit"];

function concat(str){
       let result;
       for(let i=0;i<str.length;i++){
        result = result+str[i];
       }

       return result;
}

// console.log(concat(str));


//FUNCTION EXPRESSIONS :----

let sum = function(a,b){
    console.log(a+b);
}

// sum(2,4);

        //HIGHER ORDER FUNMCTION


function multiGreet(func,n){
    for(let i=1;i<=n;i++){
        func();
    }
}




let greet = function(){
    console.log("Hello...!");

}

// multiGreet(greet,80);


function oddEvenTesting(request){
    if(request=="even"){
       let even= function(n){
            console.log(n%10==0);
        }

        return even;
    }else if(request=="odd"){
        let odd= function(n){
            console.log(!(n%10==0));
        }
        return odd;
    }else{

        console.log("wrong request");
    }
}


const calculate={
    add:function(a,b){
        return a+b;
    },

    sub:function(a,b){
        return a-b;
    },

    mul:function(a,b){
        return a*b;
    }
}

calculate.add(2,4);