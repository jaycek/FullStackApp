import express from 'express'
import { getUsers,getUserByUserName ,addUser,updateUserbyId,deleteUser} from '../Controllers/userController.js'

const userRouter = express.Router()

userRouter.get('/',getUsers)
userRouter.get('/username/:username',getUserByUserName)
userRouter.post('/',addUser)
userRouter.patch('/:id',updateUserbyId)
userRouter.delete("/:id",deleteUser)


export default userRouter