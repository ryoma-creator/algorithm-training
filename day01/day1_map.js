// var twoSum = function(nums, target) {
//     const map = new Map();
  
//     for (let i = 0; i < nums.length; i++) {
//       const x = nums[i];
//       const need = target - x;
  
//       if (map.has(need)) return [map.get(need), i];
  
//       map.set(x, i);
//     }
//   };
  
//   console.log(twoSum([2,7,11,15], 9)); // [0,1]


  // EN: Given nums = [2,7,11,15], print all values.
// JP: nums = [2,7,11,15] の値をすべて表示せよ。


// EN: Given nums = [2,7,11,15], print "index:value".
// JP: nums = [2,7,11,15] を "index:value" 形式で表示せよ。

// const nums = [2,7,11,15];
// for (let i = 0; i < nums.length; i++){
//   console.log(i + ":" + nums[i]);
// }


// EN: Given target=9 and x=2, compute need so that x + need = target.
// JP: target=9 と x=2 のとき、x + need = target となる need を求めよ。


// const target=9
// const x=2

// const need = target - x;
// console.log(need);


// EN: Create a Map and store (2->0), (7->1). Print index of 7.
// JP: Mapを作り (2->0), (7->1) を保存し、7のindexを表示せよ。

// const something = new Map;
// something.set(0,2);
// something.set(1,7);
// console.log(something.get(1));

// EN: Given nums=[2,7,11,15], store value->index into Map.
//     Print index of 11.
// JP: nums=[2,7,11,15] を使い、value->index をMapに保存し、
//     11のindexを表示せよ。

// const nums=[2,7,11,15];
// const something = new Map;

// for(let i = 0; i < nums.length; i++){
//   something.set(nums[i], i);
// }

//   if(something.has(11)){
//     console.log(something.get(11))};

// EN: Given nums=[2,7,11,15], target=9,
//     for each number, compute its partner need=target-number.
// JP: nums=[2,7,11,15], target=9 のとき、
//     各数字に対して need=target-数字 を計算せよ。

// const nums = [2, 7, 11, 15];
// const target = 9;

// for(let i = 0; i < nums.length; i++){
//   let need = target - nums[i];
//   need.set(need, i);
//   console.log(need);
// }

// EN: Put numbers into Map while looping. Print Map each time.
// JP: ループしながら Map に保存していき、毎回中身を表示。
const nums = [2, 7, 11, 15];
const map = new Map();

for (let i = 0; i < nums.length; i++) {
  map.set(nums[i], i);
  console.log(map);
}
