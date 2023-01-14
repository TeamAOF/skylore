onEvent('recipes', (event) => {

	const idRemove = [
		"twilightforest:uncrafting_table",
		'minecraft:netherite_pickaxe',
		'minecraft:netherite_axe',
		'minecraft:netherite_sword',
		'minecraft:netherite_shovel',
		'minecraft:netherite_hoe',
		'minecraft:diamond_pickaxe',
		'minecraft:diamond_axe',
		'minecraft:diamond_sword',
		'minecraft:diamond_shovel',
		'minecraft:diamond_hoe',
		'minecraft:iron_pickaxe',
		'minecraft:iron_axe',
		'minecraft:iron_sword',
		'minecraft:iron_shovel',
		'minecraft:iron_hoe',
		'minecraft:stone_pickaxe',
		'minecraft:stone_axe',
		'minecraft:stone_sword',
		'minecraft:stone_shovel',
		'minecraft:stone_hoe',
		'minecraft:golden_pickaxe',
		'minecraft:golden_axe',
		'minecraft:golden_sword',
		'minecraft:golden_shovel',
		'minecraft:golden_hoe',
		'minecraft:wooden_pickaxe',
		'minecraft:wooden_axe',
		'minecraft:wooden_sword',
		'minecraft:wooden_shovel',
		'minecraft:wooden_hoe',
		'croptopia:knife'
	]

    idRemove.forEach((id) => {
        event.remove({'id': id});
    });

});
