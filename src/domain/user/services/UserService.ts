
class UserService {

    static emailValidator( email:String , email_confirmation:String ){
        try {
            
            if(email == email_confirmation){
                return true;
            }else{
                throw Error;
            }  
        } catch (error: any) {
            new Error(`Aconteceu um erro com a requisição: ${error.message} `)
        }
    };  

    static user(validator : any[]){
        
        let i = 0

        while( i < validator.length){
            if( validator[i] == true){
                return true
            }else{
               console.log("aa");
            }
            i++
        }
    }
    
}

export default UserService;