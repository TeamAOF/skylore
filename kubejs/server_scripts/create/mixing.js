onEvent('recipes', (event) => {

    event.recipes.createMixing(
            [{fluidTag: 'kubejs:gravel_slurry', amount: 250}],
            [{fluidTag: 'minecraft:water', amount: 250}, 'minecraft:gravel'])
    event.recipes.createCompacting(
        [{fluidTag: 'kubejs:concentrated_gravel_slurry', amount: 250}],
        [{fluidTag: 'kubejs:gravel_slurry', amount: 250}])
    	.superheated()
    event.recipes.createCompacting(
        [
			Item.of('modern_industrialization:iron_dust').withChance(0.3),
            Item.of('modern_industrialization:tin_dust').withChance(0.02),
            Item.of('modern_industrialization:antimony_dust').withChance(0.02),
            Item.of('modern_industrialization:manganese_dust').withChance(0.015),
            Item.of('minecraft:emerald').withChance(0.016),
            Item.of('modern_industrialization:nickel_dust').withChance(0.02),
            Item.of('modern_industrialization:copper_dust').withChance(0.06),
            Item.of('modern_industrialization:silver_dust').withChance(0.02),
            Item.of('minecraft:diamond').withChance(0.016),
            Item.of('modern_industrialization:bauxite_dust').withChance(0.06),
            Item.of('modern_industrialization:lead_dust').withChance(0.02),
            Item.of('modern_industrialization:gold_dust').withChance(0.02)
        ],
        [{fluidTag: 'kubejs:concentrated_gravel_slurry', amount: 250}])
    	.superheated()

    });