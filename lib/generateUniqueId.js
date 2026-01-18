import students from "../constants/data.js";

const unqiueId = ()=>{
    let id;
  do {
    id = Math.floor(Math.random() * 100000); // random number
  } while (students.find(s => s.id === id));
  return id;
}

export default unqiueId;