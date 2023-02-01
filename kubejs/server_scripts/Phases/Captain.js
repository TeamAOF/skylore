  ////////////////////////
/// Made by Team AOF ///
////////////////////////

console.log('Captain Reporting For Duty');

onEvent('gamephases.initialize', event => {
  //level 3
  
    event.phase('iron_barrel')
      .item('expandedstorage:iron_barrel')
  
    event.phase('frayed_backpack')
      .item('inmis:frayed_backpack')
  
  
    //level 10
  
  
    event.phase('iron_chest')
      .item('expandedstorage:iron_chest')
  
    event.phase('plated_backpack')
      .item('inmis:plated_backpack')
  
    event.phase('ed_book')
      .item('extended_drawers:guide_book')
  
    event.phase('ed_drawer')
      .item('extended_drawers:single_drawer')
  
    event.phase('ed_ddrawer')
      .item('extended_drawers:double_drawer')
  
    event.phase('ed_qdrawer')
      .item('extended_drawers:quad_drawer')
  
    event.phase('ed_controller')
      .item('extended_drawers:controller')
  
    event.phase('ed_connector')
      .item('extended_drawers:connector')
  
    //level 20
  
    event.phase('gold_chest')
      .item('expandedstorage:gold_chest')
  
    event.phase('gilded_backpack')
      .item('inmis:gilded_backpack')
  
    event.phase('fluix')
      .item('ae2:fluix_crystal_seed')
  
    //level 30
  
    event.phase('diamond_chest')
      .item('expandedstorage:diamond_chest')
  
    event.phase('bejeweled_backpack')
      .item('inmis:bejeweled_backpack')
  
  
    //level 40
  
    event.phase('blazing_backpack')
      .item('inmis:blazing_backpack')
  
    event.phase('withered_backpack')
      .item('inmis:withered_backpack')
  
    //level 50
    event.phase('endless_backpack')
      .item('inmis:endless_backpack')
  });