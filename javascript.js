//recognition Game
let gameScore=0;
document.getElementById("score").innerHTML="Score:"+gameScore;

function correctPicture ()
{
    alert ("Well done!");
    gameScore++;
    document.getElementById("score").innerHTML="Score:"+gameScore;

}

function wrongPicture ()
{
    alert ("Sorry! Try again!");
}



//recall Game

let correct=["calculator","cart","basket","shop","wifi","wi-fi","email","mail","webmail","home","house","play","search",
                     "Calculator","Cart","Basket","Shop","Wifi","Wi-fi","Email","Mail","Webmail","Home","House","Play","Search",
                  "CALCULATOR","CART","BASKET","SHOP","WIFI","WI-FI","EMAIL","MAIL","WEBMAIL","HOME","HOUSE","PLAY","SEARCH"]; 


function checkAnswer()
{
    let answer=document.getElementById("guess").value;
    console.log(answer);

    let found=false;


    for (let i=0; i<39; i++)
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


