const express = require('express')
const hbs = require('hbs')

const app = express()

app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public')) // Public folder directory

// Routing
app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    currentYear: new Date().getFullYear(),
    welcomeMessage: 'Welcome to this website.'
  })
})

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  })
})


// Run!
app.listen(3000, () => console.log('Server running on port 3000.'))
