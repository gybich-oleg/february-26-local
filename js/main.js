function showMessage() {
    let input = prompt("Введіть URL або числа");
    if (input === null) {
        console.log("Введення скасовано");
        return;
    }

    let url = [];
    let num = [];

    let urlValidate = /^(http:\/\/|https:\/\/)/;

    let current = '';

    for (let i = 0; i < input.length; i++) {
        if (input[i] === ',') {
            if (current.length > 0) {
                introduction(current);
                current = '';
            }
        } else {
            current += input[i];
        }
    }

    if (current.length > 0) {
        introduction(current);
    }

    console.log("URL:", url);
    console.log("Числа:", num);

    if (num.length > 0){
        let min = Math.min(...num);// ...оператор розширення
        let max = Math.max(...num);
        console.log("Мінімальне число:", min);
        console.log("Максимальне число", max);
    }

    function introduction(item) {
        let trimmedItem = '';
        for (let j = 0; j < item.length; j++) {
            if (item[j] !== ' ') {
                trimmedItem += item[j];
            }
        }

        if (urlValidate.test(trimmedItem)) {
            url.push(trimmedItem);
            console.log("Успішно додано URL:", trimmedItem);
        }
        else if (!isNaN(trimmedItem) && Number(trimmedItem) > 0) {
            num.push(Number(trimmedItem));
            console.log("Успішно додано число:", trimmedItem);
        }
        else {
            console.log("Некоректне введення:", trimmedItem);
        }
    }
}

showMessage();