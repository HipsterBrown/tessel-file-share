const html = require('choo/html')

module.exports = icon

function icon (props = {}) {
  return html`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${props.size || 24}" height="${props.size || 24}" class="${props.class || ''}">
      <path fill=${props.fill || '#000000'} d="M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h7.41l2 2H20zM4 6v12h16V8h-7.41l-2-2H4z"/>
    </svg>
  `
}
