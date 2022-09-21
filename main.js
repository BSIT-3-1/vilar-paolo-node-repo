function startLoop(numberOfAsterisks) {
    if (numberOfAsterisks % 2 != 0) numberOfAsterisks++;
    
    numberOfAsterisks = numberOfAsterisks / 2;
    
    for (let x = 1; x <= numberOfAsterisks; x++){
      let spaceCounter = numberOfAsterisks - x;
      console.log(" ".repeat(spaceCounter) + "*".repeat(x) + "*".repeat(x));
    }
    
    for (let x = numberOfAsterisks - 1; x>= 1; x--){
      let spaceCounter = numberOfAsterisks - x;
      console.log(" ".repeat(spaceCounter) + "*".repeat(x) + "*".repeat(x))
    }
  }
  
  startLoop(10);