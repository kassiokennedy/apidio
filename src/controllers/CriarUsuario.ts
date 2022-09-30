import {Request, Response} from 'express'

class CriarUsuario{
  handle(request: Request, response: Response) {

    const name = request.body.name
    
    return response.json({mensagem: `Usuario ${name} criado!`})

    } 
}

export {CriarUsuario}