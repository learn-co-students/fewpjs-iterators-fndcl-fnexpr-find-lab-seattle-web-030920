const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(records) {
  let record = records.find(record => record.result === "W")
  return !!record ? record.year : undefined
}
