////////////////////////
/// Made by Team AOF ///
////////////////////////


onEvent('recipes', (event) => {

    const id = [
		"kibe:slime_boots",
		"hwg:gun_table",
		"inmis:plated_backpack",
		"inmis:gilded_backpack",
		"inmis:bejeweled_backpack",
		"inmis:blazing_backpack",
		"inmis:withered_backpack",
		"inmis:endless_backpack",
		"coxinhautilities:grannys_sink",
		"twilightforest:uncrafting_table",
		"doodads:doodad_bundle"
		
    ];
	

    id.forEach((id) => {
        event.remove({ 'output': id });
    });
});
