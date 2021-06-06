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

const myprofile = ["cherry", 16];

const massege3 = `配列名前${myprofile[0]}で${myprofile[1]}歳です`;
console.log(massege3);
//分割代入（配列の場合）
const [name, age] = myprofile;
const massege4 = `分割代入の名前${name}で${age}歳です`;

console.log(massege4);
