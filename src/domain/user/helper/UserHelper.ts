import IUserHelper from '../../../interfaces/IUserHelper'
import IUser from '../../../interfaces/IUser'

export default class UserHelper implements IUserHelper {
  checkIfEquals (dados: string, database: IUser[]): boolean {
    const emailUser = Object.values(database)
    const lista = emailUser.map((item) => item.email)
    if (lista.includes(dados)) {
      throw new Error('Email já cadastrado')
    }
    return true
  }

  cpfValidate (cpf: string): boolean {
    let cpfArray = Array.from(cpf, Number)

    const firstDigit = cpfArray[0]
    for (let i = 1; i < cpfArray.length; i++) {
      if (cpfArray[i] !== firstDigit) {
        break
      } else if (i === cpfArray.length - 1) {
        throw new Error('CPF inválido')
      }
    }

    const confirmationDigits = cpfArray.slice(-2)
    cpfArray = cpfArray.slice(0, -2)

    function calcDigit (start = 1): number | undefined {
      let result: number | undefined =
    cpfArray.reduce(
      (resultValue: number, currentValue: number, currentIndex: number) => {
        const totalSum = resultValue + currentValue * (currentIndex + start)
        return totalSum
      },
      0
    ) % 11
      if (result >= 10) {
        const resultString = Array.from(result.toString(), Number)
        result = resultString.pop()
      }
      return result
    }

    const firstDigitAfterDash = calcDigit()
    if (firstDigitAfterDash !== confirmationDigits[0]) { throw new Error('CPF inválido') }
    cpfArray.push(firstDigitAfterDash)
    if (calcDigit(0) !== confirmationDigits[1]) throw new Error('CPF inválido')
    return true
  }
}
