
let cheese = 0;
let playerInv = [];
let clickMod = playerInv.map(i => i.miltiplier)
let multiElem = document.getElementById("miltiplier")
let cheeseCounterElem = document.getElementById("cheeseCounter")
let totalModifier = 0

let clickUpgrades = {
  pickaxes: {
    price: 10,
    quantity: 0,
    multiplier: 1
  },

  sledgehammmers: {
    price: 10,
    quantity: 0,
    multiplier: 3
  }
};

let automaticUpgrades = {
  rovers: {
    price: 100,
    quantity: 0,
    multiplier: 20
  },

  drone: {
    price: 200,
    quantity: 0,
    multiplier: 30
  }
};



function moonClick(){
  cheese++
  update()
  
}

function pickAxeMod(){
  if(clickUpgrades.pickaxes.quantity >= 0){
totalModifier+= clickUpgrades.pickaxes.multiplier

  }
return totalModifier

}



function update(){
  cheeseCounterElem.innerHTML = cheese
  
}


function buyPickAxe(){
  if(clickUpgrades.pickaxes.price <= cheese){
    clickUpgrades.pickaxes.quantity++
    cheese -= clickUpgrades.pickaxes.price
    clickUpgrades.pickaxes.price += 10
    playerInv.push(clickUpgrades.pickaxes)
    update();
    
    
    
     
    
    
  
    
  }
  

}
function buySledge(){
  if(clickUpgrades.sledgehammmers.price <= cheese){
    cheese -= clickUpgrades.sledgehammmers.price
    clickUpgrades.sledgehammmers.price += 20
    
    update()
  }
}
function buyRover(){
  if(automaticUpgrades.rovers.price <= cheese){
    cheese -= automaticUpgrades.rovers.price
    automaticUpgrades.rovers.price += 20

  }
}
function buyDrone(){
  if(automaticUpgrades.drone.price <= cheese){
    cheese -= automaticUpgrades.drone.price
    automaticUpgrades.drone.price += 30
  }
}



