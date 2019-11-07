arrayHex = ('0123456789ABCDEF').split('')
// console.log(arrayHex)
// console.log(arrayHex[11])

decTOHex = function(angka){
    output = ''
    do{
    mod = angka%16
    // console.log(mod)
    for(i=0;i<arrayHex.length;i++){
        if(mod==i){
            output = output + arrayHex[i]   
        }
    }
    angka = Math.floor(angka/16)
    }while((angka/16)!==0)

    output = output.split('').reverse()
    return output
}

angka = 429
console.log(decTOHex(angka))


