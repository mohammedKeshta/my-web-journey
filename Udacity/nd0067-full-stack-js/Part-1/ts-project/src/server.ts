const express = require("express")

const app = express()
const port = 5000

app.get("/api", (req: any, res: any) => {
  res.send("Hello, World")
})

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})

export default app
