onEvent('block.registry', event => {
  event.create('crushed_deepslate', 'falling')
    .material('dirt')
    .hardness(0.5)
    .displayName('Crushed Deepslate') // No longer required in 1.18.2+
    .tagBlock('minecraft:mineable/shovel') // Make it mine faster using a shovel in 1.18.2+
    .dustColor(color.GRAY)

})