

function distanceFromHqInBlocks(currentBlock){
        return Math.abs(currentBlock - 42);
}
distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);

function distanceFromHqInFeet(disFromHq){
    return Math.abs((disFromHq - 42)* 264);
}
distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInFeet(234);

function distanceTravelledInFeet(begin, end){
    return Math.abs((begin - end)* 264)
}
distanceTravelledInFeet(43, 48);
distanceTravelledInFeet(50, 60);
distanceTravelledInFeet(34, 28);

function calculatesFarePrice(start, destination){
    if (Math.abs ((start - destination)*264) <= 400){
            return 0
    }
    else if (Math.abs ((start - destination) * 264) > 400 && Math.abs ((start - destination) * 264) <= 2000){
        return Math.abs ((((start - destination) * 264) - 400) * 0.02 )
    }
    else if (Math.abs((start - destination)* 264) > 2000 && (Math.abs((start - destination)* 264) <=2500) ){
        return 25
    }
    else {
        return 'cannot travel that far'
    }

}
calculatesFarePrice(43, 44);
calculatesFarePrice(34, 32);
calculatesFarePrice(50, 58);
calculatesFarePrice(34, 24);