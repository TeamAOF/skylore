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

  event.custom(
    {
      "type": "create:crushing",
      "ingredients": [
        {
          "item": "minecraft:sand"
        }
      ],
      "results": [
        {
          "item": "fabricaeexnihilo:silt"
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
          "item": "fabricaeexnihilo:silt"
        }
      ],
      "results": [
        {
          "item": "fabricaeexnihilo:dust"
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
          "item": "minecraft:sand"
        }
      ],
      "results": [
        {
          "item": "fabricaeexnihilo:silt"
        }
      ],
      "processingTime": 350
    }
  )

})