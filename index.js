const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
  let sObject = array.find(element => element.result === "W")
  return sObject ? sObject.year : undefined
}
