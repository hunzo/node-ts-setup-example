import ex, { Application, Request, Response } from "express"
import cors from "cors"
import { getPost } from "./services/CallApi"

const app: Application = ex()

app.use(ex.json())
app.use(cors())

app.get("/", (req: Request, res: Response) => {
  res.json({
    info: "hello world",
  })
})

app.get('/post', (req: Request, res: Response) => {
  getPost()
    .then(rs => {
      res.json(rs.data)
    })
    .catch((e) => {
      res.json(e)
    })
})

app.listen(process.env.PORT || 5000)
