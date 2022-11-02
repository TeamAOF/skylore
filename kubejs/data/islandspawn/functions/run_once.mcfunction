scoreboard players add #islandspawner spawntimer 1

execute if score #islandspawner spawntimer matches 1 run setworldspawn 175 172 -65
execute if score #islandspawner spawntimer matches 1 run forceload add 12 -4 -10 -7

execute if score #islandspawner spawntimer matches 10 run setblock 167 40 -93 minecraft:structure_block{posX:-15,posY:60,posZ:-15,mode:"LOAD",name:"islandspawn:islandspawn"}
execute if score #islandspawner spawntimer matches 10 run setblock 167 41 -93 redstone_block

execute if score #islandspawner spawntimer matches 20 run forceload remove 12 -4 -10 -7
execute if score #islandspawner spawntimer matches 20 run setblock 167 40 -93 air
execute if score #islandspawner spawntimer matches 20 run setblock 167 41 -93 air

execute if score #islandspawner spawntimer matches 20 run scoreboard players set #islandspawner spawncomplete 1