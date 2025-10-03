// var isAnagram = function(s, t) {
//     if(s.length !== t.length) return false;

//     const map1 = new Map();
//     const map2 = new Map();
    
//     // Count characters in s
//     for(let char of s){
//         map1.set(char, (map1.get(char) || 0) + 1);
//     }
    
//     // Count characters in t
//     for(let char of t){
//         map2.set(char, (map2.get(char) || 0) + 1);
//     }

//     // Compare sizes
//     if(map1.size !== map2.size) return false;

//     // Compare each character's frequency
//     for(let [char, count] of map1){
//         if(map2.get(char) !== count) return false;
//     }
    
//     return true;
// };

// Test cases

// var isAnagram = function(s, t) {
//     if(s.length !== t.length) return false;

//     const freqMap = new Map();
    
//     // Add counts from string s
//     for(let char of s){
//         freqMap.set(char, (freqMap.get(char) || 0) + 1);
//     }
    
//     // Subtract counts from string t
//     for(let char of t){
//         if(!freqMap.has(char)) return false;  // char not in s
//         freqMap.set(char, freqMap.get(char) - 1);
//     }
    
//     // Check if all counts are 0
//     for(let count of freqMap.values()){
//         if(count !== 0) return false;
//     }
    
//     return true;
// };

var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    
    // Sort both strings and compare
    const sortedS = s.split('').sort().join('');
    const sortedT = t.split('').sort().join('');
    
    return sortedS === sortedT;
};
function runTests() {
    console.log("=== Testing Anagram ===");
    
    // Test case 1
    const result1 = isAnagram("anagram", "nagaram");
    console.log(`Test 1: [${result1}]`); // Expected: true

    // Test case 2
    const result2 = isAnagram("rat", "car");
    console.log(`Test 2: [${result2}]`); // Expected: false
    
    // Test case 3
    const result3 = isAnagram("listen", "silent");
    console.log(`Test 3: [${result3}]`); // Expected: true

    console.log("All tests passed ✅");
}

runTests();