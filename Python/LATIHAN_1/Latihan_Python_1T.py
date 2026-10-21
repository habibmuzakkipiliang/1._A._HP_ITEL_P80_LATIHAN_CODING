# Hello World

print ("Hello World")


print ("\n --- batas --- \n")




# Variabel dasar

contoh = "Hello World"
print (contoh)


contoh_1 = 12
print (contoh)


contoh_2 = 22.12
print (contoh_2)


print ("\n --- batas --- \n")




# Tipe data pemrograman


teks = "Halo Dunia"
angka = 12
desimal = 1.12
cek = True
kosong = None

tipe = f"""
- Teks    = {teks}
- Angka   = {angka}
- Desimal = {desimal}
- Cek     = {cek}
- kosong  = {kosong}
"""

print (tipe)


print ("\n --- batas --- \n")




# Cek Tipe data pemrograman

cek_tipe = f"""
- Teks    = {type (teks)}
- Angka   = {type (angka)}
- Desimal = {type (desimal)}
- Cek     = {type (cek)}
- Kosong  = {type (kosong)}
"""

print (cek_tipe)


print ("\n --- batas --- \n")




# Fungsi dengan percabangan dasar

def dasar (a):
    
    if a >= 5:
        print (f"Angka a besar, angka a = {a}")
        
    else:
        print (f"Angka a kecil, angka a = {a}")
        
        
dasar (10)
dasar (9)
dasar (8)
dasar (7)
dasar (6)
dasar (5)
dasar (4)
dasar (3)
dasar (2)
dasar (1)


print ("\n --- batas --- \n")




# Fungsi dengan percabangan dasar 2 

def run (b):
    
    if b > 0:
        print (f"Angka positif, angka b = {b}")
        
    else:
        print (f"Angka negatif, angka b = {b}")
        
run (-10)
run (10)
run (-4)
run (-7)
run (13)
run (-1)


print ("\n --- batas --- \n")




# Fungsi dengan percabangan lanjutan 

def der (s):
    
    if s > 0:
        print (f"angka positif, angka s = {s}")
        
    elif s < 0:
        print (f"angka negatif, angka s = {s}")
        
    else:
        print (f"angka nol, angka s = {s}")
        
der (10)
der (9)
der (99)
der (23)
der (12)
der (-2)
der (-8)
der (-9)
der (-12)


print ("\n --- batas --- \n")