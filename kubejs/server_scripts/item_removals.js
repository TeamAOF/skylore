////////////////////////
/// Made by Team AOF ///
////////////////////////


onEvent('recipes', (event) => {

    const id = [
		"kibe:slime_boots",
		"kibe:stone_spikes",
		"kibe:iron_spikes"
		"kibe:gold_spikes",
		"kibe:diamond_spikes"
		"inmis:plated_backpack",
		"inmis:gilded_backpack",
		"inmis:bejeweled_backpack",
		"inmis:blazing_backpack",
		"inmis:withered_backpack",
		"inmis:endless_backpack",
		"coxinhautilities:grannys_sink",
		"twilightforest:uncrafting_table",
		"doodads:doodad_bundle",
		"ad_astra:recipes/steel_ingot_from_blasting_iron_ingot"
		
    ];
	

    id.forEach((id) => {
        event.remove({ 'output': id });
    });
});
