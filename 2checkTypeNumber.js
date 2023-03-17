// function checkTypeNumber = (number) => {
//   if (typeof number != "number") {
//     return "Error: Invalid data type";
//   } else if (number % 2 === 0) {
//     return "GENAP";
//   } else {
//     return "GANJIL";
//   }
// };

function checkTypeNumber(givenNumber) {
  if (typeof givenNumber != "number") {
    return "Error: Invalid data type";
  } else if (givenNumber % 2 === 0) {
    return "GENAP";
  } else {
    return "GANJIL";
  }
}

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());

// function checkTypeNumber(givenNumber) {
//   // tulis kode logicnya

//   if (givenNumber == 10) {
//     checkTypeNumber = "GENAP";
//   } else if (givenNumber == 3) {
//     checkTypeNumber = "GANJIL";
//   } else {
//     checkTypeNumber = "Bro where is the parameter?";
//   }
// }

// // expected result
// // ketika function tersebut dipanggil
// console.log(checkTypeNumber(10)); // output => "GENAP"
// console.log(checkTypeNumber(3)); // output => "GANJIL"
// console.log(checkTypeNumber("3")); // output => "Error:Invalid data type"
// console.log(checkTypeNumber({})); // output => "Error:Invalid data type"
// console.log(checkTypeNumber([])); // output => "Error:Invalid data type"
// console.log(checkTypeNumber()); // output => "Error:Bro where is the parameter?"

// // for (var i = 1; i <= 20; i++) {
// //   if (i % 2 === 0) {
// //     console.log(i, "adalah bilangan genap");
// //   } else {
// //     console.log(i);
// //   }
// // }
