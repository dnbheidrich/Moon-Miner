let moonTarget ={
 cheese : 0,
 item: [],
}

let totalModifier = 1;

let clickUpgrades = {
  pickaxes: {
    price: 50,
    quantity: 0,
    multiplier: 1
  },

  sledgehammmers: {
    price: 100,
    quantity: 0,
    multiplier: 5
  }
};

let automaticUpgrades = {
  rovers: {
    price: 200,
    quantity: 0,
    multiplier: 30
  },

  drone: {
    price: 350,
    quantity: 0,
    multiplier: 50
  }
};

// totalModifier!!!!!!!!!!!!!!!!!ANCHOR 
function moonClick(){
  moonTarget.cheese += totalModifier
  update()
  
  
  
}

function addMods(){
  for(let i = 0; i < moonTarget.item.length; i++){
    totalModifier += moonTarget.item[i].multiplier
  }
  console.log(totalModifier)
  update()
  return totalModifier
}

function update(){
  // help fix pls 
  let pickAxePriceElem = document.getElementById("axePrice")
  let sledgehammerPriceElem = document.getElementById("hammerPrice")
  let roverPriceElem = document.getElementById("roverPrice")
  let dronePriceElem = document.getElementById("dronePrice")
let pickAxeMultiplier = document.getElementById("axeMod")
let sledgeMultiplier = document.getElementById("sledgeMod")
let roverMultiplier = document.getElementById("roverMod")
let droneMultiplier = document.getElementById("droneMod")
let pickaxeCounterElem = document.getElementById("pickAxeCounter")
let sledgeCounterElem = document.getElementById("sledgeCounter")
let roverCounterElem = document.getElementById("roverCounter")
let droneCounterElem = document.getElementById("droneCounter")
let multiElem = document.getElementById("multiplier")
let cheeseCounterElem = document.getElementById("cheeseCounter")
cheeseCounterElem.innerHTML = moonTarget.cheese.toString()
pickaxeCounterElem.innerText = clickUpgrades.pickaxes.quantity.toString()
sledgeCounterElem.innerText = clickUpgrades.sledgehammmers.quantity.toString()
roverCounterElem.innerText = automaticUpgrades.rovers.quantity.toString()
droneCounterElem.innerText = automaticUpgrades.drone.quantity.toString()
pickAxeMultiplier.innerText = clickUpgrades.pickaxes.multiplier.toString()
sledgeMultiplier.innerText = clickUpgrades.sledgehammmers.multiplier.toString()
droneMultiplier.innerText = automaticUpgrades.drone.multiplier.toString()
roverMultiplier.innerText = automaticUpgrades.rovers.multiplier.toString()
multiElem.innerText = totalModifier.toString()
pickAxePriceElem.innerText = clickUpgrades.pickaxes.price.toString()
sledgehammerPriceElem.innerText = clickUpgrades.sledgehammmers.price.toString()
roverPriceElem.innerText = automaticUpgrades.rovers.price.toString()
dronePriceElem.innerText = automaticUpgrades.drone.price.toString()

achievements()

  
  
}

function buyPickAxe(){
  if(clickUpgrades.pickaxes.price <= moonTarget.cheese){
    clickUpgrades.pickaxes.quantity++
    totalModifier++
    // moonTarget.item.push(clickUpgrades.pickaxes)
    moonTarget.cheese -= clickUpgrades.pickaxes.price
    clickUpgrades.pickaxes.price += 10
    
    
    // addMods()
    update();    
  }
}

function buySledge(){
  if(clickUpgrades.sledgehammmers.price <= moonTarget.cheese){
    clickUpgrades.sledgehammmers.quantity++
    totalModifier += clickUpgrades.sledgehammmers.multiplier
    
    // moonTarget.item.push(clickUpgrades.sledgehammmers)
    moonTarget.cheese -= clickUpgrades.sledgehammmers.price
    clickUpgrades.sledgehammmers.price += 20
    // addMods()
    update()
  }
}

function buyRover(){
  if(automaticUpgrades.rovers.price <= moonTarget.cheese){
    automaticUpgrades.rovers.quantity++
    //  moonTarget.item.push(automaticUpgrades.rovers)
    moonTarget.cheese -= automaticUpgrades.rovers.price
    automaticUpgrades.rovers.price += 50
    update()
    setInterval(() => {
      moonTarget.cheese += automaticUpgrades.rovers.multiplier
      update()
    }, 3000)
    update()
    
  }
}

function buyDrone(){
  if(automaticUpgrades.drone.price <= moonTarget.cheese){
    automaticUpgrades.drone.quantity++
    moonTarget.cheese -= automaticUpgrades.drone.price
    automaticUpgrades.drone.price += 100
    update()
    // moonTarget.item.push(automaticUpgrades.drone)
    setInterval(() => {
      moonTarget.cheese += automaticUpgrades.drone.multiplier
      update()
    }, 3000)
    update()
  }
}

function achievements(){
  if(moonTarget.cheese == 100000){
    
    alert("Congrats!")
  }
  
  
}

let moonTargetElem = document.getElementById("moon")
function mDown() {
 document.getElementById("moon").style.color = "black"
}

function mUp() {
  
document.getElementById("moon").style.color = "white"
}

