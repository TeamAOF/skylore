onEvent('recipes', (event) => {

    event.shaped('kibe:cobblestone_generator_mk1', [
                "###",
                "WCL",
                "###"
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
        }).id('kibe:cobblestone_generator_mk1')

        event.shaped('kibe:cobblestone_generator_mk2', [
            "III",
            "I#I",
            "III"
        ],
        {
            "#": {
                "item": "kibe:cobblestone_generator_mk1"
            },
            "I": {
                "item": "minecraft:iron_ingot"
            }
        }).id('kibe:cobblestone_generator_mk2')

        event.shaped('kibe:cobblestone_generator_mk3', [
            "III",
            "I#I",
            "III"
        ],
        {
            "#": {
                "item": "kibe:cobblestone_generator_mk2"
            },
            "I": {
                "item": "minecraft:gold_ingot"
            }
        }).id('kibe:cobblestone_generator_mk3')

        event.shaped('kibe:cobblestone_generator_mk4', [
            "III",
            "I#I",
            "III"
        ],
        {
            "#": {
                "item": "kibe:cobblestone_generator_mk3"
            },
            "I": {
                "item": "minecraft:diamond"
            }
        }).id('kibe:cobblestone_generator_mk4')

        event.shaped('kibe:cobblestone_generator_mk5', [
            "III",
            "I#I",
            "III"
        ],
        {
            "#": {
                "item": "kibe:cobblestone_generator_mk4"
            },
            "I": {
                "item": "minecraft:netherite_ingot"
            }
        }).id('kibe:cobblestone_generator_mk5')
})