// Your task is to sum the differences between consecutive pairs in the array in descending order.
function sumOfDifferences(arr) {
    if (arr.length==0)
      return 0
    arr.sort((a,b)=>a-b)
    return arr[arr.length-1]-arr[0]
    }