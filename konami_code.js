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
function init(e) {
  const key=e.key
  document.body.addEventListener("keydown", (event) => {
    const key=event.key
    if (key === codes[index]) {
    index++;
     if (index === alphabet.length) {
      alert("Hurray!");
 
      index = 0;}
    else{
      index = 0;
    }
  
  
  )
}
