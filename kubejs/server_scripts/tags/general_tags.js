////////////////////////
/// Made by Team AOF ///
////////////////////////


onEvent('tags.items', event => {
  
  event.add('minecraft:coals', 'modern_industrialization:lignite_coal')

  event.add('c:workbench', 'minecraft:crafting_table')

  // Create


  event.add('c:gold_plates', 'create:golden_sheet')
  event.add('c:iron_plates', 'create:iron_sheet')
  event.add('c:copper_plates', 'create:copper_sheet')

  event.add('c:steel_plates', 'ad_astra:compressed_steel')

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
