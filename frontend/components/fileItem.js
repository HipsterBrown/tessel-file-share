const html = require('choo/html')
const fileIcon = require('./fileIcon')

module.exports = fileItem

function fileItem (props = {}) {
  return html`
    <a class="ma0 pa0 near-black flex" href="${props.path}">
      ${fileIcon({ class: 'mr2' })}
      ${props.filename}
    </a>
  `
}
