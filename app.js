'use strict'

let userName = prompt('Hello, Could you please enter your name');
console.log('Your name is : '+userName);
alert('Hello '+userName +' Welcome to my website, best wishes :) ');

let mood = prompt('Are you happy? Please answer yes or no y/n !');
console.log('Your mood is: '+mood);
alert('Your mood is: '+mood);


switch (mood.toUpperCase()) {
    case 'YES':
    case 'Y':
        console.log('Great you are ok, have a nice day');
        alert('Great, you are ok, have a nice day');
        break;
    case 'NO':
    case 'N':   
         console.log('Ooh no , you should to do something to change your mood, Good Luck');
         alert('Ooh no , you should to do something to change your mood, Good Luck');
         break;
    default:
        alert('Please Take care to your self :)');         
}


let gym = prompt('Do you like to go to the gym? Please answer yes or no y/n !');
console.log('Your amswer is: '+gym);
alert('Your answer is: '+gym);


switch (gym.toUpperCase()) {
    case 'YES':
    case 'Y':
        console.log('Great, You are like gym, So register to your favorite gym now :)');
        alert('Great, You are like gym, So register to your favorite gym now');
        break;
    case 'No':
    case 'N':
            console.log('Ooh no, I hope you to take care of your health');
            alert('Ooh no, I hope you to take care of your health');
            break;
        default:
            alert('Please Take care to your self :)');

}


let movies = prompt('Do you like movies? Please answer yes or no y/n !');
console.log('Your amswer is: '+movies);
alert('Your answer is: '+movies);


switch (movies.toUpperCase()) {
    case 'YES':
    case 'Y':
        console.log('Great, You are like movies, So you are welcome to my website now :)');
        alert('Great, You are like movies, So you are welcome to my website now :)');
        break;
    case 'No':
    case 'N':
            console.log('Ooh no, I hope you to have a nice day');
            alert('Ooh no, I hope you to have a nice day ');
            break;
        default:
            alert('Please Take care to your self :)');
}



let swim = prompt('Do you like swim? Please answer yes or no y/n !');
console.log('Your amswer is: '+swim);
alert('Your answer is: '+swim);


switch (swim.toUpperCase()) {
    case 'YES':
    case 'Y':
        console.log('Great, You are like me, So do not forget to go swimming today :)');
        alert('Great, You are like me, So do not forget to go swimming today :)');
        break;
    case 'No':
    case 'N':
            console.log('Ooh no, I hope you to rethinking about swimming it is good to you :)');
            alert('Ooh no, I hope you to rethinking about swimming it is good to you :)');
            break;
        default:
            alert('Please Take care to your self :)');
}




let color = prompt('Do you like yellow color? Please answer yes or no y/n !');
console.log('Your amswer is: '+color);
alert('Your answer is: '+color);


switch (color.toUpperCase()) {
    case 'YES':
    case 'Y':
        console.log('Good, You are like me, like a yellow color :)');
        alert('Good, You are like me, like a yellow color :)');
        break;
    case 'No':
    case 'N':
            console.log('Oops , You do not like yellow color , So choose another color :)');
            alert('Oops , You do not like yellow color , So choose another color :)');
            break;
        default:
            alert('Please Take care to your self :)');
}
