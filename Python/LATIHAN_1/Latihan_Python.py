# Hello World

print ("Hello World")


print ("\n --- batas --- \n")




# Operator angka

a = int (input ("Masukkan angka a = ?"))
b = int (input ("Masukkan angka b = ?"))


def tambah (a, b):
    return a + b
    
    
def kurang (a, b):
    return a - b
    
    
def kali (a, b):
    return a * b
    
    
def bagi (a, b):
    return a / b
    
    
def pangkat (a, b):
    return a ** b
    
    
def modulus (a, b):
    return a % b
    
    
print ("Tambah =", tambah (a, b))
print ("Kurang =", kurang (a, b))
print ("Kali =", kali (a, b))
print ("Bagi =", bagi (a, b))
print ("Modulus =", modulus (a, b))


print ("\n --- batas --- \n")




# Percabangan dasar 

a = 9

if a >= 8:
    print (f"Besar, angka a = {a}")
    
else:
    print (f"Kecil, angka a = {a}")
    
    
print ("\n --- batas --- \n")




# Percabangan lanjutan

b = 4

if b >= 8:
    print (f"Besar, angka b = {b}")
    
elif b >= 5:
    print (f"Sedang, angka b = {b}")
    
else:
    print (f"Kecil, angka b = {b}")
    
    
print ("\n --- batas --- \n")




# Percabangan Nested 

f = 7
cek = True


if f >= 5:
    if cek:
        print (f"Besar, angka f = {f}")
        
    else:
        print (f"Sedang, angka f = {f}")
        
else:
    print (f"Kecil, angka f = {f}")
    
    
print ("\n --- batas --- \n")



# Percabangan angka Minus Plus

r = -8

if r > 0:
    print (f"Angka plus, angka r = {r}")
    
elif r < 0:
    print (f"Angka minus, angka r = {r}")
    
else:
    print (f"Angka nol, angka r = {r}")
    
    
print ("\n --- batas --- \n")




# For dasar 

for a in range (11):
    print (f"Urutan ke - {a}")
    
    
    
print ("\n --- batas --- \n")




# For dasar 2

for b in range (1, 11):
    print (f"Urutan ke - {b}")
    
    
print ("\n --- batas --- \n")




# For dasar 3 

for c in range (5, 11):
    print (f"Urutan ke - {c}")
    
    
    
    
# For dasar 4

for d in range (10, 15):
    print (f"Urutan ke - {d}")
    
    
print ("\n --- batas --- \n")




# While dasar 

a = 1

while a < 10:
    print (f"Urutan ke - {a}")
    a = a + 1
    
    
print ("\n --- batas --- \n")




# While dasar 2 

b = 10

while b > 0:
    print (f"Urutan ke - {b}")
    b = b - 1
    
    
print ("\n --- batas --- \n")




# While dasar 4

t = 15

while t > 0:
    print (f"Urutan ke - {t}")
    t = t - 1
    
    
print ("\n --- batas --- \n")