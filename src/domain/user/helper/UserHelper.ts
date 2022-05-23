class UserHelper {
  static checkIfEquals(dados: string, user: object[], campo: string) {
    const cpfUser: any[] = Object.values(user);
    const lista = cpfUser.map((item) => item.cpf);

    lista.forEach((lista) => {
      if (lista !== dados) {
        return true;
      } else {
        throw new Error(`${campo} ja existe`);
      }
    });
  }

  static lenghtValidate(dado: string, min: number, max: number = 0) {
    if (max) {
      if (dado.length >= min && dado.length <= max) {
        return true;
      } else return false;
    } else {
      if (dado.length === min) {
        return true;
      } else return false;
    }
  }

  static CpfValidate(cpf: string) {
    let cpfArray = Array.from(cpf, Number);
    const confirmationDigits = cpfArray.slice(-2);
    cpfArray = cpfArray.slice(0, -2);

    function calcDigit(start: number = 1) {
      let result: number | undefined =
        cpfArray.reduce(
          (resultValue: number, currentValue: number, currentIndex: number) => {
            const totalSum =
              resultValue + currentValue * (currentIndex + start);
            return totalSum;
          },
          0,
        ) % 11;
      if (result >= 10) {
        const resultString = Array.from(result.toString(), Number);
        result = resultString.pop();
      }
      return result;
    }

    const firstDigit = calcDigit();
    if (firstDigit !== confirmationDigits[0]) return false;
    cpfArray.push(firstDigit);
    if (calcDigit(0) !== confirmationDigits[1]) return false;
    return true;
  }
}

export default UserHelper;
