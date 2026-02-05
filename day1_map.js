const map = new Map()

map.set("red" , 100)
map.set("blue", 200)

console.log(map.get("red"))


const nums = [3,5,9];


const numMap = new Map();
const numbers1 =  [8, 12, 20];

for(let i = 0; i < numbers1.length; i++) {
  numMap.set(numbers1[i], i);
}

console.log(numMap.get(20));

