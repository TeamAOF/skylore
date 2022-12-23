onEvent('recipes', (event) => {

    // crushed andesite sifting
    event.custom({
        "type": "createsifter:sifting",
        "ingredients": [{
            "item": "createsifter:string_mesh"
        },
        {
            "item": "fabricaeexnihilo:crushed_andesite"
        }
        ],
        "results": [{
            "item": "fabricaeexnihilo:tuff_pebble",
            "chance": 0.75
        },
        {
            "item": "fabricaeexnihilo:deepslate_pebble",
            "chance": 0.25
        },
        {
            "item": "fabricaeexnihilo:calcite_pebble",
            "chance": 0.1
        }
        ],
        "processingTime": 250
    }),

        // crushed deepslate sifting
        event.custom({
            "type": "createsifter:sifting",
            "ingredients": [{
                "item": "createsifter:string_mesh"
            },
            {
                "item": "kubejs:crushed_deepslate"
            }
            ],
            "results": [{
                "item": "fabricaeexnihilo:deepslate_pebble",
                "chance": 0.75
            },
            {
                "item": "modern_industrialization:diamond_tiny_dust",
                "chance": 0.05
            },
            {
                "item": "modern_industrialization:emerald_tiny_dust",
                "chance": 0.15
            },
            {
                "item": "modern_industrialization:lapis_tiny_dust",
                "chance": 0.25
            }
            ],
            "processingTime": 250
        }),

        // crushed diorite sifting
        event.custom({
            "type": "createsifter:sifting",
            "ingredients": [{
                "item": "createsifter:string_mesh"
            },
            {
                "item": "fabricaeexnihilo:crushed_diorite"
            }
            ],
            "results": [{
                "item": "fabricaeexnihilo:diorite_pebble",
                "chance": 0.75
            },
            {
                "item": "modern_industrialization:bauxite_tiny_dust",
                "chance": 0.35
            },
            {
                "item": "modern_industrialization:nickel_tiny_dust",
                "chance": 0.25
            }
            ],
            "processingTime": 250
        }),

        // crushed granite sifting
        event.custom({
            "type": "createsifter:sifting",
            "ingredients": [{
                "item": "createsifter:string_mesh"
            },
            {
                "item": "fabricaeexnihilo:crushed_granite"
            }
            ],
            "results": [{
                "item": "fabricaeexnihilo:granite_pebble",
                "chance": 0.75
            },
            {
                "item": "modern_industrialization:copper_tiny_dust",
                "chance": 0.50
            },
            {
                "item": "modern_industrialization:tin_tiny_dust",
                "chance": 0.40
            }
            ],
            "processingTime": 250
        }),

        // dust sifting
        event.custom({
            "type": "createsifter:sifting",
            "ingredients": [{
                "item": "createsifter:string_mesh"
            },
            {
                "item": "fabricaeexnihilo:dust"
            }
            ],
            "results": [{
                "item": "minecraft:bone_meal",
                "chance": 0.30
            },
            {
                "item": "minecraft:blaze_powder",
                "chance": 0.1
            }
            ],
            "processingTime": 250
        }),

        // gravel sifting
        event.custom({
            "type": "createsifter:sifting",
            "ingredients": [{
                "item": "createsifter:string_mesh"
            },
            {
                "item": "minecraft:gravel"
            }
            ],
            "results": [{
                "item": "fabricaeexnihilo:stone_pebble",
                "chance": 0.75
            },
            {
                "item": "modern_industrialization:iron_tiny_dust",
                "chance": 0.50
            },
            {
                "item": "modern_industrialization:coal_tiny_dust",
                "chance": 0.40
            }
            ],
            "processingTime": 250
        }),

        // red sand sifting
        event.custom({
            "type": "createsifter:sifting",
            "ingredients": [{
                "item": "createsifter:string_mesh"
            },
            {
                "item": "minecraft:red_sand"
            }
            ],
            "results": [{
                "item": "modern_industrialization:lead_tiny_dust",
                "chance": 0.3
            },
            {
                "item": "modern_industrialization:gold_tiny_dust",
                "chance": 0.1
            }
            ],
            "processingTime": 250
        }),

        // sand sifting
        event.custom({
            "type": "createsifter:sifting",
            "ingredients": [{
                "item": "createsifter:string_mesh"
            },
            {
                "item": "minecraft:sand"
            }
            ],
            "results": [{
                "item": "modern_industrialization:lead_tiny_dust",
                "chance": 0.3
            },
            {
                "item": "modern_industrialization:redstone_tiny_dust",
                "chance": 0.5
            }
            ],
            "processingTime": 250
        }),
        // dust fine sifting
        event.custom({
            "type": "createsifter:sifting",
            "ingredients": [{
                "item": "createsifter:andesite_mesh"
            },
            {
                "item": "fabricaeexnihilo:dust"
            }
            ],
            "results": [{
                "item": "minecraft:blaze_powder",
                "chance": 0.1
            },
            {
                "item": "minecraft:gunpowder",
                "chance": 0.2
            },
            {
                "item": "indrev:nikolite_dust",
                "chance": 0.15
            },
            {
                "item": "minecraft:redstone",
                "chance": 0.15
            },
            {
                "item": "minecraft:bone_meal",
                "chance": 0.3
            }
            ],
            "processingTime": 300
        }),
        //dark oak sapling
        event.custom({
            "type": "createsifter:sifting",
            "ingredients": [{
                "item": "createsifter:andesite_mesh"
            },
            {
                "item": "minecraft:dark_oak_leaves"
            }
            ],
            "results": [{
                "item": "minecraft:dark_oak_sapling",
                "chance": 0.1
            }],
            "processingTime": 300
        }),
        event.custom({
            "type": "createsifter:sifting",
            "ingredients": [{
                "item": "createsifter:andesite_mesh"
            },
            {
                "item": "minecraft:sand"
            }
            ],
            "results": [{
                "item": "fabricaeexnihilo:sugarcane_seeds",
                "chance": 0.1
            }],
            "processingTime": 300
        }),
        event.custom({
            "type": "createsifter:sifting",
            "ingredients": [{
                "item": "createsifter:andesite_mesh"
            },
            {
                "item": "minecraft:acacia_leaves"
            }
            ],
            "results": [{
                "item": "minecraft:acacia_sapling",
                "chance": 0.1
            }],
            "processingTime": 300
        }),
        event.custom({
            "type": "createsifter:sifting",
            "ingredients": [{
                "item": "createsifter:andesite_mesh"
            },
            {
                "item": "minecraft:dirt"
            }
            ],
            "results": [{
                "item": "minecraft:beetroot_seeds",
                "chance": 0.4
            },
            {
                "item": "minecraft:jungle_sapling",
                "chance": 0.08
            },
            {
                "item": "fabricaeexnihilo:lilac_seeds",
                "chance": 0.08
            },
            {
                "item": "minecraft:carrot",
                "chance": 0.08
            },
            {
                "item": "minecraft:melon_seeds",
                "chance": 0.2
            },
            {
                "item": "minecraft:oak_sapling",
                "chance": 0.08
            },
            {
                "item": "fabricaeexnihilo:diorite_pebble",
                "chance": 0.5
            },
            {
                "item": "minecraft:dark_oak_sapling",
                "chance": 0.08
            },
            {
                "item": "fabricaeexnihilo:granite_pebble",
                "chance": 0.5
            },
            {
                "item": "fabricaeexnihilo:grass_seeds",
                "chance": 0.08
            },
            {
                "item": "minecraft:sweet_berries",
                "chance": 0.06
            },
            {
                "item": "minecraft:pumpkin_seeds",
                "chance": 0.2
            },
            {
                "item": "fabricaeexnihilo:sunflower_seeds",
                "chance": 0.08
            },
            {
                "item": "fabricaeexnihilo:andesite_pebble",
                "chance": 0.5
            },
            {
                "item": "minecraft:birch_sapling",
                "chance": 0.08
            },
            {
                "item": "fabricaeexnihilo:mycelium_seeds",
                "chance": 0.04
            },
            {
                "item": "fabricaeexnihilo:stone_pebble",
                "chance": 0.5
            },
            {
                "item": "minecraft:potato",
                "chance": 0.08
            },
            {
                "item": "fabricaeexnihilo:cactus_seeds",
                "chance": 0.08
            },
            {
                "item": "fabricaeexnihilo:rose_bush_seeds",
                "chance": 0.08
            },
            {
                "item": "minecraft:wheat_seeds",
                "chance": 0.3
            },
            {
                "item": "fabricaeexnihilo:peony_seeds",
                "chance": 0.08
            },
            {
                "item": "minecraft:spruce_sapling",
                "chance": 0.08
            }

            ],
            "processingTime": 300
        }),
        event.custom({
            "type": "createsifter:sifting",
            "ingredients": [{
                "item": "createsifter:andesite_mesh"
            },
            {
                "item": "fabricaeexnihilo:silt"
            }
            ],
            "results": [{
                "item": "minecraft:lapis_lazuli",
                "chance": 0.05
            },
            {
                "item": "minecraft:lily_pad",
                "chance": 0.01
            }
            ],
            "processingTime": 400
        }),
        event.custom({
            "type": "createsifter:sifting",
            "ingredients": [{
                "item": "createsifter:andesite_mesh"
            },
            {
                "item": "minecraft:jungle_leaves"
            }
            ],
            "results": [{
                "item": "minecraft:jungle_sapling",
                "chance": 0.08
            }],
            "processingTime": 400
        }),
        event.custom({
            "type": "createsifter:sifting",
            "ingredients": [{
                "item": "createsifter:andesite_mesh"
            },
            {
                "item": "minecraft:coarse_dirt"
            }
            ],
            "results": [{
                "item": "minecraft:glow_berries",
                "chance": 0.08
            }],
            "processingTime": 400
        }),
        event.custom({
            "type": "createsifter:sifting",
            "ingredients": [{
                "item": "createsifter:andesite_mesh"
            },
            {
                "item": "minecraft:birch_leaves"
            }
            ],
            "results": [{
                "item": "minecraft:birch_sapling",
                "chance": 0.08
            }],
            "processingTime": 400
        }),
        event.custom({
            "type": "createsifter:sifting",
            "ingredients": [{
                "item": "createsifter:andesite_mesh"
            },
            {
                "item": "minecraft:gravel"
            }
            ],
            "results": [{
                "item": "fabricaeexnihilo:calcite_pebble",
                "chance": 0.3
            },
            {
                "item": "fabricaeexnihilo:raw_copper_piece",
                "chance": 0.1
            },
            {
                "item": "minecraft:coal",
                "chance": 0.05
            },
            {
                "item": "minecraft:flint",
                "chance": 0.3
            },
            {
                "item": "fabricaeexnihilo:tuff_pebble",
                "chance": 0.25
            },
            {
                "item": "fabricaeexnihilo:deepslate_pebble",
                "chance": 0.25
            },
            {
                "item": "fabricaeexnihilo:dripstone_pebble",
                "chance": 0.25
            },
            {
                "item": "modern_industrialization:lignite_coal",
                "chance": 0.05
            },
            {
                "item": "fabricaeexnihilo:raw_iron_piece",
                "chance": 0.05
            },
            {
                "item": "minecraft:primarine_shard",
                "chance": 0.01
            }
            ],
            "processingTime": 400
        }),
        event.custom({
            "type": "createsifter:sifting",
            "ingredients": [{
                "item": "createsifter:andesite_mesh"
            },
            {
                "item": "minecraft:oak_leaves"
            }
            ],
            "results": [{
                "item": "minecraft:oak_sapling",
                "chance": 0.08
            }],
            "processingTime": 400
        }),
        event.custom({
            "type": "createsifter:sifting",
            "ingredients": [{
                "item": "createsifter:andesite_mesh"
            },
            {
                "item": "minecraft:spruce_leaves"
            }
            ],
            "results": [{
                "item": "minecraft:spruce_sapling",
                "chance": 0.08
            }],
            "processingTime": 400
        }),
        event.custom({
            "type": "createsifter:sifting",
            "ingredients": [{
                "item": "createsifter:andesite_mesh"
            },
            {
                "item": "minecraft:birch_leaves"
            }
            ],
            "results": [{
                "item": "minecraft:birch_sapling",
                "chance": 0.08
            }],
            "processingTime": 400
        }),
        event.custom({
            "type": "createsifter:sifting",
            "ingredients": [{
                "item": "createsifter:andesite_mesh"
            },
            {
                "item": "fabricaeexnihilo:crushed_netherite"
            }
            ],
            "results": [{
                "item": "fabricaeexnihilo:basalt_pebble",
                "chance": 0.08
            }],
            "processingTime": 400
        }),
        event.custom({
            "type": "createsifter:sifting",
            "ingredients": [{
                "item": "createsifter:andesite_mesh"
            },
            {
                "item": "minecraft:red_sand"
            }
            ],
            "results": [{
                "item": "minecraft:acacia_sapling",
                "chance": 0.08
            },
            {
                "item": "fabricaeexnihilo:raw_iron_piece",
                "chance": 0.05
            }
            ],
            "processingTime": 400
        }),
        event.custom({
            "type": "createsifter:sifting",
            "ingredients": [{
                "item": "createsifter:andesite_mesh"
            },
            {
                "item": "fabricaeexnihilo:crushed_calcite"
            }
            ],
            "results": [{
                "item": "minecraft:amethyst_shard",
                "chance": 0.01
            }],
            "processingTime": 600
        }),
        event.custom({
            "type": "createsifter:sifting",
            "ingredients": [{
                "item": "createsifter:andesite_mesh"
            },
            {
                "item": "minecraft:soul_sand"
            }
            ],
            "results": [{
                "item": "minecraft:nether_wart",
                "chance": 0.15
            },
            {
                "item": "minecraft:quartz",
                "chance": 0.3
            },
            {
                "item": "fabricaeexnihilo:blackstone_pebble",
                "chance": 0.3
            }
            ],
            "processingTime": 400
        }),
        event.custom({
            "type": "createsifter:sifting",
            "ingredients": [{
                "item": "createsifter:andesite_mesh"
            },
            {
                "item": "minecraft:sand"
            }
            ],
            "results": [{
                "item": "minecraft:cocoa_beans",
                "chance": 0.08
            }],
            "processingTime": 200
        }),
        event.custom({
            "type": "createsifter:sifting",
            "ingredients": [{
                "item": "createsifter:andesite_mesh"
            },
            {
                "item": "minecraft:sand"
            }
            ],
            "results": [{
                "item": "minecraft:cocoa_beans",
                "chance": 0.08
            }],
            "processingTime": 200
        }),
        event.custom({
            "type": "createsifter:sifting",
            "ingredients": [{
                "item": "createsifter:andesite_mesh"
            },
            {
                "item": "fabricaeexnihilo:crushed_granite"
            }
            ],
            "results": [{
                "item": "fabricaeexnihilo:raw_iron_piece",
                "chance": 0.01
            }],
            "processingTime": 500
        }),
        event.custom({
            "type": "createsifter:sifting",
            "ingredients": [{
                "item": "createsifter:zinc_mesh"
            },
            {
                "item": "minecraft:sand"
            }
            ],
            "results": [
            {
                "item": "minecraft:coal",
                "chance": 0.05
            },
            {
                "item": "modern_industrialization:lignite_coal",
                "chance": 0.05
            }
        ],
            "processingTime": 300
        }),
        event.custom({
            "type": "createsifter:sifting",
            "ingredients": [{
                "item": "createsifter:zinc_mesh"
            },
            {
                "item": "fabricaeexnihilo:crushed_endstone"
            }
            ],
            "results": [
            {
                "item": "fabricaeexnihilo:raw_tungsten_piece",
                "chance": 0.05
            },
            {
                "item": "fabricaeexnihilo:raw_silver_piece",
                "chance": 0.05
            }
        ],
            "processingTime": 300
        }),
        event.custom({
            "type": "createsifter:sifting",
            "ingredients": [{
                "item": "createsifter:zinc_mesh"
            },
            {
                "item": "minecraft:red_sand"
            }
            ],
            "results": [
            {
                "item": "fabricaeexnihilo:raw_iron_piece",
                "chance": 0.025
            }
        ],
            "processingTime": 300
        }),
        event.custom({
            "type": "createsifter:sifting",
            "ingredients": [{
                "item": "createsifter:zinc_mesh"
            },
            {
                "item": "fabricaeexnihilo:crushed_granite"
            }
            ],
            "results": [
            {
                "item": "fabricaeexnihilo:raw_iron_piece",
                "chance": 0.01
            }
        ],
            "processingTime": 300
        }),
        event.custom({
            "type": "createsifter:sifting",
            "ingredients": [{
                "item": "createsifter:zinc_mesh"
            },
            {
                "item": "fabricaeexnihilo:dust"
            }
            ],
            "results": [
            {
                "item": "indrev:nikolite_dust",
                "chance": 0.01
            },
            {
                "item": "minecraft:glowstone_dust",
                "chance": 0.04
            },
            {
                "item": "minecraft:redstone",
                "chance": 0.01
            }
        ],
            "processingTime": 300
        }),
        event.custom({
            "type": "createsifter:sifting",
            "ingredients": [{
                "item": "createsifter:zinc_mesh"
            },
            {
                "item": "fabricaeexnihilo:silt"
            }
            ],
            "results": [
            {
                "item": "minecraft:lapis_lazuli",
                "chance": 0.075
            }
        ],
            "processingTime": 300
        }),
        event.custom({
            "type": "createsifter:sifting",
            "ingredients": [{
                "item": "createsifter:zinc_mesh"
            },
            {
                "item": "fabricaeexnihilo:crushed_calcite"
            }
            ],
            "results": [
            {
                "item": "minecraft:amethyst_shard",
                "chance": 0.01
            }
        ],
            "processingTime": 300
        }),
        event.custom({
            "type": "createsifter:sifting",
            "ingredients": [{
                "item": "createsifter:zinc_mesh"
            },
            {
                "item": "minecraft:gravel"
            }
            ],
            "results": [
            {
                "item": "fabricaeexnihilo:deepslate_pebble",
                "chance": 0.3
            },
            {
                "item": "fabricaeexnihilo:raw_lead_piece",
                "chance": 0.07
            },
            {
                "item": "fabricaeexnihilo:dripstone_pebble",
                "chance": 0.3
            },
            {
                "item": "minecraft:emerald",
                "chance": 0.08
            },
            {
                "item": "fabricaeexnihilo:raw_copper_piece",
                "chance": 0.015
            },
            {
                "item": "modern_industrialization:bauxite_tiny_dust",
                "chance": 0.05
            },
            {
                "item": "fabricaeexnihilo:raw_gold_piece",
                "chance": 0.05
            },
            {
                "item": "modern_industrialization:lignite_coal",
                "chance": 0.1
            },
            {
                "item": "fabricaeexnihilo:tuff_pebble",
                "chance": 0.33
            },
            {
                "item": "fabricaeexnihilo:raw_manganese_piece",
                "chance": 0.03
            },
            {
                "item": "fabricaeexnihilo:raw_silver_piece",
                "chance": 0.075
            },
            {
                "item": "fabricaeexnihilo:raw_nickel_piece",
                "chance": 0.075
            },
            {
                "item": "fabricaeexnihilo:raw_iron_piece",
                "chance": 0.1
            },
            {
                "item": "minecraft:coal",
                "chance": 0.1
            },
            {
                "item": "fabricaeexnihilo:raw_tin_piece",
                "chance": 0.075
            },
            {
                "item": "minecraft:diamond",
                "chance": 0.08
            }
        ],
            "processingTime": 300
        }),
        event.custom({
            "type": "createsifter:sifting",
            "ingredients": [{
                "item": "createsifter:zinc_mesh"
            },
            {
                "item": "fabricaeexnihilo:crushed_blackstone"
            }
            ],
            "results": [
            {
                "item": "fabricaeexnihilo:raw_nickel_piece",
                "chance": 0.1
            },
            {
                "item": "fabricaeexnihilo:raw_lead_piece",
                "chance": 0.1
            },
            {
                "item": "fabricaeexnihilo:raw_lead_piece",
                "chance": 0.025
            }
        ],
            "processingTime": 300
        }),
        event.custom({
            "type": "createsifter:sifting",
            "ingredients": [{
                "item": "createsifter:zinc_mesh"
            },
            {
                "item": "fabricaeexnihilo:crushed_andesite"
            }
            ],
            "results": [
            {
                "item": "fabricaeexnihilo:raw_gold_piece",
                "chance": 0.1
            }
        ],
            "processingTime": 300
        })
})