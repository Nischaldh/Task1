import Router from "koa-router";
import { deleteStudent, editStudent, getAllStudents, getStudent, postStudent } from "../controller/students.controller.js";


const studentRouter = new Router({ prefix: "/students" });

studentRouter.get("/",getAllStudents);

studentRouter.get("/:id",getStudent);

studentRouter.post("/",postStudent);


studentRouter.put("/:id",editStudent);

studentRouter.delete("/:id",deleteStudent)


export default studentRouter;

