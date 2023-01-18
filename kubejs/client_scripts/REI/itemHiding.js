const itemRemove = [
	"doodads:doodad_bundle",
	"twilightforest:uncrafting_table",
	"croptopia:knife"
]
onEvent('rei.hide.items', event => {

	itemRemove.forEach((id) => {
		event.hide(id)
	});

	event.hide(/chipped:seasonal_ice_.*/)

})
