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
    'steel',
  ];

  const ores = [
    'tin',
    'lead',
    'silver',
    'nickel',
    'tungsten',
    'mozanite',
    'uranium',
    'antimony',
    'iridium',
  ];

  const raw_materials = [
    'tin',
    'lead',
    'silver',
    'nickel',
    'tungsten',
    'uranium',
    'antimony',
    'iridium'
  ];

  ores.forEach((item) => {
    event.custom({
      "type": "tconstruct:melting",
      "ingredient": {
        "tag": "c:" + item + "_ores"
      },
      "result": {
        "fluid": "kubejs:molten_" + item,
        "amount": 18000
      },
      "temperature": 500,
      "time": 50
    })
  })

    materials.forEach((item) => {
    event.custom({
        "type": "tconstruct:melting",
        "ingredient": {
          "tag": "c:" + item + "_dusts"
        },
        "result": {
          "fluid": "kubejs:molten_" + item,
          "amount": 9000
        },
        "temperature": 500,
        "time": 50
      })

      event.custom({
        "type": "tconstruct:melting",
        "ingredient": {
          "tag": "c:" + item + "_ingots"
        },
        "result": {
          "fluid": "kubejs:molten_" + item,
          "amount": 9000
        },
        "temperature": 500,
        "time": 50
      })

      event.custom({
        "type": "tconstruct:melting",
        "ingredient": {
          "tag": "c:" + item + "_plates"
        },
        "result": {
          "fluid": "kubejs:molten_" + item,
          "amount": 9000
        },
        "temperature": 500,
        "time": 50
      })
  })

  raw_materials.forEach((item) => {
    event.custom({
      "type": "tconstruct:melting",
      "ingredient": {
        "tag": "c:raw_" + item + "_ores"
      },
      "result": {
        "fluid": "kubejs:molten_" + item,
        "amount": 9000
      },
      "temperature": 500,
      "time": 50
    })
  })
})
