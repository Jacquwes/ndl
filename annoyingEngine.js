let annoyances = [
  {
    name: "ping",
    enabled: false,
    execute: (duration) => console.log("ping"),
  },
  {
    name: "missclick",
    enabled: false,
    execute: (duration) => console.log("missclick"),
  },
];

function annoyingEngine() {
  const timeUntilNextAnnoyance = Math.random() * 10000;
  const randomAnnoyance =
    annoyances[Math.floor(Math.random() * annoyances.length)];
  const annoyanceDuration = Math.random() * 1000;

  setTimeout(() => {
    console.log(
      `Annoying user with ${randomAnnoyance.name} for ${annoyanceDuration}ms`
    );

    randomAnnoyance.enabled = true;
    randomAnnoyance.execute(annoyanceDuration);

    annoyingEngine();
  }, timeUntilNextAnnoyance);
}
