const cards = document.querySelectorAll('.card');

var fruits = ['apple', 'blueberry', 'cherry', 'grape', 'peach', 'pineapple', 'strawberry', 'watermelon'];



/**
 * shuffle 
 */
let numberOfFruits = fruits.length; {
}
function shuffle () {
for (let i = 0; i < numberOfFruits; i++) {
    var fruits = Math.floor(Math.random()* numberOfFruits);
}
}

/*
*refresh button
*/
 
function refreshBtn() {
    document.getElementById('.refreshid');{
        window.location.reload();
    } 
}


/*
*clicked card
*/
function clickColour(){
    var frontColour = document.getElementById('container-board');
    frontColour.style.backgroundColor = "orange";
}



/**
 * 
 * colour change when matched
 */

let appleCard = document.getElementById('.apple'); 
if (appleCard === appleCard) {
    .card.style.backgroundColor = "orange"
  } else { null
  }

/*
*timer for 60 second the reshuffle 
*/