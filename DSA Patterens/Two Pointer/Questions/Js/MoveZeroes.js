const moveZeroes = (nums) => {
    let left = 0;
    for(let right = 0; right < nums.length; right++){
        if(nums[right] !== 0){
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
        }
    }
    return nums;
};

console.log(moveZeroes([0,55,4,0,1,0,3,0,9,2,3,0,0,32,22,122]));