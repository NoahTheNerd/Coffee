/**
 * Converts an integer into a roman number like IV
 * @param {*} targetInteger Integer to convert
 * @returns {string} Romanized number string
 */
function romanInt (targetInteger) {
    if (isNaN(targetInteger))
        return NaN;
    var digits = String(+targetInteger).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

export default romanInt