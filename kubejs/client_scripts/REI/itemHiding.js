const itemRemove = [
	"kibe:white_sleeping_bag",
	"kibe:orange_sleeping_bag",
	"kibe:magenta_sleeping_bag",
	"kibe:light_blue_sleeping_bag",
	"kibe:yellow_sleeping_bag",
	"kibe:lime_sleeping_bag",
	"kibe:pink_sleeping_bag",
	"kibe:gray_sleeping_bag",
	"kibe:light_gray_sleeping_bag",
	"kibe:cyan_sleeping_bag",
	"kibe:sleeping_bag",
	"kibe:purple_sleeping_bag",
	"kibe:green_sleeping_bag",
	"kibe:brown_sleeping_bag",
	"kibe:red_sleeping_bag",
	"kibe:black_sleeping_bag",
	"fabricaeexnihilo:crimson_sieve",
	"fabricaeexnihilo:dark_oak_sieve",
	"fabricaeexnihilo:oak_sieve",
	"fabricaeexnihilo:birch_sieve",
	"fabricaeexnihilo:warped_sieve",
	"fabricaeexnihilo:spruce_sieve",
	"fabricaeexnihilo:jungle_sieve",
	"fabricaeexnihilo:acacia_sieve",
	"fabricaeexnihilo:end_cake",
	"fabricaeexnihilo:doll",
	"fabricaeexnihilo:doll_blaze",
	"fabricaeexnihilo:doll_enderman",
	"fabricaeexnihilo:doll_guardian",
	"fabricaeexnihilo:doll_shulker",
	"twilightforest:uncrafting_table",
	"croptopia:knife"
]
onEvent('rei.hide.items', event => {

	itemRemove.forEach((id) => {
		event.hide(id)
	});

	event.hide(/chipped:seasonal_ice_.*/)

})
