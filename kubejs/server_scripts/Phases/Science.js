////////////////////////
/// Made by Team AOF ///
////////////////////////

console.log('Science Reporting For Duty');


onEvent('gamephases.initialize', event => {

    //level 3
    event.phase('botanist_workbench')
        .item('chipped:botanist_workbench')

    event.phase('mechanist_workbench')
        .item('chipped:mechanist_workbench')

    event.phase('glassblower')
        .item('chipped:glassblower')

    event.phase('loom_table')
        .item('chipped:loom_table')

    event.phase('carpenters_table')
        .item('chipped:carpenters_table')

    event.phase('mason_table')
        .item('chipped:mason_table')

    event.phase('alchemy_bench')
        .item('chipped:alchemy_bench')

    event.phase('apothecary')
        .item('botania:apothecary_default')
        .item('botania:apothecary_forest')
        .item('botania:apothecary_plains')
        .item('botania:apothecary_mountain')
        .item('botania:apothecary_fungal')
        .item('botania:apothecary_swamp')
        .item('botania:apothecary_desert')
        .item('botania:apothecary_taiga')
        .item('botania:apothecary_mesa')
        .item('botania:apothecary_mossy')



    //level 10

    event.phase('basic_botany_pots')
        .itemTag('botanypots:basic_botany_pots')

    event.phase('desh_ingot')
        .item('ad_astra:desh_ingot')

    event.phase('magic_fungi')
        .itemTag('magicfungi:mushrooms')

    event.phase('glyph_carving_workbench')
        .item('magicfungi:glyph_carving_workbench')

    event.phase('desh_ingot')
        .item('ad_astra:desh_ingot')

    event.phase('pure_daisy')
        .item('botania:pure_daisy')
        .block('botania:pure_daisy', 'minecraft:grass')

    //level20

    event.phase('manasteel_ingot')
        .item('botania:manasteel_ingot')

    event.phase('ostrum_ingot')
        .item('ad_astra:ostrum_ingot')

    event.phase('hopper_botany_pots')
        .itemTag('botanypots:hopper_botany_pots')

    event.phase('spell_discovery_workbench')
        .item('magicfungi:spell_discovery_workbench')

    event.phase('hex_wands')
        .itemTag('hexcasting:wands')

    //level30

    event.phase('terrasteel_ingot')
        .item('botania:terrasteel_ingot')

    event.phase('calorite_ingot')
        .item('ad_astra:calorite_ingot')

    event.phase('uranium')
        .block('modern_industrialization:uranium_ore', 'minecraft:stone')
        .block('modern_industrialization:deepslate_uranium_ore', 'minecraft:deepslate')

    event.phase('uraninite')
        .block('powah:uraninite*', 'minecraft:stone')
        .block('powah:deepslate_uraninite*', 'minecraft:stone')

    //level40

    event.phase('titanium_ingot')
        .item('modern_industrialization:titanium_ingot')

    event.phase('mf_tools')
        .itemTag('magicfungi:relics')

    event.phase('mf_armor')
        .item('magicfungi:magical_fungi_helmet')
        .item('magicfungi:magical_fungi_chestplate')
        .item('magicfungi:magical_fungi_leggings')
        .item('magicfungi:magical_fungi_boots')


    //level50

    event.phase('elementium_ingot')
        .item('botania:elementium_ingot')

    event.phase('extractinator')
        .item('extractinator:extractinator')
});