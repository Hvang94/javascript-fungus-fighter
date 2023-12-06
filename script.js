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

// ! STATE GLOBAL SCOPE
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
// ! END STATE

// ! EVENT HANDLERS
function arcaneScepterHandler(event) {
  event.preventDefault();

  hitPoints -= arcaneScepter.hpDamage;
  abilityPoints -= arcaneScepter.apCost;

  console.log("AP left:", abilityPoints, "HP left:", hitPoints);
  checkAp();
  checkHp();
  render();
}
function entangleHandler(event) {
  event.preventDefault();

  hitPoints -= entangle.hpDamage;
  abilityPoints -= entangle.apCost;

  console.log("AP left:", abilityPoints, "HP left:", hitPoints);
  checkAp();
  checkHp();
  render();
}
function dragonBladeHandler(event) {
  event.preventDefault();

  hitPoints -= dragonBlade.hpDamage;
  abilityPoints -= dragonBlade.apCost;

  console.log("AP left:", abilityPoints, "HP left:", hitPoints);
  checkAp();
  checkHp();
  render();
}

function starFireHandler(event) {
  event.preventDefault();

  hitPoints -= starFire.hpDamage;
  abilityPoints -= starFire.apCost;

  console.log("AP left:", abilityPoints, "HP left:", hitPoints);
  checkAp();
  checkHp();
  render();
}
// ! END EVENT HANDLERS

// ! RENDER
function render() {
  let apText = document.getElementsByClassName("ap-text")[0];
  let hpText = document.getElementsByClassName("hp-text")[0];
  apText.innerText = abilityPoints + " AP";
  hpText.innerText = hitPoints + " HP";

  let apMeter = document.getElementById("ap-meter");
  let hpMeter = document.getElementById("hp-meter");
  apMeter.value = abilityPoints;
  hpMeter.value = hitPoints;
}
function checkHp() {
  if (hitPoints < 0) {
    hitPoints = 0;
    let dead = document.getElementsByClassName("freaky-fungus walk")[0];
    dead.classList = "freaky-fungus dead";

  }
}

function checkAp() {
  if (abilityPoints < 0) {
    abilityPoints = 0;
    let jump = document.getElementsByClassName("freaky-fungus walk")[0];
    jump.classList = "freaky-fungus jump";
    let disableArcane = document.getElementsByClassName("attack-btn arcane-scepter")[0]
    let disableEntangle = document.getElementsByClassName("attack-btn entangle")[0]
    let disableDragonBlade = document.getElementsByClassName("attack-btn dragon-blade")[0]
    let disableStarFire = document.getElementsByClassName("attack-btn star-fire")[0]

    disableArcane.disabled = true;
    disableEntangle.disabled = true;
    disableDragonBlade.disabled = true;
    disableStarFire.disabled = true;

  }
}

// ! ALL HTML items are objects

onReady();
