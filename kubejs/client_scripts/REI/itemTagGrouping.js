"use strict"
// code

const tags = [
]

onEvent("rei.group", (rei) => {
    tags.forEach(tag => {
        rei.groupItemsByTag(`${tag.split(":")[0]}:rei_groups/${tag
            .split(":")[1]}`, tag.replace(/^(\w)/, c => c.toUpperCase())
            .replace(/_(\w)/g, (_, c) => " " + c.toUpperCase())
            .slice(tag.search(/[:]/) + 1), tag),
            tag})
})