"use strict"
// functions 
function blockIdToBlockName(tags) {
    return tags.map((id) => {
        let wordArray = id.split("_")
        wordArray[0] = wordArray[0].slice(wordArray[0].search(/[:]/) + 1)
        let upperCaseWordArray = wordArray.map((word) => {return word[0].toUpperCase() + word.slice(1)})
        let upperCaseWord = ""
        upperCaseWordArray.forEach(word => {
            upperCaseWord += word + " "
        })
        return upperCaseWord.trim()
    })
}

// code

const tags = [
]

const blockNames = blockIdToBlockName(tags)

onEvent("rei.group", (event) => {
    for (let i = 0; i < tags.length; i++) {
        let tagNoModId = tags[i].slice(tags[i].search(/[:]/) + 1)
        event.groupItemsByTag(`chipped:rei_groups/${tagNoModId}`, blockNames[i], tags[i]);
    }
})