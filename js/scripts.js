var vowels = ["a", "e", "i", "o", "u"];

var pigLatin = [];

var vowelStart = function(sent){
  var sentenceArray = sent.split(' ');

  sentenceArray.forEach(function(word){
    var pigWord = "";

      if (vowels.includes(word[0]) === false){
      var indexC = 0;
      while (vowels.includes(word[indexC]) === false) {
        indexC++;        
      }
      alert(word[indexC]);

      if(word[indexC-1] === "q" && word[indexC] === "u"){
        alert("q has been encountered");
        pigWord = word.slice(indexC+1);
        pigWord = pigWord.concat(word.slice(0, indexC+1) + "ay");
        pigLatin.push(pigWord);
      } 
      
      
      else {
        pigWord = word.slice(indexC);
        pigWord = pigWord.concat(word.slice(0, indexC) + "ay");
        pigLatin.push(pigWord);
      }
    }
    else { //(vowels.includes(word[0])) 
      pigWord = word.concat("way");
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