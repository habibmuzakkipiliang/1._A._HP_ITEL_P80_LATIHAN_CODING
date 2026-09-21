// Hello World

console.log ("Hello World")


console.log ("\n --- batas --- \n")




// Variabel

var a = "Halo Dunia"
console.log (a)


var b = "Halo Fen"
console.log (b)


var c = 9
console.log (c)


var d = true
console.log (d)


console.log ("\n --- batas --- \n")




// Operator dasar

var a = 9
var b = 7


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


console.log ("Tambah =", tambah (a, b))
console.log ("Kurang = ", kurang (a, b))
console.log ("Kali =", kali (a, b))
console.log ("Bagi =", bagi (a, b))
console.log ("Pangkat =", pangkat (a, b))


console.log ("\n --- batas --- \n")



// Percabangan dasar 

var a = 9

if (a >= 5) {
    console.log (`Besar, angka a = ${a}`)
}

else {
    console.log (`Kecil, angka a = ${a}`)
}


console.log ("\n --- batas --- \n")



// Percabangan lanjutan 

var b = 7

if (b >= 8) {
    console.log (`Besar, angka b = ${b}`)
}

else if (b >= 5) {
    console.log (`Sedang, angka b = ${b}`)
}

else {
    console.log (`Kecil, angka b = ${b}`)
}


console.log ("\n --- batas --- \n")




// Percabangan nested

var nomor = 9
var cek = true

if (nomor >= 6) {
    if (cek) {
        console.log (`Besar, angka = ${nomor}`)
    }
    
    else {
        console.log (`Sedang, angka = ${nomor}`)
    }
}

else {
    console.log (`Kecil, angka = ${nomor}`)
}


console.log ("\n --- batas --- \n")




// For dasar

for (a = 0; a < 8; a++) {
    console.log (`Urutan ke - ${a}`)
}


console.log ("\n --- batas --- \n")




// For dasar 2

for (b = 1; b < 9; b++) {
    console.log (`Urutan ke - ${b}`)
}


console.log ("\n --- batas --- \n")




// For dasar 3

for (h = 5; h < 11; h++) {
    console.log (`Urutan ke - ${h}`)
}


console.log ("\n --- batas --- \n")




// While dasar 

var t = 1

while (t < 16) {
    console.log (`Urutan ke - ${t}`)
    t++
}


console.log ("\n --- batas --- \n")




// While dasar 2

var j = 0

while (j < 12) {
    console.log (`Urutan ke - ${j}`)
    j++
}


console.log ("\n --- batas --- \n")




// While dasar 3

var t = 10

while (t > 0) {
    console.log (`Urutan ke - ${t}`)
    t--
}


console.log ("\n --- batas --- \n")




// Array 

var dat = [

    "Azzam",
    "Yusuf",
    "Daffa",
    "Fakhri",
    "Daftar",
    "Roni",
    "Ivan",
    "Hayyan",
    "Rayyan",
    
    ]
    
    
for (h = 0; h < dat.length; h++) {
    console.log (dat [h])
}


console.log ("\n --- batas --- \n")




// Array 2

var jun = [
    
    "Roni",
    "Darpa",
    "Afdhal",
    "Iyan",
    "Fayan",
    
    ]
    
    
jun.push ("Hunk")
jun.push ("Darf")
jun.push ("Gyu")
jun.push ("Ern")
jun.push ("Hun")
jun.push ("Ship")


for (k = 0; k < jun.length; k++) {
    console.log (jun [k])
}


console.log ("\n --- batas --- \n")