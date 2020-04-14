function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Provide numbers please.');
  }

  return a + b;
}

module.exports = sum;
