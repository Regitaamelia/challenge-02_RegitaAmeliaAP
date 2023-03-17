//changeWord
function changeWord(selectedText, changedText, text) {
  return text.replace(selectedText, changedText);
}

const word1 = "Andini sangat mencintai kamu selamanya";
const word2 =
  "Gunung Bromo tak akan mampu menggambarkan besarnya cintaku padamu";

console.log(changeWord("mencintai", "membenci", word1));
console.log(changeWord("Bromo", "Semeru", word2));
