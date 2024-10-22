module.exports = function check(str, bracketsConfig) {
  let objBrackets = {};
  let openBrackets = []; 
  let sameBrackets = [];

  bracketsConfig.forEach(pair => {
    objBrackets[pair[1]] = pair[0]; 
    openBrackets.push(pair[0]); 
    if (pair[0] === pair[1]) sameBrackets.push(pair[0]); 
  });

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let current = str[i];

  
    if (openBrackets.includes(current)) {
      if (sameBrackets.includes(current)) {
        if (stack[stack.length - 1] === current) {
          stack.pop();
        } else {
          stack.push(current);
        }
      } else {
        stack.push(current);
      }
    } else {
      if (stack.length === 0 || stack.pop() !== objBrackets[current]) {
        return false;
      }
    }
  }

  return stack.length === 0; 
}
