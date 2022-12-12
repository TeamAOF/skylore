console.log("Loading up our custom Game Phases script!");

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