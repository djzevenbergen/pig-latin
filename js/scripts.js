var vowels = ["a", "e", "i", "o", "u"];

var pigLatin = [];

var vowelStart = function(sent){
  var sentenceArray = sent.split(' ');

  sentenceArray.forEach(function(word){
    if (vowels.includes(word[0])) {
      var pigWord = word.concat("way");
      pigLatin.push(pigWord);
    }
  });
  return pigLatin;
}

//for ()





$(document).ready(function () {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    window.location.reload();

    var userSentence = $("#input").val();
    alert(vowelStart(userSentence));

    


  });


});