onEvent('recipes', (event) => {
event.custom({
    "type": "createsifter:sifting",
    "ingredients": [{
        "item": "createsifter:brass_mesh"
    },
    {
        "item": "fabricaeexnihilo:silt"
    }
    ],
    "results": [
    {
        "item": "minecraft:lapis_lazuli",
        "chance": 0.15
    }
],
    "processingTime": 300
}),
event.custom({
    "type": "createsifter:sifting",
    "ingredients": [{
        "item": "createsifter:brass_mesh"
    },
    {
        "item": "minecraft:gravel"
    }
    ],
    "results": [
        {
            "item": "fabricaeexnihilo:deepslate_pebble",
            "chance": 0.4
        },
        {
            "item": "fabricaeexnihilo:dripstone_pebble",
            "chance": 0.4
        },
        {
            "item": "minecraft:emerald",
            "chance": 0.1
        },
        {
            "item": "fabricaeexnihilo:raw_copper_piece",
            "chance": 0.1
        },
        {
            "item": "fabricaeexnihilo:raw_gold_piece",
            "chance": 0.9
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
            "item": "fabricaeexnihilo:raw_silver_piece",
            "chance": 0.1
        },
        {
            "item": "fabricaeexnihilo:raw_nickel_piece",
            "chance": 0.1
        },
        {
            "item": "fabricaeexnihilo:raw_iron_piece",
            "chance": 0.1
        },
        {
            "item": "minecraft:coal",
            "chance": 0.3
        },
        {
            "item": "minecraft:diamond",
            "chance": 0.1
        }
    ],
    "processingTime": 300
}),
event.custom({
    "type": "createsifter:sifting",
    "ingredients": [{
        "item": "createsifter:brass_mesh"
    },
    {
        "item": "fabricaeexnihilo:dust"
    }
    ],
    "results": [
    {
        "item": "indrev:nikolite",
        "chance": 0.2
    },
    {
        "item": "minecraft:glowstone_dust",
        "chance": 0.2
    },
    {
        "item": "minecraft:redstone",
        "chance": 0.2
    },
    {
        "item": "c:nuggets",
        "chance": 0.2
    }
],
    "processingTime": 300
})
})