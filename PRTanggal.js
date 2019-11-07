inputtanggal ='12112017'
inputtanggal.split('')

perubahTanggal = function(){
arraybulan = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']

tanggal = ''
bulan = ''
tahun = ''
for(i=0;i<inputtanggal.length;i++){
    if(i>=0 && i<2){
        tanggal += inputtanggal[i]
    }
    if(i>=2 && i<4){
        bulan += inputtanggal[i]
        bulan = parseInt(bulan)
    }
    if(i>=4){
        tahun += inputtanggal[i]
    }
}
bulan = bulan -1

for(i=0;i<arraybulan.length;i++){
    if(i==bulan){
        bulan = arraybulan[i]
    }
}

return (tanggal+'-'+bulan+'-'+tahun)
}

console.log(perubahTanggal())