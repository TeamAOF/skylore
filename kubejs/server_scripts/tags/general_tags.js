////////////////////////
/// Made by Team AOF ///
////////////////////////


onEvent('tags.items', event => {
  
  // Diamond

  event.add('c:gems/diamond', 'minecraft:diamond')
  
  event.add('minecraft:coals', 'modern_industrialization:lignite_coal')

  event.add('c:workbench', 'minecraft:crafting_table')

    // Knives

    event.add('c:tools/knives', 'sandwichable:stone_kitchen_knife')
    event.add('c:tools/knives', 'sandwichable:kitchen_knife')
    event.add('c:tools/knives', 'sandwichable:golden_kitchen_knife')
    event.add('c:tools/knives', 'sandwichable:diamond_kitchen_knife')
    event.add('c:tools/knives', 'sandwichable:netherite_kitchen_knife')
    event.add('c:tools/knives', 'sandwichable:glass_kitchen_knife')

  // Indrev

  event.add('c:raw_lead_blocks', 'indrev:raw_lead_block')
  event.add('c:raw_silver_blocks', 'indrev:raw_silver_block')
  event.add('c:raw_tungsten_blocks', 'indrev:raw_tungsten_block')
  event.add('c:raw_tin_blocks', 'indrev:raw_tin_block')

  // Iron Rods

  event.add('c:iron_rods', 'ad_astra:iron_stick')
  
  //Warm Armor
  event.add('environmentz:warm_armor', '@mcda')

  



});
