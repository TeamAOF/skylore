onEvent('recipes', (event) => {

  event.custom(
    {
      "type": "create:milling",
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
      "processingTime": 1050
    }
  )

  event.custom(
    {
      "type": "create:milling",
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
      "processingTime": 1050
    }
  )

})