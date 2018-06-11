const html = require('choo/html')
const folderIcon = require('./folderIcon')

module.exports = directoryItem

function directoryItem (props = {}) {
  return html`
    <a class="pa0 ma0 b flex blue" href="${props.path}">
      ${folderIcon({ class: 'mr2', fill: '#357edd' })}
      ${props.filename}
    </a>
  `
}
