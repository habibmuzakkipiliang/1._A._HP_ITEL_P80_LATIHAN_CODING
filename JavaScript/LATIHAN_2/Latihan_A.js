// Hello World

console.log ("Hello World")


console.log ("\n --- batas --- \n")




// Variabel dasar

var a = "Hello World"
console.log ("A =", a)

var b = "Halo Fun"
console.log ("B =", b)

var c = 12
console.log ("C =", c)

var d = true
console.log ("D =", d)


console.log ("\n --- batas --- \n")



// Operasi dasar

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

function bagi (x, y) {
    return x / y
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
console.log ("Bagi =", bagi (x, y))
console.log ("Modulus =", modulus (x, y))


console.log ("\n --- batas --- \n")



// Operasi perbandingan

console.log ("Hasil =", x > y)
console.log ("Hasil =", x < y)
console.log ("Hasil =", x == y)
console.log ("Hasil =", x != y)
console.log ("Hasil =", x != y)


console.log ("\n --- batas --- \n")




// Operator logika

console.log ("Hasil =", x < y && x > y)
console.log ("Hasil =", x > y || x < y)
console.log ("Hasil =", ! (x > y))
console.log ("Hasil =", ! (x < y))


console.log ("\n --- batas --- \n")



// Fungsi dengan percabangan dasar 

function er (y) {
    
    if (y >= 5) {
        console.log (`Besar, angka y = ${y}`)
    }
    
    else {
        console.log (`Kecil, angka y = ${y}`)
    }
}

er (10)
er (9)
er (8)
er (7)
er (6)
er (5)
er (4)
er (3)
er (2)
er (1)


console.log ("\n --- batas --- \n")




// Fungsi dengan percabangan dasar

function uj (i) {
    
    if (i >= 8) {
        console.log (`Besar, angka i = ${i}`)
    }
    
    else if (i >= 5) {
        console.log (`Sedang, angka i = ${i}`)
    }
    
    else {
        console.log (`kecil, angka i = ${i}`)
    }
}

uj (10)
uj (8)
uj (3)
uj (2)
uj (6)