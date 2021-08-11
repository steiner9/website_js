'use strict';

function fibonacci(n) {
    let previous = 0;
    let current = 1;

    for (let i = 0; i < n; i += 1) {
        let temp = previous;
        current = temp + current;
    }
    return current;
}
