  ////////////////////////
/// Made by Team AOF ///
////////////////////////

console.log('Primary Order Initiated');

onEvent('gamephases.initialize', event => {
    event.phase('spore_sword')
      .item('doodads:spore_sword')
  
    event.phase('paintbrush')
      .item('doodads:paintbrush')
  
    event.phase('beaver_teeth')
      .item('doodads:beaver_teeth')
  
    event.phase('bendy_straw')
      .item('doodads:bendy_straw')
  
    event.phase('soggy_glove')
      .item('doodads:soggy_glove')
  
    event.phase('loggers_glove')
      .item('doodads:loggers_glove')
  
    event.phase('sun_ring')
      .item('doodads:sun_ring')
  
    event.phase('moon_ring')
      .item('doodads:moon_ring')
  
    event.phase('celestial_ring')
      .item('doodads:celestial_ring')
  
    event.phase('cactus_ring')
      .item('doodads:cactus_ring')
  
    event.phase('midnights_eye')
      .item('doodads:midnights_eye')
  
    event.phase('glare_plushie')
      .item('doodads:glare_plushie')
      .item('doodads:glare_staff')
  
    event.phase('slimey_shoes')
      .item('doodads:slimey_shoes')
  
    event.phase('shulker_aglet')
      .item('doodads:shulker_aglet')
  
    event.phase('blossom_belt')
      .item('doodads:blossom_belt')
  
    event.phase('duct_tape')
      .item('doodads:duct_tape')
  
    event.phase('magic_plum')
      .item('doodads:magic_plum')
  });
  
  //orbs
  
  onEvent('gamephases.initialize', event => {
    event.phase('lesser_orb_regret')
      .item('relicex:lesser_orb_of_regret')
  
    event.phase('greater_orb_regret')
      .item('relicex:greater_orb_of_regret')
  
    event.phase('orb_of_origin')
      .item('origins:orb_of_origin')
  });
  
  
  //Artifacts
  
  onEvent('gamephases.initialize', event => {
    event.phase('everlasting_beef')
      .item('artifacts:everlasting_beef')
  });