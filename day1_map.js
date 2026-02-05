var twoSum = function(nums, target) {
    const map = new Map();
  
    for (let i = 0; i < nums.length; i++) {
      const x = nums[i];
      const need = target - x;
  
      if (map.has(need)) return [map.get(need), i];
  
      map.set(x, i);
    }
  };
  
  console.log(twoSum([2,7,11,15], 9)); // [0,1]
  