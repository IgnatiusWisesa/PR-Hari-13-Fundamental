decTObin = function(angka){
    output = ''
    do{
        output += (angka%2)
        output += ';'
        // console.log(angka)
        angka = Math.floor(angka/2)
        // console.log(angka)
    }while(angka/2!==0)
    output = output.split(';')
    output.pop()
    output = output.reverse().join('')
    return output
}

angka = 70
console.log(decTObin(angka))