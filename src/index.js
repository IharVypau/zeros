module.exports = function getZerosCount(number) {
  const MULTIPLIER = 5; //2 * 5 = 10
  if (number < 5 ) { return 0; }
  let result = 0;
  while(number > 0){
    number = Math.floor(number / MULTIPLIER );
    result += number;
  }
  return result;
}
