// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

function onReady() {
  console.log("Ready to go!");

  // Make sure you check the index.html file!
  // There are lots of buttons and things ready for you to hook into here!

  // 🧠 Remember
  // - Handle events that ->
  // - Updates state which is ->
  // - Rendered to the DOM
}

// Declaring variables hitPoints, abilityPoints,
// arcaneScepter, entangle, dragonBlade, starFire for out state
let abilityPoints = 100;
let hitPoints = 100;

// All attacks with AP and HP costs
const arcaneScepter = {
  apCost: 12,
  hpDamage: 14,
};
const entangle = {
  apCost: 23,
  hpDamage: 9,
};
const dragonBlade = {
  apCost: 38,
  hpDamage: 47,
};
const starFire = {
  apCost: 33,
  hpDamage: 25,
};

function arcaneScepterHandler(event) {
  event.preventDefault();

  hitPoints -= arcaneScepter.hpDamage;
  abilityPoints -= arcaneScepter.apCost;

  console.log("AP left:", abilityPoints, "HP left:", hitPoints);

  render();
}
function entangleHandler(event) {
  event.preventDefault();

  hitPoints -= entangle.hpDamage;
  abilityPoints -= entangle.apCost;

  console.log("AP left:", abilityPoints, "HP left:", hitPoints);

  render();
}
function dragonBladeHandler(event) {
  event.preventDefault();

  hitPoints -= dragonBlade.hpDamage;
  abilityPoints -= dragonBlade.apCost;

  console.log("AP left:", abilityPoints, "HP left:", hitPoints);
  render();
}

function starFireHandler(event) {
  event.preventDefault();

  hitPoints -= starFire.hpDamage;
  abilityPoints -= starFire.apCost;

  console.log("AP left:", abilityPoints, "HP left:", hitPoints);
  render();
}

function render() {}

onReady();
