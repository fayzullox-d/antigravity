/** @format */

// /** @format */

// let email = "ali111@gmail.com";

// let hasLeadingOrTrailingSpace = email.startsWith(" ") || email.endsWith(" ");
// let hasAtSymbol = email.includes("@");
// let endsWithCom = email.endsWith(".com");

// if (hasLeadingOrTrailingSpace) {
//   console.log("Natija: email noto'g'ri, chunki bosh joy bor");
// } else if (!hasAtSymbol || !endsWithCom) {
//   console.log(
//     "Natija: email noto'g'ri (@ belgisi yo'q yoki .com bilan tugamayapti)",
//   );
// } else {
//   console.log("Natija: email to'g'ri");
// }

//===============================================================================//

// let fullName = "Ali     Valiyev"; // fullName o'zgaruvchisi e'lon qilindi
// let newFullName = "";

// for (let i of fullName) {
//   if (i === " ") {
//     if (!newFullName.endsWith(" ")) {
//       newFullName += i;
//     }
//   } else {
//     newFullName += i;
//   }
// }
// console.log(newFullName.length);

//===============================================================================//

// 1.Funksiya yasang, ushbu funksiya 2ta argument qabul qilsin va ularning yig’indisini qaytarib bersin.

function sum(x, y) {
  return x + y;
}

// 2.Minutlarni butun son sifatida qabul qilib, uni sekundlarga o’girib beradigan funksiya yasang.
function toSekunds(minutes) {
  return minutes * 60;
}

// 3.Funksiya butun son qabul qiladi. Funksiya ushbu butun sondan keyingi sonni qaytarsin.
function nextInteger(int) {
  return int + 1;
}

// 4-masala: Uchburchakning yuzini hisoblab qaytaruvchi funksiya
function uchburchakYuzi(asos, balandlik) {
  return (asos * balandlik) / 2;
}
