const dict: {[char: string]: number} = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
};

function replacer(source: string): string {
  if (!source) { return ''; }
  let
    totalValue = 0,
    value = 0,
    prev = 0;

  for (let i=0; i<source.length; i++) {
    let current = dict[source.charAt(i)];
    if (current > prev) {
      totalValue -= 2 * value;
    }
    if (current !== prev) {
      value = 0;
    }
    value += current;
    totalValue += current;
    prev = current;
  }
  return totalValue.toString();
}

const
  source = 'asdas dcd MMMM CV III asdc',
  romanNumbersRegExp = `M{0,3}((CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})|M)\\b`,
  reg = new RegExp(romanNumbersRegExp, 'g'),
  result = source.replace(reg, replacer);


console.log(`Source: ${source}\nResult: ${result}`);
