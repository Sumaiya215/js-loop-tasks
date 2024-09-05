let i =1;
let sum = 0;
console.log('Given numbers are:')
while(i <= 20){
    console.log(i)
    sum = sum +i;
    console.log('Sum:',sum)
    i+=1;
    if(sum >= 100){
        break;
    }
   
}
