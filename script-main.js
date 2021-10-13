var playerOne = 0
var playerTwo = 0

var selectedSlot;  // card slot that player clicked on 

var usedCard = []; // empty array to add used card 

var playerTurn = 0 // toggle switch that represents the player's turn

// Generic Cards
var cardArray = ["C", "D", "H", "S"];
// Special Cards
var acesArray = ["AC", "AD", "AH", "AS"];
var jackArray = ["JC", "JD", "JH", "JS"];
var kingArray = ["KC", "KD", "KH", "KS"];
var queenArray = ["QC", "QD", "QH", "QS"];


// function 1: store the id of the selected card slot
function selected(clicked_id) {
    selectedSlot = clicked_id;
    generateNumber(); 
}

// function 2: generate and show random card  
function generateNumber() {
 
    // combine all card arrays  
    let allCards = cardArray.concat(acesArray).concat(jackArray).concat(kingArray).concat(queenArray);
    // select a random letter within the array
    let cardLetter = allCards[Math.floor(Math.random() * allCards.length)];  

    // generate a random number between 2 and 10
    let randomNumber = Math.floor(Math.random() * 9) + 2;

    // if generic card is choosen, concatenate letter with random number  
    if ((cardArray).indexOf(cardLetter) !==-1) {
        var genericCard = randomNumber + cardLetter;
        var cardToShow = "PNG/" + genericCard + ".png";
        updateScore();
    } // OR if special card is choosen, leave as is
    else {
        var specialCard = cardLetter;
        cardToShow = "PNG/" + specialCard + ".png";  
        updateScore();
    } 

        // calulate score
        //function that toggles between two players, each time mouse is clicked and updates player score
        function updateScore(){
            if (playerTurn === 0){
                playerTurn = 1
                playerOne++;
                document.getElementById('player-one-score').innerText = playerOne;
            } else {
                playerTurn = 0
                playerTwo++;
                document.getElementById('player-two-score').innerText = playerTwo;
            }
        }

     console.log('The card slot with id: ' + "'" + selectedSlot + "'" + ' was selected! The new card file path to show is: ' + cardToShow);

    // change the current file path of the card, to the newly generated one
    let changeImgSrc = document.getElementById(selectedSlot)
    changeImgSrc.src = cardToShow;

    // remove file path from cardToShow and store the result
    let pathRemoved = cardToShow.replace("PNG/", '').replace(".png", '');

    // take the result and append to an array of used cards, each time a card is shown
    usedCard.push(pathRemoved);
    console.log(usedCard);

    //filter 
    allCards = allCards.filter(card => usedCard.indexOf(card) === -1);
    console.log(allCards);

    //only allow 52 clicks per game
    
}


//function 3: reset the game 
function restartGame() {
    alert('Ready to restart the game?');
    //reset player scores 
    document.getElementById('player-one-score').innerText = 0;
    document.getElementById('player-two-score').innerText = 0;
    //reset cards 
    var resetCards = document.querySelectorAll("img");
    for (var i = 0; i < resetCards.length; i++) {
        resetCards[i].src = "PNG/yellow_back.png";
    }
}


// if (changeImgSrc = "PNG/" + pathRemoved + ".png") {
//     // alert(changeImgSrc);
//     cardToShow != genericCard;
//     cardToShow != specialCard;
// } else {
//     alert('something else')
// }
