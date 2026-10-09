// Helo World

console.log ("Hello World")



console.log ("\n --- batas --- \n")




// Operator angka

var a = Number (prompt ("Masukkan angka a = ? "))
var b = Number (prompt ("Masukkan angka b = ?"))


function tambah (a, b) {
    return a + b
}

function kurang (a, b) {
    return a - b
}


function kali (a, b) {
    return a * b
}

function bagi (a, b) {
    return a / b
}


function pangkat (a, b) {
    return a ** b
}


function modulus (a, b) {
    return a % b
}


console.log ("Hasil tambah =", tambah (a, b))
console.log ("Hasil kurang = ", kurang (a, b))
console.log ("Hasil kali = ", kali (a, b))
console.log ("Hasil bagi =", bagi (a, b))
console.log ("Hasil pangkat =", pangkat (a, b))
console.log ("Hasil modulus = ", modulus (a, b))


console.log ("\n --- batas --- \n")




// Percabangan dasar

var j = 9

if (j >= 8) {
    console.log (`Besar, angka j = ${j}`)
}

else {
    console.log (`Kecil, angka j = ${j}`)
}

console.log ("\n --- batas --- \n")





// Percabangan lanjutan 

var d = 5

if (d >= 8) {
    console.log (`Besar, angka d = ${d}`)
}

else if (d >= 5) {
    console.log (`Sedang, angka d = ${d}`)
}

else {
    console.log (`Kecil, angka d = ${d}`)
}


console.log ("\n --- batas --- \n")





// Percabangan Nested

var d = 3
var cek = true

if (d >= 8) {
    if (cek) {
        console.log (`Besar angka d = ${d}`)
    }
    
    else {
        console.log (`Sedang, angka d = ${d}`)
    }
}

else {
    console.log (`Kecil, angka d = ${d}`)
}


console.log ("\n --- batas --- \n")




// Percabangan lanjutan, Nilai minus dan plus

var l = -6

if (l > 0) {
    console.log (`Plus, angka l = ${l}`)
}

else if (l < 0) {
    console.log (`Minus, angka l = ${l}`)
}

else {
    console.log (`Angka nol, angka l = ${l}`)
}


console.log ("\n --- batas --- \n")




// For dasar

for (a = 0; a < 9; a++) {
    console.log (`Urutan ke - ${a}`)
}

console.log ("\n --- batas --- \n")




// For dasar 1

for (k = 1; k < 11; k++) {
    console.log (`Urutan ke - ${k}`)
}

console.log ("\n --- batas --- \n")




// For dasar 2

for (r = 5; r < 15; r++) {
    console.log (`Urutan ke - ${r}`)
}


console.log ("\n --- batas --- \n")




// For dasar 3

for (f = 0; f < 10; f++) {
    console.log (`Urutan ke - ${f}`)
}


console.log ("\n --- batas --- \n")




// For dasar 4

for (j = 5; j < 20; j++) {
    console.log (`Urutan ke - ${j}`)
}


console.log ("\n --- batas --- \n")



// While dasar 1 

var e = 1 

while (e < 10) {
    console.log (`Urutan ke - ${e}`)
    e++
} 


console.log ("\n --- batas --- \n")




// While dasar 2 

var d = 5 

while (d < 10) {
    console.log (`Urutan ke - ${d}`)
    d++
}


console.log ("\n --- batas --- \n")




// While dasar 3 

var k = 10

while (k > 0) {
    console.log (`Urutan ke - ${k}`)
    k-- 
}


console.log ("\n --- batas --- \n")




// Array 

var dk = [
    
    "Johnson",
    "Fanter",
    "Robert",
    "Bert",
    "Alan",
    "Fans",
   
    ]
    
    
for (a = 0; a < dk.length; a++) {
    console.log (dk [a])
}



console.log ("\n --- batas --- \n")




// Array 2 

var fi = [
    
    "Halo",
    "Hasil",
    "Hanso",
    "Dam",
    "Ser",
    "Hun",
    
    ]
    
    
fi.push ("Hunk")
fi.push ("Hun")
fi.push ("Er")
fi.push ("Der")
fi.push ("Fans")
fi.push ("Rans")

for (b = 0; b < fi.length; b++) {
    console.log (fi [b])
}


console.log ("\n --- batas --- \n")




// Object

var data = {
    "nama" : "Habib Muzakki",
    "asal" : "kota Serang",
    "marga" : "Piliang",
    "nomor" : 12,
    "kerja" : "Frond End",
}

console.log ("Nama :", data ["nama"])
console.log ("Asal :", data ["asal"])
console.log ("Marga :", data ["marga"])
console.log ("Nomor :", data ["nomor"])
console.log ("Kerja :", data ["kerja"])


console.log ("\n --- batas --- \n")



// Arrow Fungsi

var hasil = () => {
    console.log ("Halo dunia")
}

hasil ()


console.log ("\n --- batas --- \n")




// Arrow Fungsi 2

var run = (nama) => {
    console.log (`Halo ${nama} dari Kota Serang`)
}

console.log ("Habib")


console.log ("\n --- batas --- \n")




// Arrow Fungsi return 

 
var fun = (nama) => {
    return `Halo nama ${nama} dari Kota Serang`
}

console.log (fun ("Habib"))
console.log (fun ("Well"))
console.log (fun ("Eron"))
console.log (fun ("Roj"))
console.log (fun ("Ros"))
console.log (fun ("Ron"))


console.log ("\n --- batas --- \n")




// Fungsi dengan angka terbesar 

function besar (a, k) {
    
    if (a > k) {
        return a
    }
    
    else {
        return k
    }
}

console.log ("Angka besar =", besar (9, 7))
console.log ("Angka besar =", besar (4, 7))
console.log ("Angka besar =", besar (4, 8))
console.log ("Angka besar =", besar (3, 8))


console.log ("\n --- batas --- \n")




// Fungsi dengan angka Kecil

function kecil (u, j) {
    
    if (u < j) {
        return u
    }
    
    else {
        return j
    }
}

console.log ("Angka kecil = ", kecil (8, 4))
console.log ("Angka kecil = ", kecil (3, 8))
console.log ("Angka kecil =", kecil (2, 8))
console.log ("Angka kecil =", kecil (2, 8))
console.log ("Angka kecil =", kecil (3, 5))



console.log ("\n --- batas --- \n")



