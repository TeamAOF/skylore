onEvent('recipes', (event) => {

  const gems = [
    "diamond",
    "emerald",
    "coal"
  ]
  gems.forEach((item) => {
    event.custom(
      {
        "type": "create:compacting",
        "ingredients": [
          {
            "item": "modern_industrialization:" + item + "_dust"
          },
          {
            "item": "modern_industrialization:" + item + "_dust"
          }
        ],
        "results": [
          {
            "item": "minecraft:" + item
          }
        ]
      }
    )
  })
  event.custom(
    {
      "type": "create:compacting",
      "ingredients": [
        {
          "item": "modern_industrialization:lapis_dust"
        },
        {
          "item": "modern_industrialization:lapis_dust"
        }
      ],
      "results": [
        {
          "item": "minecraft:lapis_lazuli"
        }
      ]
    }
  )

  event.custom(
    {
      "type": "create:compacting",
      "ingredients": [
        {
          "item": "minecraft:blaze_powder"
        },
        {
          "item": "minecraft:blaze_powder"
        },
        {
          "item": "minecraft:blaze_powder"
        },
        {
          "item": "minecraft:blaze_powder"
        },
        {
          "item": "minecraft:blaze_powder"
        },
        {
          "item": "minecraft:blaze_powder"
        }
      ],
      "results": [
        {
          "item": "minecraft:blaze_rod"
        }
      ]
    }
  )

  event.custom(
    {
      "type": "create:compacting",
      "ingredients": [
        {
          "item": "minecraft:blaze_rod"
        },
        {
          "item": "minecraft:blaze_rod"
        },
        {
          "item": "minecraft:blaze_rod"
        },
        {
          "item": "minecraft:blaze_rod"
        },
        {
          "item": "minecraft:blaze_rod"
        },
        {
          "item": "minecraft:blaze_rod"
        },
        {
          "item": "minecraft:blaze_rod"
        },
        {
          "item": "minecraft:blaze_rod"
        },
        {
          "item": "minecraft:blaze_rod"
        }
      ],
      "results": [
        {
          "item": "tconstruct:blaze_head"
        }
      ]
    }
  )

  event.custom(
    {
      "type": "create:compacting",
      "ingredients": [
        {
          "item": "tconstruct:blaze_head"
        },
        {
          "item": "create:empty_blaze_burner"
        }
      ],
      "results": [
        {
          "item": "create:blaze_burner"
        }
      ]
    }
  )

})