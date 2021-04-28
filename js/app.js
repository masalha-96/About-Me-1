'use strict'




    let score = 0;
let userName = prompt('Hello, Could you please enter your name');
console.log('Your name is : '+userName);
alert('Hello '+userName +' Welcome to my website, best wishes :) ');





function Question1  (myName) {


    
switch (myName.toUpperCase()) {
    case 'YES':
    case 'Y':
        console.log('Great you know what my name is, have a nice day');
        alert('Great, you know what my name is, have a nice day');
        score++;
        break;
    case 'NO':
    case 'N':   
         console.log('Ooh no , you do not know what my name is, and my name is Bashar , Nice to meet you :)');
         alert('Ooh no , you do not know what my name is, and my name is Bashar , Nice to meet you :)');
         break;
    default:
        alert('Please Take care to your self :)');         
}
}


let myName = prompt('Do you know what my name is?? Please answer yes or no y/n !');
console.log('Your answer is: '+myName);
alert('Your answer is: '+myName);
 
Question1 (myName);





function Question2 (gym) {
switch (gym.toUpperCase()) {
    case 'YES':
    case 'Y':
        console.log('Great, I like go to the gym, I hope to meet you there :)');
        alert('Great, I like go to the gym, I hope to meet you there :)');
        score++;
        break;
    case 'No':
    case 'N':
            console.log('Ooh no, that is not correct answer :(');
            alert('Ooh no, that is not correct answer :(');
            break;
        default:
            alert('Please Take care to your self :)');


}
}


let gym = prompt('Do I like go to the gym? Please answer yes or no y/n !');
console.log('Your amswer is: '+gym);
alert('Your answer is: '+gym);
 Question2 (gym);




function Question3 (movies) {


switch (movies.toUpperCase()) {
    case 'YES':
    case 'Y':
        console.log('Great, I am like movies, So you are welcome to my website now :)');
        alert('Great, I am like movies, So you are welcome to my website now :)');
        score++;
        break;
    case 'No':
    case 'N':
            console.log('Ooh no, that is not correct answer');
            alert('Ooh no, that is not correct answer ');
            break;
        default:
            alert('Please Take care to your self :)');
}
}


let movies = prompt('Do I like movies? Please answer yes or no y/n !');
console.log('Your amswer is: '+movies);
alert('Your answer is: '+movies);


Question3 (movies);




function Question4 (swim) {


switch (swim.toUpperCase()) {
    case 'YES':
    case 'Y':
        console.log('Great, I am like a swimming, I hope you to like a swim also :)');
        alert('Great, I am like a swimming, I hope you to like a swim also :)');
        score++;
        break;
    case 'No':
    case 'N':
            console.log('Ooh no, I am like swimming :)');
            alert('Ooh no, I am like swimming :)');
            break;
        default:
            alert('Please Take care to your self :)');
}
}


let swim = prompt('Do I like swim? Please answer yes or no y/n !');
console.log('Your amswer is: '+swim);
alert('Your answer is: '+swim);


Question4 (swim);



function Question5 (study) {


switch (study.toUpperCase()) {
    case 'YES':
    case 'Y':
        console.log('Good, You know what I studied :)');
        alert('Good, You know what I studied :)');
        score++;
        break;
    case 'No':
    case 'N':
            console.log('Oops , You do not know what I studied , So I studied Accounting :)');
            alert('Oops , You do not know what I studied , So I studied Accounting :)');
            break;
        default:
            alert('Please Take care to your self :)');
}
}


let study = prompt('Did I study  accounting in universty? Please answer yes or no y/n !');
console.log('Your amswer is: '+study);
alert('Your answer is: '+study);


Question5 (study);




function Question6 (myOld) {


  while (!myOld) {
         myOld = Number(prompt('How old I am ? \n Please make sure your answer is a NUMBER'));
         }
     for (let i = 0; i < 3; i++) 
     {
        if (myOld !== 28) {
            alert('too bad my old not '+myOld);
            if(myOld>26 && myOld<30)
                {alert('your guess is too high');}
                 else
                  {alert('Your guess is too low');}
        count=count+1;
        myOld = Number(prompt('How old I am ?  \n Please make sure your answer is a NUMBER '));}
           else
           {alert('hello my old is correct is ' + myOld );
           score++;
           break; }
       if(count==3) 
       {alert('thanks for trying, the correct answer is 28');
       break;}
    }


    let car = ['Koenigsegg','Lamborghini','Mansory Vivere Bugatti Veyron','Ferrari LaFerrari'];
    let userAnswer;
    for(let i = 1 ; i <=6 ; i++){
        userAnswer = prompt('Name One of car from my Top 10 Most Expensive Cars In The World');


        if(userAnswer .toLocaleLowerCase() === car[0] || userAnswer === car[1] || userAnswer === car[2] || userAnswer === car[3]){
            alert('You are correct');
            score++
            break;
        }
        else {
            alert('Wrong answer Please try again')
        }
    }
    alert(car[0]+'/ '+ car[1] +'/ '+ car[2] +'/ ' + car[3]);


    alert('Your score is ' + score + ' out of 7');


    alert('You Did A Great Job , Thank You ' + userName +' :)');
}


let count =0;
  let myOld = Number(prompt('How old I am ?'));


  Question6 (myOld);





