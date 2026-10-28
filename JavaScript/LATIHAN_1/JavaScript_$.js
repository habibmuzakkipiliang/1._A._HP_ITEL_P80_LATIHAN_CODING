// Hello World

console.log ("Hello World")


console.log ("\n --- batas -- \n")




// Variabel 

var a = "Halo Dunia"
console.log ("A =", a)

var b = "Halo Fun"
console.log ("B =", b)

var c = 12
console.log ("C =", c)

var d = 12.12
console.log ("D =", d)

var e = true
console.log ("E =", e)


console.log ("\n --- batas --- \n")




// Operasi dasar

var x = 9
var y = 2

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
console.log ("Bagi =", bagi (x, y))
console.log ("Pangkat =", pangkat (x, y))
console.log ("Modulus =", modulus (x, y))


console.log ("\n --- batas --- \n")



// Switch Case 

var a = 3

switch (a) {
    
    case 1:
        console.log (1)
        break
        
    case 2:
        console.log (2)
        break
        
    case 3:
        console.log (3)
        break
        
    case 4:
        console.log (4)
        break
        
    case 5:
        console.log (5)
        break
        
    case 6:
        console.log (6)
        break
        
    default:
    console.log (0)
}


console.log ("\n --- batas --- \n")




// Switch case 2

var hari = "Senin"

switch (hari) {
    
    case "Senin":
        console.log ("Senin")
        break
        
    case "Selasa":
        console.log ("Selasa")
        break
        
    case "Rabu":
        console.log ("Rabu")
        break
        
    case "Kamis":
        console.log ("Kamis")
        break
        
    case "Jumat":
        console.log ("Jumat")
        
    default:
    console.log ("Libur")
}


console.log ("\n --- batas --- \n")




// Fungsi dengan Switch Case

function df (c) {
    
    switch (c) {
        
        case 1:
            console.log (1)
            break
            
        case 2:
            console.log (2)
            break
            
        case 3:
            console.log (3)
            break
            
        case 4:
            console.log (4)
            break
            
        case 5:
            console.log (5)
            break
            
        default:
        console.log (0)
    }
}

df (1)
df (2)
df (3)
df (4)
df (5)
df (0)


console.log ("\n --- batas --- \n")




// Fungsi dengan switch case 2 

function hari_1 (e) {
    
    switch (e) {
        
        case "Senin":
            console.log ("Senin")
            break
            
        case "Selasa":
            console.log ("Selasa")
            break
            
        case "Rabu":
            console.log ("Rabu")
            break
            
        case "Kamis":
            console.log ("Kamis")
            break
            
        case "Jumat":
            console.log ("Jumat")
            break
            
        default:
        console.log ("Libur")
    }
}

hari_1 ("Senin")
hari_1 ("Selasa")
hari_1 ("Rabu")
hari_1 ("Kamis")
hari_1 ("Jumat")
hari_1 ("Libur")


console.log ("\n --- batas --- \n")





// Percabangan dasar

var e = 8

if (e >= 8) {
    console.log (`Besar, angka e = ${e}`)
}

else {
    console.log (`Kecil, angka e = ${e}`)
}


console.log ("\n --- batas --- \n")




// Fungsi dengan percabangan dasar 

function gun (t) {
    
    if (t >= 8) {
        console.log (`Besar, angka t = ${e}`)
    }
    
    else {
        console.log (`Kecil, angka e = ${e}`)
    }
}

gun (10)
gun (9)
gun (8)
gun (7)
gun (5)
gun (3)
gun (2)
gun (1)


console.log ("\n --- batas --- \n")




// Fungsi dengan percabangan lanjutan

function jun (u) {
    
    if (u >= 8) {
        console.log (`Besar, angka u = ${u}`)
    }
    
    else if (u >= 5) {
        console.log (`Sedang, angka u = ${u}`)
    }
    
    else {
        console.log (`Kecil, angka u = ${u}`)
    }
}

jun (10)
jun (9)
jun (8)
jun (7)
jun (6)
jun (5)
jun (4)
jun (3)
jun (2)
jun (1)


console.log ("\n --- batas --- \n")




// Fungsi dengan error handling

function run (a) {
    
    try {
        if (a < 0) {
            throw ("minus")
        }
        
        if (a >= 8) {
            console.log (`Besar, angka a = ${a}`)
        }
        
        else {
            console.log (`Kecil, angka a = ${a}`)
        }
    }
    
    catch (Error) {
        console.log (`Gak boleh angka minus, angka a = ${a}`)
    }
}

run (10)
run (8)
run (7)
run (6)
run (5)
run (3)
run (2)
run (1)
run (-12)
run (-34)
run (-33)
run (-45)
run (-89)


console.log ("\n --- batas --- \n")




// Fungsi dengan error handling

function fer (b) {
    
    try {
        if (b < 0) {
            throw ("minus")
        }
        
        if (b >= 8) {
            console.log (`Besar, angka a = ${b}`)
        }
        
        else if (b >= 5) {
            console.log (`Sedang, angka b = ${b}`)
        }
        
        else {
            console.log (`Kecil, angka b = ${b}`)
        }
    }
    
    catch (Error) {
        console.log (`Gak boleh angka minus, angka b = ${b}`)
    }
}

fer (10)
fer (8)
fer (7)
fer (5)
fer (6)
fer (4)
fer (2)
fer (1)
fer (-12)
fer (-24)
fer (-45)
fer (-44)
fer (-89)
fer (-90)


console.log ("\n --- batas --- \n")





// Percabangan nested 

var g = 9
var cek = true

if (g >= 8) {
    if (cek) {
        console.log (`besar angka g = ${g}`)
    }
    
    else {
        console.log (`sedang, angka g = ${g}`)
    }
}

else {
    console.log (`kecil, angka g = ${g}`)
}   


console.log ("\n --- batas --- \n")





// Percabangan nested 2

var u = 3
var cek = true

if (u >= 8) {
    if (cek) {
        console.log (`besar, angka u = ${u}`)
    }
    
    else if (u >= 5) {
        console.log (`sedang, angka u = ${u}`)
    }
}

else {
    console.log (`kecil, angka u = ${u}`)
}


console.log ("\n --- batas --- \n")




// Array 

var gun = [
    
    "Gracie",
    "Aralie",
    "Lily",
    "Michie",
    "Fritzy",
    
    ]
    
gun.push ("Lana")
gun.push ("Erine")
gun.push ("Delynn")
gun.push ("Anindya")
gun.push ("Freya")


for (h = 0; h < gun.length; h++) {
    console.log (gun [h])
}


console.log ("\n --- batas --- \n")




// Fungsi dasar 

function dasar () {
    console.log ("Hello world")
}

dasar ()


console.log ("\n --- batas --- \n")




// Fungsi dengan dasar

function yun () {
    console.log ("Hello World")
    console.log ("Hello Hun")
    console.log ("Hello gun")
    console.log ("Hello Durn")
}

yun ()


console.log ("\n --- batas --- \n")




// Fungsi dengan parameter

function nama (halo) {
    console.log (`Halo nama saya ${halo} dari Jakarta Timur`)
}

nama ("Hans")
nama ("Lans")
nama ("Jun")
nama ("Hub")
nama ("Gub")
nama ("Der")


console.log ("\n --- batas --- \n")




// Fungsi dengan parameter 3


function halo (nama, asal, usia) {
    console.log (`Halo nama saya ${nama} dari ${asal} dan berusia ${usia}`)
}

halo ("Rayyan", "Tangerang", 12)
halo ("Fayyan", "Jakarta", 44)
halo ("Roon", "Inggris", 34)
halo ("Roat", "Inggris", 45)


console.log ("\n --- batas --- \n")