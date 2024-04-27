import express from 'express'
import { login,getUsers,getUserByUserName ,addUser,updateUserbyId,deleteUser} from '../Controllers/userController.js'

const userRouter = express.Router()

userRouter.get('/',getUsers)
userRouter.get('/username/:username',getUserByUserName)
userRouter.post('/',addUser)
userRouter.post('/login',login)
userRouter.patch('/:id',updateUserbyId)
userRouter.delete("/:id",deleteUser)


export default userRouter