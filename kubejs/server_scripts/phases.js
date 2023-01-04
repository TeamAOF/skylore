console.log("Phases on stun!");

// Professions tables

onEvent('gamephases.initialize', event => {
    event.phase('chef')
        .item('artis:chef_table')
        
    event.phase('captain')
        .item('artis:ops_panel')
        
    event.phase('engineer')
        .item('artis:engineering_panel')
        
    event.phase('medical')
        .item('artis:examination_table')
        
    event.phase('science')
        .item('artis:science_panel')
        
    event.phase('security')
        .item('artis:security_panel')
		
	event.phase('earthex')
		.item('artis:earth_examiner')
});
// Mega Table
onEvent('gamephases.initialize', event => {
    event.phase('nulla')
        .item('artis:nulla')
});
// Enchants
onEvent('gamephases.initialize', event => {
    event.phase('enchants')
		.item('minecraft:enchanting_table')
});
// AE2 Gate

onEvent('gamephases.initialize', event => {
    event.phase('fluix')
        .item('ae2:fluix_crystal_seed')
});
// Gun Gate

onEvent('gamephases.initialize', event => {
    event.phase('guntable')
        .item('hwg:gun_table')
});
// Level 1 guns
onEvent('gamephases.initialize', event => {
    event.phase('level1gun')
        .item('hwg:luger')
		.item('hwg:pistol')
		.item('hwg:shotgun')
		.item('hwg:flare_gun')
		.item('hwg:spistol')
});
// Level 2 guns
onEvent('gamephases.initialize', event => {
    event.phase('level2gun')
        .item('hwg:tommy_gun')
		.item('hwg:smg')
		.item('hwg:ak47')
		.item('hwg:sniper_rifle')
});

// Level 3 guns

onEvent('gamephases.initialize', event => {
    event.phase('level3gun')
        .item('hwg:rocketlauncher')
		.item('hwg:flamethrower')
		.item('hwg:grenadelauncher')
});

// Level 4 Guns
onEvent('gamephases.initialize', event => {
    event.phase('level4gun')
        .item('hwg:golden_gun')
		.item('hwg:hellhorse_revolver')
		.item('hwg:meanie_gun_1')
		.item('hwg:meanie_gun_2')
});
// Specialty guns

// Ad Astra Gating phase 1

onEvent('gamephases.initialize', event => {
    event.phase('astrodux')
        .item('ad_astra:astrodux')
        
    event.phase('oxygentank')
        .item('ad_astra:oxygen_tank')
        
    event.phase('nasa')
        .item('ad_astra:nasa_workbench')
        
    event.phase('rocket1')
        .item('ad_astra:tier_1_rocket')
});

// Ad Astra Gating phase 2

onEvent('gamephases.initialize', event => {
    event.phase('desh')
        .item('ad_astra:desh_ingot')
        
    event.phase('deshcable')
        .item('ad_astra:desh_cable')

    event.phase('oxydis')
        .item('ad_astra:oxygen_distributor')

    event.phase('rocket2')
        .item('ad_astra:tier_2_rocket')
});

// Ad Astra Gating phase 3

onEvent('gamephases.initialize', event => {
    event.phase('oxysensor')
        .item('ad_astra:oxygen_sensor')
});

//Mobs -------------------------------------------

onEvent('gamephases.initialize', event => {
    event.phase('phantoms')
     .entity('minecraft:phantom')
     
    event.phase('easymodeoff')
     .entity('minecraft:zombie')
	 .entity('minecraft:skeleton')
	 .entity('minecraft:enderman')
	 .entity('minecraft:spider')
	 .entity('minecraft:witch')
	 .entity('minecraft:zombie_villager')
	 
	 
     
    event.phase('creeper')
     .entity('minecraft:creeper')
     
    event.phase('graveyard')
     .entity('graveyard:revenant')
	 .entity('graveyard:ghoul')
	 .entity('graveyard:skeleton_creeper')
});

// Parasite Mob Gate

onEvent('gamephases.initialize', event => {
    event.phase('infection')
     .entity('immortuoscalyx:infhuman')
	 .entity('immortuoscalyx:infdiver')
	 .entity('immortuoscalyx:infvillager')
	 .entity('immortuoscalyx:infig')
	 .entity('immortuoscalyx:infplayer')
});

//Blocks -------------------------------------------------

onEvent('gamephases.initialize', event => {
    event.phase('nikolite')
		.block('indrev:nikolite_ore', 'minecraft:stone')
        
    event.phase('uranium')
		.block('modern_industrialization:uranium_ore', 'minecraft:stone')
		.block('modern_industrialization:deepslate_uranium_ore', 'minecraft:deepslate')
        
    event.phase('antimony')
		.block('modern_industrialization:antimony_ore', 'minecraft:stone')
		.block('modern_industrialization:deepslate_antimony_ore', 'minecraft:deepslate')
        
    event.phase('nether')
		.block('minecraft:nether_portal', 'minecraft:stone')

    event.phase('end')
        .block('minecraft:end_portal', 'minecraft:stone')
});
