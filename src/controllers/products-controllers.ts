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
      name: z
        .string({ required_error: "Nome é obrigatório "})
        .trim()
        .min(6, { message: "Nome deve conter 6 ou mais caracteres"}),
      price: z
        .number({ required_error: "Preço é obrigatório"})
        .positive({ message: "O Preço deve ser positivo"})
    });

    const { name, price } = bodySchema.parse(request.body);

    response.status(201).json({ name, price, user_id: request.user_id });
  }

}