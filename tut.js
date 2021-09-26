/* Take 2 buttons. Name them Cat and Dog.On clicking the cat button show the message "You just got a cat" and on clicking the dog button show the message "You just got a dog". */

const catBtn = document.querySelector(".cat");
const dogBtn = document.querySelector(".dog");
const img = document.querySelector(".img");

const catUrl = "https://aws.random.cat/meow";
const dogUrl = "https://random.dog/woof.json";

const getData = () =>
  fetch(catUrl)
    .then((response) => response.json())
    .then((data) => (img.src = data.file));

const outputDiv = document.querySelector(".output");

catBtn.addEventListener("click", onClickCat);
dogBtn.addEventListener("click", onClickDog);

function onClickCat() {
  outputDiv.innerHTML = "You just got a cat";
  getData();
}

function onClickDog() {
  outputDiv.innerHTML = "You just got a dog";
  getData();
}
