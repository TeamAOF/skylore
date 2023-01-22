////////////////////////
/// Made by Team AOF ///
////////////////////////


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

    event.phase('ostrum_ingot')
        .item('ad_astra:ostrum_ingot')

    event.phase('cryo_freezer')
        .item('ad_astra:cryo_freezer')

    event.phase('rocket3')
        .item('ad_astra:tier_3_rocket')
    
});

// Ad Astra Gating phase 4

onEvent('gamephases.initialize', event => {
  event.phase('calorite_ingot')
  .item('ad_astra:calorite_ingot')

});

//Conveyors
onEvent('gamephases.initialize', event => {
    event.phase('vector_plate')
        .item('darkutilities:vector_plate')

    event.phase('vector_plate_fast')
        .item('darkutilities:vector_plate_fast')

    event.phase('vector_plate_extreme')
        .item('darkutilities:vector_plate_extreme')
        
    event.phase('vector_plate_ultra')
        .item('darkutilities:vector_plate_ultra')

    event.phase('regular_conveyor_belt')
        .item('kibe:regular_conveyor_belt')

    event.phase('fast_conveyor_belt')
        .item('kibe:fast_conveyor_belt')
    
    event.phase('express_conveyor_belt')
        .item('kibe:express_conveyor_belt')
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

//Drawers

onEvent('gamephases.initialize', event => {
    event.phase('ed_book')
		.item('extended_drawers:guide_book')

    event.phase('ed_drawer')
		.item('extended_drawers:single_drawer')

    event.phase('ed_ddrawer')
		.item('extended_drawers:double_drawer')

    event.phase('ed_qdrawer')
		.item('extended_drawers:quad_drawer')

    event.phase('ed_controller')
		.item('extended_drawers:controller')

    event.phase('ed_connector')
		.item('extended_drawers:connector')
});

//Engineering

onEvent('gamephases.initialize', event => {
    event.phase('indrev_solargen')
		.item('indrev:solar_generator_mk1')
});


//Science
onEvent('gamephases.initialize', event => {
    event.phase('indrev_solargen')
		.item('indrev:solar_generator_mk1')
});

// Medical Gating
onEvent('gamephases.initialize', event => {
    event.phase('golem_surgery')
        .item('chestcavity:golem_core')
        .item('chestcavity:golem_plating')
        .item('chestcavity:inner_furnace')
        .item('chestcavity:golem_cable')
        .item('chestcavity:piston_muscle')

    event.phase('syringe')
		.item('squirtingsyringe:syringe')
});

//Primary Orders

onEvent('gamephases.initialize', event => {
    event.phase('spore_sword')
		.item('doodads:spore_sword')

    event.phase('paintbrush')
		.item('doodads:paintbrush')

    event.phase('beaver_teeth')
		.item('doodads:beaver_teeth')

    event.phase('bendy_straw')
		.item('doodads:bendy_straw')

    event.phase('soggy_glove')
		.item('doodads:soggy_glove')

    event.phase('loggers_glove')
		.item('doodads:loggers_glove')

    event.phase('sun_ring')
		.item('doodads:sun_ring')

    event.phase('moon_ring')
		.item('doodads:moon_ring')

    event.phase('celestial_ring')
		.item('doodads:celestial_ring')

    event.phase('cactus_ring')
		.item('doodads:cactus_ring')

    event.phase('midnights_eye')
		.item('doodads:midnights_eye')

    event.phase('glare_plushie')
		.item('doodads:glare_plushie')

    event.phase('slimey_shoes')
		.item('doodads:slimey_shoes')

    event.phase('shulker_aglet')
		.item('doodads:shulker_aglet')

    event.phase('blossom_belt')
		.item('doodads:blossom_belt')

    event.phase('duct_tape')
		.item('doodads:duct_tape')

    event.phase('magic_plum')
		.item('doodads:magic_plum')
});

//orbs

onEvent('gamephases.initialize', event => {
    event.phase('lesser_orb_regret')
		.item('relicex:lesser_orb_of_regret')

    event.phase('greater_orb_regret')
		.item('relicex:greater_orb_of_regret')

    event.phase('orb_of_origin')
		.item('origins:orb_of_origin')
});


//Artifacts

onEvent('gamephases.initialize', event => {
    event.phase('everlasting_beef')
		.item('artifacts:everlasting_beef')
});

//Extractinator

onEvent('gamephases.initialize', event => {
    event.phase('extractinator')
		.item('extractinator:extractinator')
});

//Big Torch

onEvent('gamephases.initialize', event => {
    event.phase('big_torch')
		.item('kibe:big_torch')
});


//Spikes

onEvent('gamephases.initialize', event => {
    event.phase('iron_spikes')
		.item('kibe:iron_spikes')

    event.phase('gold_spikes')
		.item('kibe:gold_spikes')


    event.phase('diamond_spikes')
		.item('kibe:diamond_spikes')
});

//Legendary Weapons

onEvent('gamephases.initialize', event => {
    event.phase('legendary')
		.item('simplyswords:stormbringer')
        .item('simplyswords:storms_edge')
        .item('simplyswords:soulkeeper')
        .item('simplyswords:soulpyre')
        .item('simplyswords:soulrender')
        .item('simplyswords:frostfall')
        .item('simplyswords:bramblethorn')
        .item('simplyswords:hearthflame')
        .item('simplyswords:sword_on_a_stick')
        .item('simplyswords:brimstone_claymore')
        .item('simplyswords:watching_warglaive')
        .item('simplyswords:watcher_claymore')
        .item('simplyswords:molten_edge')
        .item('simplyswords:mjolnir')
        .item('simplyswords:toxic_longsword')
        .item('simplyswords:soulstealer')
        .item('simplyswords:emberblade')
        .item('simplyswords:twisted_blade')

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

    event.phase('uraninite')
        .block('powah:uraninite*', 'minecraft:stone')
        .block('powah:deepslate_uraninite*', 'minecraft:stone')
});
