console.log("Loading up our custom Game Phases script!");

// Register our phases when Game Phases says so (this is when the server starts up).
onEvent('gamephases.initialize', event => {

    // Phase 1 - players can't find or use Iron until they have obtained stone.
    event.phase('indrev')
        // No using Iron.
        // These items will have a hidden title and be invisible in REI.
        // If a player manages to stick one in their inventory, it will be unusable in recipes.
        // By default, all items which depend on this item for crafting are also disabled.
        // This means all Iron tools will be disabled by default!
        // If you want to disable this, you can pass 'false' in the item method.
        .item('indrev:nikolite_dust')
});

// You can interact with the Game Phases API in KubeJS to get information on what Phases the player has.
// This can be used to create unique interactions with other mechanics in your mod-pack!
onEvent('player.chat', event => {
    var hasIndrev = event.player.hasPhase('indrev');
    if(hasIndrev) {
        event.player.tell('You are powerful.')
    }
});