onEvent('recipes', (event) => {


    outputRemove.forEach((id) => {
        event.remove({'output': id});
    });

	const idRemove = [
		"createsifter:sifting/gravel_brass_mesh",
		"createsifter:sifting/gravel_andesite_mesh",
		"createsifter:sifting/gravel_zinc_mesh",
		"createsifter:sifting/sand_string_mesh",
		"createsifter:sifting/sand_zinc_mesh",
		"createsifter:sifting/sand_andesite_mesh",
		"createsifter:sifting/sand_brass_mesh",
		"twilightforest:uncrafting_table"
	]

    idRemove.forEach((id) => {
        event.remove({'id': id});
    });

	const typeRemove = [
		"fabricaeexnihilo:sieve"
	]

	typeRemove.forEach((id) => {
        event.remove({'type': id});
    });
});
