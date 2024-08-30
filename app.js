// 1 - Masala

// Hafta kunlarini chiqaradi.


// {
//     function getWeekday(dayNumber) {
//         let dayName;
      
//         switch (dayNumber) {
//           case 1:
//             dayName = "Dushanba";
//             console.log(dayName)
//             break;
//           case 2:
//             dayName = "Seshanba";
//             console.log(dayName)
//             break;
//           case 3:
//             dayName = "Chorshanba";
//             console.log(dayName)
//             break;
//           case 4:
//             dayName = "Payshanba";
//             console.log(dayName)
//             break;
//           case 5:
//             dayName = "Juma";
//             console.log(dayName)
//             break;
//           case 6:
//             dayName = "Shanba";
//             console.log(dayName)
//             break;
//           case 7:
//             dayName = "Yakshanba";
//             console.log(dayName)
//             break;
//           default:
//             dayName = "Notog'ri son kiritildi. Iltimos, 1 dan 7 gacha bo'lgan son kiriting.";
//             console.log(dayName)
//         }
      
//         return dayName;
//       }
      
//       getWeekday(7)
// }

// ------------------------------------------------------------------------------------------------------------------

// 2 - Masala

// Baholarni chiqaradi.

// {
//     function getGradeResult(k) {
//         let result;
      
//         switch (k) {
//           case 1:
//             result = "Yomon";
//             break;
//           case 2:
//             result = "Qoniqarsiz";
//             break;
//           case 3:
//             result = "Qoniqarli";
//             break;
//           case 4:
//             result = "Yaxshi";
//             break;
//           case 5:
//             result = "A'lo";
//             break;
//           default:
//             result = "Xato: Iltimos, 1 dan 5 gacha bo'lgan son kiriting.";
//         }
      
//         return result;
//       }
      
//       const k = 4; 
//       console.log(getGradeResult(k));
      
// }

// ------------------------------------------------------------------------------------------------------------


// 3 - Masala

// Kiritilgan oy qaysi faslga tegishli ekanini ko'rsatadi.


// {
//     function getSeason(monthNumber) {
//         let season;
      
//         switch (monthNumber) {
//           case 12:
//           case 1:
//           case 2:
//             season = "Qish";
//             break;
//           case 3:
//           case 4:
//           case 5:
//             season = "Bahor";
//             break;
//           case 6:
//           case 7:
//           case 8:
//             season = "Yoz";
//             break;
//           case 9:
//           case 10:
//           case 11:
//             season = "Kuz";
//             break;
//           default:
//             season = "Xato: Iltimos, 1 dan 12 gacha bo'lgan oy raqamini kiriting.";
//         }
      
//         return season;
//       }
      
//       const monthNumber = 8; 
//       console.log(getSeason(monthNumber));
      
// }

// ------------------------------------------------------------------------------------------------------------


// 4 - Masala

// Qaysi oyda necha kun borligini ko'rsatadi.


// {
//     function getDaysInMonth(monthNumber) {
//         let days;
      
//         switch (monthNumber) {
//           case 1:  
//           case 3: 
//           case 5: 
//           case 7: 
//           case 8:  
//           case 10: 
//           case 12: 
//             days = "31 kun";
//             break;
//           case 4: 
//           case 6: 
//           case 9:  
//           case 11:
//             days = "30 kun";
//             break;
//           case 2: 
//             days = "28 yoki 29 kun";
//             break;
//           default:
//             days = "Xato: Iltimos, 1 dan 12 gacha bo'lgan oy raqamini kiriting.";
//         }
      
//         return days;
//       }
      
//       const monthNumber = 11; 
//       console.log(getDaysInMonth(monthNumber)); 
      
// }

// ----------------------------------------------------------------------------------------------------------

// 5 - Masala

// Amallarni bajaradi. Qo'shish ayirish va shunga oxshash


// {
//     function calculateOperations(a, b, operation) {
//         let result;
      
//         switch (operation) {
//           case 'qoshish':
//             result = a + b;
//             console.log(`Qo'shish: ${a} + ${b} = ${result}`);
//             break;
//           case 'ayirish':
//             result = a - b;
//             console.log(`Ayirish: ${a} - ${b} = ${result}`);
//             break;
//           case 'kopaytirish':
//             result = a * b;
//             console.log(`Ko'paytirish: ${a} * ${b} = ${result}`);
//             break;
//           case 'bolish':
//             if (b !== 0) {
//               result = (a / b).toFixed(2);
//               console.log(`Bo'lish: ${a} / ${b} = ${result}`);
//             } else {
//               console.log("Bo'lish: Xato - nolga bo'lib bo'lmaydi.");
//             }
//             break;
//           default:
//             console.log("Xato: Noto'g'ri amal tanlandi. Iltimos, 'qoshish', 'ayirish', 'kopaytirish' yoki 'bolish' amalini tanlang.");
//         }
//       }
      
//       const a = 10;
//       const b = 5;
      
//       calculateOperations(a, b, 'qoshish');  
//       calculateOperations(a, b, 'ayirish');    
//       calculateOperations(a, b, 'kopaytirish'); 
//       calculateOperations(a, b, 'bolish');     
//       calculateOperations(a, b, 'unknown');    
      
// }

// ---------------------------------------------------------------------------------------------------------

// 6 - Masala

// Kesmani metrlarda ifodolaydi


// {
// let birlik = parseInt(prompt("Uzunlik birligini tanlang (1 - desimetr, 2 - kilometr, 3 - metr, 4 - millimetr, 5 - santimetr):"));
// let uzunlik = parseFloat(prompt("Uzunlikni kiriting:"));

// let uzunlikMetrlarda;

// switch (birlik) {
//     case 1: 
//         uzunlikMetrlarda = uzunlik / 10;
//         break;
//     case 2: 
//         uzunlikMetrlarda = uzunlik * 1000;
//         break;
//     case 3: 
//         uzunlikMetrlarda = uzunlik;
//         break;
//     case 4:
//         uzunlikMetrlarda = uzunlik / 1000;
//         break;
//     case 5:
//         uzunlikMetrlarda = uzunlik / 100;
//         break;
//     default:
//         alert("Noto'g'ri birlik tanlandi!");
//         uzunlikMetrlarda = null; 
// }

// if (uzunlikMetrlarda !== null) {
//     alert("Uzunlik metrlarda: " + uzunlikMetrlarda + " m");
// }

// }

// ------------------------------------------------------------------------------------------------------------------

// 7 - Masala

// Og'irlik olchovlarini kilogramga o'giradi.


// {
// let birlik = parseInt(prompt("Og'irlik birligini tanlang (1 - kilogramm, 2 - milligramm, 3 - gramm, 4 - tonna, 5 - sentner):"));
// let ogirlik = parseFloat(prompt("Og'irlikni kiriting:"));

// let ogirlikKilogrammlarda;

// switch (birlik) {
//     case 1: 
//         ogirlikKilogrammlarda = ogirlik;
//         break;
//     case 2: 
//         ogirlikKilogrammlarda = ogirlik / 1e6; 
//         break;
//     case 3: 
//         ogirlikKilogrammlarda = ogirlik / 1000; 
//         break;
//     case 4: 
//         ogirlikKilogrammlarda = ogirlik * 1000; 
//         break;
//     case 5: 
//         ogirlikKilogrammlarda = ogirlik * 100; 
//         break;
//     default:
//         alert("Noto'g'ri birlik tanlandi!");
//         ogirlikKilogrammlarda = null; 
// }

// if (ogirlikKilogrammlarda !== null) {
//     alert("Og'irlik kilogrammlarda: " + ogirlikKilogrammlarda + " kg");
// }

// }

// ------------------------------------------------------------------------------------------------------

// 8 - Masala

// Sanani ko'rsatadi


// {
// let d = parseInt(prompt("Kun kiriting (1-31):"));
// let m = parseInt(prompt("Oy kiriting (1-12):"));

// let oyNomi;

// switch (m) {
//     case 1:
//         oyNomi = "yanvar";
//         break;
//     case 2:
//         oyNomi = "fevral";
//         break;
//     case 3:
//         oyNomi = "mart";
//         break;
//     case 4:
//         oyNomi = "aprel";
//         break;
//     case 5:
//         oyNomi = "may";
//         break;
//     case 6:
//         oyNomi = "iyun";
//         break;
//     case 7:
//         oyNomi = "iyul";
//         break;
//     case 8:
//         oyNomi = "avgust";
//         break;
//     case 9:
//         oyNomi = "sentyabr";
//         break;
//     case 10:
//         oyNomi = "oktyabr";
//         break;
//     case 11:
//         oyNomi = "noyabr";
//         break;
//     case 12:
//         oyNomi = "dekabr";
//         break;
//     default:
//         alert("Noto'g'ri oy kiritildi! Iltimos, 1 dan 12 gacha bo'lgan oy raqamini kiriting.");
//         oyNomi = null; 
// }

// if (oyNomi !== null) {
//     alert(d + " " + oyNomi); 
// }

// }

// ----------------------------------------------------------------------------------------------------------

// 9 - Masala

// berilgan sanadan keyingi sanani korsatadi.


// {
// const oylar = [
//     "yanvar", "fevral", "mart", "aprel", "may", "iyun",
//     "iyul", "avgust", "sentyabr", "oktyabr", "noyabr", "dekabr"
// ];

// let d = parseInt(prompt("Kun kiriting (1-31):"));
// let m = parseInt(prompt("Oy kiriting (1-12):"));

// switch (m) {
//     case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//         if (d === 31) {  
//             d = 1;
//             m = m === 12 ? 1 : m + 1; 
//         } else {
//             d += 1; 
//         }
//         break;
//     case 4: case 6: case 9: case 11:
//         if (d === 30) {  
//             d = 1;
//             m += 1; 
//         } else {
//             d += 1; 
//         }
//         break;
//     case 2:
//         if (d === 28) {
//             d = 1;
//             m += 1;  
//         } else if (d < 28) {
//             d += 1; 
//         } else {
//             alert("Noto'g'ri kun kiritildi! Fevral oyida faqat 28 kun mavjud.");
//             d = null;  
//         }
//         break;
//     default:
//         alert("Noto'g'ri oy kiritildi! Iltimos, 1 dan 12 gacha bo'lgan oy raqamini kiriting.");
//         d = null; 
// }

// if (d !== null) {
//     let oyNomi = oylar[m - 1];  
//     alert(d + " " + oyNomi); 
// }

// }

// ----------------------------------------------------------------------------------------------------------

// 10 - Masala

// Robot harakati holatini korsatadi.


// {
// let Y = prompt("Robotning dastlabki yo'nalishini kiriting (s, j, g, q):").toLowerCase();

// let K = parseInt(prompt("Buyruqni kiriting (0 - davom ettir, 1 - chapga buril, 2 - o'nga buril):"));

// switch (Y) {
//     case 's': 
//         switch (K) {
//             case 0: 
//                 Y = 's';
//                 break;
//             case 1: 
//                 Y = 'g';
//                 break;
//             case 2:  
//                 Y = 'q';
//                 break;
//             default:
//                 alert("Noto'g'ri buyruq kiritildi! Iltimos, 0, 1 yoki 2 kiritish kerak.");
//                 Y = null;
//                 break;
//         }
//         break;
//     case 'j': 
//         switch (K) {
//             case 0:  
//                 Y = 'j';
//                 break;
//             case 1: 
//                 Y = 'q';
//                 break;
//             case 2:  
//                 Y = 'g';
//                 break;
//             default:
//                 alert("Noto'g'ri buyruq kiritildi! Iltimos, 0, 1 yoki 2 kiritish kerak.");
//                 Y = null;
//                 break;
//         }
//         break;
//     case 'g': 
//         switch (K) {
//             case 0: 
//                 Y = 'g';
//                 break;
//             case 1:  
//                 Y = 'j';
//                 break;
//             case 2:  
//                 Y = 's';
//                 break;
//             default:
//                 alert("Noto'g'ri buyruq kiritildi! Iltimos, 0, 1 yoki 2 kiritish kerak.");
//                 Y = null;
//                 break;
//         }
//         break;
//     case 'q':  
//         switch (K) {
//             case 0: 
//                 Y = 'q';
//                 break;
//             case 1:  
//                 Y = 's';
//                 break;
//             case 2:  
//                 Y = 'j';
//                 break;
//             default:
//                 alert("Noto'g'ri buyruq kiritildi! Iltimos, 0, 1 yoki 2 kiritish kerak.");
//                 Y = null;
//                 break;
//         }
//         break;
//     default:
//         alert("Noto'g'ri yo'nalish kiritildi! Iltimos, 's', 'j', 'g' yoki 'q' kiritish kerak.");
//         Y = null;
//         break;
// }


// if (Y === 's') {
//     alert("Robotning yangi yo'nalishi: Shimol");
// }
// else if(Y === 'q'){
//     alert("Robotning yangi yo'nalishi: Sharq")
// }
// else if(Y === 'j'){
//     alert("Robotning yangi yo'nalishi: Janub")
// }else if(Y === 'g'){
//     alert("Robotning yangi yo'nalishi: G'arb")
// }
// else{
//     alert("O'yin yakuniga yetdi.")
// }

// }

// -------------------------------------------------------------------------------------------------------

// Qoshimcha Masalalar

// 11 - Masala

// Sana kiritilsa necha kun o'tganini korsatadi.



// {
//     // Oylar sonini va har bir oyda necha kun borligini aniqlash
// const kunlarOyda = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // Har bir oy uchun kunlar soni

// // Foydalanuvchidan kun va oyni kiritishni so'rash
// let d = parseInt(prompt("Kun kiriting (1-31):"));
// let m = parseInt(prompt("Oy kiriting (1-12):"));

// // Kiritilgan sana bo'yicha yil boshidan boshlab necha kun o'tganini hisoblash
// let kunYilBoshidan = 0;

// // Kiritilgan oyga qadar bo'lgan kunlar sonini hisoblash
// for (let i = 0; i < m - 1; i++) {
//     kunYilBoshidan += kunlarOyda[i];
// }

// // So'nggi oyda kiritilgan kunlarni qo'shish
// kunYilBoshidan += d;

// // Natijani chiqarish
// alert("Yil boshidan boshlab o'tgan kunlar soni: " + kunYilBoshidan);

// }