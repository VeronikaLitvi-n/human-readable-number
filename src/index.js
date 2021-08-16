module.exports = function toReadable (number) {
    const first = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const bigger = ['', 'thousand', 'million', 'billion', 'trillion'];
    let word = '';
    if (number == 0) {return "zero"}
    for (let i = 0; i < bigger.length; i++) {
        let tempNumber = number % (100 * Math.pow(1000, i)); // 68
        if (Math.floor(tempNumber / Math.pow(1000, i)) !== 0) { //68
            if (Math.floor(tempNumber / Math.pow(1000, i)) < 20) { // false
                word = first[Math.floor(tempNumber / Math.pow(1000, i))] + bigger[i] + ' ' + word;
            } else {
                word = tens[Math.floor(tempNumber / (10 * Math.pow(1000, i)))] + ' ' + first[Math.floor(tempNumber / Math.pow(1000, i)) % 10] + bigger[i] + ' ' + word;
            }
        }

        tempNumber = number % (Math.pow(1000, i + 1));
        if (Math.floor(tempNumber / (100 * Math.pow(1000, i))) !== 0) word = first[Math.floor(tempNumber / (100 * Math.pow(1000, i)))] + 'hundred ' + word;
    }
    return word.trim();
}
