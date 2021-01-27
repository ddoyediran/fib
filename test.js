const fib = (n, mem = {}) => {
    if(n in mem) return mem[n];
    if(n <= 2) {
        return 1
    }

    mem[n] = fib(n - 1, mem) + fib(n - 2, mem);
    return mem[n];
}


console.log(fib(6)) // 8
console.log(fib(7)) // 13
console.log(fib(13)) // 233
console.log(fib(300)) //225851433717
