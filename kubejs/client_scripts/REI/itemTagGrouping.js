"use strict"
// code

const tags = [
    "botanypots:basic_botany_pots",
    "botanypots:hopper_botany_pots",
    "another_furniture:chairs",
    "another_furniture:shelves",
    "another_furniture:tables",
    "another_furniture:stools",
    "another_furniture:shutters",
    "another_furniture:curtains",
    "another_furniture:benches",
    "another_furniture:drawers",
    "another_furniture:chairs",
    "another_furniture:lamps",
    "another_furniture:sofas",
    "another_furniture:tall_stools"
]

onEvent("rei.group", (rei) => {
    tags.forEach(tag => {
        rei.groupItemsByTag(`${tag.split(":")[0]}:rei_groups/${tag
            .split(":")[1]}`, tag.replace(/^(\w)/, c => c.toUpperCase())
            .replace(/_(\w)/g, (_, c) => " " + c.toUpperCase())
            .slice(tag.search(/[:]/) + 1), tag),
            tag})
})