import koa from "koa";
import cors from "@koa/cors";
import bodyParser from "koa-bodyparser";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/errorHandler.js";
import studentRouter from "./router/students.router.js";
import { notFound } from "./middleware/notFound.js";
import { env } from "./lib/env.js";

const PORT = env.PORT;

const app = new koa();
app.use(cors({
    origin:env.FRONTEND_URL
}))

app.use(bodyParser());


app.use(errorHandler)
app.use(logger)



app.use(studentRouter.routes())
app.use(studentRouter.allowedMethods());

app.use(notFound)


app.listen(PORT,()=>{
    console.log("server started");
});