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
                    "item": "minecraft:slabs"
                },
                "L": {
                    "item": "minecraft:gun_powder"
                },
                "C": {
                    "item": "minecraft:iron_block"
                }
        }).id('hwg:gun_table')
})