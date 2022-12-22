onEvent('recipes', (event) => {
    event.shaped("chipped:carpenters_table",[
        "  y",
        "axa",
        "bca"
    ],
    {
        "#": {
            "item": "minecraft:cobblestone"
        },
        "W": {
            "item": "minecraft:water_bucket"
        },
        "L": {
            "item": "minecraft:lava_bucket"
        },
        "C": {
            "item": "minecraft:chest"
        }
    }).id("chipped:benches/carpenters_table")
})