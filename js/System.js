class System{

    constructor(){}

    authenticate(actualCode,enteredCode){
        console.log("in")
        textSize(50);
        fill("black");
        text(code,300,300)
        
        if(actualCode===enteredCode.toUpperCase()){
            return true
        }
 
        else{return false}
    }

}