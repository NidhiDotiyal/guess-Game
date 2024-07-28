let number;// Math.random()*100; //0-1
let randomNumber //= Math.trunc(number);

console.log(`Random number is ${randomNumber}`);

document.querySelector(".new-target").addEventListener("click",()=>{
    let range1= document.querySelector(".range1").value;
    let range2= document.querySelector(".range2").value;

    do{
        number=Math.random()*100;
        randomNumber= Math.trunc(number);
    }
    while(randomNumber<range1 || randomNumber>range2);
    console.log(`Actual random number is ${randomNumber}`)

})

document.querySelector(".guess-button").addEventListener("click", ()=> {
    let userInput =document.querySelector(".guess-input").value;
    console.log(userInput);

    if(randomNumber == userInput){
        //console.log("You won!")
        document.querySelector(".status").textContent = "You won!"
        document.querySelector(".guess-button").classList.add("hidden")  //hides the guess button if above condition holds..check CSS

    }
    else if(randomNumber<userInput){
        //console.log("Too high!")
        document.querySelector(".status").textContent ="Too high!"
    }
    else if(randomNumber>userInput){
        //console.log("Too low!")
        document.querySelector(".status").textContent = "Too low!"
    }
//on clicking on reset, after game is won, hidden guess button will come back to normal
 document.querySelector(".reset-button").addEventListener("click",()=>{
    document.querySelector(".guess-button").classList.remove("hidden")
    
    
    //along with above thing, guess input field will again get vacant and .status class will be seen as below instead of you won
    document.querySelector(".guess-input").value =''
    document.querySelector(".status").textContent ="To play the game again, Please guess a number, enter it and press guess"

 })
})
