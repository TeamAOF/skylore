onEvent('recipes', (event) => {

    event.shaped('inmis:plated_backpack', [
                "ooo",
                "oxo",
                "ooo"
            ],
            {
                "o": {
                    "item": "minecraft:iron_block"
                },
                "x": {
                    "item": "inmis:frayed_backpack"
                }
        }).id('inmis:plated_backpack')
})
onEvent('recipes', (event) => {

    event.shaped('inmis:gilded_backpack', [
                "ooo",
                "oxo",
                "ooo"
            ],
            {
                "o": {
                    "item": "minecraft:gold_block"
                },
                "x": {
                    "item": "inmis:plated_backpack"
                }
        }).id('inmis:gilded_backpack')
})
onEvent('recipes', (event) => {

    event.shaped('inmis:bejeweled_backpack', [
                "omo",
                "mxm",
                "omo"
            ],
            {
                "o": {
                    "item": "minecraft:diamond_block"
                },
				"m": {
                    "item": "minecraft:emerald_block"
                },
                "x": {
                    "item": "inmis:gilded_backpack"
                }
        }).id('inmis:bejeweled_backpack')
})
onEvent('recipes', (event) => {

    event.shaped('inmis:blazing_backpack', [
                "omo",
                "mxm",
                "omo"
            ],
            {
                "o": {
                    "item": "minecraft:netherite_block"
                },
				"m": {
                    "item": "minecraft:magma_block"
                },
                "x": {
                    "item": "inmis:bejeweled_backpack"
                }
        }).id('inmis:blazing_backpack')
})
onEvent('recipes', (event) => {

    event.shaped('inmis:withered_backpack', [
                "mom",
                "mxm",
                "mom"
            ],
            {
                "o": {
                    "item": "minecraft:nether_star"
                },
				"m": {
                    "item": "minecraft:soul_sand"
                },
                "x": {
                    "item": "inmis:bejeweled_backpack"
                }
        }).id('inmis:withered_backpack')
})
onEvent('recipes', (event) => {

    event.shaped('inmis:endless_backpack', [
                "mom",
                "mxm",
                "mom"
            ],
            {
                "o": {
                    "item": "minecraft:dragon_head"
                },
				"m": {
                    "item": "minecraft:end_stone"
                },
                "x": {
                    "item": "inmis:withered_backpack"
                }
        }).id('inmis:withered_backpack')
})