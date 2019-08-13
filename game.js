//computer can choose from whole alphabet
<!DOCTYPE html>
<html lang="en-us">

<head>
  <meta charset="UTF-8">
  <title>Psychic Game</title>
</head>

<body>

  <div>
    <p id="directions-text">Press any letter on your keyboard start playing!</p>
    <p id="userchoice-text"></p>
    <p id="computerchoice-text"></p>
    <p id="wins-text"></p>
    <p id="losses-text"></p>
    <p id="guesses left-text"></p>
    <p id="your guesses so far-text"></p>
  </div>

  <script type="text/javascript">
  
    var computerChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

    
    var wins = 0;
    var losses = 0;
    var guessesleft = 10;
    var guessedletters= [];

   
    var directionsText = document.getElementById("directions-text");
    var userChoiceText = document.getElementById("userchoice-text");
    var computerChoiceText = document.getElementById("computerchoice-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesleftText = document.getElementById("guessesleft-text");

    document.onkeyup = function(event) {

      
      var userGuess = event.key;

      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];{
          console.log ("computerChoices")
      }

        if ((computerGuess === computerChoice) ||
           {
          wins++;
        } else if (computerGuess === computerChoice) {
          ties++;
        } else {
          losses++;
        }

       
        directionsText.textContent = "";

        // Display the user and computer guesses, and wins/losses/ties.
        userChoiceText.textContent = "You chose: " + computerGuess;
        computerChoiceText.textContent = "The computer chose: " + computerGuess;
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
    
    };
  </script>

</body>

</html>
