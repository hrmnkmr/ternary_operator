//1,変数の中にtrueまたは、falseが代入された時の処理を作ってください。
var isTrue = true;
var resultText = isTrue ? "Aの処理" : "Bの処理";
console.log(resultText);
console.log(isTrue ? "trueはAの処理です。" : "falseはBの処理です。");
//2,代入された変数の中が5より大きい時にtrueの処理と、5より小さい時にfalseの処理を作ってください。
var num = 4;
if (num < 5) {
	console.log("falseの処理: " + num + " は5より小さい");
} else {
	console.log("trueの処理: " + num + " は5以上");
}
var num = 4;
console.log(num < 5 ? "falseの処理: " + num + " は5より小さい" : "trueの処理: " + num + " は5以上");
//3,代入された変数の中が5より小さい時にtrueの処理と、5より小さい時にfalseの処理を作ってください。
var num = 4;
if (num < 5) {
	console.log("trueの処理: " + num + " は5より小さい");
} else {
	console.log("falseの処理: " + num + " は5以上");
}
var num = 4;
console.log(num < 5 ? "trueの処理: " + num + " は5より小さい" : "falseの処理: " + num + " は5以上");
//4,代入された変数の中が10以上の時にtrueの処理と、10以下の時にfalseの処理を作ってください。
var num = 10;
if (num >= 10) {
	console.log("trueの処理: " + num + " は10以上");
} else {
	console.log("falseの処理: " + num + " は10以下");
}
var num = 10;
console.log(num >= 10 ? "trueの処理: " + num + " は10以上" : "falseの処理: " + num + " は10以下");
//5,代入された変数の中に値が存在する場合はtrue、存在しない場合はfalseの処理にしてください。
var value = "Hello";
if (value) {
	console.log("trueの処理: 値が存在します");
} else {
	console.log("falseの処理: 値が存在しません");
}
var value = "Hello";
console.log(value ? "trueの処理: 値が存在します" : "falseの処理: 値が存在しません");