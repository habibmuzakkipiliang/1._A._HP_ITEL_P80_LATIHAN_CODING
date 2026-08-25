// Arrow Fungsi dalam Kalkulator dasar 

var x = 10
var y = 13

var tambah = (x, y) => {
    return x + y
}

var kurang = (x, y) => {
    return x - y
}

var kali = (x, y) => {
    return x * y
}

var pangkat = (x, y) => {
    return x ** y
}

var bagi = (x, y) => {
    return x / y
}

var modulus = (x, y) => {
    return x % y
}


console.log ("Tambah =", tambah (x, y))
console.log ("Kurang =", kurang (x, y))
console.log ("Kali =", kali (x, y))
console.log ("Bagi =", bagi (x, y))
console.log ("Pangkat =", pangkat (x, y))
console.log ("Modulus =", modulus (x, y))



console.log ("\n --- batas --- \n")




// Arrow fungsi dengan parameter 


var nama = (halo) => {
    console.log (`Halo saya ${halo} dari jakarta utara`)
}

nama ("Hayyan")
nama ("Fayyan")
nama ("Rayyan")
nama ("Royman")
nama ("Fayyman")


console.log ("\n --- batas --- \n")




// Arrow Fungsi + Percabangan dasar 

var tes_1 = (x) => {
    
    
    if (x >= 5) {
        console.log (`Angka x besar, angka x = ${x}`)
    }
    
    else {
        console.log (`Angka x kecil, angka x = ${x}`)
    }
}

tes_1 (10)
tes_1 (9)
tes_1 (8)
tes_1 (7)
tes_1 (6)
tes_1 (5)
tes_1 (4)
tes_1 (2)
tes_1 (1)


console.log ("\n --- batas --- \n")



// Arrow Fungsi + Percabangan Lanjutan

var lan_1 = (y) => {
    
    if (y >= 8) {
        console.log (`Angka y besar, angka y = ${y}`)
    }
    
    else if (y >= 5) {
        console.log (`Angka y tengah, angka y = ${y}`)
    }
    
    else {
        console.log (`Angka y kecil, angka y = ${y}`)
    }
}

lan_1 (10)
lan_1 (6)
lan_1 (5)
lan_1 (3) 
lan_1 (2)
lan_1 (1)


console.log ("\n --- batas --- \n")




// Arrow Fungsi + Percabangan Lanjutan angka positif

var pos = (h) => {
    
    if (h > 0) {
        console.log (`Angka positif, angka h = ${h}`)
    }
    
    else if (h < 0) {
        console.log (`Angka negatif, angka h = ${h}`)
    }
    
    else {
        console.log (`Angka nol, angka h = ${h}`)
    }
}

pos (10)
pos (-10)
pos (-2)
pos (0) 
pos (8)
pos (4)
pos (2)


console.log ("\n --- batas --- \n")




// Arrow Fungsi + Percabangan nilai rapor 

var nilai = (k) => {
    
    if (k >= 95) {
        console.log (`A, nilai = ${k}`)
    }
    
    else if (k >= 90) {
        console.log (`B, nilai = ${k}`)
    }
    
    else if (k >= 80) {
        console.log (`C, nilai = ${k}`)
    }
    
    else if (k >= 70) {
        console.log (`D, nilai = ${k}`)
    }
    
    else if (k >= 60) {
        console.log (`E, nilai = ${k}`)
    }
    
    else if (k >= 50) {
        console.log (`F, nilai = ${k}`)
    }
    
    else {
        console.log (`Jelek amat, nilai = ${k}`)
    }
}

nilai (100)
nilai (90)
nilai (80)
nilai (70)
nilai (60)
nilai (50)
nilai (30)
nilai (20)


console.log ("\n --- batas --- \n")




// Arrow Fungsi + Error Handling 

var eror = (j) => {
    
    try {
        
        if (j < 0) {
            throw ("Angka minus")
        }
        
        if (j >= 9) {
            console.log (`Angka j besar, angka j = ${j}`)
        }
        
        else if (j >= 5) {
            console.log (`Angka tengah, angka j = ${j}`)
        }
        
        else {
            console.log (`Angka j kecil, angma j = ${j}`)
        }
    }
    
    catch (Error) {
        console.log (`Angka minus, angka j = ${j}`)
    }
}

eror (-10)
eror (-23)
eror (-12)
eror (10)
eror (7)
eror (5)
eror (4)
eror (3)
eror (2)


console.log ("\n --- batas --- \n")



// Arrow Fungsi + Percabangan Nested

var nested = (f) => {
    
    var cek = true
    
    if (f >= 5) {
        if (cek) {
            console.log (`Angka yang besar, angka f = ${f}`)
        }
        
        else {
            console.log (`Angka tengah, angka f = ${f}`)
        }
    }
    
    else {
        console.log (`Angka kecil, angka f = ${f}`)
    }
}

nested (8)
nested (7)
nested (6)
nested (5)
nested (4)
nested (3)
nested (2)
nested (1)


console.log ("\n --- batas --- \n")




// Arrow Fungsi + Oshi JKT48 

var oshi = (nama, daerah, gen) => {
    console.log (`${nama}, asal daerah ${daerah} dan dari gen ${gen}`)
}

oshi ("Christy", "Jakarta", 7)
oshi ("Marha", "Jakarta", 7)
oshi ("Jessi", "Jakarta", 7)
oshi ("Fiony", "Jakarta",  8)
oshi ("Michie", "Palembang", 11)


console.log ("\n --- batas --- \n")




// Dictionary

var datan = {
    "nama" : "Habib",
    "asal" : "Kota Serang",
    "cek" : true,
    "coding" : "HTML, CSS, JavaScript dan Python",
    "kuliah" : "D4 Informatika",
}

for (d in datan) {
    console.log (`${d} : ${datan [d]}`)
}