const table = {
    0 : 'zero',
    1 : 'one',
    2 : 'two',
    3 : 'three',
    4 : 'four',
    5 : 'five',
    6 : 'six',
    7 : 'seven',
    8 : 'eight',
    9 : 'nine',
    10: 'ten',
    11 : 'eleven',
    12 : 'twelve',
    13 : 'thirteen',
    14 : 'fourteen',
    15 : 'fifteen',
    16 : 'sixteen',
    17 : 'seventeen',
    18 : 'eighteen',
    19 : 'nineteen',
    20 : 'twenty',
    30 : 'thirty',
    40 : 'forty',
    50 : 'fifty',
    60 : 'sixty',
    70 : 'seventy',
    80 : 'eighty',
    90 : 'ninety'
  }

module.exports = function toReadable (number) {
    let str = number.toString()
    let a = str % 100
    let units = a % 10
    let dozens = a - units
    let hundred = Math.floor(str / 100)
    let unique = str.slice(1)
    for (let key in table) {
       if(str.length == 1 && str == key) {
        return `${table[units]}`
     } else if (str.length == 2 && str.startsWith('1') && str == key){
        return `${table[key]}`
      } else if (str.length == 2 && str.endsWith('0')) {
        return `${table[str.slice(0)]}`
      }
      else if (str.length == 2 && !str.startsWith('1')) {
        return `${table[dozens]} ${table[units]}`
      } 
      else if (str.length == 3 && str[1] == '0' && str.endsWith('0')) {
        return `${table[hundred]} hundred`
      }
      else if (str.length == 3 && str[1] == '0') {
      return `${table[hundred]} hundred ${table[units]}`
      } 
      else if (str.length == 3 && str.endsWith('0')) {
      return `${table[hundred]} hundred ${table[dozens]}`
      } else if (str.length == 3 && str[1] == '1') {
      return `${table[hundred]} hundred ${table[str.slice(1)]}`   }
      else if (str.length == 3) {
      return `${table[hundred]} hundred ${table[dozens]} ${table[units]}`
    } 
    }
}
