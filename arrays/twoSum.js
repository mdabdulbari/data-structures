var twoSum = function (nums, target) {
  let result = [];
  const dict = {};
  nums.forEach((num, index) => (dict[num] = index));
  nums.forEach((number, index) => {
    const len = result.length;
    if (len === 0) {
      let numberNeeded = target - number;
      const indexNeeded = dict[numberNeeded];
      if (index !== indexNeeded && indexNeeded !== undefined) {
        result = [index, indexNeeded];
      }
    }
  });
  return result;
};

const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target));
