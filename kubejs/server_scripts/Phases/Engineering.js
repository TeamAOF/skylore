  ////////////////////////
/// Made by Team AOF ///
////////////////////////

console.log('Engineering Reporting For Duty');

onEvent('gamephases.initialize', event => {

    //level 3 
  
    event.phase('logicate_fabricator')
      .item('logicates:logicate_fabricator')
  
    event.phase('red_alloy_compound')
      .item('rswires:red_alloy_compound')
  
    event.phase('gadget_building')
      .item('buildinggadgets:gadget_building')
  
    event.phase('platformer')
      .item('platforms:platformer')
  
    event.phase('automobile_assembler')
      .item('automobility:automobile_assembler')
  
    event.phase('circuit_mk1')
      .item('indrev:circuit_mk1')
  
    event.phase('gliders')
      .item('kibe:white_glider')
      .item('kibe:orange_glider')
      .item('kibe:magenta_glider')
      .item('kibe:light_blue_glider')
      .item('kibe:yellow_glider')
      .item('kibe:lime_glider')
      .item('kibe:pink_glider')
      .item('kibe:gray_glider')
      .item('kibe:light_gray_glider')
      .item('kibe:cyan_glider')
      .item('kibe:blue_glider')
      .item('kibe:purple_glider')
      .item('kibe:green_glider')
      .item('kibe:brown_glider')
      .item('kibe:red_glider')
      .item('kibe:black_glider')
  
  
    // level 10
    event.phase('steel_ingot')
      .item('modern_industrialization:steel_ingot')
  
    event.phase('circuit_mk2')
      .item('indrev:circuit_mk2')
  
    event.phase('tier_upgrade_mk2')
      .item('indrev:tier_upgrade_mk2')
  
    event.phase('control_key')
      .item('nyfsairships:control_key')
  
    event.phase('nyfballoon')
      .item('nyfsairships:balloon')
  
    event.phase('nyfcontroller')
      .item('nyfsairships:controller')
  
    // level 20
  
    event.phase('analog_circuit')
      .item('modern_industrialization:analog_circuit')
  
    event.phase('electric_quarry')
      .item('modern_industrialization:electric_quarry')
  
    event.phase('circuit_mk3')
      .item('indrev:circuit_mk3')
  
    event.phase('tier_upgrade_mk3')
      .item('indrev:tier_upgrade_mk3')
  
    event.phase('astrodux')
      .item('ad_astra:astrodux')
  
    event.phase('nasa')
      .item('ad_astra:nasa_workbench')
  
    event.phase('desh')
      .item('ad_astra:desh_ingot')
  
    event.phase('vshelm')
      .item('vs_eureka:oak_ship_helm')
      .item('vs_eureka:spruce_ship_helm')
      .item('vs_eureka:acacia_ship_helm')
      .item('vs_eureka:dark_oak_ship_helm')
      .item('vs_eureka:birch_ship_helm')
      .item('vs_eureka:jungle_ship_helm')
      .item('vs_eureka:crimson_ship_helm')
      .item('vs_eureka:warped_ship_helm')
  
    event.phase('vsballoon')
      .item('vs_eureka:balloon')
  
  
    // level 30
  
    event.phase('cryo_freezer')
      .item('ad_astra:cryo_freezer')
  
    event.phase('circuit_mk4')
      .item('indrev:circuit_mk4')
  
    event.phase('tier_upgrade_mk4')
      .item('indrev:tier_upgrade_mk4')
  
    event.phase('electronic_circuit')
      .item('modern_industrialization:electronic_circuit')
  
  
    //level 40
  
    event.phase('digital_circuit')
      .item('modern_industrialization:digital_circuit')
  
    event.phase('modular_core')
      .item('indrev:modular_core')
  
    // level 50
  
    event.phase('quantum_circuit')
      .item('modern_industrialization:quantum_circuit')
  
    event.phase('indrev_controller')
      .item('indrev:controller')
  
  });