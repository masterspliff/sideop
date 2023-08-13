const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      boxShadow: ['hover', 'focus', 'active'],
    },
  },
  
  plugins: [
    plugin(function ({ theme, addUtilities }) {
  const neonUtilities = {};
  const colors = theme('colors');
  
  for (const color in colors) {
    if (typeof colors[color] === 'object') {
      const color1 = colors[color]['500'];
      const color2 = colors[color]['700'];
      
      const boxShadowValue = `0 0 5px ${color1}, 0 0 20px ${color2}`;
      
      neonUtilities[`.neon-${color}`] = { boxShadow: boxShadowValue };
      neonUtilities[`.hover\\:neon-${color}:hover`] = { boxShadow: boxShadowValue };
      neonUtilities[`.focus\\:neon-${color}:focus`] = { boxShadow: boxShadowValue };
      neonUtilities[`.active\\:neon-${color}:active`] = { boxShadow: boxShadowValue };
    }
  }
  
  addUtilities(neonUtilities, ['responsive', 'hover', 'focus', 'active']);
}),

  ],
}
