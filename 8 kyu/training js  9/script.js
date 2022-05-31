// If you want your code to do a lot of similar work, a loop statement is a good choice. For example, if we need to calculate the cumulative value from 1 to 10, we can write code like this:
const padIt = (string, n) => {
    let result = string
    let i = 0
  
    while (i < n) {
      if (i % 2 === 0) {
        result = `*${result}`
      } else {
        result = `${result}*`
      }
      i += 1
    }
    return result
  }