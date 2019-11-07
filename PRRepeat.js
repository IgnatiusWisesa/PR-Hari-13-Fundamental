kata = 'masak sih'
Kata = kata.toUpperCase().split('')

ulang = function(){
    for(i=0;i<Kata.length;i++){
        for(j=i+1;j<Kata.length;j++){
            if(Kata[i]==Kata[j]){
                return Kata[i]
            }
        }
    }
}
console.log(ulang())