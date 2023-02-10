import express, { Express } from "express";
const user: Express = express()
import {deleteUsers, getUsers, postUsers, putUsers} from "../controllers/usersControllers"

user.post('/signin/', postUsers)

user.get('/login/', getUsers)

user.put('/:id', putUsers)

user.delete('/:id', deleteUsers)

export default user