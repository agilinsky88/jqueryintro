$(document).ready(function(){
  $("input").last().on("click", function(){
    var userQuestion = $("#question").val();
    var magic8Answers = ["Yes", "No", "Maybe", "Only if your mother approves", "Time will tell", "Ask again", "Forget about it", "I don't know, I'm not Siri"]
    var randomNumber = parseInt(Math.floor(Math.random() * 8));
    $("#userQuestion").text(userQuestion);
    $("#ballAnswers").text(magic8Answers[randomNumber]);
    $("form")[0].reset("#question");
  });
});
