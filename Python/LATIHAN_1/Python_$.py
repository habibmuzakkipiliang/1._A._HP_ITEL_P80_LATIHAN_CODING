# Hello World

print ("Hello World")


print ("\n --- batas --- \n")




# variabel

a = "Halo Dunia"
print ("A =", a)

b = "Halo Fun"
print ("B =", b)

c = 12.12
print ("C =", c)

d = 12
print ("D =", d)

e = True
print ("E =", e)


print ("\n --- batas --- \n")



# Operasi dasar

x = 9
y = 8

def tambah (x, y):
    return x + y
    
def kurang (x, y):
    return x - y
    
def kali (x, y):
    return x * y
    
def bagi (x, y):
    return x / y
    
def pangkat (x, y):
    return x ** y
    
def modulus (x, y):
    return x % y
    
    
print ("Tambah =", tambah (x, y))
print ("Kurang =", kurang (x, y))
print ("Kali =", kali (x, y))
print ("Bagi =", bagi (x, y))
print ("Modulus =", modulus (x, y))


print ("\n --- batas --- \n")




# Switch Case

a = 3

match (a):
    
    case 1:
        print (1)
        
    case 2:
        print (2)
        
    case 3:
        print (3)
    
    case 4:
        print (4)
        
    case 5:
        print (5)
        
    case 6:
        print (6)
        
    case _:
        print (0)
        
        
print ("\n --- batas --- \n")




# Switch Case 2

hari = "Senin"

match (hari):
    
    case "Senin":
        print ("Senin")
        
    case "Selasa":
        print ("Selasa")
        
    case "Rabu":
        print ("Rabu")
        
    case "Kamis":
        print ("Kamis")
        
    case "Jumat":
        print ("Jumat")
        
    case _:
        print ("Libur")
        
        
print ("\n --- batas --- \n")




# Fungsi Switch Case

def ref (a):
    
    match (a):
        
        case 1:
            print (1)
            
        case 2:
            print (2)
            
        case 3:
            print (3)
            
        case 4:
            print (4)
            
        case 5:
            print (5)
            
        case 6:
            print (6)
            
        case _:
            print (0)
            
ref (1)
ref (2)
ref (3)
ref (4)
ref (5)
ref (6)
ref (0)


print ("\n -- batas --- \n")




# Fungsi dengan Switch Case 2

def hari_1 (e):
    
    match (e):
        
        case "Senin":
            print ("Senin")
            
        case "Selasa":
            print ("Selasa")
            
        case "Rabu":
            print ("Rabu")
            
        case "Kamis":
            print ("Kamis")
            
        case "Jumat":
            print ("Jumat")
            
        case _:
            print ("Libur")
            
hari_1 ("Senin")
hari_1 ("Selasa")
hari_1 ("Rabu")
hari_1 ("Kamis")
hari_1 ("Jumat")
hari_1 ("Libur")


print ("\n --- batas --- \n")




# Percabangan dasar 

a = 9

if a >= 8:
    print (f"besar, angka a = {a}")
    
else:
    print (f"kecil, angka a = {a}")
    
print ("\n --- batas --- \n")




# Fungsi dengan percabangan dasar

def er (t):
    
    if t >= 8:
        print (f"besar, angka t = {t}")
        
    else:
        print (f"kecil, angka t = {t}")

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


print ("\n --- batas --- \n")





# percabangan lanjutan

f = 3

if f >= 8:
    print (f"besar, angka f = {f}")

elif f >= 5:
    print (f"sedang, angka f = {f}") 
    
else:
    print (f"kecil, angka f = {f}")
    
    
print ("\n --- batas --- \n")




# Fungsi dengan percabangan lanjutan 

def kil (r):
    
    if r >= 8:
        print (f"besar, angka r = {r}")
        
    elif r >= 5:
        print (f"sedang, angka r = {r}")
        
    else:
        print (f"kecil, angka r = {r}")
        
kil (10)
kil (9)
kil (8)
kil (7)
kil (6)
kil (5)
kil (4)
kil (3)
kil (2)
kil (1)


print ("\n --- batas --- \n")




print ("\n --- batas --- \n")


# Error handling

try:
    a = 10 + 10
    print (a)
    
except:
    print ("Gagal")
    
else:
    print ("Oke")
    
finally:
    print ("Selesai")
    
    
print ("\n --- batas --- \n")




# Error handling 2

try:
    a = 10 / 0
    print (a)
    
except:
    print ("Gagal")
    
else:
    print ("oke")
    
finally:
    print ("Selesai")
    
    
print ("\n --- batas --- \n")




# Fungsi dengan error handling

def run (a):
    
    try:
        if a < 0:
            raise ("Minus")
            
        if a >= 7:
            print (f"besar, angka a = {a}")
            
        else:
            print (f"kecil, angka a = {a}")
            
    except:
        print (f"Gak boleh angka minus, angka a = {a}")
        
run (10)
run (9)
run (8)
run (3)
run (2)
run (1)
run (-1)
run (-4)
run (-6)
run (-8)


print ("\n --- batas --- \n")




# Fungsi dengan error handling 2

def fer (b):
    
    try:
        if b < 0:
            raise ("Minus")
            
        if b >= 8:
            print (f"besar, angka b = {b}")
            
        elif b >= 6:
            print (f"sedang, angka b = {b}")
            
        else:
            print (f"kecil angka b = {b}")
            
    except:
        print (f"Gak boleg angka minus, angka b = {b}")
        
        
fer (10)
fer (9)
fer (8)
fer (6)
fer (5)
fer (4)
fer (3)
fer (2)
fer (1)
fer (-4)
fer (-7)
fer (-8)
fer (-9)
fer (-35)
fer (-23)
fer (-90)


print ("\n --- batas --- \n")




# Percabangan nested 1

k = 4
cek = True

if k >= 8:
    if cek:
        print (f"besar, angka k = {k}")
    
    else:
        print (f"sedang, angka k = {k}")
        
else:
    print (f"kecil, angka k = {k}")
    
    
print ("\n --- batas --- \n")




# Percabangan nested 2

u = 3
cek = True

if u >= 8:
    if cek:
        print (f"besar, angka u = {u}")
        
    elif u >= 5:
        print (f"sedang, angka u = {u}")
        
else:
    print (f"kecil, angka u = {u}")
    
    
print ("\n --- batas --- \n")




# Array 

gun = [
    
    "Gracie",
    "Aralie",
    "Lily",
    "Michie",
    "Fritzy",
    
    ]
    
gun.append ("Lana")
gun.append ("Erine")
gun.append ("Delynn")
gun.append ("Anindya")
gun.append ("Freya")


for g in gun:
    print (g)
    
    
print ("\n --- batas --- \n")




# Fungsi dasar

def dasar ():
    print ("Hello World")
    
dasar ()


print ("\n --- batas --- \n")




# Fungsi dasar 

def ry ():
    print ("Hello World")
    print ("Hello Fun")
    print ("Hello Fer")
    print ("Hello juk")
    
    
ry ()


print ("\n --- batas --- \n")




# Fungsi dengan parameter 

def hun (nama):
    print (f"Halo nama saya {nama} dari Jakarta Timur")
    
hun ("Halon")
hun ("Fert")
hun ("Fart")
hun ("Van")


print ("\n --- batas --- \n")




# Fungsi dengan parameter 2

def der (nama, asal, usia):
    print (f"Halo nama saya {nama}, asal dari {asal} dan berusia {usia}")
    
der ("Hayyan", "Jakarta", 12)
der ("Rayyan", "Tangerang", 12)
der ("Fayyan", "Serang", 23)


print ("\n --- batas --- \n")
