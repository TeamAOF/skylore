console.log('Phases on stun!');

//Items --------------------------------------

//Professions tables

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

//VS Gate

onEvent('gamephases.initialize', event => {
    event.phase('vshelm')
		.item('vs_eureka:oak_ship_helm')
		.item('vs_eureka:spruce_ship_helm')
		.item('vs_eureka:acacia_ship_helm')
		.item('vs_eureka:dark_oak_ship_helm')
		.item('vs_eureka:birch_ship_helm')
		.item('vs_eureka:jungle_ship_helm')
		.item('vs_eureka:crimson_ship_helm')
		.item('vs_eureka:warped_ship_helm')
});


//Glider Wings

onEvent('gamephases.initialize', event => {
    event.phase('glider_wings')
        .item('kibe:glider_left_wing')
		.item('kibe:glider_right_wing')
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
		.item('hwg:grenade_launcher')
});

// Level 4 Guns
onEvent('gamephases.initialize', event => {
    event.phase('level4gun')
        .item('hwg:golden_gun')
		.item('hwg:hellhorse_revolver')
		.item('hwg:meanie_gun_1')
		.item('hwg:meanie_gun_2')
});

//Scanner Quests
onEvent('gamephases.initialize', event => {
    event.phase('scanner')
        .item('scannable:scanner')
        
    event.phase('blank_module')
        .item('scannable:blank_module')
        
    event.phase('friendly')
        .item('scannable:friendly_entity_module')
        
    event.phase('hostile')
        .item('scannable:hostile_entity_module')

    event.phase('entity')
        .item('scannable:entity_module')

    event.phase('block')
        .item('scannable:block_module')
	
	event.phase('fluid')
        .item('scannable:fluid_module')
		
    event.phase('common')
        .item('scannable:common_ores_module')
		
    event.phase('rare')
        .item('scannable:rare_ores_module')

    event.phase('range')
        .item('scannable:range_module')
});


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

// Vanilla tools no pickup

onEvent('gamephases.initialize', event => {
    event.phase('vanilla_tools_no_pickup')
       .item('minecraft:netherite_pickaxe')
       .item('minecraft:netherite_axe')
       .item('minecraft:netherite_sword')
       .item('minecraft:netherite_shovel')
       .item('minecraft:netherite_hoe')
       .item('minecraft:diamond_pickaxe')
       .item('minecraft:diamond_axe')
       .item('minecraft:diamond_sword')
       .item('minecraft:diamond_shovel')
       .item('minecraft:diamond_hoe')
       .item('minecraft:iron_pickaxe')
       .item('minecraft:iron_axe')
       .item('minecraft:iron_sword')
       .item('minecraft:iron_shovel')
       .item('minecraft:iron_hoe')
       .item('minecraft:stone_pickaxe')
       .item('minecraft:stone_axe')
       .item('minecraft:stone_sword')
       .item('minecraft:stone_shovel')
       .item('minecraft:stone_hoe')
       .item('minecraft:golden_pickaxe')
       .item('minecraft:golden_axe')
       .item('minecraft:golden_sword')
       .item('minecraft:golden_shovel')
       .item('minecraft:golden_hoe')
       .item('minecraft:wooden_pickaxe')
       .item('minecraft:wooden_axe')
       .item('minecraft:wooden_sword')
       .item('minecraft:wooden_shovel')
       .item('minecraft:wooden_hoe')
});

// inmis backpacks

onEvent('gamephases.initialize', event => {
    event.phase('frayed_backpack')
        .item('inmis:frayed_backpack')
    
    event.phase('plated_backpack')
        .item('inmis:plated_backpack')

    event.phase('gilded_backpack')
        .item('inmis:gilded_backpack')

    event.phase('bejeweled_backpack')
        .item('inmis:bejeweled_backpack')

    event.phase('blazing_backpack')
        .item('inmis:blazing_backpack')

    event.phase('withered_backpack')
        .item('inmis:withered_backpack')

    event.phase('endless_backpack')
        .item('inmis:endless_backpack')
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
	 .entity('minecraft:stray')
	 
	 
	 
     
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
     .entity('immortuoscalyx:infectedhuman')
	 .entity('immortuoscalyx:infecteddiver')
	 .entity('immortuoscalyx:infectedvillager')
	 .entity('immortuoscalyx:infectedig')
	 .entity('immortuoscalyx:infectedplayer')
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
		.block('minecraft:nether_portal', 'minecraft:dirt')

    event.phase('end')
        .block('minecraft:end_portal', 'minecraft:dirt')
});
