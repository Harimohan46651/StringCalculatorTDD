class StringCalculator {
  add(numbers){
    if (numbers === "") return 0;
    let delimiter = /[\n,]/;
    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n");
      delimiter = new RegExp(parts[0].slice(2)); 
      numbers = parts[1];
    }
    const parts = numbers.split(delimiter);
    console.log(parts)
    let negativeNumbers = parts.filter((part) => parseInt(part) < 0);
    console.log(negativeNumbers)
    if(negativeNumbers.length > 0) throw new Error("negative numbers not allowed " + negativeNumbers.join(","))
    if (parts.length === 1) return parseInt(numbers);
    let sum = 0;
    for(let i=0;i<parts.length;i++){
      if(parseInt(parts[i]) > 1000) continue;
      sum += parseInt(parts[i]);
    }
    return sum
  }
  
}

module.exports = StringCalculator;