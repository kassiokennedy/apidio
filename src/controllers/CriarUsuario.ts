import {Request, Response} from 'express'

class CriarUsuario{
  handle(request: Request, response: Response) {

    const name = request.body.name
    
    if(NamedNodeMap.length == 0){
      response.status(400).json({mensagem: 'Informe um nome de usuario.'})
    }

    return response.status(200).json({mensagem: `Usuario ${name} criado!`})

    } 
}

export {CriarUsuario}