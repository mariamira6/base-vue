// function createPhoneNumber(numbers) {
//   const par = `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
//   return par;
// }




function createPhoneNumber(numbers) {
  var format = "(xxx) xxx-xxxx";

  for (var i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i]);
    console.log(format);
  }
  return format;
}
createPhoneNumber([0, 3, 4, 5, 7, 9, 5, 2, 1, 6]);
