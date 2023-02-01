  ////////////////////////
/// Made by Team AOF ///
////////////////////////

console.log('Security Reporting For Duty');

// Conveyors
onEvent('gamephases.initialize', event => {
    event.phase('vector_plate')
      .item('darkutilities:vector_plate')
  
    event.phase('vector_plate_fast')
      .item('darkutilities:vector_plate_fast')
  
    event.phase('vector_plate_extreme')
      .item('darkutilities:vector_plate_extreme')
  
    event.phase('vector_plate_ultra')
      .item('darkutilities:vector_plate_ultra')
  
    event.phase('regular_conveyor_belt')
      .item('kibe:regular_conveyor_belt')
  
    event.phase('fast_conveyor_belt')
      .item('kibe:fast_conveyor_belt')
  
    event.phase('express_conveyor_belt')
      .item('kibe:express_conveyor_belt')
  });
  
  // Scanner Quests
  onEvent('gamephases.initialize', event => {
    event.phase('scanner')
      .item('scannable:scanner')
  
    event.phase('blank_module')
      .item('scannable:blank_module')
  
    event.phase('friendly')
      .item('scannable:friendly_entity_module')
  
    event.phase('hostile')
      .item('scannable:hostile_entity_module')
  
    event.phase('entity')
      .item('scannable:entity_module')
  
    event.phase('block')
      .item('scannable:block_module')
  
    event.phase('fluid')
      .item('scannable:fluid_module')
  
    event.phase('common')
      .item('scannable:common_ores_module')
  
    event.phase('rare')
      .item('scannable:rare_ores_module')
  
    event.phase('range')
      .item('scannable:range_module')
  });
  
  // Legendary Weapons
  
  onEvent('gamephases.initialize', event => {
    event.phase('legendary')
      .item('simplyswords:stormbringer')
      .item('simplyswords:storms_edge')
      .item('simplyswords:soulkeeper')
      .item('simplyswords:soulpyre')
      .item('simplyswords:soulrender')
      .item('simplyswords:frostfall')
      .item('simplyswords:bramblethorn')
      .item('simplyswords:hearthflame')
      .item('simplyswords:sword_on_a_stick')
      .item('simplyswords:brimstone_claymore')
      .item('simplyswords:watching_warglaive')
      .item('simplyswords:watcher_claymore')
      .item('simplyswords:molten_edge')
      .item('simplyswords:mjolnir')
      .item('simplyswords:toxic_longsword')
      .item('simplyswords:soulstealer')
      .item('simplyswords:emberblade')
      .item('simplyswords:twisted_blade')
  
  });
  
  // Gun Gate
  
  onEvent('gamephases.initialize', event => {
    event.phase('guntable')
      .item('hwg:gun_table')
  });
  // Level 1 guns
  onEvent('gamephases.initialize', event => {
    event.phase('level1gun')
      .item('hwg:luger')
      .item('hwg:pistol')
      .item('hwg:shotgun')
      .item('hwg:flare_gun')
      .item('hwg:spistol')
  });
  // Level 2 guns
  onEvent('gamephases.initialize', event => {
    event.phase('level2gun')
      .item('hwg:tommy_gun')
      .item('hwg:smg')
      .item('hwg:ak47')
      .item('hwg:sniper_rifle')
  });
  
  // Level 3 guns
  
  onEvent('gamephases.initialize', event => {
    event.phase('level3gun')
      .item('hwg:rocketlauncher')
      .item('hwg:flamethrower')
      .item('hwg:grenade_launcher')
  });
  
  // Level 4 Guns
  onEvent('gamephases.initialize', event => {
    event.phase('level4gun')
      .item('hwg:golden_gun')
      .item('hwg:hellhorse_revolver')
      .item('hwg:meanie_gun_1')
      .item('hwg:meanie_gun_2')
  });
  
  //Big Torch
  
  onEvent('gamephases.initialize', event => {
    event.phase('big_torch')
      .item('kibe:big_torch')
  });