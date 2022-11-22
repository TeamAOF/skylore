// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
})

onEvent('block.registry', event => {
	event.create('crushed_deepslate')
	.material('dirt')
  .hardness(0.5)
  .displayName('Crushed Deepslate') // No longer required in 1.18.2+
  .tagBlock('minecraft:mineable/shovel') // Make it mine faster using a shovel in 1.18.2+
  
})