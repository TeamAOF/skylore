////////////////////////
/// Made by Team AOF ///
////////////////////////
console.log('Medical Reporting For Duty');

onEvent('gamephases.initialize', event => {
    event.phase('human_research')
        .itemTag('chestcavity:salvageable_human_organ_meat')
        .item('chestcavity:rib')
        .item('chestcavity:spine')

    event.phase('small_animal_research')
        .itemTag('chestcavity:salvageable_mini_sausage_skin')
        .itemTag('chestcavity:salvageable_small_animal_organ_meat')
        .itemTag('chestcavity:salvageable_small_butchered_meat')
        .itemTag('chestcavity:salvageable_small_animal_organs')

    event.phase('wooden_cleaver')
        .item('chestcavity:wooden_cleaver')


    event.phase('syringe')
        .item('squirtingsyringe:syringe')

    //level 10
    event.phase('animal_research')
        .itemTag('chestcavity:salvageable_animal_organ_meat')
        .itemTag('chestcavity:salvageable_sausage_skin')
        .item('chestcavity:animal_rib')
        .item('chestcavity:animal_spine')

    event.phase('insect_research')
        .itemTag('chestcavity:salvageable_toxic_organ_meat')

    event.phase('fish_research')
        .item('chestcavity:aquatic_muscle')
        .item('chestcavity:gills')
        .item('fish_muscle')

    event.phase('oxygentank')
        .item('ad_astra:oxygen_tank')

    event.phase('oxyloader')
        .item('ad_astra:oxygen_loader')

    event.phase('chest_opener')
        .item('chestcavity:chest_opener')

    event.phase('immsyringe')
        .item('immortuoscalyx:syringe')

    event.phase('wither_research')
        .item('chestcavity:writhing_soulsand')
        .item('chestcavity:withered_spine')
        .item('chestcavity:withered_rib')



    //level 20
    event.phase('fireproof_research')
        .item('chestcavity:fireproof_*')

    event.phase('blaze_research')
        .itemTag('chestcavity:salvageable_blaze_powder')

    event.phase('muscle_research')
        .item('chestcavity:brutish_muscle')
        .item('chestcavity:swift_muscle')
        .item('chestcavity:springy_muscle')


    event.phase('iron_cleaver')
        .item('chestcavity:iron_cleaver')

    event.phase('oxydis')
        .item('ad_astra:oxygen_distributor')


    event.phase('infection_scanner')
        .item('immortuoscalyx:infection_scanner')



    //level 30

    event.phase('ender_research')
        .itemTag('chestcavity:salvageable_alien_organ_meat')
        .item('chestcavity:ender_spine')
        .item('chestcavity:ender_rib')

    event.phase('advanced_sea')
        .item('chestcavity:gas_bladder')
        .item('chestcavity:volatile_stomach')
        .item('chestcavity:saltwater_heart')
        .item('chestcavity:saltwater_lung')
        .item('chestcavity:saltwater_muscle')

    event.phase('gold_cleaver')
        .item('chestcavity:gold_cleaver')

    event.phase('oxysensor')
        .item('ad_astra:oxygen_sensor')

    event.phase('healthscanner')
        .item('immortuoscalyx:healthscanner')


    // level 40

    event.phase('dragon_research')
        .itemTag('chestcavity:salvageable_dragon_organ_meat')
        .item('chestcavity:dragon_rib')
        .item('chestcavity:dragon_spine')

    event.phase('creeper_research')
        .itemTag('chestcavity:salvageable_gunpowder')
        .item('chestcavity:shulker_spleen')


    event.phase('diamond_cleaver')
        .item('chestcavity:diamond_cleaver')



    //level 50


    event.phase('golem_research')
        .itemTag('chestcavity:salvageable_iron_scrap')
        .item('chestcavity:iron_repair_material')

    event.phase('netherite_cleaver')
        .item('chestcavity:netherite_cleaver')

});