import express from 'express'
import cors from 'cors'
import userRouter from './Routers/userRouter.js'
import employeeRouter from './Routers/employeeRouter.js'
import postRouter from './Routers/postRouter.js'
import path from 'path';

const app=express()

app.use(express.json())
app.use(cors())
app.use('/users',userRouter)
app.use('/employees',employeeRouter)
app.use('/posts',postRouter)

const dirname= path.resolve()
app.use(express.static(path.join(dirname,'uploads')))

app.listen(3000,()=>{
    console.log("Listening on port 3000")
})

