document.getElementById("mainButton").addEventListener("click", function () {
  if (document.getElementById("impossibleInput").value.length < 150) {
    alert("Votre requête doit contenir au moins 150 caractères.");
    counter = 0;
    return;
  }

  // Affiche un bouton similaire à des coordonnées aléatoires
  document.getElementById("mainButton").style.display = "none";
  for (var i = 0; i < 10; i++) {
    var button = document.createElement("button");
    button.innerHTML = "Appuyez ici";
    button.style.position = "absolute";
    button.style.zIndex = 1;
    button.classList.add("duplicateButton");
    button.style.left = Math.random() * 100 + "%";
    button.style.top = Math.random() * 100 + "%";
    document.body.appendChild(button);
  }
  // Affiche aussi un timer de 10 secondes
  var h1 = document.createElement("h1");
  h1.innerHTML =
    "Pour vérifier que vous êtes humain, appuyez sur tous les boutons";
  h1.style.position = "absolute";
  h1.style.left = "50%";
  h1.style.top = "10%";
  h1.style.transform = "translate(-50%, -50%)";
  document.body.appendChild(h1);
  var timer = document.createElement("p");
  timer.innerHTML = "5.0";
  timer.style.position = "absolute";
  timer.style.left = "50%";
  timer.style.top = "50%";
  timer.style.transform = "translate(-50%, -50%)";
  document.body.appendChild(timer);
  var time = 10;
  var milliseconds = 0;
  var interval = setInterval(function () {
    if (milliseconds === 0) {
      time--;
      milliseconds = 9;
    } else {
      milliseconds--;
    }
    timer.innerHTML = time + "." + milliseconds;
    if (time === 0 && milliseconds === 0) {
      clearInterval(interval);
      document.body.removeChild(timer);
      document.body.removeChild(h1);
      var buttons = document.getElementsByClassName("duplicateButton");
      // Reload de la page
      alert("Vous êtes un robot, la page va être rechargée");
      location.reload();
    }
  }, 100);
  // Supprime les boutons lorsqu'ils sont cliqués
  var buttons = document.getElementsByClassName("duplicateButton");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      document.body.removeChild(this);
      if (document.getElementsByClassName("duplicateButton").length === 0) {
        clearInterval(interval);
        document.body.removeChild(timer);
        document.body.removeChild(h1);
        submitStep1();
      }
    });
  }
});
