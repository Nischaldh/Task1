import koa from "koa";
import Router from "koa-router"
import bodyParser from "koa-bodyparser";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/errorHandler.js";
import studentRouter from "./router/students.router.js";
import { notFound } from "./middleware/notFound.js";

const app = new koa();

app.use(bodyParser());


app.use(errorHandler)
app.use(logger)



app.use(studentRouter.routes())
app.use(studentRouter.allowedMethods());

app.use(notFound)


app.listen(3000,()=>{
    console.log("server started");
});