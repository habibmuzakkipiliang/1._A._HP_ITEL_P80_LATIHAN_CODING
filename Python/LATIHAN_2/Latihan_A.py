# Hello World

print ("Hello World")


print ("\n --- batas --- \n")




# Variabel dasar

a = "Helo Dunia"
print ("A =", a)

b = "Halo Dunia"
print ("B =", b)

c = 12
print ("C =", c)

d = True
print ("D =", d)


print ("\n --- batas --- \n")




# Operasi dasar 

x = 9
y = 3

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
    
    
print ("Tambah =", tambah (x, y))
print ("Kurang =", kurang (x, y))
print ("Kali =", kali (x, y))
print ("Pangkat =", pangkat (x ,y))
print ("Modulus =", modulus (x, y))


print ("\n --- batas --- \n")




# Operasi perbandingan

print ("Hasil =", x > y)
print ("Hasil =", x < y)
print ("Hasil =", x == y)
print ("Hasil =", x != y)


print ("\n --- batas --- \n")





# Fungsi nilai besar

def besar (x, y):
    
    if x > y:
        return x 
        
    else:
        return y
        
        
print ("Hasil =", besar (10, 9))
print ("Hasil =", besar (2, 10))
print ("Hasil =", besar (90, 6))
print ("Hasil =", besar (2, 23))
print ("Hasil =", besar (23, 8))


print ("\n --- batas --- \n")





# Fungsi dengan nilai kecil

def kecil (a, b):
    
    if a < b:
        return a 
        
    else:
        return b
        
print ("Hasil =", kecil (10, 8))
print ("Hasil =", kecil (90, 5))
print ("Hasil =", kecil (3, 23))
print ("Hasil =", kecil (4, 88))


print ("\n --- batas --- \n")
