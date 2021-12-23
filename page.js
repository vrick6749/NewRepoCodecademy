const prompt = require('prompt-sync')();

const arrayOfJokes = ['joke1', 'joke2','joke3','joke4','joke5'];
let answer = 'yes';
function getRandomJoke(){
   let randomNumber = Math.floor((Math.random() * arrayOfJokes.length)+1)
   return randomNumber
}
    
    while(answer != 'no'){
        console.log('Tell joke')


        answer = prompt('hear a joke? yes or no')
        

    }

    




