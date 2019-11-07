ArrayAngka = ['21','14','8','2','13','900','5','901']

output = []
for(i=0;i<ArrayAngka.length;i++){
    output.push(parseInt(ArrayAngka[i]))
}

max = function(){
    output = 0
    for(i=0;i<ArrayAngka.length;i++){
        for(j=0;j<ArrayAngka.length;j++){
            if(ArrayAngka[i]-ArrayAngka[j]>0 && output<=ArrayAngka[i]){
                output = ArrayAngka[i]
            }
        }
    }
    return output
}

min = function(){
    output = ArrayAngka[0]
    for(i=0;i<ArrayAngka.length;i++){
        for(j=0;j<ArrayAngka.length;j++){
            if(parseInt(ArrayAngka[i])<parseInt(ArrayAngka[j]) && parseInt(ArrayAngka[i])<=output){
                output = ArrayAngka[i]
            }
        }
    }
    return output
}

console.log(max())
console.log(min())

console.log(ArrayAngka)