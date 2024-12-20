let annoyances = [
  {
    name: "ping",
    enabled: false,
    execute: (duration) => enablePing(duration),
  },
  {
    name: "missclick",
    enabled: false,
    execute: (duration) => enableMissclick(duration),
  },
  {
    name: "brokenKeyboard",
    enabled: false,
    execute: (duration) => enableBrokenKeyboard(duration),
  },
];

function annoyingEngine() {
  const timeUntilNextAnnoyance = Math.random() * 5000;
  const randomAnnoyance =
    annoyances[Math.floor(Math.random() * annoyances.length)];
  const annoyanceDuration = Math.random() * 10000;

  setTimeout(() => {
    // Skip if the annoyance is already enabled
    if (randomAnnoyance.enabled) {
      return annoyingEngine();
    }

    console.log(
      `Annoying user with ${randomAnnoyance.name} for ${annoyanceDuration}ms`
    );

    //  Enable the annoyance
    randomAnnoyance.enabled = true;
    randomAnnoyance.execute(annoyanceDuration);

    // Disable the annoyance after the duration
    setTimeout(() => {
      console.log(`Disabling ${randomAnnoyance.name}`);
      randomAnnoyance.enabled = false;
    }, annoyanceDuration);

    annoyingEngine();
  }, timeUntilNextAnnoyance);
}
