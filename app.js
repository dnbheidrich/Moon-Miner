let cheese = 0;
let cheeseCounterElem = document.getElementById("cheeseCounter")
let totalMod = 0

let clickUpgrades = {
  pickaxes: {
    price: 25,
    quantity: 0,
    multiplier: 1
  },

  sledgehammmers: {
    price: 50,
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

function addMod(){
  
}



function update(){
  cheeseCounterElem.innerHTML = cheese
}


function buyPickAxe(){
  if(clickUpgrades.pickaxes.price <= cheese){
    cheese -= clickUpgrades.pickaxes.price
    clickUpgrades.pickaxes.price += 10
    
    
    
  
  }
  
}
function buySledge(){
  if(clickUpgrades.sledgehammmers.price <= cheese){
    cheese -= clickUpgrades.sledgehammmers.price
    clickUpgrades.sledgehammmers.price += 20
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



