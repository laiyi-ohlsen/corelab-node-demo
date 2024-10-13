import express from 'express'

const app = express(); 
app.use(express.json())

const port = process.env.PORT || 3001

app.get('/', (req, res) => {
    res.json({ data: "response goes here" })
})

app.listen(port, () => {
    console.log(`Example listening on port ${port}`)
})