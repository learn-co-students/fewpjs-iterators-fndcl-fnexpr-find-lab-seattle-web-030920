const testVar = {}

function testFunc() {
  return "hi"
}
function superbowlWin(record){
  let result = record.find(obj => obj.result==="W")
  return !!result ? result.year:undefined
}