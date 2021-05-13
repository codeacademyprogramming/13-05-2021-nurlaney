function convertNumberToWord(number) {
    let ones = ['', 'bir', 'iki', 'üç', 'dörd',
        'beş', 'altı', 'yeddi', 'səkkiz', 'doqquz',
        'on', 'on bir', 'on iki', 'on üç', 'on dörd',
        'on beş', 'sion altı', 'on yeddi', 'on səkkiz', 'on doqquz'
    ];
    let tens = ['iyirmi', 'otuz', 'qırx', 'əlli', 'altmış', 'yetmiş', 'səksən', 'doxsan'];
    let one = 0;
    if (number < 20) return ones[number];
    if (number < 100) {
        one = number % 10;
        return tens[Math.floor(number / 10) - 2] + " " + (one > 0 ? ones[one] : "");
    }
    if (number < 1000) {
        return ones[Math.floor(number / 100)] + " yüz " + (number % 100 > 0 ? convertNumberToWord(number % 100) : "");
    }
    if (number < 100000) {
        return convertNumberToWord(Math.floor(number / 1000)) + " min " + (number % 1000 > 0 ? convertNumberToWord(number % 1000) : "");
    }
    if (number < 10000000) {
        return convertNumberToWord(Math.floor(number / 100000)) + " milyon " + (number % 100000 > 0 ? convertNumberToWord(number % 100000) : "");
    }
}
console.log(convertNumberToWord(7080));