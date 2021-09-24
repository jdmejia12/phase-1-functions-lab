// Code your solution in this file!
function distanceFromHqInBlocks(blok){
    return Math.abs(42 - blok);
  }
  distanceFromHqInBlocks(50);

  function distanceTravelledInFeet(blok1, blok2){
    return (Math.abs(blok1 - blok2))*264;
  }

  function distanceFromHqInFeet(blok){
    return (Math.abs(42 - blok))* 264;
  }
  
  let lowPrice = 0;
  let howFar = 0;
  function calculatesFarePrice(blok1, blok2){
    howFar = (Math.abs(blok1 - blok2))*264;
    if(howFar <= 400){
      return 0;
    }
    else if (howFar > 400 && howFar<=2000){
      lowPrice = (.02 * (howFar - 400))
      return lowPrice;
    }
    else if(howFar > 2000 && howFar<=2500){
      return 25;
    }
    else if (howFar >2500){
      return 'cannot travel that far'
    }
  }