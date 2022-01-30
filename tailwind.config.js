module.exports = {
  content: [
		'./src/index.html'
  ],
  darkMode: 'class',
  theme: {
    extend: {
			colors: {
				transparent: 'transparent',
				bg_0: 'var(--bg_0)',
				bg_1: 'var(--bg_1)',
				bg_2: 'var(--bg_2)',
				dim_0: 'var(--dim_0)',
				fg_0: 'var(--fg_0)',
				fg_1: 'var(--fg_1)',
				red: 'var(--red)',
				green: 'var(--green)',
				yellow: 'var(--yellow)',
				blue: 'var(--blue)',
				magenta: 'var(--magenta)',
				cyan: 'var(--cyan)',
				orange: 'var(--orange)',
				violet: 'var(violet)',
				br_red: 'var(br_red)',
				br_green: 'var(--br_green)',
				br_yellow:'var(--br_yellow)',
				br_blue: 'var(--br_blue)',
				br_magenta: 'var(--br_magenta)',
				br_cyan: 'var(--br_cyan)',
				br_orange: 'var(--br_orange)',
				br_violet: 'var(br_violet)'
			}
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
