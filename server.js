const express = require('express')

const app = express()

// Public folder directory
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.send('Hello Express')
})

app.listen(3000, () => console.log('Server running on port 3000.'))
