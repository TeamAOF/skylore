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