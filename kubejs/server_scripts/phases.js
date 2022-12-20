console.log("Phases on stun!");

// Professions tables

onEvent('gamephases.initialize', event => {
    event.phase('chef')
        .item('artis:chef_table')
});

onEvent('gamephases.initialize', event => {
    event.phase('captain')
        .item('artis:ops_panel')
});

onEvent('gamephases.initialize', event => {
    event.phase('engineer')
        .item('artis:engineering_panel')
});

onEvent('gamephases.initialize', event => {
    event.phase('medical')
        .item('artis:examination_table')
});

onEvent('gamephases.initialize', event => {
    event.phase('science')
        .item('artis:science_panel')
});

onEvent('gamephases.initialize', event => {
    event.phase('security')
        .item('artis:security_panel')
});
// Mega Table
onEvent('gamephases.initialize', event => {
    event.phase('nulla')
        .item('artis:nulla')
});
// Enchants
onEvent('gamephases.initialize', event => {
    event.phase('enchants')
        .item('minecraft:enchanted_book')
		.item('minecraft:enchanting_table')
});
// AE2 Gate

onEvent('gamephases.initialize', event => {
    event.phase('fluix')
        .item('ae2:fluix_crystal_seed')
});

// Ad Astra Gating phase 1

onEvent('gamephases.initialize', event => {
    event.phase('astrodux')
        .item('ad_astra:astrodux')
});

onEvent('gamephases.initialize', event => {
    event.phase('oxygentank')
        .item('ad_astra:oxygen_tank')
});

onEvent('gamephases.initialize', event => {
    event.phase('nasa')
        .item('ad_astra:nasa_workbench')
});

onEvent('gamephases.initialize', event => {
    event.phase('rocket1')
        .item('ad_astra:tier_1_rocket')
});

// Ad Astra Gating phase 2

onEvent('gamephases.initialize', event => {
    event.phase('desh')
        .item('ad_astra:desh_ingot')
});

onEvent('gamephases.initialize', event => {
    event.phase('deshcable')
        .item('ad_astra:desh_cable')
});

onEvent('gamephases.initialize', event => {
    event.phase('oxydis')
        .item('ad_astra:oxygen_distributor')
});

onEvent('gamephases.initialize', event => {
    event.phase('rocket2')
        .item('ad_astra:tier_2_rocket')
});

//Mobs -------------------------------------------

onEvent('gamephases.initialize', event => {
    event.phase('phantoms')
     .entity('minecraft:phantom')
});

onEvent('gamephases.initialize', event => {
    event.phase('easymodeoff')
     .entity('minecraft:zombie')
	 .entity('minecraft:skeleton')
	 .entity('minecraft:enderman')
	 .entity('minecraft:spider')
});

onEvent('gamephases.initialize', event => {
    event.phase('creeper')
     .entity('minecraft:creeper')
});

onEvent('gamephases.initialize', event => {
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
});

onEvent('gamephases.initialize', event => {
    event.phase('uranium')
		.block('modern_industrialization:uranium_ore', 'minecraft:stone')
		.block('modern_industrialization:deepslate_uranium_ore', 'minecraft:deepslate')
});

onEvent('gamephases.initialize', event => {
    event.phase('antimony')
		.block('modern_industrialization:antimony_ore', 'minecraft:stone')
		.block('modern_industrialization:deepslate_antimony_ore', 'minecraft:deepslate')
});

onEvent('gamephases.initialize', event => {
    event.phase('nether')
		.block('minecraft:nether_portal', 'minecraft:stone')    
});

onEvent('gamephases.initialize', event => {
    event.phase('end')
        .block('minecraft:end_portal', 'minecraft:stone')
});
