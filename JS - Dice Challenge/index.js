function rollDice(){
    let randomNumber1 = Math.floor((Math.random()*6)+1)
    let randomNumber2 = Math.floor((Math.random()*6)+1)

    let imageLeft = document.querySelector(".img1")
    imageLeft.src="images/dice"+randomNumber1+".png"

    let imageRight = document.querySelector(".img2")
    imageRight.src="images/dice"+randomNumber2+".png"

    let heading = document.querySelector('h1')

    if(randomNumber1===randomNumber2){
        heading.innerHTML = "Draw!"
    }
    else if(randomNumber1>randomNumber2){
        heading.innerHTML = "🚩 Player1 wins!"
    }
    else{
        heading.innerHTML ="Player2 wins!🚩 "
    }
    }