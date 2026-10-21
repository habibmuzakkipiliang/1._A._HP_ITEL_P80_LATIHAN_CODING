// Tes

console.log ("Hello World")


var a = "Halo Dunia"
console.log ("A =", a)

var b = "Halo Fun"
console.log ("B =", b)

var c = 12
console.log ("C =", c)

var d = true
console.log ("D =", d)


console.log ("\n --- batas --- \n")



// Profil sederhana

var nama = "Habib Muzakki"
var asal = "Kota Serang"
var jurusan = "D4 Teknik Informatika"
var fakultas = "Vokasi"
var suku = "Piliang Minangkabau"
var kampus = "Kampus 1 Mataram, Universitas Harkat Negeri"


var profil = `
- Nama     : ${nama}
- Asal     : ${asal}
- Jurusan  : ${jurusan}
- Fakultas : ${fakultas}
- Suku     : ${suku}
- Kampus   : ${kampus}
`

console.log (profil)


console.log ("\n --- batas --- \n")




// Tipe data 

var teks = "Halo Dunia"
var angka = 12
var desimal = 12.12
var cek = true

var tipe = `
- Teks    : ${teks}
- Angka   : ${angka}
- Desimal : ${desimal}
- Cek     : ${cek}
`

console.log (tipe)


console.log ("\n --- batas --- \n")



// Cek Tipe data

console.log (typeof (teks))
console.log (typeof (angka))
console.log (typeof (desimal))
console.log (typeof (cek))



console.log ("\n --- batas --- \n")




// Operasi dasar

var x = 9
var y = 5


console.log ("Tambah =", x + y)
console.log ("Kurang =", x - y)
console.log ("Kali =", x * y)
console.log ("Pangkat =", x ** y)
console.log ("Bagi =", x / y)


console.log ("\n --- batas --- \n")




// Operator perbandingan

console.log ("Hasil =", x > y)
console.log ("Hasil =", x < y)
console.log ("Hasil =", x >= y)
console.log ("Hasil =", x <= y)
console.log ("Hasil =", x == y)
console.log ("Hasil =", x != y)


console.log ("\n --- batas --- \n")




// Operator logika

console.log ("Hasil =", a > b && a < b)
console.log ("Hasil =", a < b || a > b)
console.log ("Hasil =", ! (a > b))
console.log ("Hasil =", ! (a < b))


console.log ("\n --- batas --- \n")




// Percabangan dasar

var a = 9

if (a >= 8) {
    console.log (`Besar, angka a = ${a}`)
}

else {
    console.log (`Kecil, angka a = ${a}`)
}


console.log ("\n --- batas --- \n")





// Percabangan lanjutan

var t = 4

if (t >= 8) {
    console.log (`Besar, angka t = ${t}`)
}

else if (t >= 5) {
    console.log (`Sedang, angka t = ${t}`)
}

else {
    console.log (`Kecil, angka t = ${t}`)
}


console.log ("\n --- batas --- \n")




// Percabangan lanjutan

var g = 7

if (g > 0) {
    console.log (`Angka plus, angka g = ${g}`)
}

else if (g < 0) {
    console.log (`Angka minus, angka g = ${g}`)
}

else {
    console.log (`Kecil, angka g = ${g}`)
}


console.log ("\n --- batas --- \n")




// Percabangan Nested 1

var e = 9
var cek = true

if (e >= 8) {
    if (cek) {
        console.log (`Besar, angka a = ${a}`)
    }
    
    else {
        console.log (`Sedang, angka a = ${a}`)
    }
}

else {
    console.log (`Kecil, angka a = ${a}`)
}


console.log ("\n --- batas --- \n")




// Percabangan Nested 2

var r = 3
var cek = true


if (r >= 8) {
    if (cek) {
        console.log (`Besar, angka r = ${r}`)
    }
    
    else if (r >= 5) {
        console.log (`Sedang, angka r = `)
    }
}