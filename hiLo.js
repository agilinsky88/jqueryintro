$(document).ready( function(){
  var numAnswer = parseInt(Math.random() * 100);
  var count = 0;
  $("#guessButton").on("click", function(){
    var userGuess = $("#userGuess").val();
    if (userGuess >= 101 || userGuess <= 0) {
      $("#systemAnswer").text("You must guess a number between 1 - 100!").css({color:"#F1A9A0",
                    fontSize: "30px"});
    } else if (isNaN(userGuess)) {
      $("#systemAnswer").text("Please enter a valid number!").css({color: "#F1A9A0",
                    fontSize: "30px"});
    }  else if (userGuess == numAnswer) {
        $("#systemAnswer").text("You got it!").css({
                  color:"#87D37C",
                  fontSize: "30px"
                });
        $("form").hide();
        return 0;
    } else if (userGuess < numAnswer) {
        $("#systemAnswer").text("Your guess is too low.").css({color:"#F1A9A0",
                    fontSize: "30px"});
    } else if (userGuess > numAnswer) {
        $("#systemAnswer").text("Your guess is too high.").css({
                    fontSize: "30px",
                    color:"#F1A9A0"});
      }
    count++
    if (count >= 7){
      $("#systemAnswer").text("Bummer! You're out of tries.");
      $("form").hide();
      return 0;
    }
      $("form")[0].reset("#userGuess");
      userGuess = $("#userGuess").val();
  });
});
