onEvent('recipes', (event) => {

    event.shaped('artifacts:everlasting_beef', [
                "WWW",
                "W#W",
                "WWW"
            ],
            {
                "#": {
                    "item": "minecraft:cooked_beef"
                },
                "W": {
                    "item": "minecraft:netherite_block"
                }
        }).id('artifacts:everlasting_beef')

        event.shaped('artifacts:umbrella', [
            "RRR",
            "RPR",
            "RRR"
        ],
        {
            "R": {
                "tag": "minecraft:wool"
            },
            "P": {
                "tag": "minecraft:netherite_ingot"
            }

        }).id('artifacts:umbrella')

        event.shaped('artifacts:plastic_drinking_hat', [
            "III",
            "L#L",
            "III"
        ],
        {
            "#": {
                "tag": "c:helmets"
            },
            "I": {
                "item": "minecraft:water_bucket"
            },
            "L": {
                "item": "createadditions:straw"
            }
        }).id('artifacts:plastic_drinking_hat')


        event.shaped('artifacts:snorkel', [
            "III",
            "I#I",
            "III"
        ],
        {
            "#": {
                "tag": "c:helmets"
            },
            "I": {
                "item": "createadditions:straw"
            }
        }).id('artifacts:snorkel')

        event.shaped('artifacts:villager_hat', [
            "III",
            "I#I",
            "III"
        ],
        {
            "#": {
                "tag": "c:helmets"
            },
            "I": {
                "item": "farmersdelight:straw_bale"
            }
        }).id('artifacts:villager_hat')

        event.shaped('artifacts:superstitious_hat', [
            "III",
            "I#I",
            "III"
        ],
        {
            "#": {
                "item": "c:helmets"
            },
            "I": {
                "item": "twilightforest:clover_patch"
            }
        }).id('artifacts:superstitious_hat')

        event.shaped('artifacts:lucky_scarf', [
            "III",
            "I#I",
            "III"
        ],
        {
            "#": {
                "tag": "minecraft:chain"
            },
            "I": {  
                "item": "twilightforest:clover_patch"
            }
        }).id('artifacts:lucky_scarf')

        event.shaped('artifacts:scarf_of_invisibility', [
            "III",
            "I#I",
            "III"
        ],
        {
            "#": {
                "item": "minecraft:chain"
            },
            "I": {
                "tag": "c:glass"
            }
        }).id('artifacts:scarf_of_invisibility')

        event.shaped('doodads:moon_ring', [
            "III",
            "I#I",
            "III"
        ],
        {
            "#": {
                "item": "modern_industrialization:gold_ring"
            },
            "I": {
                "item": "croptopia:cheese"
            }
        }).id('doodads:moon_ring')

        event.shaped('artifacts:cross_necklace', [
            "GGG",
            "G#G",
            "GGG"
        ],
        {
            "#": {
                "item": "valley:golden_chain"
            },
            "G": {
                "item": "minecraft:book"
            }
        }).id('artifacts:cross_necklace')

        event.shaped('artifacts:panic_necklace', [
            "III",
            "I#I",
            "III"
        ],
        {
            "I": {
                "item": "valley:golden_chain"
            },
            "#": {
                "item": "chestcavity:heart"
            }
        }).id('artifacts:panic_necklace')

        event.shaped('artifacts:shock_pendant', [
            "III",
            "I#I",
            "III"
        ],
        {
            "#": {
                "item": "indrev:battery"
            },
            "I": {
                "item": "minecraft:chain"
            }
        }).id('artifacts:shock_pendant')

        event.shaped('artifacts:flame_pendant', [
            "III",
            "I#I",
            "III"
        ],
        {
            "#": {
                "item": "minecraft:lava_bucket"
            },
            "I": {
                "item": "minecraft:chain"
            }
        }).id('artifacts:flame_pendant')

        event.shaped('artifacts:flame_pendant', [
            "III",
            "I#I",
            "III"
        ],
        {
            "#": {
                "item": "minecraft:diamond_boots"
            },
            "I": {
                "item": "minecraft:slime_block"
            }
        }).id('artifacts:flame_pendant')

        event.shaped('artifacts:thorn_pendant', [
            "III",
            "I#I",
            "III"
        ],
        {
            "#": {
                "item": "twilightforest:thorn_leaves"
            },
            "I": {
                "item": "minecraft:chain"
            }
        }).id('artifacts:thorn_pendant')

        event.shaped('artifacts:cloud_in_a_bottle', [
            "III",
            "I#I",
            "IFI"
        ],
        {
            "F": {
                "item": "minecraft:campfire"
            },
            "#": {
                "item": "minecraft:glass_bottle"
            },
            "I": {
                "item": "minecraft:water_bucket"
            }
        }).id('artifacts:cloud_in_a_bottle')

        event.shaped('artifacts:obsidian_skull', [
            "III",
            "I#I",
            "III"
        ],
        {
            "#": {
                "item": "minecraft:skeleton_skull"
            },
            "I": {
                "item": "minecraft:obsidian"
            }
        }).id('artifacts:obsidian_skull')

        event.shaped('artifacts:antidote_vessel', [
            "#J#",
            "#I#",
            "###"
        ],
        {
            "J": {
                "item": "minecraft:honey_block"
            },
            "#": {
                "item": "minecraft:milk_bucket"
            },
            "I": {
                "item": "minecraft:glass_bottle"
            }
        }).id('artifacts:antidote_vessel')

        event.shaped('artifacts:universal_attractor', [
            "III",
            "I#I",
            "III"
        ],
        {
            "I": {
                "item": "minecraft:iron_ingot"
            },
            "#": {
                "item": "minecraft:netherite_ingot"
            }
        }).id('artifacts:universal_attractor')

}
)