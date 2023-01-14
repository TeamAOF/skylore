onEvent('recipes', (event) => {

    event.shaped('indrev:chopper_mk1', [
                "#W#",
                "CLC",
                "CBC"
            ],
            {
                "#": {
                    "tag": "tconstuct:axe"
                },
                "W": {
                    "item": "indrev:circuit_mk1"
                },
                "L": {
                    "item": "indrev:machine_block"
                },
                "C": {
                    "item": "modern_industrialization:bronze_plate"
                },
				"B": {
                    "item": "indrev:battery"
                }
        }).id('indrev:chopper_mk1')
})