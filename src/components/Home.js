import React from 'react';
import { Link } from 'react-router-dom'
import Footer from './Footer'

function Home() {
  return (
    <div className='mt-10 text-white text-xl'>
        <div className='ml-8'>
            <p>Entertainment for everyone</p>
            <p>Stream or download series, movies, kid's <br></br> shows and more from just ksh 300pm</p>
        </div>
        <div className='my-8 ml-8'>
            <Link to='/signup' className='bg-pink-500 rounded-full px-6 py-2
             mb-2 ml-14'>{'Sign Up'}</Link>
            <p className='text-sm ml-8 mt-4'>No contracts. Cancel anytime.</p>
        </div>

        <div className='flex-row mt-60 border-solid
         border-2 border-pink-500 border-b-transparent 
         border-x-transparent pb-20'>
          <footer className='ml-8'>
            <Footer />
          </footer>
          <p className='text-center mt-40 text-sm
          '>Made with Love by <span className='text-pink-500
          text-sm'>GilaTech</span>
          </p>
        </div>
    </div>
  )
}

export default Home;

//Define a function using function declaration
//Hoisting, function expression, anonymous function, 
//IIFE, function-level scope, scope chain, closure

//Define a function using function declaration
// function razzle() {
//   console.log("You've been razzled!");
// }
//razzle here works like a pointer

//Hoisting
//JavaScript ability to call functions before they appear in code.

//Define Function Expression
//Anonymous function -> A function without a name;
//Define a function using function expression

// const array = (function (thingToAdd)){
//   const base = 3;
//   return [
//     function (){
//       return thingtoAdd + base;
//     },
//     function (){
//       return base;
//     },
//   ];
// })(2);

// const foo = function (){
//   return 'bar';
// }

// const sum = 1 + 1;
// 2 which is the result is assigned to the variable sum
// Thus called function expression

// const add = (parameter1, parameter2) => parameter1 + parameter2;

//First-Class Functions
//->Use inline functions

// function Monday () {
//   console.log("Go for a five-mile run");
//   console.log("Pump iron")
// }

// function Tuesday () {
//   console.log("Go for a five-mile run");
//   console.log("Swim 40 Laps")
// }

// function Wednesday () {
//   console.log("Go for a five-mile run");
//   console.log("Go for a five-mile run")
// }

// function Thursday () {
//   console.log("Go for a five-mile run");
//   console.log("Go for a five-mile run")
// }

// function Friday () {
//   console.log("Go for a five-mile run");
//   console.log("Go for a five-mile run")
// }

// function runFiveMiles () {
//   console.log("Go for a five-mile run");
// }

// function liftWeights () {
//   console.log("Pump iron");
// }

// function swimFortyLaps () {
//   console.log("Swim forty Laps");
// }

// function Monday () {
//   // runFiveMiles();
//   // liftWeights();
//   exerciseRoute(liftWeights);
// }

// function exerciseRoute (PostRunActivity) {
//   runFiveMiles();
//   PostRunActivity();
// }

//JavaScript functions can be treated like any other object, they are the special types of object;
// exerciseRoutine( function () {
//   console.log("Stretch! Work that core!");
// })

// exerciseRoutine( () => {
//   console.log("Stretch! Work that core!");
// })

// exerciseRoutine( () => console.log("Stretch! Work that core!"));

//Returning Functions

// function morningRoutine (exercise) {
//   let breakfast;

//   if(exercise === 'liftWeights'){
//     breakfast = 'Protein Bar';
//   }else if (exercise === 'swimFortyLaps'){
//     breakfast = 'Ngege'
//   }else{
//     breakfast = 'Granola'
//   }
// }
// morningRoutine(exercise);

// return function (){
//   console.log(`Nom nom nom, this ${breakfast} is delicious!`)
// }

// const afterExercise = morningRoutine(liftWeights);

// receivesAFunction(() => {
//   console.log("I've wrote the fist test");
// });

// return returnsANamedFunction(() =>{
//   console.log("Oops, I was returned!")
// })

// exerciseRoutine(() => console.log("I'm writing the last test"));

//JavaScript Advanced Functions Lab: First Class Functions

//Test1
// let firstTwoDrivers = [driver1, driver2];
// const returnFirstTwoDrivers = (firstTwoDrivers) => firstTwoDrivers;
// returnFirstTwoDrivers(firstTwoDrivers);

// let lastTwoDrivers = [driver3, driver4];
// const returnLastTwoDrivers = (lastTwoDrivers) => lastTwoDrivers;
// returnLastTwoDrivers(lastTwoDrivers);

// const selectingDrivers = [returnFirstTwoDrivers(), returnLastTwoDrivers()];

//Global execution context
// function myFunc() {
//   return 42;
// }

// const myVar = myFunc() * 2;
// myVar;

// function myFunc(){
//   const myVar = 42;
//   return myVar * 2;
// }

// const globalVar = 1;

// function firstFunc() {
//   const firstVar = 3;

//   function secondFunc(){
//     const secondVar = 3;

//     return secondVar + firstVar + globalVar;
//   }

//   const resultFromSecondFunc = secondFunc();
//   return resultFromSecondFunc;
// }

// firstFunc();

// const fruit = 'Apple';

// function first() {
//   const vegetable = 'Brocoli';

//   console.log("fruit:", fruit);
//   console.log("vegetable:", vegetable);
//   console.log("legume:", legume)

//   function second(){
//     const legume = 'Peanut';

//     console.log("fruit:", fruit);
//     console.log("legume:", legume);
//     console.log("vegetable:", vegetable);
//   }
// }

//The JavaScript Engine and Identifier Resolution

//The JavaScript Engine
//Compilation-phase and Execution-phase

// var customerName = 'Gideon Bii'

// function upperCaseCustomerName(){
//   return customerName.toUpperCase();

//   var bestCustomer = 'not bob'

//   function setBestCustomer(){
//     return bestCustomer;
//   }

//   var bestCustomer = 'bob';
//   function overWriteBestCustomer(){
//     return bestCustomer;
//   }

//   const leastFavoriteCustomer = 'Kiriamiti';

//   function changeLeastFavoriteCustomer(){
//     const leastFavoriteCustomer = 'Francis';
//   }

// }
// upperCaseCustomerName();
// setBestCustomer();
// overWriteBestCustomer();
// changeLeastFavoriteCustomer();

//Lexical Scoping
// const myVar = 'Foo';

// function first(){
//   console.log("Inside first()");
//   console.log("myVar is currently equal to:", myVar);
// }

// function second(){
//   const myVar = 'Bar';
  
//   first();
// }

// const myVar = 'Foo';

// function second(){
//   function first(){
//     console.log("inside out()");
//     console.log("myVar is equal to:", myVar)
//   }

//   const myVar = 'Bar';
//   first();
// }
// second();

//Array
//Identify data structures and arrays
//Create arrays
//Access the elements in an array
//Nested arrays
//Introduce array methods
//Understand Mutability

//We need data structures to store collection of data
//Array is a list, with the items listed in a particular order sorrounded by square-brackets//

//["This", "is", "an", "array", "of", "strings"]; -> Array

//Accessing an element in an array -> nameOfArray[index];
//Updating the value of an element
//Nested Arrays
//Mutability -> destructive and non-destructive methodss

//Array Methods
//Add elements to an array, remove elements in an array, replace elements in an array

//Destructive methods -> .push(), .unshift();
//.push() adds elements to the end of an array whereas .unshift() adds elements to the beginning of an array

//Spread Operator
// ... allows us to "spread out" the elements of an existing array into an existing array, creating a new copy
