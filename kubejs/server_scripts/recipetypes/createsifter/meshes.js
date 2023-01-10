onEvent('recipes', (event) => {
    event.shaped("createsifer:brass_mesh",[
        "###",
        "#x#",
        "###"
    ],
    {
        "#": {
            "item": "create:brass_block"
        },
        "x": {
            "item": "createsifter:zinc_mesh"
        }
    }).id("createsifter:brass_mesh")
})
onEvent('recipes', (event) => {
    event.shaped("createsifer:zinc_mesh",[
        "###",
        "#x#",
        "###"
    ],
    {
        "#": {
            "item": "create:zinc_block"
        },
        "x": {
            "item": "createsifter:andesite_mesh"
        }
    }).id("createsifter:zinc_mesh")
})
})
onEvent('recipes', (event) => {
    event.shaped("createsifer:andesite_mesh",[
        "###",
        "#x#",
        "###"
    ],
    {
        "#": {
            "item": "create:andesite_ingot"
        },
        "x": {
            "item": "createsifter:string_mesh"
        }
    }).id("createsifter:andesite_mesh")
})