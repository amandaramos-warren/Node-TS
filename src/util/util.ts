class util {

    static numberValidator(dados : number){
        try {
            if( !isNaN( dados ) ){
                return true;
            }else{
                throw Error
            }
        } catch (error : any) {
            new Error(`Aconteceu um erro com a requisição: ${error.message} `)
        }
    }

    static fieldValidator(dados: object){
        try {
            const dadosValores : any[] = Object.values(dados)
            const dadosParametros : string[] = Object.keys(dados)
            let i = 0

            while(i < dadosValores.length){
                if(dadosValores[i] == ""){
                    throw Error
                }
                i++
            }

            return true
        } catch (error: any) {
            new Error(`Aconteceu um erro com a requisição: ${error.message} `)
        }
    }

    static birthdateValidator(dados : string ) {
        try {
            if(Date.parse(dados)){
                return true
            }else{
                Error
            }
        } catch (error: any) {
            new Error(`Aconteceu um erro com a requisição: ${error.message} `)
        }
    }

};

export default util;
