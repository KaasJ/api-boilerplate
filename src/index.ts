import express, {Request, Response, NextFunction} from 'express'
import routes from './routes'
import { json } from 'body-parser'

const app = express() 
app.use(json())

app.use('/', routes)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({message: err.message})
});

app.listen(3000, () => console.log('Listening on port 3000'))