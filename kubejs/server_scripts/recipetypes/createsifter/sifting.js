onEvent('recipes', (event) => {
    
    event.custom({
            "type": "createsifter:sifting",
            "ingredients": [
                {
                    "item": "createsifter:string_mesh"
                },
                {
                    "item": "fabricaeexnihilo:crushed_andesite"
                }
            ],
            "results": [
                {
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
        })
    
        event.custom({
            "type": "createsifter:sifting",
            "ingredients": [
                {
                    "item": "createsifter:string_mesh"
                },
                {
                    "item": "kubejs:crushed_deepslate"
                }
            ],
            "results": [
                {
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

        event.custom({
            "type": "createsifter:sifting",
            "ingredients": [
                {
                    "item": "createsifter:string_mesh"
                },
                {
                    "item": "fabricaeexnihilo:crushed_diorite"
                }
            ],
            "results": [
                {
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

        event.custom({
            "type": "createsifter:sifting",
            "ingredients": [
                {
                    "item": "createsifter:string_mesh"
                },
                {
                    "item": "fabricaeexnihilo:crushed_granite"
                }
            ],
            "results": [
                {
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

        event.custom({
            "type": "createsifter:sifting",
            "ingredients": [
                {
                    "item": "createsifter:string_mesh"
                },
                {
                    "item": "fabricaeexnihilo:dust"
                }
            ],
            "results": [
                {
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

        {
            "type": "createsifter:sifting",
            "ingredients": [
                {
                    "item": "createsifter:string_mesh"
                },
                {
                    "item": "minecraft:gravel"
                }
            ],
            "results": [
                {
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
        },

        event.custom({
            "type": "createsifter:sifting",
            "ingredients": [
                {
                    "item": "createsifter:string_mesh"
                },
                {
                    "item": "minecraft:red_sand"
                }
            ],
            "results": [
                {
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

        event.custom({
            "type": "createsifter:sifting",
            "ingredients": [
                {
                    "item": "createsifter:string_mesh"
                },
                {
                    "item": "minecraft:sand"
                }
            ],
            "results": [
                {
                    "item": "modern_industrialization:lead_tiny_dust",
                    "chance": 0.3
                },
                {
                    "item": "modern_industrialization:redstone_tiny_dust",
                    "chance": 0.5
                }
            ],
            "processingTime": 250
        })
})