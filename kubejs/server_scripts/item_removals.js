onEvent('recipes', (event) => {

    const id = [
		'extractinator:extractinator',
		'squirtingsyringe:fallingsyringe',
		'squirtingsyringe:warriorsyringe',
		'squirtingsyringe:firesyringe',
		'squirtingsyringe:ghostsyringe',
		'squirtingsyringe:healsyringe',
		'squirtingsyringe:lucksyringe',
		'squirtingsyringe:miningsyringe',
		'squirtingsyringe:mushroomsyringe',
		'squirtingsyringe:syringe',
		'croptopia:mortar_and_pestle',
		'croptopia:frying_pan',
		'croptopia:food_press',
		'valley:flour_bag',
		'valley:bowl_block',
		'valley:bento_block',
		'minecraft:bowl',
		'minecraft:spyglass',
		'sextant:sextant',
		'sextant:navigation_kit',
		'minecraft:compass',
		'sextant:barometer',
		'platforms:platformer',
		'catwalksinc:iron_rod',
		'mcda:upgrade_heros_leggings',
		'mcda:upgrade_heros_helmet',
		'mcda:upgrade_heros_chestplate',
		'mcda:upgrade_heros_boots',
		'kibe:cooler',
		'artifacts:universal_attractor',
		'kibe:regular_conveyor_belt',
		'kibe:redstone_timer',
		'rswires:red_alloy_compound',
		'expandedstorage:netherite_chest',
		'expandedstorage:netherite_barrel',
		'logicates:logicate_fabricator',
		'kibe:fast_conveyor_belt',
		'kibe:express_conveyor_belt',
		'enva:titanium_leggings',
		'enva:titanium_helmet',
		'enva:titanium_chestplate',
		'enva:titanium_boots',
		'adventurez:stone_golem_leggings',
		'adventurez:stone_golem_helmet',
		'adventurez:stone_golem_chestplate',
		'adventurez:stone_golem_boots',
		'immersive_armors:steampunk_leggings',
		'immersive_armors:steampunk_helmet',
		'immersive_armors:steampunk_chestplate',
		'immersive_armors:steampunk_boots',
		'gateofbabylon:netherite_yoyo',
		'gateofbabylon:netherite_waraxe',
		'minecraft:netherite_sword',
		'gateofbabylon:netherite_spear',
		'campanion:netherite_spear',
		'gateofbabylon:netherite_shield',
		'gateofbabylon:netherite_rapier',
		'nyfsquiver:netherite_quiver',
		'gateofbabylon:netherite_katana',
		'gateofbabylon:netherite_haladie',
		'gateofbabylon:netherite_dagger',
		'chestcavity:netherite_cleaver',
		'gateofbabylon:netherite_broadsword',
		'gateofbabylon:netherite_bow',
		'gateofbabylon:netherite_boomerang',
		'mcdar:golem_kit',
		'lootcrates:uncommon_crate_key',
		'biomemakeover:cladded_leggings',
		'biomemakeover:cladded_helmet',
		'biomemakeover:cladded_chestplate',
		'biomemakeover:cladded_boots',
		'mcdar:wind_horn',
		'mcda:titans_shroud_leggings',
		'mcda:titans_shroud_helmet',
		'mcda:titans_shroud_chestplate',
		'mcda:titans_shroud_boots',
		'mcdar:iron_hide_amulet',
		'mcda:heros_armor_leggings',
		'mcda:heros_armor_helmet',
		'mcda:heros_armor_chestplate',
		'mcda:heros_armor_boots',
		'mcdar:gong_of_weakening',
		'mcda:goat_gear_leggings',
		'mcda:goat_gear_helmet',
		'mcda:goat_gear_chestplate',
		'mcda:goat_gear_boots',
		'mcdw:bow_echo_of_the_valley',
		'artifacts:running_shoes',
		'artifacts:flippers',
		'artifacts:charm_of_sinking',
		'mcdar:boots_of_swiftness',
		'artifacts:aqua_dashers',
		'kibe:vacuum_hopper',
		'create:schematicannon',
		'create:schematic_table',
		'create:brown_toolbox',
		'mcdar:updraft_tome',
		'artifacts:umbrella',
		'create:track_station',
		'iron-jetpacks:netherite_jetpack',
		'bosses_of_mass_destruction:levitation_block',
		'artifacts:helium_flamingo',
		'artifacts:cloud_in_a_bottle',
		'mcdar:totem_of_shielding',
		'mcdar:totem_of_regeneration',
		'artifacts:snorkel',
		'artifacts:power_glove',
		'artifacts:novelty_drinking_hat',
		'artifacts:antidote_vessel',
		'extractinator:silt',
		'artifacts:obsidian_skull',
		'minecraft:netherite_pickaxe',
		'indrev:netherite_drill_head',
		'artifacts:lucky_scarf',
		'additionaladditions:gilded_netherite_pickaxe',
		'indrev:energy_reader',
		'alloy_forgery:end_stone_bricks_forge_controller',
		'bosses_of_mass_destruction:earthdive_spear',
		'artifacts:digging_claws',
		'alloy_forgery:adamantite_block_forge_controller',
		'farmersdelight:stove',
		'farmersdelight:skillet',
		'farmersdelight:cooking_pot',
		'mcdw:bow_twisting_vine_bow',
		'artifacts:thorn_pendant',
		'mcda:sprout_leggings',
		'mcda:sprout_helmet',
		'mcda:sprout_chestplate',
		'mcda:sprout_boots',
		'mcda:living_vines_armor_leggings',
		'mcda:living_vines_armor_helmet',
		'mcda:living_vines_armor_chestplate',
		'mcda:living_vines_armor_boots',
		'botania:fertilizer',
		'mcdar:enchanted_grass',
		'mcdar:corrupted_seeds',
		'mcdar:buzzy_nest',
		'mcdar:blast_fungus',
		'mcda:beehive_armor_leggings',
		'mcda:beehive_armor_helmet',
		'mcda:beehive_armor_chestplate',
		'mcda:beehive_armor_boots',
		'tconstruct:ender_slime_sling',
		'kibe:slime_boots',
		'mcda:full_metal_armor_boots',
		'mcda:full_metal_armor_leggings',
		'mcda:full_metal_armor_chestplate',
		'mcda:full_metal_armor_helmet',
		'cloud_factory:cloud_generator',
		"create:crushing/tuff_recycling",
		"kibe:white_sleeping_bag",
		"kibe:orange_sleeping_bag",
		"kibe:magenta_sleeping_bag",
		"kibe:light_blue_sleeping_bag",
		"kibe:yellow_sleeping_bag",
		"kibe:lime_sleeping_bag",
		"kibe:pink_sleeping_bag",
		"kibe:gray_sleeping_bag",
		"kibe:light_gray_sleeping_bag",
		"kibe:cyan_sleeping_bag",
		"kibe:sleeping_bag",
		"kibe:purple_sleeping_bag",
		"kibe:green_sleeping_bag",
		"kibe:brown_sleeping_bag",
		"kibe:red_sleeping_bag",
		"kibe:black_sleeping_bag",
		"fabricaeexnihilo:crimson_sieve",
		"fabricaeexnihilo:dark_oak_sieve",
		"fabricaeexnihilo:oak_sieve",
		"fabricaeexnihilo:birch_sieve",
		"fabricaeexnihilo:warped_sieve",
		"fabricaeexnihilo:spruce_sieve",
		"fabricaeexnihilo:jungle_sieve",
		"fabricaeexnihilo:acacia_sieve",
		"fabricaeexnihilo:end_cake",
		"fabricaeexnihilo:doll",
		"fabricaeexnihilo:doll_blaze",
		"fabricaeexnihilo:doll_enderman",
		"fabricaeexnihilo:doll_guardian",
		"fabricaeexnihilo:doll_shulker",
		"hwg:gun_table",
		"inmis:plated_backpack",
		"inmis:gilded_backpack",
		"inmis:bejeweled_backpack",
		"inmis:blazing_backpack",
		"inmis:withered_backpack",
		"inmis:endless_backpack",
		"ad_astra:hammer",
		"coxinhautilities:grannys_sink"
    ];
	

    id.forEach((id) => {
        event.remove({ 'output': id });
    });
});
