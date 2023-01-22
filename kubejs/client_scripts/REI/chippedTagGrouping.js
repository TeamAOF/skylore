////////////////////////
/// Made by Team AOF ///
////////////////////////



onEvent("rei.group", rei => {
    Ingredient.of("@chipped").stacks.stream()
    .flatMap(stack => stack.tags.stream())
    .distinct() // Exclude duplicate tag entries
    .filter(tag => tag.namespace == "chipped")
    .forEach(tag => {
      // Human-readable title case, e.g white_wool -> White Wool
      const name = tag.path
        .replace(/^(\w)/, c => c.toUpperCase())
        .replace(/_(\w)/g, (_, c) => " " + c.toUpperCase());
      rei.groupItemsByTag(`${tag.namespace}:rei_groups/${tag.path}`, name, tag);
    });
})