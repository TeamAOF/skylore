onEvent('recipes', (event) => {

  
    event.custom({    
        "type": "modern_industrialization:macerator",
        "id": "valley:mixed_ore",
        "eu": 2,
        "duration": 100,
        "item_inputs": [
          {
            "item": "valley:mixed_ore",
            "amount": 1
          }
        ],
        "item_outputs": [
		Item.of('minecraft:raw_iron').withChance(0.33),
		Item.of('minecraft:raw_copper').withChance(0.33),
		Item.of('minecraft:raw_gold').withChance(0.33)
        ]
})
   event.custom({    
        "type": "modern_industrialization:macerator",
        "id": "valley:deepslate_mixed_ore",
        "eu": 2,
        "duration": 100,
        "item_inputs": [
          {
            "item": "valley:deepslate_mixed_ore",
            "amount": 1
          }
        ],
        "item_outputs": [
		Item.of('minecraft:raw_iron').withChance(0.33),
		Item.of('minecraft:raw_copper').withChance(0.33),
		Item.of('minecraft:raw_gold').withChance(0.33)
        ]
})
    })