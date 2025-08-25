const choices = document.querySelectorAll('.choices')
const msg = document.querySelector('#msg')
const user = document.querySelector('#user-score')
const comp = document.querySelector('#comp-score')
let userScore = 0
let compScore = 0

let genCompChoice = () =>{
const option = ["Rock","Paper","Scissor"]
const randomIdx = Math.floor(Math.random()*3)
return option[randomIdx]

}
const Score = (userWin) =>{
    if(userWin){
        userScore++
        user.innerText = userScore
    }else{
        compScore++
        comp.innerText = compScore
    }
}


const drawGame = ()=>{
msg.innerText = 'Draw! Play again'
msg.style.background = '#001514'
}

const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        msg.innerText = `You Won ! Your ${userChoice} beats ${compChoice}`
        msg.style.background = 'green'
    }else{
        msg.innerText = `You Lose! ${compChoice} beats  Your ${userChoice}`
        msg.style.background ='red'
    }
}


let playGame = (userChoice) =>{
    const compChoice = genCompChoice()
if(userChoice===compChoice){
    drawGame()
}else{
      let userWin = true;
        if(userChoice=== 'Rock'){
            userWin = compChoice === 'Paper' ? false : true
        }else if(userChoice==='Paper'){
            userWin = compChoice === 'Scissor'?false : true
        }else{
            userWin = compChoice === 'Rock' ? false :true
        }
        showWinner(userWin,userChoice,compChoice)
        Score(userWin)
    }
}

choices.forEach((choice)=>{
choice.addEventListener('click',()=>{
    let userChoice = choice.getAttribute('id')
    playGame(userChoice)
})
})
