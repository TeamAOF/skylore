onEvent('recipes', (event) => {

  event.custom(
    {
      "type": "create:crushing",
      "ingredients": [
        {
          "item": "minecraft:deepslate"
        }
      ],
      "results": [
        {
          "item": "minecraft:cobbled_deepslate"
        }
      ],
      "processingTime": 350
    }
  )
    event.custom(
    {
      "type": "create:crushing",
      "ingredients": [
        {
          "tag": "c:certus_quartz"
        }
      ],
      "results": [
        {
          "item": "ae2:certus_quartz_dust"
        }
      ],
      "processingTime": 350
    }
  )

  event.custom(
    {
      "type": "create:crushing",
      "ingredients": [
        {
          "item": "minecraft:gravel"
        }
      ],
      "results": [
        {
          "item": "minecraft:sand"
        }
      ],
      "processingTime": 350
    }
  )

// valley ore

    event.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "item": "valley:mixed_ore"
            }
        ],
        "results": [
		Item.of('minecraft:raw_iron').withChance(0.33),
		Item.of('minecraft:raw_copper').withChance(0.33),
		Item.of('minecraft:raw_gold').withChance(0.33)
        ],
        "processingTime": 150
    })
	    event.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "item": "valley:deepslate_mixed_ore"
            }
        ],
        "results": [
		Item.of('minecraft:raw_iron').withChance(0.33),
		Item.of('minecraft:raw_copper').withChance(0.33),
		Item.of('minecraft:raw_gold').withChance(0.33)
        ],
        "processingTime": 150
    })
  const spectrum = [
    'topaz',
    'amethyst',
    'citrine',
    'onyx'
];

spectrum.forEach((item) => {
    event.custom({
        "type": "create:crushing",
        "group": "minecraft:misc",
        "ingredients": [
            {
                "tag": "spectrum:" + item + "_ores"
            }
        ],
        "results": [
            {
                "item": "spectrum:" + item + "_powder",
                "count": 12
            },
            {
                "item": "spectrum:" + item + "_powder",
                "count": 4,
                "chance": 0.25
            }
        ],
        "processingTime": 150
    })
});

const ores = [
    'mozanite',
    'salt',
    'tungsten',
    'antimony',
    'bauxite',
    'quartz',
];

ores.forEach((item) => {
    event.custom({
        "type": "create:crushing",
        "group": "minecraft:misc",
        "ingredients": [
            {
                "tag": "c:" + item + "_ores"
            }
        ],
        "results": [
            {
                "item": "modern_industrialization:" + item + "_dust",
                "count": 2
            },
            {
                "item": "modern_industrialization:" + item + "_dust",
                "count": 1,
                "chance": 0.25
            },
            {
                "item": "create:experience_nugget",
                "count": 1,
                "chance": 0.75
            }
        ],
        "processingTime": 150
    })
});

// Coal
event.custom({
    "type": "create:crushing",
    "group": "minecraft:misc",
    "ingredients": [
        {
            "item": "minecraft:coal"
        }
    ],
    "results": [
        {
            "item": "modern_industrialization:coal_dust",
            "count": 1
        }
    ],
    "processingTime": 150
})

// Lignite Coal
event.custom({
    "type": "create:crushing",
    "group": "minecraft:misc",
    "ingredients": [
        {
            "item": "modern_industrialization:lignite_coal"
        }
    ],
    "results": [
        {
            "item": "modern_industrialization:lignite_coal_dust",
            "count": 1
        }
    ],
    "processingTime": 150
})

    // Bricks
    event.custom({
        "type": "create:crushing",
        "group": "minecraft:misc",
        "ingredients": [
            {
                "item": "minecraft:brick"
            }
        ],
        "results": [
            {
                "item": "modern_industrialization:brick_dust",
                "count": 1
            }
        ],
        "processingTime": 150
    })
    event.custom({
        "type": "create:crushing",
        "group": "minecraft:misc",
        "ingredients": [
            {
                "item": "minecraft:bricks"
            }
        ],
        "results": [
            {
                "item": "modern_industrialization:brick_dust",
                "count": 4
            }
        ],
        "processingTime": 150
    })

    const dust_from_ingot = [
        'bronze',
        'tin',
        'lead',
        'silver',
        'nickel',
        'tungsten',
        'titanium',
        'chromium',
        'invar',
        'nickel',
        'platinum',
        'stainless_steel',
        'steel',
        'aluminum',
        'silicon',

    ];

    dust_from_ingot.forEach((item) => {
        event.custom({
            "type": "create:crushing",
            "ingredients": [
                {
                    "tag": "c:" + item + "_ingots"
                }
            ],
            "results": [
                {
                    "item": "modern_industrialization:" + item + "_dust",
                    "count": 1
                },
            ],
        })
    });
})