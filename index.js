// Code your solution here
const findMatching = (array, string) => {
  return array.filter(name => name.toLowerCase() === string.toLowerCase())
}

const fuzzyMatch = (array, string) => {
    return array.filter(name => name[0].toUpperCase() === string[0].toUpperCase())
}

const matchName = (drivers, string) => {
    return drivers.filter(driver => driver.name.toLowerCase() === string.toLowerCase())
}
