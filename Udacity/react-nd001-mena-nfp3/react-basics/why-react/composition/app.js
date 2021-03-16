const sentence = prompt("Please enter a sentence");

function capitalizeSentence(sentence) {
  return sentence
    // Remove extra white spaces
    .trim()
    // Break sentence into words
    .split(" ")
    // Capitalize the first letter of each word
    .map(
      (word) =>
        word.charAt(0).toUpperCase() + word.substring(1)
    )
    // Join words back into sentence
    .join(" ");
}

const result = capitalizeSentence(sentence);

document.getElementById("result").textContent = result;
