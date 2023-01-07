onEvent('recipes', (event) => {

  event.shaped('createsifter:bronze_mesh', [
    ["kubejs:bronze_block","kubejs:bronze_block","kubejs:bronze_block"],
    ["kubejs:bronze_block","minecraft:netherite_ingot","kubejs:bronze_block"],
    ["kubejs:bronze_block","kubejs:bronze_block","kubejs:bronze_block"],
  ]);
  
  event.shaped('createsifter:zinc_mesh', [
    ["create:zinc_ingot","create:zinc_ingot","create:zinc_ingot"],
    ["create:zinc_ingot","minecraft:diamond_block","create:zinc_ingot"],
    ["create:zinc_ingot","create:zinc_ingot","create:zinc_ingot"],
  ]);

  event.shaped('kubejs:zinc_block', [
    ["create:zinc_ingot","create:zinc_ingot","create:zinc_ingot"],
    ["create:zinc_ingot","create:zinc_ingot","create:zinc_ingot"],
    ["create:zinc_ingot","create:zinc_ingot","create:zinc_ingot"],
  ]);

  event.shaped('kubejs:bronze_block', [
    ["modern_industrialization:bronze_double_ingot","modern_industrialization:bronze_double_ingot","modern_industrialization:bronze_double_ingot"],
    ["modern_industrialization:bronze_double_ingot","modern_industrialization:bronze_double_ingot","modern_industrialization:bronze_double_ingot"],
    ["modern_industrialization:bronze_double_ingot","modern_industrialization:bronze_double_ingot","modern_industrialization:bronze_double_ingot"],
  ]);


});