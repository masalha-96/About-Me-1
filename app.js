'use strict'

let userName = prompt('Hello, Could you please enter your name');
console.log('Your name is : '+userName);
alert('Hello '+userName +' Welcome to my website, best wishes :) ');

let myName = prompt('Do you know my name? Please answer yes or no y/n !');
console.log('Your answer is: '+myName);
alert('Your answer is: '+myName);


switch (myName.toUpperCase()) {
    case 'YES':
    case 'Y':
        console.log('Great you are know my name, have a nice day');
        alert('Great, you are know my name, have a nice day');
        break;
    case 'NO':
    case 'N':   
         console.log('Ooh no , you do not know my name, and my name is Bashar , Nice to meet you :)');
         alert('Ooh no , you do not know my name, and my name is Bashar , Nice to meet you :)');
         break;
    default:
        alert('Please Take care to your self :)');         
}


let gym = prompt('Do I like go to the gym? Please answer yes or no y/n !');
console.log('Your amswer is: '+gym);
alert('Your answer is: '+gym);


switch (gym.toUpperCase()) {
    case 'YES':
    case 'Y':
        console.log('Great, I like go the the gym, I hope to meet you there :)');
        alert('Great, I like go the the gym, I hope to meet you there :)');
        break;
    case 'No':
    case 'N':
            console.log('Ooh no, that is not correct answer :(');
            alert('Ooh no, that is not correct answer :(');
            break;
        default:
            alert('Please Take care to your self :)');

}


let movies = prompt('Do I like movies? Please answer yes or no y/n !');
console.log('Your amswer is: '+movies);
alert('Your answer is: '+movies);


switch (movies.toUpperCase()) {
    case 'YES':
    case 'Y':
        console.log('Great, I am like movies, So you are welcome to my website now :)');
        alert('Great, I am like movies, So you are welcome to my website now :)');
        break;
    case 'No':
    case 'N':
            console.log('Ooh no, that is not correct answer');
            alert('Ooh no, that is not correct answer ');
            break;
        default:
            alert('Please Take care to your self :)');
}



let swim = prompt('Do I like swim? Please answer yes or no y/n !');
console.log('Your amswer is: '+swim);
alert('Your answer is: '+swim);


switch (swim.toUpperCase()) {
    case 'YES':
    case 'Y':
        console.log('Great, I am like a swimming, I hope you to like a swim also :)');
        alert('Great, I am like a swimming, I hope you to like a swim also :)');
        break;
    case 'No':
    case 'N':
            console.log('Ooh no, I am like swimming :)');
            alert('Ooh no, I am like swimming :)');
            break;
        default:
            alert('Please Take care to your self :)');
}




let study = prompt('Did I study  accounting in universty? Please answer yes or no y/n !');
console.log('Your amswer is: '+study);
alert('Your answer is: '+study);


switch (study.toUpperCase()) {
    case 'YES':
    case 'Y':
        console.log('Good, You know what I studied :)');
        alert('Good, You know what I studied :)');
        break;
    case 'No':
    case 'N':
            console.log('Oops , You do not know what I studied , So I studied Accounting :)');
            alert('Oops , You do not know what I studied , So I studied Accounting :)');
            break;
        default:
            alert('Please Take care to your self :)');
}
