let longestPalindrome = (s) => {
    const map = {};
    for (let i = 0; i < s.length; i++) {
        let str = s[i];
        for (let j = i + 1; j < s.length; j++) {
            str += s[j];
            const res = isPalindrome(str);
            if (res) {
                if (map[str]) {
                    map[str] = map[str] + 1;
                } else {
                    map[str] = 1;
                }
            }
        }
    }
    return findLongestSubString(map)
};
let findLongestSubString = (map) => {
    let max = 0;
    let desiredString;
    Object.keys(map).forEach(key => {
        if (map[key] > max) {
            max = map[key];
            desiredString = key;
        }
    });
    return desiredString;
}


let isPalindrome = (s) => {
    let start = 0;
    let end = s.length - 1;
    let forward = s[start];
    let backward = s[end];

    if (forward !== backward) return false;

    while (start !== end) {
        if (forward === backward) {
            start++;
            end--;
            forward = s[start];
            backward = s[end];

        } else {
            return false;
        }
    }
    return true;
};