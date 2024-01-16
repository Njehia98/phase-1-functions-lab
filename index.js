// Code your solution in this file!
function distanceFromHqInBlocks(location){
    let hqLocation =42;
    let distance =Math.abs(location-hqLocation)
    return distance;
    }
    function distanceFromHqInFeet(block){
        let feet=264;
        let hq =42;
    
        let distanceInFeet=Math.abs(block-hq)* feet;
        return distanceInFeet
    }
    function distanceTravelledInFeet(start,destination){
        let feetPerBlock=264;
        let distanceInFeet=Math.abs(destination-start)* feetPerBlock;
    return distanceInFeet;
        
    }
    function calculatesFarePrice(start,destination){
        let feetPerBlock=264;
        let distanceInFeet=Math.abs(destination-start)* feetPerBlock;
        let sample =1;
        let charge=(distanceInFeet-400)*0.02;
    
        if(distanceInFeet<=sample){
            return 0;
        }
    if(distanceInFeet<=400){
        return 0;
    }else if(distanceInFeet<=2000){
        return charge;
    }else if (distanceInFeet<=2500 && distanceInFeet>2000){
        return 25;
    }else if(distanceInFeet>2500){
        return 'cannot travel that far';
    }
    }