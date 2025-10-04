function pow(a, b) {
    var result = a;
    for (var i = 1; i < b; i++) {
        result *= a;
    }
    return result;
}
console.log(pow(2, 3));
