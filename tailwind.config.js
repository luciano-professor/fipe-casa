// tailwind.config.js
const { plugin } = require('twrnc');

// or, you can use tailwinds plugin function:
// const plugin = require('tailwindcss/plugin');

module.exports = {
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        btn: {
          padding: 3,
          borderRadius: 10,
          textTransform: `uppercase`,
          backgroundColor: `#333`,
        },
        'resize-repeat': {
          resizeMode: `repeat`,
        },
        elleno: {
          color: 'darkseagreen',
        },
        luciano: `text-slate-600`,
        'text-primary': `text-violet-700`,
      });
    }),
  ],
};
