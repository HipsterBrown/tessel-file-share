const css = require('sheetify')
const choo = require('choo')

css('tachyons')

const app = choo()

app.route('/', require('./views/index'))

module.exports = app.mount('body')
