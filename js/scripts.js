var vowels = ["a", "e", "i", "o", "u"];

var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]

var pigLatin = [];

var vowelStart = function(sent){
  var sentenceArray = sent.split(' ');

  sentenceArray.forEach(function(word){
    var pigWord = "";
      if(vowels.includes(word[0]) === false && consonants.includes(word[0]) === false){
        pigLatin.push(word);
      }
      if(word.charCodeAt([0]) < 65 || 90 < word.charCodeAt([0]) < 97 || word.charCodeAt([0]) > 122){
        pigLatin.push(word);
      }
      // all letters ===  65-90 & 97-122
      else if (vowels.includes(word[0]) === false){
        var indexC = 0;
      while (vowels.includes(word[indexC]) === false) {
        indexC++;        
      }      
        if(word[indexC-1] === "q" && word[indexC] === "u"){
        pigWord = word.slice(indexC+1);
        pigWord = pigWord.concat(word.slice(0, indexC+1) + "ay");
        pigLatin.push(pigWord);
      } else {
        pigWord = word.slice(indexC);
        pigWord = pigWord.concat(word.slice(0, indexC) + "ay");
        pigLatin.push(pigWord);
      }
    }
    else { 
      pigWord = word.concat("way");
      pigLatin.push(pigWord);  
    }    
  });

  // function isLetter(str) {
  //   return str.length === 1 && str.match(/[a-z]/i);
  // }


  return pigLatin.join(" ");
}

$(document).ready(function () {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    window.location.reload();

    var userSentence = $("#input").val();
    alert(vowelStart(userSentence));

    


  });


});