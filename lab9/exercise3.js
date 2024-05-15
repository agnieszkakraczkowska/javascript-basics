const text = {
    check: function(txt, word) {
        return txt.includes(word);
    },
    getCount: function(txt) {
        return txt.length;
    },
    getWordsCount: function(txt) {
        const words = txt.split(" ");
        return words.length;
    },
    setCapitalize: function(txt) {
        const words = txt.split(" ");
        const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
        return capitalizedWords.join(" ");
    },
    setMix: function(txt) {
        const letters = txt.split("");
        let setToUpperCase = false;
        const mixedLetters = letters.map(letter => {
            if(/[a-zA-Z]/.test(letter)) {
                if(setToUpperCase) {
                    setToUpperCase = false;
                    return letter.toUpperCase();
                } 
                else {
                    setToUpperCase = true;
                    return letter.toLowerCase();
                }
            } else {
                return letter;
            }
        });
        return mixedLetters.join("");
    },
    generateRandom: function(lng) {
        const letters = 'abcdefghijklmnopqrstuvwxyz';
        let result = '';
        for(let i = 0; i < lng; i++) {
            const randomIndex = Math.floor(Math.random()*letters.length);
            result += letters[randomIndex];
        }
        return result;
    }
};

console.log(text.check("ala ma kota", "kota")); 
console.log(text.getCount("ala ma kota")); 
console.log(text.getWordsCount("Ala ma kota")); 
console.log(text.setCapitalize("ala ma kota")); 
console.log(text.setMix("ala ma kota")); 
console.log(text.generateRandom(10));
