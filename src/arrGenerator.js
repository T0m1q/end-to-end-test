export default (num) => {
  const arr = []
  for (let index = 0; index < num; index++) {
    arr.push(index + 1)
  }

  return arr
}