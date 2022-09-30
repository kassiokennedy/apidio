import express, {json, Request, Response} from "express";
import {router} from './routes'

// instanciar o express
const server = express();

// configura pro express receber json
server.use(express.json())

// chamada da rota
server.use(router)

// iniciar o servidor
server.listen(5000, ()=> {console.log("servidor: http://localhost:5000/")}) // primeiro parametro:porta; segundo: função de callback

