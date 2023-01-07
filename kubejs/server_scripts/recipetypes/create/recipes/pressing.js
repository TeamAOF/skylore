onEvent('recipes', (event) => {

  const items = [
    "andesite",
    "diorite",
    "granite"
  ]

  items.forEach((item) => {
    event.custom(
      {
        "type": "create:pressing",
        "ingredients": [
          {
            "item": "minecraft:" + item
          }
        ],
        "results": [
          {
            "item": "fabricaeexnihilo:crushed_" + item
          }
        ],
        "processingTime": 350
      }
    )
  })

  event.custom(
    {
      "type": "create:pressing",
      "ingredients": [
        {
          "item": "minecraft:cobbled_deepslate"
        }
      ],
      "results": [
        {
          "item": "kubejs:crushed_deepslate"
        }
      ],
      "processingTime": 350
    }
  )
})
onEvent('recipes', (event) => {
    event.custom(
    {
      "type": "create:pressing",
      "ingredients": [
        {
          "item": "minecraft:planks"
        }
      ],
      "results": [
        {
          "item": "minecraft:bowl"
        }
      ],
      "processingTime": 350
    }
  )
})
onEvent('recipes', (event) => {

    const plates = [
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
        'steel'

    ];

    plates.forEach((item) => {
        event.custom({
            "type": "create:pressing",
            "ingredients": [
                {
                    "tag": "c:" + item + "_ingots"
                }
            ],
            "results": [
                {
                    "item": "modern_industrialization:" + item + "_plate",
                    "count": 1
                },
            ],
        })
    });
})