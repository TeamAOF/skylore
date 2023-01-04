onEvent('recipes', (event) => {

    event.shaped('hwg:gun_table', [
                "###",
                "WWW",
                "CLC"
            ],
            {
                "#": {
                    "item": "c:planks"
                },
                "W": {
                    "item": "minecraft:stone_slab"
                },
                "L": {
                    "item": "minecraft:gun_powder"
                },
                "C": {
                    "item": "minecraft:iron_block"
                }
        }).id('hwg:gun_table')
})