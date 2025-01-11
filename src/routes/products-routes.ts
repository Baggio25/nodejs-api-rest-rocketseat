
import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middleware";
import { ProductsControllers } from "../controllers/ProductsControllers";

const productsRoutes = Router();
const productsControllers = new ProductsControllers();

productsRoutes.get("/", productsControllers.show);

productsRoutes.get("/:id", productsControllers.index);

productsRoutes.post("/", myMiddleware, productsControllers.create);

export { productsRoutes };