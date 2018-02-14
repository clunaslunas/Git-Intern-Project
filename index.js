const express = require('express')
const app = express()


app.get('/', (req, res) => res.send("Congrats you started the express server"))
app.use('/names', express.static('public'))

app.listen(3000, () => console.log("App listening on port 3000"))