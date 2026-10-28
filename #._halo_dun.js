console.log ("Hello World")


console.log ("\n --- batas --- \n")




// variabel

var t = 90
console.log ("T =", t)

var r = "Hello World"
console.log ("R =", r)

var e = 12.12
console.log ("E =", e)


console.log ("\n --- batas --- \n")




// fungsi dasar

var x = 9
var y = 4

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

function modulus (x, y) {
    return x % y
}


console.log ("Tambah =", tambah (x, y))
console.log ("Kurang =", kurang (x, y))
console.log ("Kali =", kali (x, y))
console.log ("Pangkat =", pangkat (x, y))
console.log ("Modulus =", modulus (x, y))


console.log ("\n --- batas --- \n")




// tipe data 

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




// Percabangan dasar

var a = 4

if (a >= 5) {
    console.log (`besar, angka a = ${a}`)
}

else {
    console.log (`kecil, angka a = ${a}`)
}


console.log ("\n --- batas --- \n")