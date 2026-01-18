import Router from "koa-router";
import { deleteStudent, editStudent, getAllStudents, getStudent, postStudent } from "../controller/students.controller.js";


const studentRouter = new Router({ prefix: "/students" });

studentRouter.get("/getAllStudents",getAllStudents);

studentRouter.get("/get/:id",getStudent);

studentRouter.post("/postStudent",postStudent);


studentRouter.put("/editStudent/:id",editStudent);

studentRouter.delete("/delete/:id",deleteStudent)


export default studentRouter;

