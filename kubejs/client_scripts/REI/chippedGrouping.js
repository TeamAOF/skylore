// functions 
function blockIdToBlockName(tags) {
    return tags.map((id) => {
        wordArray = id.split("_")
        wordArray[0] = wordArray[0].slice(wordArray[0].search(/[:]/) + 1)
        upperCaseWordArray = wordArray.map((word) => {return word[0].toUpperCase() + word.slice(1)})
        var upperCaseWord = ""
        upperCaseWordArray.forEach(word => {
            upperCaseWord += word + " "
        })
        return upperCaseWord.trim()
    })
}

// code

const tags = [
    "chipped:black_stained_glass",
    "chipped:lime_terracotta"
]

const blockNames = blockIdToBlockName(tags)

onEvent("rei.group", (event) => {

    tags.forEach((tag, index) => {
        tagNoModId = tag.slice(tag.search(/[:]/) + 1)
        console.log([`chipped:rei_groups/${tagNoModId}`, blockNames[index], tag]);
    })

})