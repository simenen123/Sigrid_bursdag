let funnede_bokstaver = []
let gjettet_navn = ""

function allowDrop(ev) {
    ev.preventDefault();
}
 
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}
 
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  let dropped_word = document.getElementById(data).innerText
  let splitted_word = dropped_word.split("")
  // if (splitted_word[0] == "S"){ 
    // if (funnede_bokstaver.includes("S") == false){
    //   funnede_bokstaver.push("S")
    //   let div_for_bokstaven = document.createElement("div")
    //   let bokstaven = document.createTextNode(splitted_word)
    //   div_for_bokstaven.appendChild(bokstaven)
    //   let current_rad = ev.target
    //   current_rad.appendChild(div_for_bokstaven)
    // }
  // }
  

  //Sjekker riktig navn
  let boxes = document.getElementsByClassName("box")
  let hemmelig_navn = "SIGRID"
  let plasserte_adjektiv = ""
  for (let i = 0; i < boxes.length; i++) {
    plasserte_adjektiv = plasserte_adjektiv + boxes[i].innerText
    // gjettet_navn = gjettet_navn + boxes[i].innerText.charAt(0);
    // console.log(boxes[i].innerText)
  }
  let splitted_adjektiv = plasserte_adjektiv.split("\n")
  let filterded_adjektiv = splitted_adjektiv.filter(function(element){
    return element !== "";
  })
  let input_navn = ""
  for (let i = 0; i < filterded_adjektiv.length; i++){
    input_navn = input_navn + filterded_adjektiv[i].charAt(0)
  }
  if (input_navn == "SIGRID"){
    jsConfetti.addConfetti({
      emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
    }).then(() => jsConfetti.addConfetti())
  }
  console.log(filterded_adjektiv)
  console.log(input_navn)
}

function test(){
    let boxes = document.getElementsByClassName("box-item")
    for (let i = 0; i < boxes.length; i++) {
        let split_text = boxes[i].innerText.split("");
        for (let y = 0; i < split_text.length; i++){
            let 
        }
        boxes[i].innerText = "hello"
        console.log(split_text)
    }
}
window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
});

//confetti

const button = document.querySelector('#button');
const canvas = document.querySelector('#confetti');

const jsConfetti = new JSConfetti();
