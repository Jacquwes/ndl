const captchas_audio = [
  {
    name: "frederic gabriel",
    url: "frederic-gabriel.mp3",
  },
  {
    name: "gaelle",
    url: "gaelle.mp3",
  },
  {
    name: "guillaume",
    url: "guillaume.mp3",
  },
  {
    name: "ludovic",
    url: "ludovic.mp3",
  },
  {
    name: "michel",
    url: "michel.mp3",
  },
  {
    name: "mohamed",
    url: "mohamed.mp3",
  },
  {
    name: "moustafa nicolas",
    url: "moustafa-nicolas.mp3",
  },
  {
    name: "patrick",
    url: "patrick.mp3",
  },
  {
    name: "sylvain",
    url: "sylvain.mp3",
  },
  {
    name: "yoann",
    url: "yoann.mp3",
  }
];

function submitStep1()
{
  var h1 = document.createElement("h1");
  h1.innerHTML = "Pour vérifier que vous êtes humain, écoutez l'audio et répondez à la question";
  h1.style.position = "absolute";
  h1.style.left = "50%";
  h1.style.top = "10%";
  h1.style.transform = "translate(-50%, -50%)";
  document.body.appendChild(h1);

  var audio = document.createElement("audio");
  audio.src = "audio/" + captchas_audio[Math.floor(Math.random() * captchas_audio.length)].url;
  audio.controls = true;
  audio.style.position = "absolute";
  audio.style.left = "50%";
  audio.style.top = "50%";
  audio.style.transform = "translate(-50%, -50%)";
  document.body.appendChild(audio);

  var input = document.createElement("input");
  input.type = "text";
  input.style.position = "absolute";
  input.style.left = "50%";
  input.style.top = "60%";
  input.style.transform = "translate(-50%, -50%)";
  document.body.appendChild(input);

  var button = document.createElement("button");
  button.innerHTML = "Valider";
  button.style.position = "absolute";
  button.style.left = "50%";
  button.style.top = "70%";
  button.style.transform = "translate(-50%, -50%)";
  button.addEventListener("click", function() {
    if (input.value.toLowerCase() === audio.src.split("/")[1].split(".")[0]) {
      document.body.removeChild(h1);
      document.body.removeChild(audio);
      document.body.removeChild(input);
      document.body.removeChild(button);
      submitStep2();
    } else {
      alert("Mauvaise réponse");
    }
  });
  document.body.appendChild(button);
}