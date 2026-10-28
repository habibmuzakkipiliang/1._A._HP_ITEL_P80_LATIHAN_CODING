console.log ("Hello World")


console.log ("\n --- batas --- \n")




// variabel 

var dasar = "Tes Hello World"

console.log (dasar)


var hal = "Hello Harkat Negeri"

console.log (hal)


console.log ("\n --- batas --- \n")



// Bio sederhana

var nama = "John Kelvin"
var asal = "Amerika Serikat"
var nomor = 12
var tinggi = "170 cm"
var berat = "50 kg"
var kerja = "Programmer"
var coding = "HTML, CSS, JavaScript + Go Lang"


var profil = `
- Nama    : ${nama}
- Asal    : ${asal} 
- Nomor   : ${nomor}
- Tinggi  : ${tinggi}
- Berat   : ${berat}
- Kerja   : ${kerja}
- Coding  : ${coding}
`

console.log (profil)


var intro = `Halo nama saya ${nama} dari ${asal}, nomor ${nomor}, tinggi badan saya ${tinggi}, berat badan saya ${berat}, saya bekerja sebagai ${kerja}, dengan teknologi ${coding}`

console.log (intro)


console.log ("\n --- batas --- \n")




// Bio sederhana 

var nama = "Yan He Kelvin"
var asal = "Taiwan"
var kerja = "Programmer"
var tinggi = "160 cm"
var berat = "60 kg"
var nomor = 15
var coding = "HTML, CSS, JavaScript + Python"

var bio_1 = `
- Nama   : ${nama}
- Asal   : ${asal}
- Kerja  : ${kerja}
- Tinggi : ${tinggi}
- Berat  : ${berat}
- Nomor  : ${nomor}
- Coding : ${coding}
`

console.log (bio_1)



var intro_3 = `Halo nama saya ${nama} dari ${asal}, bekerja sebagai ${kerja}, dengan tinggi badan saya ${tinggi}, berat badan saya adalah ${berat}, dengan teknologi ${coding}`

console.log (intro_3)


console.log ("\n --- batas --- \n")




// Fungsi dengan operator dasar 


function tambah (x, y) {
    return x + y
}


function kurang (x, y) {
    return x - y
}


function kali (x, y) {
    return x * y
}


function pangkat (x, y) {
    return x ** y
}


function bagi (x, y) {
    return x / y
}


function modulus (x, y) {
    return x % y
}



console.log ("Hasil tambah =", tambah (10, 8))
console.log ("Hasil kurang =", kurang (12, 7))
console.log ("Hasil kali =", kali (10, 10))
console.log ("Hasil pangkat =", pangkat (10, 3))
console.log ("Hasil bagi =", bagi (10, 5))
console.log ("Hasil modulus =", modulus (10, 8))


console.log ("\n --- batas --- \n")




// Percabangan dasar 

var b = 9

if (b >= 6) {
    console.log (`Besar, angka b = ${b}`)
}

else {
    console.log (`Kecil, angka b = ${b}`)
}


console.log ("\n --- batas --- \n")




// Percabangan lanjutan

var a = 4

if (a >= 8) {
    console.log (`Besar, angka a = ${a}`)
}

else if (a >= 5) {
    console.log (`Tengah, angka a = ${a}`)
}

else {
    console.log (`Kecil, angka a = ${a}`)
}


console.log ("\n --- batas --- \n")





// Percabangan nested 

var f = 9
cek = true


if (cek) {
    if (f >= 8) {
        console.log (`Besar, angka f = ${f}`)
    }
    
    else {
        console.log (`Tengah, angka f = ${f}`)
    }
}

else {
    console.log (`Kecil, angka f = ${f}`)
}


console.log ("\n --- batas --- \n")





// Percabangan rapor nilai 

var nilai = 90

if (nilai >= 95) {
    console.log (`A, nilai = ${nilai}`)
}

else if (nilai >= 90) {
    console.log (`B, nilai = ${nilai}`)
}

else if (nilai >= 80) {
    console.log (`C, nilai = ${nilai}`)
}

else if (nilai >= 70) {
    console.log (`D, nilai = ${nilai}`)
}

else if (nilai >= 60) {
    console.log (`E, nilai = ${nilai}`)
}

else if (nilai >= 50) {
    console.log (`F, nilai = ${nilai}`)
}

else {
    console.log (`Jelek amat, nilai = ${nilai}`)
}


console.log ("\n --- batas --- \n")




// Fungsi dengan percabangan dasar

function dasar_1 (a) {
    
    if (a >= 6) {
        console.log (`Besar, angka a = ${a}`)
    }
    
    else {
        console.log (`Kecil, angka a = ${a}`)
    }
}

dasar_1 (10)
dasar_1 (9)
dasar_1 (8)
dasar_1 (7)
dasar_1 (6)
dasar_1 (5)
dasar_1 (4)
dasar_1 (3)
dasar_1 (2)
dasar_1 (1)


console.log ("\n --- batas --- \n")




// Fungsi dengan percabangan lanjutan 

function dasar_2 (b) {
    
    if (b >= 8) {
        console.log (`Besar, angka b = ${b}`)
    }
    
    else if (b >= 5) {
        console.log (`Tengah, angka b = ${b}`)
    }
    
    else {
        console.log (`Kecil, angka b = ${b}`)
    }
}

dasar_2 (10)
dasar_2 (9)
dasar_2 (8)
dasar_2 (7)
dasar_2 (6)
dasar_2 (5)
dasar_2 (4)
dasar_2 (3)
dasar_2 (2)
dasar_2 (1)


console.log ("\n --- batas --- \n")