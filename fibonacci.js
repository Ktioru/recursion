let fibonacci = []

function getFibonacci(number) {
    for (let c = 0; c <= number; c++) {
        if(c == 0 || c == 1) {
            fibonacci.push(c)
        } else if (fibonacci[c - 1] + fibonacci[c - 2] <= number + fibonacci[c - 2]){
            fibonacci.push(fibonacci[c - 1] + fibonacci[c - 2])
        }
    }
    return fibonacci
}


console.log(getFibonacci(8))