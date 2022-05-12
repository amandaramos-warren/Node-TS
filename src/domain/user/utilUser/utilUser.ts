class UtilUser{
    static emailValidator( email:String , email_confirmation:String ){
            if(email == email_confirmation){
                return true;
            }else{
                return false;
            }  
    };  
}

export default UtilUser;