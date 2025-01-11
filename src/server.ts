import express from "express";
import { myMiddleware } from "./middlewares/my-middleware";

const PORT = 3333; 

const app = express();
app.use(express.json());

// Middleware global
//app.use(myMiddleware);

app.get("/products", (request, response) => {
  
  // /products?page=1&limit=10
  
  const { page, limit } = request.query;
  response.send(`Página: ${page} de ${limit}`);
  
});

//Middleware local em uma rota específica
app.post("/products", myMiddleware, (request, response) => {
  const { name, price } = request.body;
  response.status(201).json({ name, price, user_id: request.user_id });
})

app.listen(PORT, () => console.log(`**** Server is running on PORT: ${PORT} ****`));