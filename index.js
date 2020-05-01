function superbowlWin(arrOfObj){
  let result = arrOfObj.find( record => record.result === "W")
  return result ? result.year : undefined
}