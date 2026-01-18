import students from "../constants/data.js";
import unqiueId from "../lib/generateUniqueId.js";

export const postStudent = async (ctx) => {
  const { name, rollNo, marks, gender } = ctx.request.body;

  if (!name || !rollNo || !marks | !gender) {
    ctx.throw(400, "Please provide all the values.");
  }
  const id = unqiueId();
  const newStudent = {
    id,
    name,
    rollNo,
    marks,
    gender,
  };
  students.push(newStudent);
  ctx.status = 201;
  ctx.body = { success: true, data: newStudent };
};
export const getAllStudents = async (ctx) => {
  ctx.status = 200;
  ctx.body = { students };
};
export const getStudent = async (ctx) => {
  const id = Number(ctx.params.id);
  if (!id) {
    ctx.throw(400, "Id is missing.");
  }
  const student = students.find((student) => student.id === id);
  if (!student) {
    ctx.throw(404, "Student with the id doesnt exist.");
  }
  ctx.status = 200;
  ctx.body = { student };
};

export const editStudent = async (ctx) => {
  const id = Number(ctx.params.id);
  if (!id) {
    ctx.throw(400, "Id is missing.");
  }
  const { name, rollNo, marks, gender } = ctx.request.body;
  const student = students.find((student) => student.id === id);
  if (!student) {
    ctx.throw(404, "Student with the id doesnt exist.");
  }
  if (name) {
    student.name = name;
  }
  if (rollNo) {
    student.rollNo = rollNo;
  }
  if (marks) {
    student.marks = marks;
  }
  if (gender) {
    student.gender = gender;
  }
  ctx.status = 200;
  ctx.body = { message: "Edited successfully", student };
};
export const deleteStudent = async (ctx) => {
  const id = Number(ctx.params.id);
  if (!id) {
    ctx.throw(400, "Id is missing.");
  }
  const student = students.find((student) => student.id === id);
  if (!student) {
    ctx.throw(404, "Student with the id doesnt exist.");
  }
  const finalStudents = students.filter((student) => student.id !== id);
  ctx.status = 200;
  //TODO:: remove the students array from response
  ctx.body = { message: "deleted"};
};
