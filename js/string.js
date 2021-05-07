// Stringy string
// P: + integer. R: string, E: size = 6, return '101010'
// Ps: iterate 'size' times, check for last digit, and concat either 0 or 1 
function stringy(size) {
    let str = '1'
    if (size == 0){
      return str;
    } else {
      for (let i = 0; i < size; i++) {
        if (str.charAt(str.length-1) == '1'){
          str = str + '0'
        } else if (str.charAt(str.length-1) == '0'){
          str = str + '1'
        }
      }
    }
    return String(str);
  }
  
  // Number toString
  var a = Number(123).toString();

// P: arr R: string w/ *** b/w each char
// E: ['hey', 'there', 'aaron'] -> a***a***r***o***n***
// Ps: Sort array alpha (localeCompare ?), then store first el in var, then loop over each char and add char + *** to a new var.   
function twoSort(s) {
    let sort = s.sort((a,b) => b > a ? 1 : -1)
    let str = sort[0]
    let result = str.split('').map(x => x + '***').join('')
    return String(result.slice(0,-3))
  }

  function getCount(st) {
    let str = st.toLowerCase();
    let vowelsCount = 0;  
    let strArr = str.split('').filter(str => str.includes('a')||str.includes('e')||str.includes('i')||str.includes('o')||str.includes('u'))     
    return vowelsCount + strArr.length;
};

function alienLanguage(str){
    let words = str.split(' ') // arr of words
    let WORDS = words.map(x => x.toUpperCase()) // arr of capital words
    let result = []
    // 
    for (let i = 0; i < WORDS.length; i++){ // walks each word (i) l-r
      let rev = WORDS[i].split('').reverse().join('') // 'MY' -> ' YM'
      rev = rev.replace(rev[0], rev[0].toLowerCase()) // 'YM' -> 'yM'
      result.push(rev.split('').reverse().join(''))  // 'yM' - 'My'  
    }
    return result.join(' ') // turn arr to str
}

// P: lowercase strings R: boolean
// E: blue bird , blueberry donut ->  returns true
// Ps: slice and check
function feast(beast, dish) {
    let bStart = beast.slice(0,1),
        bEnd = beast.slice(-1);
    let dStart = dish.slice(0,1),
        dEnd = dish.slice(-1);
    return (bStart === dStart && bEnd === dEnd);
  }
  
