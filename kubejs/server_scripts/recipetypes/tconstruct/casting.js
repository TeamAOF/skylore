onEvent('recipes', (event) => {

  const materials = [
    'tin',
    'lead',
    'silver',
    'nickel',
    'tungsten',
    'mozanite',
    'uranium',
    'antimony',
    'iridium',
    'steel'
  ];

  const plates = [
    'tin',
    'lead',
    'silver',
    'nickel',
    'tungsten',
    'iridium',
    'steel'
  ];

  const large_plates = [
    'tin',
    'lead',
    'nickel',
    'tungsten',
    'iridium',
    'steel'
  ];

  const tconstruct_fluids = [
    'iron',
    'gold',
    'copper',
    'diamond',
    'emerald'
  ];

  materials.forEach((item) => {
    event.custom({
      "type": "tconstruct:casting_basin",
      "fluid": {
        "name": "kubejs:molten_" + item,
        "amount": 81000
      },
      "result": "modern_industrialization:" + item + "_block",
      "cooling_time": 225
    })
    event.custom({
      "type": "tconstruct:casting_table",
      "cast": {
        "item": "tconstruct:ingot_cast"
      },
      "fluid": {
        "name": "kubejs:molten_" + item,
        "amount": 9000
      },
      "result": "modern_industrialization:" + item + "_ingot",
      "cooling_time": 45
    })
  })

  plates.forEach((item) => {
    event.custom({
      "type": "tconstruct:casting_table",
      "cast": {
        "item": "tconstruct:plate_cast"
      },
      "fluid": {
        "name": "kubejs:molten_" + item,
        "amount": 9000
      },
      "result": "modern_industrialization:" + item + "_plate",
      "cooling_time": 45
    })
  })
  large_plates.forEach((item) => {
    event.custom({
      "type": "tconstruct:casting_table",
      "cast": {
        "item": "tconstruct:large_plate_cast"
      },
      "fluid": {
        "name": "kubejs:molten_" + item,
        "amount": 36000
      },
      "result": "modern_industrialization:" + item + "_large_plate",
      "cooling_time": 90
    })
  })

  tconstruct_fluids.forEach((item) => {
    event.custom({
      "type": "tconstruct:casting_table",
      "cast": {
        "item": "tconstruct:plate_cast"
      },
      "fluid": {
        "name": "tconstruct:molten_" + item,
        "amount": 9000
      },
      "result": "modern_industrialization:" + item + "_plate",
      "cooling_time": 45
    })
  })
})
