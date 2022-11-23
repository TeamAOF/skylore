onEvent('recipes', (event) => {

  const gems = [
    "diamond",
    "emerald"
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

})