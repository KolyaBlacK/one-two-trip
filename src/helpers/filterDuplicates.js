export const filterDuplicates = (initialArr, prop) => {
  const arr = initialArr.map(obj => obj[prop])
  return arr.filter((obj, pos) => arr.indexOf(obj) === pos)
}
