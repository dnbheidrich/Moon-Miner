let moonTarget ={
 cheese : 0,
 item: [],
}

let multiElem = document.getElementById("miltiplier")
let cheeseCounterElem = document.getElementById("cheeseCounter")
let totalModifier = 1

let clickUpgrades = {
  pickaxes: {
    price: 50,
    quantity: 0,
    multiplier: 1
  },

  sledgehammmers: {
    price: 150,
    quantity: 0,
    multiplier: 5
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
  
}


function buyPickAxe(){
  if(clickUpgrades.pickaxes.price <= moonTarget.cheese){
    clickUpgrades.pickaxes.quantity++
    moonTarget.item.push(clickUpgrades.pickaxes)
    addMods()
    moonTarget.cheese -= clickUpgrades.pickaxes.price
    clickUpgrades.pickaxes.price += 10
    update();
    console.log(moonTarget.item);

    
    
    
    
     
    
    
  
    
    update()
  }

}
function buySledge(){
  if(clickUpgrades.sledgehammmers.price <= moonTarget.cheese){
    moonTarget.item.push(clickUpgrades.sledgehammmers)
    moonTarget.cheese -= clickUpgrades.sledgehammmers.price
    clickUpgrades.sledgehammmers.price += 20
    addMods()
    update()
  }
}
function buyRover(){
  if(automaticUpgrades.rovers.price <= moonTarget.cheese){
    moonTarget.item.push(automaticUpgrades.rovers)
    moonTarget.cheese -= automaticUpgrades.rovers.price
    automaticUpgrades.rovers.price += 20
    setInterval(() => {
      moonTarget.cheese += automaticUpgrades.drone.multiplier
      update()
    }, 3000)
    addMods()
    update()

  }
}
function buyDrone(){
  if(automaticUpgrades.drone.price <= moonTarget.cheese){
    moonTarget.cheese -= automaticUpgrades.drone.price
    automaticUpgrades.drone.price += 30
    update()
    moonTarget.item.push(automaticUpgrades.drone)
    setInterval(() => {
      moonTarget.cheese += automaticUpgrades.drone.multiplier
      update()
    }, 3000)
  }
}



