onEvent("lootjs", (event) => {
    event
        .addLootTypeModifier(LootType.CHEST)
        .removeLoot("simplyswords:runic_tablet")
});