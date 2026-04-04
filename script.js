let numOfDrumBtn = document.querySelectorAll(".drum").length;

for (let i = 0; i < numOfDrumBtn; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let btnInnerHTML = this.innerHTML;

    instrumentSound(btnInnerHTML);

    BtnAnimation(btnInnerHTML);
  });
}

document.addEventListener("keypress", function (e) {
  instrumentSound(e.key.toLocaleLowerCase());
  BtnAnimation(e.key.toLocaleLowerCase());
});

function instrumentSound(keyValue) {
  switch (keyValue) {
    case "w":
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      let kickBass = new Audio("./sounds/kick-bass.mp3");
      kickBass.play();
      break;

    case "l":
      let snare = new Audio("./sounds/snare.mp3");
      snare.play(e.key.toLocaleLowerCase());
      break;

    default:
  }
}

function BtnAnimation(currentKey) {
  let activeBtn = document.querySelector("." + currentKey);

  activeBtn.classList.add("pressed");

  setTimeout(function () {
    activeBtn.classList.remove("pressed");
  }, 60);
}
