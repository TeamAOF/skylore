onEvent('player.chat', event => {
    var hasChef = event.player.hasPhase('chef');
    if(hasChef) {
        event.player.tell('You have gained the recipe to the Chef table')
    }
});
