const drums = document.querySelectorAll(".drum");

drums.forEach(drum => {
    drum.addEventListener("click",function () {
            playSound(drum.className.slice(0,1));
              animateButton(drum.className.slice(0,1));
        }
    );
});

document.addEventListener("keydown", function(event) {
    playSound(event.key);
    animateButton(event.key);
});


function playSound(drumLetter) {
  var audioFileName =  "";
  switch (drumLetter) {
      case "w": audioFileName = "tom-1.mp3"; break;
      case "a": audioFileName =  "tom-2.mp3";break;
      case "s": audioFileName = "tom-3.mp3";break;
      case "d": audioFileName = "tom-4.mp3";break;
      case "j": audioFileName = "snare.mp3";break;
      case "k": audioFileName = "kick-bass.mp3";break;
      case "l": audioFileName = "crash.mp3";break;
      default: break;
  }
  if (audioFileName !== "") {
  var audio = new Audio("./sounds/" + audioFileName);
  audio.play();
}
}


function animateButton(currentKey) {
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout( () => {activeButton.classList.remove("pressed")}, 500);
}
