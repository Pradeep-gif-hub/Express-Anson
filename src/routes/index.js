import { Router } from "express";
import usersRouter from "./users.js";
import productsRouter from "./products.js";

const indexRouter = Router();

indexRouter.use("/users", usersRouter);
indexRouter.use("/products", productsRouter);

export default indexRouter;
