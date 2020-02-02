let moonTarget ={
 cheese : 0,
 item: [],
}
let pickAxePriceElem = document.getElementById("axePrice")
let pickAxeMultiplier = document.getElementById("axeMod")
let sledgeMultiplier = document.getElementById("sledgeMod")
let roverMultiplier = document.getElementById("roverMod")
let droneMultiplier = document.getElementById("droneMod")
let pickaxeCounterElem = document.getElementById("pickAxeCounter")
let sledgeCounterElem = document.getElementById("sledgeCounter")
let roverCounterElem = document.getElementById("roverCounter")
let droneCounterElem = document.getElementById("droneCounter")
let multiElem = document.getElementById("miltiplier")
let cheeseCounterElem = document.getElementById("cheeseCounter")
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
    multiplier: 20
  },

  drone: {
    price: 350,
    quantity: 0,
    multiplier: 30
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
  cheeseCounterElem.innerHTML = moonTarget.cheese
  pickaxeCounterElem.innerText = clickUpgrades.pickaxes.quantity
  sledgeCounterElem.innerText = clickUpgrades.sledgehammmers.quantity
  roverCounterElem.innerText = automaticUpgrades.rovers.quantity
  droneCounterElem.innerText = automaticUpgrades.drone.quantity
  pickAxeMultiplier.innerText = clickUpgrades.pickaxes.multiplier
  sledgeMultiplier.innerText = clickUpgrades.sledgehammmers.multiplier
  droneMultiplier.innerText = automaticUpgrades.drone.multiplier
  roverMultiplier.innerText = automaticUpgrades.rovers.multiplier
  pickAxePriceElem.innerText = clickUpgrades.pickaxes.price
  

  
}


function buyPickAxe(){
  if(clickUpgrades.pickaxes.price <= moonTarget.cheese){
    clickUpgrades.pickaxes.quantity++
    moonTarget.item.push(clickUpgrades.pickaxes)
    moonTarget.cheese -= clickUpgrades.pickaxes.price
    clickUpgrades.pickaxes.price += 10
    
    
    addMods()
    update();

    
    
    
    
     
    
    
  
    
    
  }

}
function buySledge(){
  if(clickUpgrades.sledgehammmers.price <= moonTarget.cheese){
    clickUpgrades.sledgehammmers.quantity++
    moonTarget.item.push(clickUpgrades.sledgehammmers)
    moonTarget.cheese -= clickUpgrades.sledgehammmers.price
    clickUpgrades.sledgehammmers.price += 20
    addMods()
    update()
  }
}
function buyRover(){
  if(automaticUpgrades.rovers.price <= moonTarget.cheese){
    automaticUpgrades.rovers.quantity++
    moonTarget.item.push(automaticUpgrades.rovers)
    moonTarget.cheese -= automaticUpgrades.rovers.price
    automaticUpgrades.rovers.price += 50
    setInterval(() => {
      moonTarget.cheese += automaticUpgrades.drone.multiplier
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
    moonTarget.item.push(automaticUpgrades.drone)
    setInterval(() => {
      moonTarget.cheese += automaticUpgrades.drone.multiplier
      update()
    }, 3000)
    update()
  }
}



