// if-1
/*let a = 4;
if (a > 0) {
  console.log(++a);
} else {
  console.log(a);
}*/

// if-2
/*let a = -7;
if (a > 0) {
  console.log(++a);
} else {
  console.log(a -=2);
}*/

// if-3
/*let a = 0;
if (a > 0) {
  console.log(++a);
} else if (a < 0) {
  console.log((a -= 2));
} else {
  console.log((a = 10));
}*/

// if-4
/*let a = 10;
let b = -20;
let c = -5;
if (a > 0 && b > 0 && c > 0) {
  console.log("3 ta musbat son bor ");
} else if (a > 0 && b < 0 && c > 0) {
  console.log("2 ta musbat son bor");
} else if (a > 0 && b > 0 && c < 0) {
  console.log("2 ta musbat son bor");
} else if (a > 0 && b < 0 && c < 0) {
  console.log("1 ta musbat son bor");
} else if (a < 0 && b < 0 && c < 0) {
  console.log("musbat son yoq");
} else if (a < 0 && b > 0 && c < 0) {
  console.log("1 ta musbat son bor");
} else if (a < 0 && b < 0 && c > 0) {
  console.log("1 ta musbat son bor");
} else if (a < 0 && b > 0 && c > 0) {
  console.log("2 ta musbat son bor");
}*/

// if-5
/*let a = 10;
let b = -20;
let c = -5;
if (a > 0 && b > 0 && c > 0) {
  console.log("3 ta musbat son bor va 0 ta manfiy son bor");
} else if (a > 0 && b < 0 && c > 0) {
  console.log("2 ta musbat son bor va 1 ta manfiy son bor");
} else if (a > 0 && b > 0 && c < 0) {
  console.log("2 ta musbat son bor va 1 ta manfiy son bor");
} else if (a > 0 && b < 0 && c < 0) {
  console.log("1 ta musbat son bor va 2 ta manfiy son bor");
} else if (a < 0 && b < 0 && c < 0) {
  console.log("musbat son yoq  va 3 ta manfiy son bor");
} else if (a < 0 && b > 0 && c < 0) {
  console.log("1 ta musbat son bor va 2 ta manfiy son bor");
} else if (a < 0 && b < 0 && c > 0) {
  console.log("1 ta musbat son bor va 2 ta manfiy son bor");
} else if (a < 0 && b > 0 && c > 0) {
  console.log("2 ta musbat son bor va 1 ta manfiy son bor");
}*/

// if-6
/*let a = 3;
let b = 4;
if (a > b) {
  console.log(a);
} else if (a < b) {
  console.log(b);
} else {
    console.log("Ikkalasi ham teng");
}*/

// if-7
/*let a = 3;
let b = 4;
if (a > b) {
  console.log(b);
} else if (a < b) {
  console.log(a);
} else {
    console.log("Ikkalasi ham teng");
}*/

// if-8
/*let a = 3;
let b = 4;
if (a > b) {
  console.log(a, b);
} else if (a < b) {
  console.log(b, a);
} else {
  console.log("Ikkalasi ham teng");
}*/

// if-9
/*let a = 10;
let b = 17;
console.log(a / a, b * b);*/

// if-10
/*let son1 = +prompt("Birinchi sonni kiriting!");
let son2 = +prompt("Ikkinchi sonni kiriting!");
let result = son1 + son2;
if (son1 == son2) {
  alert(`A = 0, B = 0`);
} else {
  alert(`A = ${result}, B = ${result}`);
}*/

// if-11
/*let son1 = +prompt("Birinchi sonni kiriting!");
let son2 = +prompt("Ikkinchi sonni kiriting!");
if (son1 == son2) {
  alert(`A = 0, B = 0`);
} else if(son1 > son2) {
  alert(`A = ${son1}, B = ${son1}`)
}else{
  alert(`A = ${son2}, B = ${son2}`)
}*/

// if-12
/*let a = 5;
let b = 3;
let c = 7;
if (a < b && c) {
  console.log(a);
} else if (b < a && c) {
  console.log(b);
} else if (c < a && b) {
  console.log(c);
}*/

// if-13
/*let c = 7;
let a = 5;
let b = 3;
if (a < b || a > c && a > b || a < c ) {
  console.log(a);
} else if (b < a || b > c && b > a || b < c) {
  console.log(b);
} else if (c < a || c > b && c > a || c < b) {
  console.log(c);
}*/

// if-14
/*let a = 3;
let b = 4;
let c = 5;
if (a > b, c || b > c ) {
  console.log(a,b,c);
} else if (b > a, c || a > c ) {
  console.log(b,a,c);
} else if(c > b, a || b > a ) {
  console.log(c,b,a);
}*/

// if-15
/*let a = 10;
let b = 4;
let c = 3;
if (a > b, c || b > c ) {
  console.log(a,b,);
} else if (b > a, c || a > c ) {
  console.log(b,a,);
} else if(c > b, a || b > a ) {
  console.log(c,b,);
}*/

// 1-masala
/*let son = prompt("Son kiriting!");
if (son > 0) {
  alert(`1`);
} else if (son == 0) {
  alert(`0`);
} else if (son <0 ) {
  alert(`-1`);
} */

// 2-masala
/*let result;
let a = 5
let b = 2
if (a + b < 4) {
  result = "Below";
} else {
  result = "Over";
}
console.log(result);*/

// 3-masala
/*let son = prompt("Birinchi sonni kiriting!");
let son1 = prompt("Ikkinchi sonni kiriting!");
if (son == son1) {
  alert(`Ular teng`);
} else {
  alert(`Ular teng emas`);
}*/

// 4-masala
/*let son = +prompt("Birinchi sonni kiriting!");
let son1 = +prompt("Ikkinchi sonni kiriting!");
if (son + son1 == 10) {
  alert(`Urraaaa`);
} else {
  alert(`Keyingi safar`);
}*/

// 5-masala
/*let a = prompt("Sonni kiriting!");
if (a / 100 == 0 && a / 400 == 0) {
  alert(`Bu yil kabisa`);
} else {
  alert(`Bu yil kabisa emas`);
}*/

// 6-masala
/*let son = prompt("Sonni kiriting!");
if (son % 2 == 0) {
  alert(`Juft son`);
} else {
  alert(`Toq son`);
}*/

// 7-masala
/*let son = prompt("1 dan 9 gacha raqam kiriting!")
if(son == 1){
  alert(`Bir`)
} else if (son == 2){
  alert(`Ikki`)
}else if (son == 3){
  alert(`Uch`)
}else if (son == 4){
  alert(`Tort`)
}else if (son == 5){
  alert(`Besh`)
}else if (son == 6){
  alert(`Olti`)
}else if (son == 7){
  alert(`Yetti`)
}else if (son == 8){
  alert(`Sakkiz`)
}else if (son == 9){
  alert(`To'qqiz`)
} else {
  alert(`Noto'g'ri raqam kiritdingiz!!!`)
}*/

// 8-masala
/*let son = prompt("Sonni kiriting!");
alert(Boolean(son));
if (son == NaN) {
  alert(`false`);
}*/

// 9-masala
/*let son1 = prompt("Birinchi sonni kiriting!")
let son2 = prompt("Ikkinchi sonni kiriting!")
if(son1 == son2){
  alert(`Teng`)
}else{
  alert(`Teng emas`)
}*/

// 10-masala
/*let yil1 = prompt("Tug'ilgan yilingizni  kiriting!")
let yil2 = prompt("Tug'ilgan yilingizni  kiriting!")
if(yil1>yil2){
  alert(`${yil2} yoshdagi inson katta`)
} else if (yil1<yil2){
  alert(`${yil1} yoshdagi inso katta`)
} else{
  alert(`Ikkala inson ham teng`)
}*/
