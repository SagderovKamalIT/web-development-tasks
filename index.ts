function pow(a: number, b: number): number {
  let result = a;
  for (let i = 1; i < b; i++) {
    result *= a;
  }

  return result;
}

console.log(pow(2, 3));