////////////////////////
/// Made by Team AOF ///
////////////////////////


onEvent('tags.items', event => {

    // Create (Common Tag Conversion)
    const create_ingots_blocks = [
        'zinc',
        'brass',
    ];

    const create_nuggets = [
        'copper',
        'brass',
        'zinc'
    ];

    const create_plates = [
        'copper',
        'iron',
        'brass',
    ];

    create_ingots_blocks.forEach((item) => {
        event.add("c:" + item + "_ingots", "create:" + item + "_ingot")
        event.add("c:" + item + "_blocks", "create:" + item + "_block")
    });

    create_nuggets.forEach((item) => {
        event.add("c:" + item + "_nuggets", "create:" + item + "_nugget")
    });

    create_plates.forEach((item) => {
        event.add("c:" + item + "_plates", "create:" + item + "_sheet")
    });

    event.add("c:brass_ingots", "create:brass_ingot")
    event.add("c:brass_nuggets", "create:brass_nugget")
    event.add("c:brass_ingots", "create:brass_ingot")
    event.add("c:brass_blocks", "create:brass_block")
    event.add("c:raw_zinc_ores", "create:raw_zinc")
    event.add("c:gold_plates", "create:golden_sheet")

    // Modern Industrialization
    event.add("c:copper_rods", "modern_industrialization:copper_rod")
    event.add("c:rods/copper", "modern_industrialization:copper_rod")
    event.add("c:gold_rods", "modern_industrialization:gold_rod")
    event.add("c:rods/gold", "modern_industrialization:gold_rod")
    event.add("c:rods/iron", "modern_industrialization:iron_rod")
    event.add("c:dusts/diamond", "modern_industrialization:diamond_dust")

    event.add("c:plates/gold", "modern_industrialization:gold_plate")
    event.add("c:plates/iron", "modern_industrialization:iron_plate")
    event.add("c:plates/copper", "modern_industrialization:copper_plate")
    event.add("c:nuggets/copper", "modern_industrialization:copper_nugget")
    event.add("c:plates/bronze", "modern_industrialization:bronze_plate")

    // Indrev
    event.add('c:raw_lead_blocks', 'indrev:raw_lead_block')
    event.add('c:raw_silver_blocks', 'indrev:raw_silver_block')
    event.add('c:raw_tungsten_blocks', 'indrev:raw_tungsten_block')
    event.add('c:raw_tin_blocks', 'indrev:raw_tin_block')

    // Create Filtering
    event.add("c:plates", "modern_industrialization:iron_plate")
    event.add("c:plates", "modern_industrialization:gold_plate")
    event.add("c:plates", "modern_industrialization:copper_plate")

    // Netherrack
    event.add("c:netherrack_dusts", "create:cinder_flour")

});
