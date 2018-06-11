const html = require('choo/html')
const folderIcon = require('../components/folderIcon')
const directoryItem = require('../components/directoryItem')
const fileItem = require('../components/fileItem')

const TITLE = 'File Share - Home'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) {
    emit(state.events.DOMTITLECHANGE, TITLE)
  }

  return html`
    <body class="lh-copy sans-serif">
      <header class="bg-blue white pa2">
	<h1 class="tc ma0 flex items-end">
          ${folderIcon({ class: 'mr2', fill: '#FFFFFF', size: 48 })}
	  My Files
	</h1>
      </header>
      <main class="pa2">
        <p class="mv1">Current Path: /</p>
        <ul class="list ph2 mv1">
          <li>${directoryItem({ path: '/Photos', filename: 'Photos' })}</li>
          <li>${fileItem({ path: '/my-doc.txt', filename: 'My Doc' })}</li>
        </ul>
      </main>
    </body>
  `;
}
