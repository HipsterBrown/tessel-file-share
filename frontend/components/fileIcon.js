const html = require('choo/html')

module.exports = icon

function icon (props = {}) {
  const p = Object.assign(
    {
      class: '',
      fill: '#000000',
      size: 24,
    },
    props
  )

  return html`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${p.size}" height="${p.size}" class="${p.class}">
      <path fill="${p.fill}" d="M6 2h9a1 1 0 0 1 .7.3l4 4a1 1 0 0 1 .3.7v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2zm9 2.41V7h2.59L15 4.41zM18 9h-3a2 2 0 0 1-2-2V4H6v16h12V9zm-2 7a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1zm0-4a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1zm-5-4a1 1 0 0 1-1 1H9a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1z"/>
    </svg>
  `
}