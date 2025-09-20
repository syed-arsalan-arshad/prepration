function containsDuplicate(nums) {
    // 1st aproach
    // for(let i=0; i<nums.length; i++){
    //     for(let j=0; j<nums.length; j++){
    //         if(nums[i] == nums[j] && i != j){
    //             return true;
    //         }
    //     }
    // }
    // return false;

    // 2nd approach
    // const obj = {};
    // for(let i=0; i<nums.length; i++){
    //     if(obj[nums[i]]) return true;
    //     obj[nums[i]] = true;
    // }
    // return false;
 
    // 3rd approach
    const map = new Map();
    for(let i=0; i<nums.length; i++){
        if(map.has(nums[i])) return true;
        map.set(nums[i]);
    }
    return false;
};

// Test cases
function runTests() {
    console.log("=== Testing Two Sum ===");
    
    // Test case 1
    const result1 = containsDuplicate([2, 7, 2, 15]);
    console.log(`Test 1: [${result1}]`);
    
    // Test case 2  
    const result2 = containsDuplicate([3, 2, 4]);
    console.log(`Test 2: [${result2}]`);
    
    // Test case 3
    const result3 = containsDuplicate([3, 3]);
    console.log(`Test 3: [${result3}]`);
    
    console.log("All tests passed ✅");
}

runTests();