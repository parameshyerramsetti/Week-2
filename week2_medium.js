function factorial(n)
{
    try{
        if(n<0){
            throw "factorial not possible for negative numbers"
            }
        let count=1;
        for(let i=n;i>=1; i--)
        {
        count=count*i;
          }
       return count;
    }catch(error)
    {
        console.log("Error:", error);
        return "Please enter positive numbers";
    }
    
}  
k=factorial(-4);
console.log(k)