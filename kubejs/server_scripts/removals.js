onEvent('recipes', (event) => {

    const id = [
    'bitsandchisels:iron_chisel',
	'bitsandchisels:diamond_chisel',
	'the_extractinator:extractinator',
	'alloy_forgery:stone_bricks_forge',
	'alloy_forgery:bricks_forge',
	'alloy_forgery:end_stone_bricks_forge',
	'alloy_forgery:deepslate_bricks_forge',
	'squirtingsyringe:fallingsyringe',
	'squirtingsyringe:warriorsyringe',
	'squirtingsyringe:firesyringe',
	'squirtingsyringe:ghostsyringe',
	'squirtingsyringe:healsyringe',
	'squirtingsyringe:lucksyringe',
	'squirtingsyringe:miningsyringe',
	'squirtingsyringe:mushroomsyringe',
	'squirtingsyringe:syringe',
	'valley:small_mug_block',
	'valley:mug_block',
	'croptopia:mortar_and_pestle',
	'croptopia:frying_pan',
	'croptopia:food_press',
	'valley:flour_bag',
	'valley:bowl_block',
	'valley:bento_block',
	'minecraft:bowl',
	'minecraft:spyglass',
	'sextant:sextant_item',
	'sextant:navigation_kit_item',
	'minecraft:compass',
	'sextant:barometer_item',
	'platforms:platformer',
	'catwalksinc:iron_rod',
	'mcda:upgrade_heros_leggings',
	'mcda:upgrade_heros_helmet',
	'mcda:upgrade_heros_chestplate',
	'mcda:upgrade_heros_boots',
    ];

    id.forEach((id) => {
        event.remove({ id: id });
    });
});