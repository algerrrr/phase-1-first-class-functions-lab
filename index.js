// Code your solution in this file!
function returnFirstTwoDrivers(drivers){
    let newDrivers = []
    newDrivers.push(drivers[0])
    newDrivers.push(drivers[1])

    console.log(drivers)
    return newDrivers
}

function returnLastTwoDrivers(drivers){
    let newDrivers = []
    let i = drivers.length
    newDrivers.push(drivers[i-2])
    newDrivers.push(drivers[i-1])


    return newDrivers
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num1){
    return function(){
        return num1 * 5
    }
}

function fareDoubler(fare){
    return fare * 2
}

function fareTripler(fare){
    return fare * 3
}

function selectDifferentDrivers(drivers, returnDrivers){
    return returnDrivers(drivers)
}
