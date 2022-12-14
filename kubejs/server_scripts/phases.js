console.log("Phases on stun!");

// Items -----------------------------------------
onEvent('gamephases.initialize', event => {
    event.phase('chef')
        .item('artis:chef_table')
});

onEvent('gamephases.initialize', event => {
    event.phase('captain')
        .item('artis:ops_panel')
});

onEvent('gamephases.initialize', event => {
    event.phase('engineer')
        .item('artis:engineering_panel')
});

onEvent('gamephases.initialize', event => {
    event.phase('medical')
        .item('artis:examination_table')
});

onEvent('gamephases.initialize', event => {
    event.phase('science')
        .item('artis:science_panel')
});

onEvent('gamephases.initialize', event => {
    event.phase('security')
        .item('artis:security_panel')
});

onEvent('gamephases.initialize', event => {
    event.phase('nulla')
        .item('artis:nulla')
});

//Mobs -------------------------------------------

onEvent('gamephases.initialize', event => {
    event.phase('creeper')
     .entity('minecraft:creeper')
});

onEvent('gamephases.initialize', event => {
    event.phase('graveyard')
     .entity('graveyard:revenant')
	 .entity('graveyard:ghoul')
});

//Blocks -------------------------------------------------

onEvent('gamephases.initialize', event => {
    event.phase('nikolite')
		.block('indrev:nikolite_ore', 'minecraft:stone')
});

onEvent('gamephases.initialize', event => {
    event.phase('nether')
		.block('minecraft:nether_portal', 'minecraft:stone')    
});

onEvent('gamephases.initialize', event => {
    event.phase('end')
        .block('minecraft:end_portal', 'minecraft:stone');
});