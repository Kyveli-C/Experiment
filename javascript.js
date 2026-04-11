//recognition Game
let gameScore=0;
document.getElementById("score").innerHTML="Score:"+gameScore;

function correctPicture ()
{
    let element=event.target;

    alert ("Well done!");
    gameScore++;
    document.getElementById("score").innerHTML="Score:"+gameScore;
    element.style.backgroundColor = "green";

}

function wrongPicture ()
{
    alert ("Sorry! Try again!");
}



//recall Game

let correct=["calculator","cart","basket","shop","wifi","wi-fi","email","mail","webmail","home","house","play","search"];


function checkAnswer()
{
    let answer=document.getElementById("guess").value.toLowerCase().trim();
    console.log(answer);

    let found=false;


    for (let i=0; i<correct.length; i++)
    {
        if (answer===correct[i])
        {
            found= true;
            gameScore++;
            break;
        }
    }

    if (found)
    {
        alert("Well done!");
    }
    else
    {
        alert ("Sorry! Try again!");
    }
    document.getElementById("score").innerHTML="Score:"+gameScore;
    console.log("clearing...");
    document.getElementById("guess").value="";
}


//recognition Game
let gameScore=0;
document.getElementById("score").innerHTML="Score:"+gameScore;

function correctPicture (element)
{
    if (element.classList.contains("selected")) {
        return;
    }

    alert("Well done!");

    gameScore++;
    document.getElementById("score").innerHTML = "Score:" + gameScore;

    element.classList.add("selected");
}

function wrongPicture ()
{
    alert ("Sorry! Try again!");
}



//recall Game

let correct=["calculator","cart","basket","shop","wifi","wi-fi","email","mail","webmail","home","house","play","search"];


function checkAnswer()
{
    let answer=document.getElementById("guess").value.toLowerCase().trim();
    console.log(answer);

    let found=false;


    for (let i=0; i<correct.length; i++)
    {
        if (answer===correct[i])
        {
            found= true;
            gameScore++;
            break;
        }
    }

    if (found)
    {
        alert("Well done!");
    }
    else
    {
        alert ("Sorry! Try again!");
    }
    document.getElementById("score").innerHTML="Score:"+gameScore;
    console.log("clearing...");
    document.getElementById("guess").value="";
}


