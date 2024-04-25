import express from 'express'
import {upload} from '../upload.js'
import { addPost,getPosts,updatePost,deletePost,getImageById } from '../Controllers/postController.js'

const postRouter = express.Router()

postRouter.post('/',upload.single('image'),addPost)

postRouter.get('/',getPosts)

postRouter.patch('/:id',updatePost)

postRouter.delete('/:id',deletePost)

postRouter.get('/images/:id',getImageById)

export default postRouter