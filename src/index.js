import "./styles.css";
//オブジェクト場合
// const myprofile = {
//   name: "cherry",
//   age: 16
// };

// const massege = `名前${myprofile.name}で${myprofile.age}歳です`;
// console.log(massege);

// //分割代入

// const { name, age} = myprofile;
// const massege2 = `分割代入の名前${name}で${age}歳です`;
// console.log(massege2);

//配列の場合

// const myprofile = ["cherry", 16];

// const massege3 = `配列名前${myprofile[0]}で${myprofile[1]}歳です`;
// console.log(massege3);
// //分割代入（配列の場合）
// const [name, age] = myprofile;
// const massege4 = `分割代入の名前${name}で${age}歳です`;

// console.log(massege4);

/**
 *const,let等の変数宣言
 */

//  var val1 = "val変数";
//  console.log(val1);

//  //var 変数は上書き可能
//  val1 = "var変数は上書き可能";
//  console.log(val1);

//  //var　は変数は再宣言可能
//  var val1 = "val変数を再宣言";
//  console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可能
// let val2 = "let変数を再宣言";
// >>Identifier 'val2' has already been declared

// const val3 = "const変数";
// console.log(val3);

// //const変数は上書き不可
// val3 = "const変数を上書き";
// >>"val3" is read-only

//const変数は再宣言不可
// const val3 = "const変数を再宣言";

// //オブジェクトは書き換え可能
// const val4 = {
//   name: "cherry",
//   age: 8
// }
// val4.name = "mee";
// console.log(val4);
// >>{name: "mee", age: 8}

// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);
// >>(3) ["bird", "cat", "monkey"]

/**
 * テンプレート文字列
 */

// const name = "cherry";
// const age = 8;

// //従来の方法
// const massege = "私の名前" + name + "歳は" + age;
// console.log(massege);

// //テンプレート文字列を用いた方法
// const massege2 = `私の名前${name}で歳は${age}`;
// console.log(massege2);

/**
 * アロー関数
 */

//従来の関数
// function func1(str){
//   return str;
// }

//関数を変数にいれて使うこともできる
// const func1 = function(str){
//   return str;
// }
// console.log(func1("func１です"));

// //アロー関数
// const func2 = (str) => str;

// console.log(func2("func2です"))

/**
 * デフォルト値、引数など
 */

// const sayHello = (name="初期値") => console.log(`こんにちは${name}さん`);
// sayHello();
