zombie_health = 100
bullet_damage = 25

print ("Zombie HP :", zombie_health)


while zombie_health > 0:
     zombie_health = zombie_health - bullet_damage
     print ("Zombie takes damage ", zombie_health)


print ("Zombie Defeated")

