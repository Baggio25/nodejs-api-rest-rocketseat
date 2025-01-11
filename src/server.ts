import express from "express";

const PORT = 3333; 

const app = express();
app.use(express.json());

app.get("/products", (request, response) => {

  // /products?page=1&limit=10

  const { page, limit } = request.query;
  response.send(`Página: ${page} de ${limit}`);

});

app.post("/products", (request, response) => {
  const { name, price } = request.body;
  response.status(201).json({ name, price });
})

app.listen(PORT, () => console.log(`**** Server is running on PORT: ${PORT} ****`));