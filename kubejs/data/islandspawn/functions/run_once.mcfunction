scoreboard players add #islandspawner spawntimer 1

execute if score #islandspawner spawntimer matches 1 run setworldspawn 20 57 24
execute if score #islandspawner spawntimer matches 1 run forceload add -1 0 -20 -2

execute if score #islandspawner spawntimer matches 10 run setblock 0 40 0 minecraft:structure_block{posX:-15,posY:-15,posZ:-15,mode:"LOAD",name:"islandspawn:islandspawn"}
execute if score #islandspawner spawntimer matches 10 run setblock 0 41 0 redstone_block

execute if score #islandspawner spawntimer matches 20 run forceload remove -1 0 -20 -2

execute if score #islandspawner spawntimer matches 20 run scoreboard players set #islandspawner spawncomplete 1