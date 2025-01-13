import { Request, Response } from "express";
import { AppError } from "../utils/app-error";
import { z } from "zod";

export class ProductsControllers {

  /**
   * 
   *  index = GET para listar varios registros
   *  show  = GET para exibir um registro
   *  create = POST para criar um registro
   *  update = PUT para editar um registro
   *  delete = DELETE para excluir um registro
   * 
   */

  index(request: Request, response: Response) {
    const { page, limit } = request.query;
    const { id } = request.params;
    response.send(`Página: ${page} de ${limit} -- ID: ${id}`);
  }

  show(request: Request, response: Response) {
    const { page, limit } = request.query;
    response.send(`Página: ${page} de ${limit}`);
  }

  create(request: Request, response: Response) {
    
    const bodySchema = z.object({ 
      name: z.string(),
      price: z.number()
    });

    const { name, price } = bodySchema.parse(request.body);

    /* if(!name) {
      throw new AppError("Nome do produto é obrigatório");
    } 

    if(name.trim().length < 4) {
      throw new AppError("Nome do produto precisa ter pelo menos 4 caracteres");
    }

    if(!price) {
      throw new AppError("Preço do produto é obrigatório");
    } 

    if(price < 0) {
      throw new AppError("Preço do produto não pode ser menor que zero");
    }*/
    
    response.status(201).json({ name, price, user_id: request.user_id });
  }

}