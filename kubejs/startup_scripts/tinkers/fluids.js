onEvent('fluid.registry', event => {

  const mi_fluids = [
    // Tin
    0x747BAD,
    // Lead
    0x4B547E,
    // Silver
    0xACCBE7,
    // Nickel
    0xCECEA5,
    // Tungsten
    0x665585,
    // Nickel
    0xC6C69E,
    // Mozanite
    0x8D2185,
    // Uranium
    0x93C930,
    // Antimony
    0xA5A5B4,
    // Iridium
    0xE5E5E5,
];

mi_fluids.forEach((item) => {
  event.create('thick_fluid')
    .thickTexture(item)
    .bucketColor(item)
  	.luminosity(8)
 })
})