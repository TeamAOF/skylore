  ////////////////////////
/// Made by Team AOF ///
////////////////////////

console.log('Phases on stun!');

onEvent('gamephases.initialize', event => {

    event.phase('end')
      .block('minecraft:end_portal', 'minecraft:dirt')
  
  
  });

  //Mobs -------------------------------------------

onEvent('gamephases.initialize', event => {
    event.phase('phantoms')
      .entity('minecraft:phantom')
  
    event.phase('easymodeoff')
      .entity('minecraft:zombie')
      .entity('minecraft:skeleton')
      .entity('minecraft:enderman')
      .entity('minecraft:spider')
      .entity('minecraft:witch')
      .entity('minecraft:zombie_villager')
      .entity('minecraft:stray')
  
    event.phase('creeper')
      .entity('minecraft:creeper')
  
    event.phase('graveyard')
      .entity('graveyard:revenant')
      .entity('graveyard:ghoul')
      .entity('graveyard:skeleton_creeper')
      .entity('graveyard:nightmare')
  });
  
  // Parasite Mob Gate
  
  onEvent('gamephases.initialize', event => {
    event.phase('infection')
      .entity('immortuoscalyx:infectedhuman')
      .entity('immortuoscalyx:infecteddiver')
      .entity('immortuoscalyx:infectedvillager')
      .entity('immortuoscalyx:infectedig')
      .entity('immortuoscalyx:infectedplayer')
  });






//Items --------------------------------------

//Professions tables

onEvent('gamephases.initialize', event => {
    event.phase('chef')
      .item('artis:chef_table')
  
    event.phase('captain')
      .item('artis:ops_panel')
  
    event.phase('engineer')
      .item('artis:engineering_panel')
  
    event.phase('medical')
      .item('artis:examination_table')
  
    event.phase('science')
      .item('artis:science_panel')
  
    event.phase('security')
      .item('artis:security_panel')
  
    event.phase('earthex')
      .item('artis:earth_examiner')
  });
  
  // Mega Table
  onEvent('gamephases.initialize', event => {
    event.phase('nulla')
      .item('artis:nulla')
  });
  // Enchants
  onEvent('gamephases.initialize', event => {
    event.phase('enchants')
      .item('minecraft:enchanting_table')
  });
  
  // Ad Astra Gating phase 1
  
  onEvent('gamephases.initialize', event => {
  

  
    event.phase('rocket1')
      .item('ad_astra:tier_1_rocket')
  });
  
  // Ad Astra Gating phase 2
  
  onEvent('gamephases.initialize', event => {
  
  
  
  

  
    event.phase('rocket2')
      .item('ad_astra:tier_2_rocket')
  });
  
  // Ad Astra Gating phase 3
  
  onEvent('gamephases.initialize', event => {

  
  
  
    event.phase('rocket3')
      .item('ad_astra:tier_3_rocket')
  
  });
  
  