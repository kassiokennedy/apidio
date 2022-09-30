import { Router, Request, Response } from "express";
import { CriarUsuario } from "./controllers/CriarUsuario";


const criarUsuario = new CriarUsuario()
const router = Router()



router.get('/', (request: Request, response: Response)=> {
  return response.json({mensagem : "deu certo!"})
} )
// rota que cria os usuarios do sistema
// navegador nao consegue ler rota post
router.post('/users', criarUsuario.handle)



export {router}