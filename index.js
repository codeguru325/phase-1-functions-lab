 
function distanceFromHqInBlocks(pickupBlock) {
        const hqBlock = 42; // Scuber headquarters is on 42nd Street
        if (pickupBlock < hqBlock) {
           let result = hqBlock - pickupBlock;
           return result
        } else {
          let result =  pickupBlock - hqBlock;
          return result
        }
      }
      

function distanceFromHqInFeet(pickupBlock){
     const val = distanceFromHqInBlocks(pickupBlock)
     const locCus = val * 264
     return locCus
   
 }

 function distanceTravelledInFeet(start, destination){

    const disInBlock = Math.abs(start-destination)
    const disInFeet = disInBlock * 264
    return disInFeet
 }

function calculatesFarePrice(start, destination){

   const fareFeet = distanceTravelledInFeet( start, destination)
   if (fareFeet <= 400){
      return 0
   }else if(fareFeet > 400 && fareFeet <=2000) {
      return (fareFeet - 400) * 2 / 100; 

   }else if (fareFeet > 2000 && fareFeet <= 2500){
      return 25
   }else if (fareFeet > 2500){
      return "cannot travel that far"
   }
}