class UserHelper{
  static lenghtValidator(dado:String, n1:Number, n2:Number = 0) {
      if(n2){
        if(dado.length>=n1 && dado.length <=n2){
          return true
        }else return false
      }else{
        if(dado.length===n1){
          return true
        }else return false
      }
  }

  static isCpfValid(cpf: string){
    let cpfArray = Array.from(cpf, Number);
    const confirmationDigits = cpfArray.slice(-2);
    cpfArray = cpfArray.slice(0, -2);
    function calcDigit(start:number = 1){
      let result: number | undefined = cpfArray.reduce((
        previousValue: number,
        currentValue: number,
        currentIndex: number,
      ) => {
        const totalSum = previousValue + (currentValue * (currentIndex + start));
        return totalSum;
      }, 0) % 11
    console.log(result)
    if(result>=10){
      const resultString = Array.from(result.toString(), Number)
      result = resultString.pop()
      // console.log(result)
    }
    return result;
  };

    const firstDigit = calcDigit();
    // console.log(firstDigit)
    if (firstDigit !== confirmationDigits[0]) return false;
    cpfArray.push(firstDigit);
    console.log("calcdigit2: " + calcDigit(0))
    if (calcDigit(0) !== confirmationDigits[1]) return false;

    return true;
  };
}

export default (UserHelper)
