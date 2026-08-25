// Hello World

console.log ("Hello World")


console.log ("\n --- batas --- \n")




// variabel dasar

var contoh  = "Halo Tes"
console.log (contoh)


var contoh_1 = 12
console.log (contoh_1)


var contoh_2 = 12.12
console.log (contoh_2)


console.log ("\n --- batas --- \n")



// Tipe data pemrograman

var teks = "Halo Tes"
var angka = 12
var desimal = 2.23
var cek = true
var kosong = null

tipe = `
- Teks    : ${teks}
- Angka   : ${angka}
- Desimal : ${desimal}
- Cek     : ${cek}
- Kosong  : ${kosong}
`

console.log (tipe)


console.log ("\n --- batas --- \n")




// Cek tipe data pemrograman

var cek_tipe = `
- Teks    : ${typeof (teks)}
- Angka   : ${typeof (angka)}
- Desimal : ${typeof (desimal)}
- Cek     : ${typeof (cek)}
- Kosong  : ${typeof (kosong)}
`

console.log (cek_tipe)


console.log ("\n --- batas --- \n")




// Fungsi dengan operator 

var x = 10
var y = 9

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

operator = `
- Tambah  = ${x + y}
- Kurang  = ${x - y}
- Kali    = ${x * y}
- Pangkat = ${x ** y}
- Bagi    = ${x / y}
- Modulus = ${x % y}
`

console.log (operator)


console.log ("\n --- batas --- \n")




// Operator perbandingan 

function logic_1 (x, y) {
    return x > y
}

function logic_2 (x, y) {
    return x < y
}

function logic_3 (x, y) {
    return x == y
}

function logic_4 (x, y) {
    return x != y
}

function logic_5 (x, y) {
    return x <= y
}

function logic_6 (x, y) {
    return x >= y
}


logic = `
- Logic 1 = ${x > y}
- Logic 2 = ${x < y}
- Logic 3 = ${x >= y}
- logic 4 = ${x <= y}
- logic 5 = ${x == y}
- logic 6 = ${x != y}
`

console.log (logic)


console.log ("\n --- batas --- \n")




// Fungsi dengan operator logika 

gun = `
- Logika = ${x < y && x > y}
- Logika = ${x > y || x > y}
- Logika = ${!(x < y)}
- Logika = ${!(x > y)}
`

console.log (gun)


console.log ("\n --- batas ---")




// Fungsi dengan percabangan dasar

function das (k) {
    
    if (k >= 8) {
        console.log (`Angka k besar, angka k = ${k}`)
    }
    
    else {
        console.log (`Angka k kecil, angka k = ${k}`)
    }
}

das (10)
das (9)
das (8)
das (7)
das (6)
das (5)
das (4)
das (3)
das (2)
das (1)


console.log ("\n --- batas --- \n")




// Fungsi dengan percabangan dasar 

function kip (s) {
    
    if (s > 0) {
        console.log (`Angka positif, angka s = ${s}`)
    }
    
    else {
        console.log (`Angka negatif, angka s = ${s}`)
    }
}

kip (10)
kip (9)
kip (8)
kip (7)
kip (6)
kip (5)
kip (4)
kip (3)
kip (2)


console.log ("\n --- batas --- \n")




// Fungsi dengan percabangan dasar 2

function run (b) {
    
    if (b > 0) {
        console.log (`angka positif, angka b = ${b}`)
    }
    
    else if (b < 0) {
        console.log (`angka negatif, angka b = ${b}`)
    }
    
    else {
        console.log (`Angka nol, angka b = ${b}`)
    }
}

run (-10)
run (-23)
run (12)
run (34)
run (89)
run (-67)
run (-12)
run (12)
run (34)
run (0)
run (0)
run (0)


console.log ("\n --- batas --- \n")




// Fungsi dengan percabangan rapor 

function rapor (d) {
    
    if (d >= 95) {
        console.log (`A, nilai = ${d}`)
    }
    
    else if (d >= 90) {
        console.log (`B, nilai = ${d}`)
    }
    
    else if (d >= 80) {
        console.log (`C, nilai = ${d}`)
    }
    
    else if (d >= 70) {
        console.log (`D, nilai = ${d}`)
    }
    
    else if (d >= 60) {
        console.log (`E, nilai = ${d}`)
    }
    
    else if (d >= 50) {
        console.log (`F, nilai = ${d}`)
    }
    
    else {
        console.log (`Jelek amat, nilai = ${d}`)
    }
}

rapor (100)
rapor (90)
