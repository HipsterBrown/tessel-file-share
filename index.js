// builtins
const path = require('path')

// node_modules
const express = require('express')

const app = express()
const port = process.env.PORT || '80';

app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, (error) => {
  if (error) {
    console.error(error);
    process.exit(1);
  } else {
    console.log(`\n Server started on port ${port}.`);
  }
})
