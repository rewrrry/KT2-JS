let word = 'потоп';

let isPalindrome = true;
for (let i = 0; i < Math.floor(word.length / 2); i++) {
    if (word[i] !== word5[word.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}

console.log(isPalindrome ? "YES" : "NO");
