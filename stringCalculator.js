class StringCalculator {
  add(numbers){
    if (numbers === "") return 0;
    const parts = numbers.split(/[\n,]/);
    console.log(parts)
    if (parts.length === 1) return parseInt(numbers);
    let sum = 0;
    for(let i=0;i<parts.length;i++){
      sum += parseInt(parts[i]);
    }
    return sum
  }
  
}

module.exports = StringCalculator;