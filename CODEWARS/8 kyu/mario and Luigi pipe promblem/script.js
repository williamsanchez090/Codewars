// Issue
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.
function pipeFix(numbers) {
  let array = []
  for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    array.push(i)
  }
  return array
}
