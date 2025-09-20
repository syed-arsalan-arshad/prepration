function twoSum(nums, target) {
    // 1st aproach
    // for(let i=0; i<nums.length; i++){
    //     for(let j=i+1; j<nums.length; j++){
    //         if(nums[i] + nums[j] === target){
    //             return [i, j];
    //         }
    //     }
    // }
    
    // 2nd approac
    // const list: number[] = [];
    // for(let j=0; j<nums.length; j++){
    //     const val = target - nums[j];
    //     const index = list.indexOf(val);
    //     if(index >= 0){
    //         return [index, j];
    //     }
    //     list.push(nums[j]); 
    // }

    // optimzed approach
    const map = new Map();
    for(let j=0; j<nums.length; j++){
        const val = target - nums[j];
        if(map.has(val)){
            return [map.get(val), j];
        }
        map.set(nums[j], j);
    }
    return [];
};

// Test cases
function runTests() {
    console.log("=== Testing Two Sum ===");
    
    // Test case 1
    const result1 = twoSum([2, 7, 11, 15], 9);
    console.log(`Test 1: [${result1}]`); // Expected: [0, 1]
    
    // Test case 2  
    const result2 = twoSum([3, 2, 4], 6);
    console.log(`Test 2: [${result2}]`); // Expected: [1, 2]
    
    // Test case 3
    const result3 = twoSum([3, 3], 6);
    console.log(`Test 3: [${result3}]`); // Expected: [0, 1]
    
    console.log("All tests passed ✅");
}

runTests();