let fibonacci = [0]

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

function getFibonacciRec(number, fibonacci = [0, 1]) {
    
    if(fibonacci[fibonacci.length - 1] >= number + fibonacci[fibonacci.length - 3]) {
        return fibonacci
    } else {
        fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2])
        return getFibonacciRec(number, fibonacci)
    }
}

console.log(getFibonacciRec(13))