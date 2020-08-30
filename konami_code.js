const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0;
function init() {
  document.body.addEventListener("keydown", (event) => {
    const key=event.key
      if (key === alphabet[index]) {
           index++;
            if (index === alphabet.length) {
              alert("Congratulations!");
 
      index = 0;
    }
  } else {
    index = 0;
  }
}
}


