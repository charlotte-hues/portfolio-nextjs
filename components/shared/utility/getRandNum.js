const getRandNum = (prevNum, maxNum) => {
    let newNum = Math.floor(Math.random() * maxNum)
    while (newNum === prevNum) {
      newNum = Math.floor(Math.random() * maxNum)
    }
    return newNum
  }

export default getRandNum;