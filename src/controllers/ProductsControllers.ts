import { Request, Response } from "express";

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
    const { name, price } = request.body;
    response.status(201).json({ name, price, user_id: request.user_id });
  }

}