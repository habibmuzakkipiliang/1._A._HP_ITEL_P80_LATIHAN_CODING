print ("Hello World")


print ("\n --- batas --- \n")




# variabel 

dasar = "Tes Hello World"
print (dasar)


hal = "Halo Harkat Negeri"
print ("Tes =", hal)


print ("\n --- batas --- \n")




# Bio sederhana

nama = "John Kelvin"
asal = "Amerika Serikat"
nomor = 12
tinggi = "170 cm"
berat = "50 kg"
kerja = "Programmer"
coding = "HTML, CSS, JavaScript + Go Lang"

profil = f"""
- Nama   : {nama}
- Asal   : {asal}
- Nomor  : {nomor}
- Tinggi : {tinggi}
- Berat  : {berat}
- Kerja  : {kerja}
- Coding : {coding}
"""

print (profil)


intro = f"Halo nama saya {nama} dari {asal} dengan nomor {nomor}, tinggi badan saya {tinggi} dan berat badan saya {berat} dan saya bekerja sebagai {kerja} dengan teknologi yaitu {coding}"

print (intro)


print ("\n --- batas --- \n")




# Bio sederhana

nama = "Yan He Kelvin"
asal = "Taiwan"
kerja = "Programmer"
tinggi = "160 cm"
berat = "60 kg"
nomor = 15
coding = "HTML, CSS, JavaScript + Python"

bio = f"""
- Nama   : {nama}
- Asal   : {asal}
- Kerja  : {kerja}
- Tinggi : {tinggi}
- Berat  : {berat}
- Nomor  : {nomor}
- Coding : {coding}
"""


print (bio)


intro_3 = f"Halo nama saya {nama} dari {asal}, bekerja sebagai {kerja}, dengan tinggi badan saya {tinggi}, berat badan saya adalah {berat}, dengan teknologi {coding}"

print (intro_3)


print ("\n --- batas --- \n")




# Fungsi dengan operator dasar 

def tambah (x, y):
    return x + y
    
    
def kurang (x, y):
    return x - y
    
    
def kali (x, y):
    return x * y
    
    
def pangkat (x, y):
    return x ** y
    

def bagi (x, y):
    return x / y
    
    
def modulus (x, y):
    return x % y

    
print ("Hasil tambah =", tambah (10, 6))   
print ("Hasil kurang =", kurang (10, 7))
print ("Hasil kali =", kali (10, 10))
print ("Hasil pangkat =", pangkat (10, 3))
print ("Hasil bagi =", bagi (10, 5))
print ("Hasil modulus =", modulus (10, 8))


print ("\n --- batas --- \n")




# Percabangan dasar

b = 7

if b >= 5:
    print (f"Besar, angka b = {b}")
    
else:
    print (f"Kecil, angka b = {b}")
    
    
print ("\n --- batas --- \n")




# Percabangan Lanjutan 

a = 9

if a >= 8:
    print (f"Besar, angka a = {a}")
    
elif a >= 5:
    print (f"Tengah, angka a = {a}")
    
else:
    print (f"Kecil, angka a = {a}")
    
    
print ("\n --- batas --- \n")




# Percabangan Nested 

g = 9
cek = True

if cek:
    if g >= 8:
        print (f"Besar, angka g = {g}")
        
    else:
        print (f"Tengah, angka g = {g}")
        
else:
    print (f"Kecil, angka g = {g}")
    
    
print ("\n --- batas --- \n")




# Percabangan Nilai Rapor

nilai = 90

if nilai >= 95:
    print (f"A, nilai = {nilai}")
    
elif nilai >= 90:
    print (f"B, nilai = {nilai}")
    
elif nilai >= 80:
    print (f"C, nilai = {nilai}")
    
elif nilai >= 70:
    print (f"D, nilai = {nilai}")
    
elif nilai >= 60:
    print (f"E, nilai = {nilai}")
    
elif nilai >= 50:
    print (f"F, nilai = {nilai}")
    
else:
    print (f"Jelek amat, nilai = {nilai}")
    
    
print ("\n --- batas --- \n")




# Fungsi dengan percabangan dasar 

def dasar_1 (a):
    
    if a >= 5:
        print (f"Besar, angka a = {a}")
        
    else:
        print (f"Kecil, angka a = {a}")
        
dasar_1 (10)
dasar_1 (9)
dasar_1 (8)
dasar_1 (7)
dasar_1 (6)
dasar_1 (5)
dasar_1 (4)
dasar_1 (3)
dasar_1 (2)
dasar_1 (1)


print ("\n --- batas --- \n")




# Fungsi percabangan lanjutan 

def dasar_2 (b):
    
    if b >= 8:
        print (f"Besar, angka b = {b}")
        
    elif b >= 5:
        print (f"Tengah, angka b = {b}")
        
    else:
        print (f"Kecil, angka b = {b}")
        
dasar_2 (10)
dasar_2 (9)
dasar_2 (8)
dasar_2 (7)
dasar_2 (6)
dasar_2 (5)
dasar_2 (4)
dasar_2 (3)
dasar_2 (2)
dasar_2 (1)


print ("\n --- batas --- \n")




# 
