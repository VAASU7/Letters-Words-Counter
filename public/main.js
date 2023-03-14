function atLeastTwoCharcharacters(text){
    const letters = text.match(/[a-z]/gi) || [];
    return letters.length >=2;
}

function abscenceOfThreeConsecutiveCharcters(text) {
    for (const charcter of text) {
        const occurance = Array.from(text).filter(v => v == charcter).length;

        if(occurance >= 3) {
            return false;
        }
    }
    return true;
}
const checks = [atLeastTwoCharcharacters,abscenceOfThreeConsecutiveCharcters];
const textInput = document.querySelector(".text-input");
const wordCountElement = document.querySelector(".word-count");
const letterCountElement = document.querySelector(".letter-count");
const spaceCountElement = document.querySelector(".space-count");

textInput.addEventListener("input", () => {
    const splitted = textInput.value.trim().split(/[\s-]/);
    const letterCount = (textInput.value.match(/[a-z]/gi) || []).length;
    const spaceCount = (textInput.value.match(/[\s+]/gi) || []).legth;
    let wordCount = 0;

    outer:
    for (const text of splitted) {
        for (const check of checks) {
            if (!check(text)) {
                continue outer;

            }
        }
        wordCount++;
    }

    wordCountElement.textContent = wordCount;
    letterCountElement.textContent = letterCount;
    spaceCountElement.textContent = spaceCount;
});