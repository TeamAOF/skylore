onEvent('recipes', (event) => {

    event.shaped('hwg:gun_table', [
                "###",
                "WWW",
                "CLC"
            ],
            {
                "#": {
                    "item": "minecraft:stone"
                },
                "W": {
                    "item": "minecraft:stone_slab"
                },
                "L": {
                    "item": "minecraft:gunpowder"
                },
                "C": {
                    "item": "minecraft:iron_block"
                }
        }).id('hwg:gun_table')
})