const ftoc = function(temp) {
  celsius = ((temp - 32) * (5/9))
  celsius = Math.round(celsius * 10)/10
  return celsius
}

const ctof = function(temp) {
  fahr = (temp * (9/5) + 32)
  fahr = Math.round(fahr * 10)/10
  return fahr
}

module.exports = {
  ftoc,
  ctof
}
