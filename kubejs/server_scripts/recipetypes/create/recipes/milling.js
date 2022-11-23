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
      "processingTime": 350
    }
  )
})