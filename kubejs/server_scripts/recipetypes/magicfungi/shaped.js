onEvent('recipes', (event) => {

    event.shaped('magicfungi:glyph_carving_workbench', [
                "WLW",
                "#C#",
                "###"
            ],
            {
                "#": {
                    "item": "minecraft:stone_bricks"
                },
                "W": {
                    "item": "minecraft:stone_brick_slab"
                },
                "L": {
                    "item": "valley:iron_knife"
                },
                "C": {
                    "tag": "magicfungi:mushrooms"
                }
        }).id('magicfungi:glyph_carving_workbench')
})