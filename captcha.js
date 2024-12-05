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
  },
];

let validated = false;

function submitStep1(text) {
  const div = document.createElement("div");
  div.style.position = "absolute";
  div.style.left = "50%";
  div.style.top = "50%";
  div.style.transform = "translate(-50%, -50%)";
  div.style.backgroundColor = "white";
  div.style.padding = "20px";
  div.style.border = "1px solid #333";
  div.style.zIndex = 2;
  div.style.boxShadow = "0 0 10px 0 #333";
  div.style.borderRadius = "10px";
  document.body.appendChild(div);

  const h1 = document.createElement("h1");
  h1.innerHTML =
    text ?? "Veuillez écouter l'audio suivant et écrire le prénom entendu";
  div.appendChild(h1);

  const audioIndex = Math.floor(Math.random() * captchas_audio.length);
  const audio = document.createElement("audio");
  audio.controls = true;
  audio.src = captchas_audio[audioIndex].url;
  div.appendChild(audio);

  const input = document.createElement("input");
  input.type = "text";
  input.style.display = "block";
  input.style.width = "100%";
  input.style.marginTop = "20px";
  div.appendChild(input);

  const button = document.createElement("button");
  button.innerHTML = "Valider";
  button.style.display = "block";
  button.style.marginTop = "20px";
  div.appendChild(button);

  button.addEventListener("click", () => {
    if (
      input.value
        .toLowerCase()
        .replace("-", " ")
        .replace("é", "e")
        .replace("è", "e")
        .replace("ë", "e") === captchas_audio[audioIndex].name
    ) {
      document.body.removeChild(div);
      if (!validated) {
        submitStep1("Captcha validé.\nCependant, veuillez réessayer");
        validated = true;
      } else {
        alert("Captcha validé, votre requête va être envoyée.");
      }
    } else {
      alert("Captcha invalide, vous êtes un robot.\nLa page va être rechargée");
      location.reload();
    }
  });
}
