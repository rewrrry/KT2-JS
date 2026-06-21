let word = 'Авокадо';

let result1 = '';
for (let i = 0; i < word.length; i++) {
    let char = word[i].toLowerCase();
    if (char !== 'а' && char !== 'о') {
        result1 += word[i];
    }
}

console.log(result1);
