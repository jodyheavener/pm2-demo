// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Server 1 says "Hello World!"');
  process.stdout.write("JSYK - Someone visited the home page\r\n")
})

app.listen(process.env.PORT, () => {
  process.stdout.write(`Listening at http://localhost:${process.env.PORT}\r\n`)
})
