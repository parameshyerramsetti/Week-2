
function checkprime(n){
    let count=0;
    try{
        if(n<=1){
            throw "Prime numbers always greater than 1 "

        }
        for(i=2;i<n;i++)
        {
            if(n%i==0)
            {
                count=count+i
            }   
        }
      return count;    
    }catch(error){
        console.log("Error :",error);
        return "please enter Positive numbers";
    }finally{
        if(n<0)
        {
            return;
        }
    
    
        else if(count>0)
        {
            console.log("it is not a prime number")
        }
        else
        {
            console.log("it is a prime number")
        }
        
    }
    
}   
checkprime(13);
