const prompt = require('prompt-sync')();

const arrayOfJokes = ['joke 1', 'joke 2','joke 3','joke 4','joke 5'];
let answer = 'yes';


function getRandomJoke(){
   let randomNumber = Math.floor((Math.random() * arrayOfJokes.length))
   let randomJoke = arrayOfJokes[randomNumber]
   return randomJoke
}
    
    while(answer != 'no'){
        
        console.log(getRandomJoke())

        answer = prompt('hear a joke? yes or no ')
        

    }






