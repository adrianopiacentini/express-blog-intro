const express = require('express')
const app = express()
const port = 3000
const posts = require('./posts.js')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Server del mio blog di cucina')
})

app.get ('/bacheca', (req, res) => {
    res.json({
        postsList: posts,
        postsNum: posts.length
    })
})

app.listen(port, () => {})