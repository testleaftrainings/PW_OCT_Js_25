let value=[23,78,76,89,78,90,67,56,90]
//nested for loop

//out for  -> 23
for(let i=0;i<value.length;i++){

    //inner for loop -> next value
    for(let j=i+1;j<value.length;j++){

        if(value[i]==value[j]){
            console.log(`duplicate number is ${value[j]}`)
        }
    }



}