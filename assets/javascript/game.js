$(document).ready(function(){
  
  // Generates random number to guess
    var randomTargetNum = Math.floor(Math.random()*101)
  
  // Display random number
    $('#scoreToMatch').text(randomTargetNum);
  
  //Generate random number for each crystal
    var randOne = Math.floor(Math.random()*12+1)
    var randTwo = Math.floor(Math.random()*12+1)
    var randThree = Math.floor(Math.random()*12+1)
    var randFour = Math.floor(Math.random()*12+1)
  
  // Variables to keep track of wins, losses and total
    var playerScore = 0; 
    var wins = 0;
    var losses = 0;
    
    $('#wins').text(wins);
    $('#losses').text(losses);
  
  // Reset game
    function reset(){
      randomTargetNum = Math.floor(Math.random()*102+19);

      console.log(randomTargetNum)

      $('#scoreToMatch').text(randomTargetNum);

      randOne = Math.floor(Math.random()*12+1);
      randTwo = Math.floor(Math.random()*12+1);
      randThree = Math.floor(Math.random()*12+1);
      randFour = Math.floor(Math.random()*12+1);
      playerScore = 0;

      $('#totalScore').text(playerScore);
    } 

  // Display wins
  function winner(){
    alert("You did it! Well done!");
    wins++; 
    $('#wins').text(wins);
    reset();
  }

  // Display losses
  function loser(){
    alert ("You lose! Try again.");
    losses++;
    $('#losses').text(losses);
    reset()
  }

  // Clicking Crystals
    $('.imageOne').on ('click', function(){
      playerScore = playerScore + randOne;
      console.log("New playerScore = " + playerScore);
      $('#totalScore').text(playerScore); 
            //Win & lose conditions
          if (playerScore == randomTargetNum){
            winner();
          }
          else if ( playerScore > randomTargetNum){
            loser();
          }   
    })

    $('.imageTwo').on ('click', function(){
      playerScore = playerScore + randTwo;
      console.log("New playerScore = " + playerScore);
      $('#totalScore').text(playerScore); 
          if (playerScore == randomTargetNum){
            winner();
          }
          else if ( playerScore > randomTargetNum){
            loser();
          } 
    })

    $('.imageThree').on ('click', function(){
      playerScore = playerScore + randThree;
      console.log("New playerScore = " + playerScore);
      $('#totalScore').text(playerScore);
  
          if (playerScore == randomTargetNum){
            winner();
          }
          else if ( playerScore > randomTargetNum){
            loser();
          } 
    })

    $('.imageFour').on ('click', function(){
      playerScore = playerScore + randFour;
      console.log("New playerScore = " + playerScore);
      $('#totalScore').text(playerScore); 
        
          if (playerScore == randomTargetNum){
            winner();
          }
          else if ( playerScore > randomTargetNum){
            loser();
          }
    });
});
