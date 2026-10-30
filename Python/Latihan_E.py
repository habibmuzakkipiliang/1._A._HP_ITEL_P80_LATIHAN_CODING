print ("""
    
  =====================
  
  Studi Kasus tentang Warung Nasi Padang Sederhana dan Simpel dalam Coding Python
  
  =====================
    
 """)
 
 
nasi = 5000
ayam_rendang = 8000
ayam_bakar = 3000
rendang_daging = 4000
aqua = 1000
teh_manis_anget = 3000
teh_manis_es = 3000
biaya_parkir = 3000
sayur_kangkung = 4000


nama_pemesan1 = str (input ("Masukkan nama pemesan 1 = "))
nama_pemesan2 = str (input ("Masukkan nama pemesan 2 = "))
nama_pemesan3 = str (input ("Masukkan nama pemesan 3 = "))


uang_kamu = int (input ("Masukkan uang kamu = "))   


j_nasi = int (input ("Masukkan jumlah porsi nasi = "))
j_ayam_rendang = int (input ("Masukkan ayam rendang = "))
j_ayam_bakar = int (input ("Masukkan jumlah ayam bakar = "))
j_rendang_daging = int (input ("Masukkan rendang daging nya = "))
j_aqua = int (input ("Masukkan aqua = "))
j_teh_manis_anget = int (input ("Masukkan teh manis anget = "))
j_teh_manis_es = int (input ("Masukkan teh manis es = "))
j_biaya_parkir = int (input ("Masukkan biaya parkir nya = "))
j_rendang_daging = int (input ("Masukkan rendang daging nya = "))
j_sayur_kangkung = int (input ("Masukkan sayur kangkung = "))

a1 = j_biaya_parkir * biaya_parkir
a2 = j_teh_manis_es * teh_manis_es
a3 = j_teh_manis_anget * teh_manis_anget
a4 = j_ayam_bakar * ayam_bakar
a5 = j_nasi * nasi
a6 = j_rendang_daging * rendang_daging
a7 = j_sayur_kangkung * sayur_kangkung


total = a1 + a2 + a3 + a4 + a5 + a6 + a7

kembalian = uang_kamu - total

cek = uang_kamu > total


rincian_biaya = f"""
\n - Nama pemesan 1     : {nama_pemesan1}
\n - Nama pemesan 2     : {nama_pemesan2}
\n - Nama pemesan 3     : {nama_pemesan3}
\n - Uang kamu          : {uang_kamu}
\n - Total uang kamu    : {total}
\n - Kembalian uang     : {kembalian}
\n - Cek                : {cek}


"""

print (rincian_biaya)


print ("\n --- batas --- \n")





print ("""
======================

SISTEM OTOMATIS PERCABANGAN NILAI RAPOR 

======================

""")


nilai = int (input ("Masukkan nilai rapor : "))

if nilai >= 95:
    print (f"A+, nilai = {nilai}")
    
elif nilai >= 90:
    print (f"A-, nilai = {nilai}")
    
elif nilai >= 85:
    print (f"B+, nilai = {nilai}")
    
elif nilai >= 80:
    print (f"B-, nilai = {nilai}")
    
elif nilai >= 75:
    print (f"C, nilai = {nilai}")
    
elif nilai >= 70:
    print (f"D, nilai = {nilai}")
    
elif nilai >= 65:
    print (f"E, nilai = {nilai}")
    
elif nilai >= 60:
    print (f"F, nilai = {nilai}")
    
else:
    print (f"Jelek amat nilai kamu, nilai = {nilai}")
    
    
print ("\n -- batas --- \n")




print ("""
==========================

SISTEM OTOMATIS PRAKIRAAN CUACA DALAM CODING PYTHON

==========================

""")

cuaca = str (input ("Masukkan cuaca hari ini (berawan / hujan / cerah) : "))
suhu = int (input ("Masukkan suhu udara hari ini dalam derajat : "))

if cuaca == "Cerah":
    if suhu > 30:
        print ("suhu hari ini cerah, dan boleh keluar rumah")
        
    else:
        print ("Tidak boleh keluar, karena panas")
        

elif cuaca == "Berawan":
    if suhu < 30:
        print ("Suhu sudah adem, boleh keluar rumah")
        
    else:
        print ("Gak boleh keluar rumah")
        
        
elif cuaca == "Hujan":
    if suhu < 30:
        print ("Sudah hujan dan jangan keluar rumah")
        
    else:
        print ("Boleh bawa payung")
        
else:
    print ("Input tidak valid")
    
    
print ("\n --- batas --- \n")





print ("""
==========================

SISTEM PERCABANGAN TENTANG JOIN DAN DAFTAR JKT48

==========================


""")

usia = int (input ("Masukkan usia kamu untuk gabung JKT48 : "))
cek = True


if usia >= 13 and usia <= 19:
    if cek:
        print (f"Sudah boleh join dan daftar JKT48, usia = {usia}")
        
    elif usia > 19:
        print (f"Sudah lebih dari cukup untuk daftar JKT48, usia = {usia}")
        
else:
    print (f"Usianya masih kecil, usia = {usia}")
    
    
print ("\n --- batas --- \n")





print ("""
==========================

SISTEM PERCABANGAN TENTANG USIA PRODUKTIF MANUSIA

===========================
  

""")

usia = int (input ("Masukkan usia : "))
cek = True

if usia >= 15 and usia <= 50:
    if cek:
        print (f"Sudah usia produktif, usia = {usia}")
        
    elif usia > 50:
        print (f"Sudah tua, usia = {usia}")
        
else:
    print (f"Masih kecil usianya, usia = {usia}")
    
    
print ("\n --- batas --- \n")