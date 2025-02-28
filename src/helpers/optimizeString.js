
export function optimizeString(string) {
    let text = "";
    let char = "";
    for (let index = 0; index < string.length; index++) {
        char = string[index];
        char = char.replace("ة", "ه");
        char = char.replace("ى", "ي");
        char = char.replace("أ", "ا");
        char = char.replace("إ", "ا");
        char = char.replace("آ", "ا");
        char = char.replace("ٱ", "ا");
        char = char.replace(/َ|ً|ُ|ٌ|ّ|ٍ|ِ|ْ|ٰ|ٓ|ـ/g, "");
        char = char.replace(/ۡ|ـ/g, "");
        char = char.replace("عبد ال", "عبدال");
        text = text + char;
    }
    return text;
}