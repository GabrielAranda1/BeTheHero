const express = require("express")
const cors = require("cors")

const routes = require("./routes")

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

const port = process.env.port || 5000

app.listen(port, () => console.log(`Server is running on port ${port}`))
