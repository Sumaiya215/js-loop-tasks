let num= 2;
let square = 0;
console.log('Given numbers are:')
while(num <= 100){
    console.log(num)
    square = num*num;
   console.log('Square:',square)
    
    if(square / num == num ){
        break;
    }
    num+=1;
   
}