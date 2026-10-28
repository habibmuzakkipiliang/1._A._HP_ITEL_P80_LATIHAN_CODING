# Tes

print ("Hello World")


a = "Halo Dunia"
print ("A =", a)

b = "Halo Tes"
print ("B =", b)

c = 12
print ("C =", c)

d = True
print ("D =", d)


print ("\n --- batas --- \n")




# Profil sederhana

nama = "Habib Muzakki"
asal = "Kota Serang, Banten"
jurusan = "D4 Teknik Informatika"
fakultas = "Vokasi"
suku = "Piliang Minangkabau"
kampus = "Kampus 1 Mataram, Universitas Harkat Negeri"

bio = f"""
- Nama     : {nama}
- Asal     : {asal}
- Jurusan  : {jurusan}
- Fakultas : {fakultas}
- Suku     : {suku}
- Kampus   : {kampus}
"""

print (bio)

print ("\n --- batas --- \n")




# Tipe data

teks = "Halo Dunia"
angka = 12
desimal = 12.12
cek = True


tipe = f"""
- Teks    : {teks}
- Angka   : {angka}
- Desimal : {desimal}
- Cek     : {cek}
"""

print (tipe)


print ("\n --- batas --- \n")




# Cek Tipe data

print (type (teks))
print (type (angka))
print (type (desimal))
print (type (cek))


print ("\n --- batas --- \n")



# Operator dasar

x = 9
y = 5


print ("Tambah =", x + y)
print ("Kurang =", x - y)
print ("Kali =", x * y)
print ("Pangkat =", x ** y)
print ("Bagi =", x / y)



print ("\n --- batas --- \n")




# Operator perbandingan

print ("Hasil =", x > y)
print ("Hasil =", x < y)
print ("Hasil =", x >= y)
print ("Hasil =", x <= y)
print ("Hasil =", x == y)
print ("Hasil =", x != y)


print ("\n --- batas --- \n")




# Operator logika

print ("Hasil =", a > b and a < b)
print ("Hasil =", a < b or a > b)
print ("Hasil =", not (a > b))
print ("Hasil =", not (a < b))


print ("\n --- batas --- \n")




# Percabangan dasar 

a = 9

if a >= 8:
    print (f"Besar, angka a = {a}")
    
else:
    print (f"Kecil, angka a = {a}")
    
    
print ("\n --- batas --- \n")




# Percabangan lanjutan

t = 4

if t >= 8:
    print (f"Besar, angka t = {t}")
    
elif t >= 5:
    print (f"Sedang, angka t = {t}")
    
else:
    print (f"Kecil, angka t = {t}")
    
    
print ("\n --- batas --- \n")




# Percabangan lanjutan

g = 7

if g > 0:
    print (f"Angka plus, angka g = {g}")
    
elif g < 0:
    print (f"Angka minus, angka g = {g}")
    
else:
    print (f"Kecil, angka g = {g}")
    
    
print ("\n --- batas --- \n")




# Percabangan nested

g = 8
cek = True

if g >= 8:
    if cek:
        print (f"Besar, angka g = {g}")
        
    else:
        print (f"Sedang, angka g = {g}")
        
else:
    print (f"Kecil, angka g = {g}")
    
    
    
print ("\n --- batas --- \n")



# Percabangan Nested 2

g = 3
cek = True

if g >= 8:
    if cek:
        print (f"Besar, angka g = {g}")
        
    elif g >= 5:
        print (f"Sedang, angka g = {g}")
    
else:
    print (f"Kecil, angka g = {g}")
    
    
print ("\n --- batas -- \n")