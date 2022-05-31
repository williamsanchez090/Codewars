// In lesson #11, we learned that for loop can traverse the array. If we want to traverse an object, we can use the variant of the for: for..in, it can traverse all the keys of the object. an example:
function giveMeFive(obj){
    let arr=[]
    for (let key in obj){
    if (key.length === 5)
      arr.push(key)
    if (obj[key].length === 5)
      arr.push(obj[key])
    }
    return arr
  }