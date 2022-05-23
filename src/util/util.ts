import UserHelper from "../domain/user/helper/UserHelper";
class util {
  static numberValidator(dados: number) {
    if (!isNaN(dados)) {
      return true;
    } else {
      throw new Error('Campo Number só recebe number só recebe números');
    }
  }

  static fieldValidator(dados: object) {
    const dadosValores: any[] = Object.values(dados);
    const dadosParametros: string[] = Object.keys(dados);
    let i = 0;

    while (i < dadosValores.length) {
      if (!dadosValores[i]) {
        if (dadosParametros[i] !== 'whatsapp' && dadosParametros[i] !== 'email_sms') {
          throw new Error(`Campo ${dadosParametros[i]} está vazio`);
        }
      }
      i++;
    }

    return true;
  }

  static birthdateValidator(data: string) {
    const validData = UserHelper.lenghtValidate(data, 10)

      if (Date.parse(data) && validData) {
        return true;
      }else{
        throw new Error("Data inválida")
      }

  }

  static postalCodeValidator(postalCode: string){
    const validPostalCode = UserHelper.lenghtValidate(postalCode, 8)
    if(validPostalCode){
      return true
    }
      throw new Error("CEP inválido")
  }
}

export default util;
